<!--
 @Author: liang.zhu
 @Date: 2018/9/17 下午7:19
-->
<template>
<section id="manage-index">
  <ul class="manage-index-card-content" :class="classNames[index]+'-card-list'" v-for="(list, name, index) in opt">
    <li class="node-li" v-for="item in list">
      <node-card v-if="classNames[index] === 'node'" :data="item"></node-card>
      <module-card v-else-if="classNames[index] === 'module'" :data="item"></module-card>
      <hardware-card v-else-if="classNames[index] === 'hardware'" :data="item"></hardware-card>
      <person-card v-else :data="item"></person-card>
    </li>
  </ul>
</section>
</template>

<script>
import './index.less';
import hardwareCard from '../../../components/cards/hardwareCard/hardwareCard';
import moduleCard from '../../../components/cards/moduleCard/moduleCard';
import nodeCard from '../../../components/cards/nodeCard/nodeCard';
import personCard from '../../../components/cards/personCard/personCard';

export default {
  name: 'manageIndex',
  data() {
    return {
      classNames: ['node', 'module', 'hardware', 'person'],
      opt: {
        nodeCrad: [
          {
            count: 1,
            name: 'application节点',
            details: ['192.168.50.220'],
          },
          {
            count: 2,
            name: 'computing节点',
            details: ['192.168.50.220', '192.168.50.220'],
          },
          {
            count: 1,
            name: 'storage节点',
            details: ['192.168.50.220'],
          },
        ],
        moduleCard: [
          {
            name: 'SkyBase',
            detailCount: 9,
            errorCount: 0,
            notInstall: 0,
          },
          {
            name: 'SkyCloudOS',
            detailCount: 6,
            errorCount: 4,
            notInstall: 0,
          },
          {
            name: 'SkyFS',
            detailCount: 9,
            errorCount: 0,
            notInstall: 1,
          },
          {
            name: 'SkyEdu',
            detailCount: 7,
            errorCount: 2,
            notInstall: 0,
          },
        ],
        hardwareCard: [
          {
            name: 'Cpu概况',
            allSource: '100',
            usedSource: '68',
            unit: '核',
          },
          {
            name: 'Gpu概况',
            allSource: '100',
            usedSource: '100',
            unit: '核',
          },
          {
            name: '内存',
            allSource: '100',
            usedSource: '68',
            unit: '核',
          },
          {
            name: 'DISK概况',
            allSource: '100',
            usedSource: '61',
            unit: '核',
          },
        ],
        personCard: [
          {
            name: '管理员',
            count: 9,
          },
          {
            name: '组管理者',
            count: 9,
          },
          {
            name: '用户',
            count: 9,
          },
        ],
      },
    };
  },
  components: {
    hardwareCard,
    moduleCard,
    nodeCard,
    personCard,
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

