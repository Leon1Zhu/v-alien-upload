 /**
 * Created by zhuliang on 2018/1/31.
 */

/*
var fileObj = document.getElementById("file").files[0]; // js 获取文件对象
imgCompress(fileObj,function(val){
  console.log(val)
})
*/


export default function ImgCompress(fileResult,quality,limitSize,callback) {
/*  let that =this;

  var fileObj = document.getElementById("file").files[0]; // js 获取文件对象*/


  if(fileResult.size/1024 > limitSize) { //大于limitSize，进行压缩上传
    photoCompress(fileResult, {
      quality: quality
    }, function(base64Codes){
      let bl = convertBase64UrlToBlob(base64Codes);
      /*var file = new File(bl)*/
      let file = new File([bl], fileResult.name);
      /* form.append("file", bl, "file_"+Date.parse(new Date())+".jpg"); // 文件对象
       that.xhr = new XMLHttpRequest();  // XMLHttpRequest 对象
       that.xhr.open("post", url, true); //post方式，url为服务器请求地址，true 该参数规定请求是否异步处理。
       that.xhr.onload = that.xhr; //请求完成
       that.xhr.onerror =  that.uploadFailed(); //请求失败
       that.xhr.send(form); //开始上传，发送form数据
       console.log(that.xhr)*/
       var ready = new FileReader();
       ready.readAsDataURL(file);
       ready.onload = function(){
         file.src = this.result;
         callback(file)
       }
       ready.onerror = function(){
         file.src = fileResult.src;
         callback(file)
       }

      /*开始读取指定的Blob对象或File对象中的内容. 当读取操作完成时,readyState属性的值会成为DONE,如果设置了onloadend事件处理程序,则调用之.同时,result属性中将包含一个data: URL格式的字符串以表示所读取文件的内容.*/
      /* ready.readAsDataURL(file);
       ready.onload=function(){
       var re=this.result;*/
      /* }*/

    });
  }else{ //小于等于limitSize 原图上传hat
   /* form.append("file", fileObj); // 文件对象
    that.xhr = new XMLHttpRequest();  // XMLHttpRequest 对象
    that.xhr.open("post", url, true); //post方式，url为服务器请求地址，true 该参数规定请求是否异步处理。
    that.xhr.onload = that.uploadComplete(); //请求完成
    that.xhr.onerror =  that.uploadFailed(); //请求失败
    that.xhr.send(form); //开始上传，发送form数据*/
    callback(fileResult)
  }
}





function photoCompress(fileResult,w,objDiv){
  /*var ready=new FileReader();*/
  /*开始读取指定的Blob对象或File对象中的内容. 当读取操作完成时,readyState属性的值会成为DONE,如果设置了onloadend事件处理程序,则调用之.同时,result属性中将包含一个data: URL格式的字符串以表示所读取文件的内容.*/
 /* ready.readAsDataURL(file);
  ready.onload=function(){
    var re=this.result;*/
    canvasDataURL(fileResult.src,w,objDiv)
 /* }*/
}
function  canvasDataURL(path, obj, callback){
  var img = new Image();
  img.src = path;
  img.onload = function(){
    var that = this;
    // 默认按比例压缩
    var w = that.width,
      h = that.height,
      scale = w / h;
    w = obj.width || w;
    h = obj.height || (w / scale);
    var quality = 1;  // 默认图片质量为0.7
    //生成canvas
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    // 创建属性节点
    var anw = document.createAttribute("width");
    anw.nodeValue = w;
    var anh = document.createAttribute("height");
    anh.nodeValue = h;
    canvas.setAttributeNode(anw);
    canvas.setAttributeNode(anh);
    ctx.drawImage(that, 0, 0, w, h);
    // 图像质量
    if(obj.quality && obj.quality <= 1 && obj.quality > 0){
      quality = obj.quality;
    }
    // quality值越小，所绘制出的图像越模糊
    var base64 = canvas.toDataURL('image/jpeg', quality);
    // 回调函数返回base64的值
    callback(base64);
  }
}
/**
 * 将以base64的图片url数据转换为Blob
 * @param urlData
 *            用url方式表示的base64图片数据
 */
function convertBase64UrlToBlob(urlData){
  var arr = urlData.split(','), mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while(n--){
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], {type:mime});
}


//上传成功响应
/*
function uploadComplete(evt) {
  //服务断接收完文件返回的结果

  var data = JSON.parse(evt.target.responseText);
  if(data.success) {
    alert("上传成功！");
  }else{
    alert("上传失败！");
  }

}
*/






