<!--
 @Author: liang.zhu
 @Date: 2018/9/17 下午8:34
-->
<template>
<div class="hardware-card skymanage-card-content">
  <div class="hardware-card-title-content">
    <span class="hardware-card-title-span">{{data.name}}</span>
  </div>
  <div class="hardware-card-body">
    <div class="hardware-card-left-content">
      <i-circle :percent="circleValue" :size="circleWidth" :stroke-color="data.color">
        <span style="font-size:24px" :style="{color: data.fontColor}">{{circleValue}}%</span>
        <div class="hardware-card-used-rate">使用率</div>
      </i-circle>
    </div>
    <div class="hardware-card-right-content">
      <div class="hardware-card-all-source text-overflow">
        <div class="hardware-card-all-source-content ">
          <span class="hardware-card-source-number" :style="{ color: data.color }">{{data.allSource}}</span>
          <span class="hardware-card-source-unit">{{data.unit}}</span>
        </div>
        <span class="hardware-card-all-source-content-name">总资源</span>
      </div>
      <div class="hardware-card-used-source text-overflow">
        <div class="hardware-card-used-source-content ">
          <span class="hardware-card-source-number" :style="{ color: data.color }">{{data.usedSource}}</span>
          <span class="hardware-card-source-unit">{{data.unit}}</span>
        </div>
        <span class="hardware-card-all-source-content-name">已分配</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import './hardwareCard.less';

export default {
  name: 'hardware-card',
  props: ['data'],
  data() {
    return {
      circleWidth: 100,
      circleValue: (this.data.usedSource / this.data.allSource) * 100,
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

