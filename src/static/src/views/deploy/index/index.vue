<!--
 @Author: liang.zhu
 @Date: 2018/9/14 下午7:05
-->
<template>
  <section id="manage-deploy-index">
    <div class="deploy-index-header">
      <span class="deploy-index-header-name">任务列表</span>
      <AutoComplete
        v-model="searchValue"
        icon="ios-search"
        placeholder="请输入搜索内容"
        size="small"
        class="deploy-index-search-input"
        style="width:auto">
        <div class="demo-auto-complete-item">
          <div class="demo-auto-complete-group">
            这是测试数据
          </div>
        </div>
      </AutoComplete>
      <Button
        size="small"
        type="primary"
        icon="ios-add"
        class="deply-index-new-task-btn"
        @click.native="pushRouter('/newTask', {})">新建任务</Button>
    </div>
    <index-table></index-table>
  </section>
</template>

<script>
import './index.less';
import indexTable from './indexTable/indexTable';

export default {
  name: 'index-deploy',
  data() {
    return {
      searchValue: '',
    };
  },
  components: {
    indexTable,
  },
  created() {
  },
  mounted() {
  },
  methods: {},
};
</script>

