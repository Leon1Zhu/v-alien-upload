<!--
 @Author: liang.zhu
 @Date: 2018/9/17 下午8:31
-->
<template>
  <div  class="module-card skymanage-card-content">
    <div class="module-card-title-content">
      <span class="module-card-title">{{data.name}}</span>
    </div>
    <div class="module-card-content">
      <div class="module-card-count-detail" v-for="item in data.statusInfo">
        <div class="module-card-count">{{item.count}}</div>
        <div class="module-card-status">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import './moduleCard.less';

export default {
  name: 'module-card',
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

