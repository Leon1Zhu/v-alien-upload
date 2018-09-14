<template>
  <section id="manage-mian-bread-crumb">
    <div class="bread-crumb-list">
      <Icon type="md-star-outline" />
      <Breadcrumb separator=">">
        <BreadcrumbItem to="/">平台部署</BreadcrumbItem>
        <BreadcrumbItem to="/">新建任务</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <Divider class="bread-crumb-br" />
  </section>
</template>

<script>
import './breadCrumb.scss';

export default {
  name: 'bread-crumb',
};
</script>
