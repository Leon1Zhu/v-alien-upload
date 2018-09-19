<!--
 @Author: liang.zhu
 @Date: 2018/9/19 上午11:25
-->
<template>
<div id="select-module">
  <div class="select-module-top-select">
    <span class="select-module-application-name">应用模块选择</span>
    <RadioGroup v-model="applicationModule">
      <Radio label="SkyIntelligent"></Radio>
      <Radio label="EDU"></Radio>
      <Radio label="无选择"></Radio>
    </RadioGroup>
  </div>
  <div class="select-module-bottom-select">
    <span class="select-module-application-name">基础模块选择</span>
    <CheckboxGroup v-model="baseModule">
      <Checkbox label="SkyBase" disabled></Checkbox>
      <Checkbox label="SkyFs" disabled></Checkbox>
      <Checkbox label="SkyCloudOS" disabled></Checkbox>
      <Checkbox label="SkyDB"></Checkbox>
    </CheckboxGroup>
  </div>
</div>
</template>

<script>
import './selectModule.less';

export default {
  name: 'selectModule',
  data() {
    return {
      applicationModule: '',
      baseModule: ['SkyBase', 'SkyFs', 'SkyCloudOS'],
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

