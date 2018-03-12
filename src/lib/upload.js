/**
 * Created by zhuliang on 2018/3/12.
 */
import util from './util'

export default class AlienUpload {
  constructor(option){
    util.extend(this,option)
  }


  /*
  *上传函数
  * */
  uploadlImg(file){
    var that = this;
      return new Promise(function(resolve,reject){
        let xhr = new XMLHttpRequest();
        xhr.onload = function(){
          if((xhr.status >=200 && xhr.status < 300) || xhr.status === 304){
            return resolve(xhr.response)
          }
           return reject(new Error(xhr.response))
        }
        xhr.onerror = function(){
          return reject(new Error(xhr.response))
        }
        xhr.onprogress = function(event){
        }
        xhr.open('post',that.url,true);

        //设置返回数据类型
        xhr.responseType = that.requestOption.responseType
        //设置头部信息
        if(util.isObject(that.requestOption.headers)){
            Object.keys(that.requestOption.headers).forEach(function(item,index,arr){
              xhr.setRequestHeader(item,Object.getOwnPropertyDescriptor(that.requestOption.headers,item))
            })
        }
        let formData = new FormData();
        if(!util.isEmptyObject(that.requestOption.formData)){
           Object.keys(that.requestOption.formData).forEach(function(item,index,arr){
             let input= document.createElement('input');
             input.type = hidden;
             input.name = item;
             input.value = Object.getOwnPropertyDescriptor(that.requestOption.formData,item);
           })
        }
        formData.append('file',file);
        xhr.send(formData);
      })
  }
  /*
  * 获取当前每次图片的上传进度
  * @params imgList 图片数组
  * */
  getProgress(imageList){
    let len = imageList.length || 0;
    return   Math.floor((1/ len)*100);
  }
}
