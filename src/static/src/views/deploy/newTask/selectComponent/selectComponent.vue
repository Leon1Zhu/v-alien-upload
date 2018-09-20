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
                draggable="true">{{name}}</span>
        </div>
        <ul class="select-component-ul-content">
          <li class="select-cmponent-li-details"
              v-for="label in item"
              :data-group="name"
              :data-componentname="label.name"
              data-type="component"
              @click="chooseComponent($event)"
               draggable="true">
            {{label.name}}
          </li>
        </ul>
      </li>
    </ul>
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
  </div>
</div>
</template>

<script>
import './selectComponent.less';
import DragUtil from '../../../../util/drag';

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
    };
  },
  components: {},
  created() {
    this.initComponentData();
  },
  mounted() {
    DragUtil.drag('.select-component-left-header .select-component-ul-content .select-cmponent-li-details',this.dragStart, this.dragEnd);
    DragUtil.drag('.select-component-left-header .select-comonent-li-header .select-component-module-name',this.dragStart, this.dragEnd);
    this.initDrop();
  },
  methods: {
    initComponentData(selectedData) {
      if (selectedData) {
        this.selectedData = selectedData;
      } else {
        for (const key in this.componentsData) {
          this.selectedData[key] = [];
        }
      }
    },
    chooseComponent($event) {
      console.log($event);
    },
    dragStart() {
      this.showDrop = true;
    },
    dragEnd() {
      this.showDrop = false;
    },
    initDrop() {
      DragUtil.addDropListen('.select-component-drop-content', this.dropCB);
    },
    dropCB(data) {
      console.log(data.groupName);
      // 返回true表示添加成功，否侧表示添加失败。
      this.filterComponent(data.type, data.componentName, data.groupName)
      return true;
    },
    filterComponent(type, name, groupName) {
      if (type === 'component') {
        this.componentsData[groupName] = this.componentsData[groupName].filter((item) => {
          return item.name !== name;
        });

        this.selectedData[groupName].push({ name });
      } else if (type === 'module') {
        this.componentsData[groupName].forEach((item) => {
          this.selectedData[groupName].push(item);
        })
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
        })
        this.selectedData[groupName] = [];
      } else {
        this.selectedData[groupName] = this.selectedData[groupName].filter((item) => {
          return item.name !== name;
        });
        this.componentsData[groupName].push({ name });
      }
    },
  },
};
</script>

