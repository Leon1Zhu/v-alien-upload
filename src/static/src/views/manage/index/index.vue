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
            details: ['192.168.50.220', '192.168.50.220', '192.168.50.220', '192.168.50.220'],
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
            statusInfo: [
              {
                count: 9,
                name: '正常',
              },
              {
                count: 0,
                name: '异常',
              },
              {
                count: 0,
                name: '未安装',
              },
            ],
          },
          {
            name: 'SkyCloudOS',
            statusInfo: [
              {
                count: 6,
                name: '正常',
              },
              {
                count: 4,
                name: '异常',
              },
              {
                count: 0,
                name: '未安装',
              },
            ],
          },
          {
            name: 'SkyFS',
            statusInfo: [
              {
                count: 8,
                name: '正常',
              },
              {
                count: 0,
                name: '异常',
              },
              {
                count: 1,
                name: '未安装',
              },
            ],
          },
          {
            name: 'SkyEdu',
            statusInfo: [
              {
                count: 7,
                name: '正常',
              },
              {
                count: 0,
                name: '异常',
              },
              {
                count: 2,
                name: '未安装',
              },
            ],
          },
        ],
        hardwareCard: [
          {
            name: 'CPU概况',
            allSource: '100',
            usedSource: '68',
            unit: '核',
            color: '#1975F0',
            linearColor: '#299AED',
            fontColor: '#1975F0',
          },
          {
            name: 'GPU概况',
            allSource: '100',
            usedSource: '100',
            unit: '核',
            color: '#03BF87',
            linearColor: '#0FCE9C',
            fontColor: '#08C58F',
          },
          {
            name: '内存',
            allSource: '100',
            usedSource: '68',
            unit: '核',
            color: '#FB992D',
            linearColor: '#F1BB3C',
            fontColor: '#FA9C2E',
          },
          {
            name: 'DISK概况',
            allSource: '100',
            usedSource: '61',
            unit: '核',
            color: '#8E70F9',
            linearColor: '#CFB4E3',
            fontColor: '#8E70F9',
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

