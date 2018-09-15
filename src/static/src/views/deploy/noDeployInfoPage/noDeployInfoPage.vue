<!--
 @Author: liang.zhu
 @Date: 2018/9/14 下午7:11
-->
<template>
  <div id="deploy-no-deploy-info-page">
     <div v-for="(item, index) in opt" class="deploy-no-deploy-info-page-card-content">
       <process-card :opt="item"></process-card>
       <!--<Icon v-if="index < (opt.length-1) " type="ios-arrow-round-forward" />-->
       <span  v-if="index < (opt.length-1) " class="crad-arrow">-----></span>
     </div>
  </div>
</template>

<script>
import './noDeployInfoPage.less';
import ProcessCard from '../../../components/ProcessCard/ProcessCard';

export default {
  name: 'noDeployInfoPage',
  data() {
    return {
      opt: [{
        title: '配置主机',
        index: 1,
      },
      {
        title: '模块选择',
        index: 2,
      },
      {
        title: '组件选择',
        index: 3,
      },
      {
        title: '配置项修改',
        index: 4,
      },
      {
        title: '执行安装',
        index: 5,
      }],
    };
  },
  components: {
    ProcessCard,
  },
  created() {},
  mounted() {},
  methods: {
    clickMethod(index) {
      console.log(index);
    }
  },
};
</script>

