<!--
 @Author: liang.zhu
 @Date: 2018/9/21 上午10:22
-->
<template>
  <Form  class="host-configuration-form" label-position="left" :label-width="50">
    <FormItem label="配置1">
      <Input  placeholder="请输入配置项"></Input>
    </FormItem>
    <FormItem label="配置2">
      <Input  placeholder="请输入配置项"></Input>
    </FormItem>

    <FormItem label="配置3">
      <Input  placeholder="请输入配置项"></Input>
    </FormItem>

    <div class="test-host-config">
      <Button size="small" type="default">连接测试</Button>
    </div>
  </Form>
</template>

<script>
import './drawerContent.less';

export default {
  name: 'drawerContent',
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

