<!--
 @Author: liang.zhu
 @Date: 2018/9/14 下午7:05
-->
<template>
  <div class="process-card">
    <div class="process-card-title">{{ opt.title }}</div>
    <div class="process-card-body"></div>
    <span class="process-card-index">{{ opt.index }}</span>
  </div>
</template>

<script>
import './ProcessCard.less';

export default {
  name: 'processcard',
  props: {
    opt: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  components: {},
  created() {
  },
  mounted() {
  },
  methods: {},
};
</script>

