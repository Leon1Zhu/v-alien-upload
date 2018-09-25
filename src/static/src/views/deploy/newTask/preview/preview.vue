<!--
 @Author: liang.zhu
 @Date: 2018/9/21 上午11:19
-->
<template>
<div class="previrw-content">
  <ul class="preview-list">
    <li class="preview-li">
      <div class="preview-li-header">主机配置</div>
      <div class="preview-li-content">
        <div class="preview-task-config-info">
          <span class="preview-task-config-name">任务类型</span>
          <span class="preview-task-config-detail">XXXXXXXXXXXX</span>
        </div>
        <div class="preview-task-config-info">
          <span class="preview-task-config-name">任务类型</span>
          <span class="preview-task-config-detail">XXXXXXXXXXXX</span>
        </div>
        <div class="preview-task-config-info">
          <span class="preview-task-config-name">任务名称</span>
          <span class="preview-task-config-detail">XXXXXXXXXXXX</span>
        </div>
      </div>
    </li>

    <li class="preview-li">
      <div class="preview-li-header">选择模块</div>
      <div class="preview-li-content">
        <div class="preview-task-module-info">
          <span class="preview-task-module-name">应用模块选择</span>
          <ul class="preview-task-module-content">
            <li >Interllgent</li>
            <li class="selected">EDU</li>
            <li >无选择</li>
          </ul>
        </div>
        <div class="preview-task-module-info">
          <span class="preview-task-module-name">基础模块选择</span>
          <ul class="preview-task-module-content">
            <li class="selected">SkyBase</li>
            <li class="selected">skyFS</li>
            <li class="selected">SkyCloudOS</li>
            <li >SkyDB</li>
          </ul>
        </div>
      </div>
    </li>


    <li class="preview-li">
      <div class="preview-li-header">选择组件</div>
      <div class="preview-li-content">
        <div class="preview-task-config-info">
          <span class="preview-task-config-name">任务类型</span>
          <span class="preview-task-config-detail">XXXXXXXXXXXX</span>
        </div>
        <div class="preview-task-config-info">
          <span class="preview-task-config-name">任务类型</span>
          <span class="preview-task-config-detail">XXXXXXXXXXXX</span>
        </div>
        <div class="preview-task-config-info">
          <span class="preview-task-config-name">任务名称</span>
          <span class="preview-task-config-detail">XXXXXXXXXXXX</span>
        </div>
      </div>
    </li>

    <li class="preview-li">
      <div class="preview-li-header">组件配置</div>
      <div class="preview-li-content">
        <preview-table></preview-table>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
import './preview.less';
import table from './previewTable/previewTable';

export default {
  name: 'preview',
  data() {
    return {};
  },
  components: {
    'preview-table': table,
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

