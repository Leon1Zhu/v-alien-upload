/**
 * Created by zhuliang on 2018/3/2.
 */
import alienUpload from './alien-upload.vue'
const ValienUpload = {
  install(Vue,options){
    Vue.component(alienUpload.name,alienUpload)
  },
  upload: alienUpload
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ValienUpload);
}
export default ValienUpload // 导出
