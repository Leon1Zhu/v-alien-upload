<!--
 @Author: liang.zhu
 @Date: 2018/9/20 下午6:27
-->
<template>
  <Drawer
    :title="title"
    v-model="showDrawerTemp"
    width="490"
    :mask-closable="false"
    @on-close="closeModel()"
    id="configuration-component-drawer"
  >
    <slot></slot>
    <div class="demo-drawer-footer">
      <Button class="configuration-component-submit-btn" type="primary" @click="closeModel()">确认</Button>
    </div>
  </Drawer>
</template>

<script>
import './componentDrawer.less';

export default {
  name: 'component-configuration-drawer',
  props: {
    showDrawer: {
      type: Boolean,
    },
    title: {
      type: String,
    },
  },
  data() {
    return {
    };
  },
  computed: {
    showDrawerTemp: {
      get() {
        return this.showDrawer;
      },
      set() {
      },
    },
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

