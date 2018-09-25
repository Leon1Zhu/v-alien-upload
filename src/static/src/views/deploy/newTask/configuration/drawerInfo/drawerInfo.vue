<!--
 @Author: liang.zhu
 @Date: 2018/9/21 上午10:07
-->
<template>
  <Form  class="component-configuration-form" label-position="left" :label-width="50">
    <FormItem label="配置1">
      <Input  placeholder="请输入配置项"></Input>
    </FormItem>
    <FormItem label="配置2">
      <Input  placeholder="请输入配置项"></Input>
    </FormItem>

    <FormItem label="配置3">
      <Input  placeholder="请输入配置项"></Input>
    </FormItem>
    <FormItem label="配置4">
      <Input  placeholder="请输入配置项"></Input>
    </FormItem>

    <FormItem label="配置5">
      <Input  placeholder="请输入配置项"></Input>
    </FormItem>
    <FormItem label="配置6">
      <Input  placeholder="请输入配置项"></Input>
    </FormItem>
    <div class="advanced-configuration">
      <Icon type="ios-arrow-down" />
      <span class="advanced-configuration-name">高级配置</span>
    </div>
  </Form>
</template>

<script>
import './drawerInfo.less';

export default {
  name: 'drawerInfo',
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

