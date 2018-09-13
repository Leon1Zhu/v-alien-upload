/**
 * @Author: liang.zhu
 * @Date: 2018/9/13 下午2:33
 * 主页相关store信息
 */
import Util from '../../util'
const sessionKey = {
  breadCrumb: 'BREADCRUMB'
}
const state = {
  breadCrumb: Util.getDataFormSessionStorage(sessionKey.breadCrumb, true),
}

const getters = {
  getBreadCrumb: state => state.breadCrumb,
}

const mutations = {
  // 点击新增路由
  addBreadCrumb(state, obj) {
    state = state || [];
    const level = obj.level;
    // 删除高级别的目录
    for(let i = 0, len = this.state.length; i< len; i++){
      if(state[i].level >= level){
        state.splice(i,1);
        i--;
      }
    }
    state.push(obj);
  }
}

const actions = {
  setAddBreadCrumb ({ commit },obj) {
    commit('addBreadCrumb',obj)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

