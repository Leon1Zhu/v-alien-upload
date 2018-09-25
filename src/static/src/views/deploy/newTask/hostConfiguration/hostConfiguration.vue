<!--
 @Author: liang.zhu
 @Date: 2018/9/18 下午8:52
-->
<template>
<div id="host-configuration">
  <div class="host-configuration-top-content">
    <div class="host-configuration-left-content">
      <Form  label-position="right" :label-width="70" >
        <FormItem label="任务类型">
          <Select v-model="topForm.taskType" >
            <Option v-for="item in taskList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>
        <FormItem label=" 任务名称">
          <Input v-model="topForm.taskName"></Input>
        </FormItem>
        <FormItem label="任务描述">
          <Input v-model="topForm.taskDescribe" type="textarea"  />
        </FormItem>
      </Form>
    </div>
    <div class="host-configuration-task-name">
      <Form  label-position="right" :label-width="70" >

      </Form>
    </div>
  </div>
  <div class="host-configuration-bottom-content">
    <Table  class="plantform-table" stripe :columns="columns1" :data="data1"></Table>
    <div class="host-configuration-add-new-host" @click="showDrawer = true">
      <Icon type="md-add" />添加主机
    </div>
  </div>

  <component-drawer
    :showDrawer="showDrawer"
    title="添加主机"
    @closeModel="closeModel()">
    <drawer-content></drawer-content>
  </component-drawer>
</div>
</template>

<script>
import './hostConfiguration.less';
import componentDrawer from '../../../../components/componentConfigurationDrawer/componentDrawer';
import drawerContent from './drawerContent/drawerContent';

export default {
  name: 'hostConfiguration',
  data() {
    return {
      showDrawer: false,
      topForm: {
        taskType: 'install',
        taskDescribe: null,
        taskName: null,
      },
      taskList: [
        {
          value: 'install',
          label: '安装',
        },
        {
          value: 'deploy',
          label: '部署',
        },
      ],
      columns1: [
        {
          title: '主机名',
          key: 'name',
        },
        {
          title: '网元类型',
          key: 'age',
        },
        {
          title: 'IP地址',
          key: 'address',
        },
      ],
      data1: [
        {
          name: '测试任务名',
          age: 'application',
          address: '192.168.50.220',
        },
        {
          name: '测试任务名',
          age: 'application',
          address: '192.168.50.220',
        },
        {
          name: '测试任务名',
          age: 'application',
          address: '192.168.50.220',
        },
        {
          name: '测试任务名',
          age: 'application',
          address: '192.168.50.220',
        },
        {
          name: '测试任务名',
          age: 'application',
          address: '192.168.50.220',
        },
      ],
    };
  },
  components: {
    'component-drawer': componentDrawer,
    'drawer-content': drawerContent,
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

