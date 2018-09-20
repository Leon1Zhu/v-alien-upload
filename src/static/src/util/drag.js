/**
 * @Author: liang.zhu
 * @Date: 2018/9/19 下午6:47
 * 使用事件委托，减少性能损耗
 */

let draging = false;
let isdrop = false;

function getDOMs(el) {
  return document.querySelectorAll(el);
}

function setData(e, data) {
  const setDate =  JSON.stringify(data);
  if (e.dataTransfer.setData) {
    e.dataTransfer.setData('dropData', setDate)
  }else {
    sessionStorage.setItem('dropData', setDate);
  }
}

function getData(e) {
  if (e.dataTransfer.getData) {
    return JSON.parse(e.dataTransfer.getData('dropData'));
  }else {
    return JSON.parse(sessionStorage.getItem('dropData'));
  }
}

function bindDrag(dom,dragStart,dragEnd) {
  let offsetX;
  let offsetY;
  dom.ondragstart=function(e){
    if (draging) return;
    draging = true;
    dom.style.opacity = 0;
    if (dragStart) {
      dragStart();
    }
    const dataSet = e.target.dataset || e.srcElement.dataset;
    setData(e, {
      componentName: dataSet.componentname,
      groupName: dataSet.group,
      type: dataSet.type,
    })
  }
  dom.ondrag=function(e){
    let x= e.pageX;
    let y= e.pageY;
    //drag事件最后一刻，无法读取鼠标的坐标，pageX和pageY都变为0
    if(x === 0 && y === 0){
      return; //不处理拖动最后一刻X和Y都为0的情形
    }
    x-=offsetX;
    y-=offsetY;
  }
  dom.ondragend=function(e){
    draging = false;
    // if (isdrop) {
    //   isdrop =false;
    // }else {
    // dom.style.opacity = 1;
    //};
    dom.style.opacity = 1;
    if (dragEnd) {
     dragEnd(e.target || e.srcElement);
    };
  }
}


function dragenter(e) {
  e.stopPropagation();
  e.preventDefault()
};
function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
};
function drop(e, dropCB) {
  e.stopPropagation();
  e.preventDefault();
  if (dropCB) {
    // 调用增加组件方法
    return dropCB(getData(e));
  }
  return false;
}

function getDOM(el) {
  return document.querySelector(el);
}

const DragUtil = {
  drag (el,dragStart,dragEnd) {
    const doms = getDOMs(el);
    doms.forEach( item => {
      bindDrag(item,dragStart,dragEnd);
    })

  },
  addDropListen(el,dropCB) {
    let dom = getDOM(el);
    dom.ondragenter = function(e){
      dragenter(e);
    };
    dom.ondragover = function(e) {
      dragover(e);
    };
     dom.ondrop = function(e) {
      const returnFlag = drop(e,dropCB);
      isdrop = true;
    };
  },
};

export default DragUtil;



