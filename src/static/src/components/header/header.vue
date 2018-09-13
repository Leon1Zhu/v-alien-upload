<template>
  <section id="manage-main-header">
    <div class="header-content">
      <div class="logo-name-content">
        <i class="manage-logo"></i>
        <span class="manage-name">Sky Manager</span>
      </div>
      <div class="header-menu">
        <Menu mode="horizontal"  active-name="1">
          <MenuItem name="1">
            内容管理
          </MenuItem>
          <MenuItem name="2">
            用户管理
          </MenuItem>
        </Menu>
      </div>
      <div class="header-message">
        <Badge dot>
          <Icon type="ios-notifications-outline" size="26"></Icon>
        </Badge>
      </div>
      <div class="header-user-info">
        <i></i>

      </div>
    </div>
  </section>
</template>

<script>
import './header.scss';

export default {
  name: 'manage-header',
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
