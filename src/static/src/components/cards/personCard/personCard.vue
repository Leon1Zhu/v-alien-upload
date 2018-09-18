<!--
 @Author: liang.zhu
 @Date: 2018/9/17 下午8:33
-->
<template>
  <div  class="person-card skymanage-card-content">
    <div class="perso-card-content">
      <Icon type="md-person" />
      <div class="person-card-user-info">
        <span class="person-card-group-name">{{data.name}}</span>
        <div class="person-card-count-content">
          <span class="person-card-describe">人数:</span>
          <span class="person-card-user-content">{{data.count}}人</span>
        </div>
      </div>
    </div>
    <i></i>
  </div>
</template>

<script>
import './personCard.less';

export default {
  name: 'person-card',
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

