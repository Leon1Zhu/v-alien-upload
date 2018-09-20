<!--
 @Author: liang.zhu
 @Date: 2018/9/19 下午1:52
-->
<template>
<div id="select-component">
  <div class="select-component-left-content">
    <ul class="select-component-left-header">
      <li class="select-component-li" v-for="(item, name) in componentsData">
        <div class="select-comonent-li-header">
          <span class="select-component-module-name"
                :data-group="name"
                data-type="module"
                draggable="true"
                @click="chooseComponent($event, 'module', null, name)">{{name}}</span>
        </div>
        <ul class="select-component-ul-content">
          <li class="select-cmponent-li-details"
              v-for="label in item"
              :data-group="name"
              :data-componentname="label.name"
              data-type="component"
              @click="chooseComponent($event, 'component', label.name, name)"
               draggable="true">
            {{label.name}}
          </li>
        </ul>
      </li>
    </ul>
    <div class="select-component-left-bottom select-component-bottom-content">
      <span @click="addAllComponent()">
        <Icon type="md-arrow-round-forward" />
        移动全部
      </span>
    </div>
  </div>
  <div class="flex-temp"></div>
  <div class="select-component-right-content">
    <ul class="select-component-right-header" v-show="!showDrop">
      <li class="select-component-li" v-for="(item, name) in selectedData">
        <div class="select-comonent-li-header">
          <span class="select-component-module-name">{{name}}</span>
          <Icon class="select-component-delete-all-components" type="md-close" @click="deleteComponent('all',name, null)" />
        </div>
        <ul class="select-component-ul-content">
          <li class="select-cmponent-li-details" v-for="label in item">
            {{label.name}}
            <Icon class="select-component-delete-all-components" type="md-close" @click="deleteComponent('one',name, label.name)" />
          </li>
        </ul>
      </li>
    </ul>
    <div class="select-component-drop-content"  v-show="showDrop">
      请将组件拖拽至此
    </div>
    <div class="select-component-right-bottom select-component-bottom-content">
      <span>
        <Icon type="ios-trash" />
        清除全部
      </span>
    </div>
  </div>
</div>
</template>

<script>
import './selectComponent.less';
import DragUtil from '../../../../util/drag';
import Util from '../../../../util/util';

const selectedClass = 'selected';

export default {
  name: 'selectComponent',
  data() {
    return {
      showDrop: false,
      componentsData: {
        SkyBase: [
          {
            name: 'yum',
          },
          {
            name: 'ntpd',
          },
          {
            name: 'lvm',
          },
          {
            name: 'rdma',
          },
          {
            name: 'cuda',
          },
        ],
        SkyCloudOS: [
          {
            name: 'docker',
          },
          {
            name: 'kubemetes',
          },
          {
            name: 'helm',
          },
          {
            name: 'harbor',
          },
          {
            name: 'etcd',
          },
        ],
        SkyFS: [
          {
            name: 'ceph',
          },
          {
            name: 'hdfs',
          },
        ],
        SkyEDU: [
          {
            name: 'web',
          },
          {
            name: 'web mongo',
          },
          {
            name: 'nginx-proxy',
          },
        ],
      },
      selectedData: {},
      selectedDataTemp: {},
    };
  },
  components: {},
  created() {
    this.initComponentData();
  },
  mounted() {
    this.initDrag();
    this.initDrop();
  },
  methods: {
    initDrag() {
      DragUtil.drag('.select-component-left-header .select-component-ul-content .select-cmponent-li-details', this.dragStart, this.dragEnd);
      DragUtil.drag('.select-component-left-header .select-comonent-li-header .select-component-module-name', this.dragStart, this.dragEnd);
    },
    initComponentData(selectedData) {
      for (const key in this.componentsData) {
        this.selectedData[key] = [];
        this.selectedDataTemp[key] = [];
      }
      if (selectedData) {
        this.selectedData = selectedData;
      }
    },
    initDrop() {
      DragUtil.addDropListen('.select-component-drop-content', this.dropCB);
    },
    chooseComponent($event, type, name, groupName) {
      if (type === 'component') {
        const dom = Util.getElement($event);
        const selectedClassName = selectedClass;
        if (Util.hasClass(dom, selectedClassName)) {
          Util.removeClass(dom, selectedClass);
          this.changeTempData('remove', type, name, groupName);
        } else {
          Util.addClass(dom, selectedClass);
          this.changeTempData('add', type, name, groupName);
        }
      } else if (type === 'module') {
        const domList = Util.getElement($event).parentNode.parentNode.children[1].children;
        let selectedItemCount = 0;
        for (const dom of domList) {
          if (Util.hasClass(dom, selectedClass)) selectedItemCount++;
        }
        // 判断当前的模块下所有组件是否都已经选中，若是，则全部取消，否则全部选中
        if (selectedItemCount === domList.length) {
          this.removeAllSelectedClass(domList);
          this.changeTempData('remove', 'module', name, groupName);
        } else {
          this.addlSelectedClass(domList);
          this.changeTempData('add', 'module', name, groupName);
        }
      }
    },
    // 修改中间变量方法
    changeTempData(changeType, type, name, groupName) {
      if (changeType === 'add' && type === 'component') {
        this.selectedDataTemp[groupName].push({ name });
      }
      if (changeType === 'add' && type === 'module') {
        this.selectedDataTemp[groupName] = this.componentsData[groupName];
      }
      if (changeType === 'remove' && type === 'component') {
        this.selectedDataTemp[groupName] = this.selectedDataTemp[groupName].filter(item => item.name !== name);
      }
      if (changeType === 'remove' && type === 'module') {
        this.selectedDataTemp[groupName] = [];
      }
    },
    // 拖拽开始的回调
    dragStart() {
      this.showDrop = true;
    },
    dragEnd() {
      this.showDrop = false;
    },
    dropCB(data) {
      // 返回true表示添加成功，否侧表示添加失败。
      this.filterComponent(data.type, data.componentName, data.groupName);
      this.removeAllSelectedClass();
      return true;
    },
    filterComponent(type, name, groupName) {
      if (type === 'component') {
        this.componentsData[groupName] = this.componentsData[groupName].filter(item => item.name !== name);

        this.selectedData[groupName].push({ name });
      } else if (type === 'module') {
        this.componentsData[groupName].forEach((item) => {
          this.selectedData[groupName].push(item);
        });
        this.componentsData[groupName] = [];
        return true;
      }
      return false;
    },
    // 删除组件方法
    deleteComponent(type, groupName, name) {
      if (type === 'all') {
        this.selectedData[groupName].forEach((item) => {
          this.componentsData[groupName].push(item);
        });
        this.selectedData[groupName] = [];
      } else {
        this.selectedData[groupName] = this.selectedData[groupName].filter(item => item.name !== name);
        this.componentsData[groupName].push({ name });
      }
    },
    addAllComponent() {
      for (const key in this.componentsData) {
        this.componentsData[key] = this.componentsData[key].filter(item =>
          !this.selectedDataTemp[key].find(tempItem =>
            tempItem.name === item.name),
        );
      }

      this.removeAllSelectedClass();

      for (const key in this.selectedDataTemp) {
        this.selectedData[key] = this.selectedData[key].concat(this.selectedDataTemp[key]);
        this.selectedDataTemp[key] = [];
      }
    },
    // 移除所有的selectedClass
    removeAllSelectedClass(domList) {
      const doms = domList || document.querySelectorAll('.selected');
      for (const dom of doms) {
        Util.removeClass(dom, selectedClass);
      }
    },
    // 增加selected类
    addlSelectedClass(domList) {
      const doms = domList;
      for (const dom of doms) {
        if (!Util.hasClass(selectedClass)) {
          Util.addClass(dom, selectedClass);
        }
      }
    },
  },
};
</script>

