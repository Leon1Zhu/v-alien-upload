<!--
 @Author: liang.zhu
 @Date: 2018/9/17 下午8:31
-->
<template>
  <div  class="node-card skymanage-card-content">
    <div class="node-card-left-content">
      <span class="node-card-count">{{data.count}}</span>
      <span class="node-card-unit">个</span>
    </div>
    <div class="node-card-right-content">
      <span class="node-card-name">{{data.name}}</span>
      <Divider />
      <div class="node-card-detail">
        <span v-for="item in data.details">{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import './nodeCard.less';

export default {
  name: 'node-card',
  props: ['data'],
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

