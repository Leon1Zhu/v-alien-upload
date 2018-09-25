<!--
 @Author: liang.zhu
 @Date: 2018/9/18 下午1:40
-->
<template>
  <div id="new-task">
    <header class="create-task-step">
      <Steps :current="step" >
        <Step >
          <div class="ivu-steps-content">
            <Icon type="ios-albums-outline" />
            <div class="steps-name">主机配置</div>
          </div>
        </Step>
        <Step>
          <div class="ivu-steps-content">
            <Icon type="ios-albums-outline" />
            <div class="steps-name">选择模块</div>
          </div>
        </Step>
        <Step>
          <div class="ivu-steps-content">
            <Icon type="ios-albums-outline" />
            <div class="steps-name">选择组件</div>
          </div>
        </Step>
        <Step>
          <div class="ivu-steps-content">
            <Icon type="ios-albums-outline" />
            <div class="steps-name">组件配置</div>
          </div>
        </Step>
        <Step>
          <div class="ivu-steps-content">
            <Icon type="ios-albums-outline" />
            <div class="steps-name">任务预览</div>
          </div>
        </Step>
      </Steps>
    </header>
    <div class="create-task-content">
      <router-view></router-view>
    </div>
    <div class="create-task-btn-group">
      <Button v-if="step > 0" @click="lastTip()">上一步</Button>
      <div class="create-task-right-btn-group">
        <Button type="primary" @click="nextTip()">{{nextText}}</Button>
        <Button>取消</Button>
      </div>
    </div>
  </div>
</template>

<script>
import './newTask.less';
import Util from '../../../util/util';

function addRelativClass() {
  const btnGroup = document.querySelector('#new-task');
  if (!Util.hasClass(btnGroup, 'relativeClass')) {
    Util.removeClass(btnGroup, 'fixedClass');
    Util.addClass(btnGroup, 'relativeClass');
  }
}

function addFixedClass() {
  const btnGroup = document.querySelector('#new-task');
  if (!Util.hasClass(btnGroup, 'fixedClass')) {
    Util.removeClass(btnGroup, 'relativeClass');
    Util.addClass(btnGroup, 'fixedClass');
  }
}

window.onscroll = function () {
  if (Util.getScrollTop() + Util.getWindowHeight() === Util.getScrollHeight()) {
    addRelativClass();
  } else {
    addFixedClass();
  }
};


export default {
  name: 'newTask',
  data() {
    return {
      step: 0,
      linkArr: ['/newTask', '/newTask/selectModule', '/newTask/selectComponent', '/newTask/configuration', '/newTask/preview'],
      nextText: '下一步',
    };
  },
  components: {},
  created() {
    this.initSteps();
  },
  mounted() {
    this.initSticky();
  },
  methods: {
    initSteps() {
      this.linkArr.forEach((item, index) => {
        if (this.$route.path.replace(/\//g, '') === item.replace(/\//g, '')) {
          this.step = index;
        }
      });
    },
    initSticky() {
      const hasScrollBar = Util.hasScrollbar();
      if (hasScrollBar) {
        addFixedClass();
      }
    },
    nextTip() {
      // TODO 对当前的数据做出判断是否正确并保存
      // 跳转至下一页和下一个步骤
      this.pushRouter(this.linkArr[++this.step], null);
      if (this.step === 4 && this.nextText === '下一步') {
        this.nextText = '完成';
      }
    },
    lastTip() {
      // TODO 对当前的数据做出判断是否正确并保存
      // 跳转至下一页和下一个步骤
      this.pushRouter(this.linkArr[--this.step], null);
      if (this.nextText === '完成') {
        this.nextText = '下一步';
      }
    },
  },
};
</script>

