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
          <span class="select-component-module-name">{{name}}</span>
        </div>
        <ul class="select-component-ul-content">
          <li class="select-cmponent-li-details" v-for="label in item" @click="chooseComponent($event)">{{label.name}}</li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="flex-temp"></div>
  <div class="select-component-right-content">
    <ul class="select-component-right-header">
      <li class="select-component-li" v-for="(item, name) in selectedData">
        <div class="select-comonent-li-header">
          <span class="select-component-module-name">{{name}}</span>
          <Icon class="select-component-delete-all-components" type="md-close" />
        </div>
        <ul class="select-component-ul-content">
          <li class="select-cmponent-li-details" v-for="label in item">
            {{label.name}}
            <Icon class="select-component-delete-all-components" type="md-close" />
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import './selectComponent.less';

export default {
  name: 'selectComponent',
  data() {
    return {
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
    this.selectedData = this.componentsData;
  },
  mounted() {},
  methods: {
    initComponentData(selectedData) {
      if (selectedData) {
        this.selectedData = selectedData;
      } else {
        for (const key in this.componentsData) {
          this.selectedData[key] = Object.create(null);
        }
      }
    },
    chooseComponent($event) {
      console.log($event);
    },
  },
};
</script>

