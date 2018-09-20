<!--
 @Author: liang.zhu
 @Date: 2018/9/20 下午6:27
-->
<template>
  <Drawer
    :title="componentName"
    v-model="showDrawer"
    width="490"
    :mask-closable="false"
    @on-close="closeModel()"
    id="configuration-component-drawer"
  >
    <Form label-position="left" :label-width="50">
      <Row :gutter="16">
        <Col span="12">
          <FormItem label="配置1">
            <Input  placeholder="请输入配置项"></Input>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="配置2">
            <Input  placeholder="请输入配置项"></Input>
          </FormItem>
        </Col>
      </Row>

      <Row :gutter="16">
        <Col span="12">
          <FormItem label="配置3">
            <Input  placeholder="请输入配置项"></Input>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="配置4">
            <Input  placeholder="请输入配置项"></Input>
          </FormItem>
        </Col>
      </Row>

      <Row :gutter="16">
        <Col span="12">
          <FormItem label="配置5">
            <Input  placeholder="请输入配置项"></Input>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="配置6">
            <Input  placeholder="请输入配置项"></Input>
          </FormItem>
        </Col>
      </Row>

      <div class="advanced-configuration">
        <Icon type="ios-arrow-down" />
        <span class="advanced-configuration-name">高级配置</span>
      </div>
    </Form>
    <div class="demo-drawer-footer">
      <Button class="configuration-component-submit-btn" type="primary" @click="closeModel()">完成</Button>
    </div>
  </Drawer>
</template>

<script>
import './componentConfigurationDrawer.less';

export default {
  name: 'component-configuration-drawer',
  props: {
    showDrawer: {
      type: Boolean,
    },
    componentName: {
      type: String,
    },
  },
  data() {
    return {
    };
  },
  computed: {
    // showDrawerTemp: {
    //   get() {
    //     return this.showDrawer;
    //   },
    //   set() {
    //   },
    // },
  },
  components: {},
  created() {
  },
  mounted() {},
  methods: {
    closeModel() {
      this.$emit('closeModel');
    },
  },
};
</script>

