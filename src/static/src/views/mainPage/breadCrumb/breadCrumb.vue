<!--
 @Author: liang.zhu
 @Date: 2018/9/14 下午7:05
-->
<template>
  <section id="manage-mian-bread-crumb">
    <div class="bread-crumb-list">
      <Icon type="md-star-outline" />
      <Breadcrumb separator=">">
        <BreadcrumbItem v-for="item in breadCrumb" @click.native="pushRouter(item.url, item.query)">{{ item.name }}</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="bread-crumb-button-list" v-if="$route.path === '/manageIndex'">
      <Button type="primary" ghost size="large">
        <Icon type="md-add" />
        组件管理
      </Button>
      <Button type="primary" ghost size="small">
        <Icon type="md-add" />
        用户管理
      </Button>
      <Button type="primary" ghost size="small">
        <Icon type="md-add" />
        资源控制
      </Button>
      <Button type="primary" ghost size="small">
        <Icon type="md-add" />
        资源控制
      </Button>
    </div>
    <Divider class="bread-crumb-br" />
  </section>
</template>

<script>
import './breadCrumb.less';

export default {
  name: 'bread-crumb',
  data() {
    return {};
  },
  computed: {
    breadCrumb() {
      return this.$store.getters.getBreadCrumb;
    },
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
