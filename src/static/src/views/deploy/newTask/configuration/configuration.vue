<!--
 @Author: liang.zhu
 @Date: 2018/9/20 下午4:08
-->
<template>
  <div id="task-configuration">
    <div class="task-configuratin-module-content" v-for="(item, name) in componentsData">
      <div class="task-configuratin-module-content-header">
        <span class="task-configuration-module-name">{{name}}</span>
      </div>
      <div class="task-configuratin-module-content-component">
        <ul class="task-configuration-component-list">
          <li class="task-configuration-component-li" v-for="label in item">
            <div class="task-configuration-component-name">
              {{label.name}}
            </div>
            <div class="task-configuration-component-configuration">
              <Icon type="ios-settings" @click="showDrawer = true;componentName = label.name"/>
              <i v-if="label.hasNecessaryConfiguration" class="need-config">!</i>
            </div>
            <div class="task-configuration-component-isconfiguration">
              <span v-if="label.isconfig">已配置</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <component-configuration-drawer
      :showDrawer="showDrawer"
      :title="componentName"
      @closeModel="closeModel()">
      <drawer-info></drawer-info>
    </component-configuration-drawer>
  </div>
</template>

<script>
import './configuration.less';
import drawer from '../../../../components/componentConfigurationDrawer/componentDrawer';
import drawerInfo from './drawerInfo/drawerInfo';

export default {
  name: 'configuration',
  data() {
    return {
      showDrawer: false, // 抽屉打开判断字段
      componentName: null,
      componentsData: {
        SkyBase: [
          {
            name: 'yum',
          },
          {
            name: 'ntpd',
            isconfig: true,
          },
          {
            name: 'lvm',
            hasNecessaryConfiguration: true,
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
            hasNecessaryConfiguration: true,
            isconfig: true,
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
            hasNecessaryConfiguration: true,
          },
          {
            name: 'nginx-proxy',
          },
        ],
      },
    };
  },
  components: {
    'component-configuration-drawer': drawer,
    'drawer-info': drawerInfo,
  },
  created() {},
  mounted() {},
  methods: {
    closeModel() {
      this.showDrawer = false;
    },
  },
};
</script>

