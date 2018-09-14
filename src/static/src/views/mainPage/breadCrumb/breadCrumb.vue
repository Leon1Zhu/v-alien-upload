<template>
  <section id="manage-mian-bread-crumb">
    <div class="bread-crumb-list">
      <Icon type="md-star-outline" />
      <Breadcrumb separator=">">
        <BreadcrumbItem v-for="item in breadCrumb" @click.native="pushRouter(item.url, item.query)">{{ item.name }}</BreadcrumbItem>
      </Breadcrumb>
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
