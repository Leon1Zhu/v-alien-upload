<template>
  <section id="manage-deploy-index-table">
    <Table  class="plantform-table" stripe :columns="columns1" :data="data1"></Table>
    <Page :total="100" show-elevator size="small" />
  </section>
</template>

<script>
import './indexTable.less';

export default {
  name: 'index-table',
  data() {
    return {
      columns1: [
        {
          title: '任务名称',
          key: 'name',
        },
        {
          title: '任务类型',
          key: 'age',
        },
        {
          title: '描述',
          key: 'address',
        },
        {
          title: '创建时间',
          key: 'q1',
        },
        {
          title: '当前步骤',
          key: 'q2',
        },
        {
          title: '状态',
          key: 'q3',
        },
        {
          title: '操作',
          // render: (h, params) => {
          //   return h('div', [
          //   ]);
          // },
        },
      ],
      data1: [
        {
          name: '名称1',
          age: '安装',
          address: '我是描述',
          q1: '2016-10-03',
          q2: '安装后检查',
          q3: '安装中',
        },
        {
          name: '名称2',
          age: '安装',
          address: '我是描述',
          q1: '2016-10-03',
          q2: '安装后检查',
          q3: '安装中',
        },
        {
          name: '名称3',
          age: '安装',
          address: '我是描述',
          q1: '2016-10-03',
          q2: '安装后检查',
          q3: '安装中',
        },
        {
          name: '名称4',
          age: '安装',
          address: '我是描述',
          q1: '2016-10-03',
          q2: '安装后检查',
          q3: '安装中',
        },
        {
          name: '名称5',
          age: '安装',
          address: '我是描述',
          q1: '2016-10-03',
          q2: '安装后检查',
          q3: '安装中',
        },
        {
          name: '名称6',
          age: '安装',
          address: '我是描述',
          q1: '2016-10-03',
          q2: '安装后检查',
          q3: '安装中',
        },
      ],
    };
  },
  components: {},
  created() {
  },
  mounted() {
  },
  methods: {},
};
</script>

