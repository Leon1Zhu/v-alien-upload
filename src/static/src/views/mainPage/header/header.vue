<!--
 @Author: liang.zhu
 @Date: 2018/9/14 下午7:05
-->
<template>
  <section id="manage-main-header">
    <div class="header-content">
      <div class="logo-name-content">
        <i class="manage-logo"></i>
        <span class="manage-name">SkyManager</span>
      </div>
      <div class="header-menu">
        <Menu mode="horizontal"  active-name="1">
          <MenuItem name="1" to="/deployIndex">
            平台部署
          </MenuItem>
          <MenuItem name="2" to="/manageIndex">
            平台管理
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
              <DropdownItem divided> <i  ></i>退出系统</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import './header.less';

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
