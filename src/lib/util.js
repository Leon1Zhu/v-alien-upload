/**
 * Created by zhuliang on 2018/3/12.
 */
let pub={
  extend(target,...source){

    source.forEach((item,index,arr) => {
      Object.defineProperties(target,Object.keys(item).reduce((des,key) => {
        des[key] = Object.getOwnPropertyDescriptor(item,key);
        return des;
      },{}))
     /* for(var key in item){
        item.hasOwnProperty(key){
          target[key] = item[key];
        }
      }*/
    })
  },
  isObject(obj){
    if(obj !== null && typeof obj === 'object'){
      return true;
    }
    return false;
  },
  isEmptyObject(obj){
    if(this.isObject(obj)){
      let name = null;
      for(name in obj){
        if(name){
          return false;
        }
      }
    }
    return true;
  }
}

export default pub;
