
const Util = {
  /**
   * [extend 多个对象复制]
   * 原来的vue的extend函数只支持2个参数，太不仁道了
   * @param  {[Object]} target     [目标对象]
   * @param  {[Object]} ...sources [原对象（可能多个）]
   * @return {[Object]}            [返回新的对象]
   */
  extend(target, ...sources) {
    sources.forEach((source) => {
      Object.defineProperties(target, Object.keys(source).reduce((descriptors, key) => {
        const descriptorsTemp = descriptors;
        descriptorsTemp[key] = Object.getOwnPropertyDescriptor(source, key);
        return descriptorsTemp;
      }, {}));
    });
    return target;
  },
  /**
   * [isEmptyObject 空对象检查]
   * @param  {[type]}  obj [description]
   * @return {Boolean}     [description]
   */
  isEmptyObject(obj) {
    if (this.isObject(obj)) {
      let name = null;
      for (name in obj) {
        if (name) {
          return false;
        }
      }
    }
    return true;
  },

  /**
   * Array type check.
   *
   * @param {*} obj
   * @return {Boolean}
   */
  isArray(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  },

  /**
   * Quick object check - this is primarily used to tell
   * Objects from primitive values when we know the value
   * is a JSON-compliant type.
   *
   * @param {*} obj
   * @return {Boolean}
   */
  isObject(obj) {
    return obj !== null && typeof obj === 'object';
  },

  /**
   * Convert an Array-like object to a real Array.
   *
   * @param {Array-like} list
   * @param {Number} [start] - start index
   * @return {Array}
   */
  toArray(list, start) {
    const startTemp = start || 0;
    let i = list.length - startTemp;
    const ret = new Array(i);
    while (i) {
      i -= 1;
      ret[i] = list[i + startTemp];
    }
    return ret;
  },
  /**
   * 存入sessionStorage中
   * key 键
   * value 值
   */
  setSessionStorageData(key, value) {
    sessionStorage.setItem(key, value);
  },
  /**
   * 从sessionStorage里面取数
   * value 要取得值名称
   * isParse 是否需要parse转换(针对json数据)
   * defalutValue 指定默认值
   */
  getDataFormSessionStorage(value, isParse, defaultValue) {
    let data = sessionStorage.getItem(value);
    if (data && isParse) {
      data = JSON.parse(data);
    }
    return data || (defaultValue || null);
  },
  // 判断页面是否有滚动条
  hasScrollbar() {
    return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight);
  },
  // 获取滚动的总高度
  getScrollTop() {
    let scrollTop = 0;
    let bodyScrollTop = 0;
    let documentScrollTop = 0;
    if (document.body) {
      bodyScrollTop = document.body.scrollTop;
    }
    if (document.documentElement) {
      documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
  },
  // 文档的总高度
  getScrollHeight() {
    let scrollHeight = 0;
    let bodyScrollHeight = 0;
    let documentScrollHeight = 0;
    if (document.body) {
      bodyScrollHeight = document.body.scrollHeight;
    }
    if (document.documentElement) {
      documentScrollHeight = document.documentElement.scrollHeight;
    }
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    return scrollHeight;
  },
  // 获取可见页面的总高度
  getWindowHeight() {
    let windowHeight = 0;
    if (document.compatMode === 'CSS1Compat') {
      windowHeight = document.documentElement.clientHeight;
    } else {
      windowHeight = document.body.clientHeight;
    }
    return windowHeight;
  },
  hasClass(el, cls) {
    if (!el || !cls) return false;
    cls.trim();
    if (el.classList) {
      return el.classList.contains(cls);
    } else {
      return (' '+el.className+' ').indexOf(' '+cls+' ') > -1;
    }
  },
  addClass(el, cls) {
    if (!el) return;
    let curClass = el.className;
    const classes = (cls || '').split(' ');
    for (let i = 0, j = classes.length; i < j; i++) {
      const clsName = classes[i];
      if (!clsName) {
        continue;
      }
      if (el.classList) {
        el.classList.add(clsName);
      } else if (!this.hasClass(el, clsName)) {
        curClass += ' '+clsName;
      }
    }
    if (!el.classList) {
      el.className = curClass;
    }
  },
  removeClass(el, cls) {
    if (!el || !cls) return;
    const classes = cls.split(' ');
    let curClass = ` ${el.className} `;

    for (let i = 0, j = classes.length; i < j; i++) {
      var clsName = classes[i];
      if (!clsName) continue;

      if (el.classList) {
        el.classList.remove(clsName);
      } else {
        if (hasClass(el, clsName)) {
          curClass = curClass.replace(' ' + clsName + ' ', ' ');
        }
      }
    }
    if (!el.classList) {
      el.className = trim(curClass);
    }
  },
  // 获取动作的DOM
  getElement($event) {
    return $event.target || event.srcElement;
  },
};
export default Util;
