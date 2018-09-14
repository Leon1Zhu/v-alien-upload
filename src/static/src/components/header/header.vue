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
      <div class="right-content">
        <Badge  class="header-message">
          <Icon type="ios-notifications-outline" size="26"></Icon>
        </Badge>
        <div class="header-user-info">
          <i class="user-icon"></i>
          <Dropdown>
              <span class="user-name">管理员</span>
              <Icon type="ios-arrow-down"></Icon>
            <DropdownMenu slot="list" class="user-operator">
              <DropdownItem><i  class="iconfont icon-xiugaimima" ></i>修改密码</DropdownItem>
              <DropdownItem divided> <i  class="iconfont icon-caozuo_zhuxiao_tuichudenglu" ></i>退出系统</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
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
