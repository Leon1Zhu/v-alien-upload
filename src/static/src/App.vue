<template>
  <div id="manage-main">
    <manage-header></manage-header>
    <bread-crumb></bread-crumb>
    <router-view/>
  </div>
</template>

<script>
import './styles/index.scss';
import breadCrumb from './components/breadCrumb/breadCrumb';
import manageHeader from './components/header/header';

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
