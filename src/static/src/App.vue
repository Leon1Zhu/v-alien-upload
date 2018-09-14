<!--
 @Author: liang.zhu
 @Date: 2018/9/14 下午7:05
-->
<template>
  <div id="manage-main">
    <manage-header></manage-header>
    <bread-crumb></bread-crumb>
    <section class="view-content">
      <router-view/>
    </section>
  </div>
</template>

<script>
import './styles/index.less';
import breadCrumb from './views/mainPage/breadCrumb/breadCrumb';
import manageHeader from './views/mainPage/header/header';

export default {
  name: 'App',
  data() {
    return {};
  },
  components: {
    breadCrumb,
    'manage-header': manageHeader,
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
