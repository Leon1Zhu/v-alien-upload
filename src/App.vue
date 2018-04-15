<template>
  <div id="app">
    <alienUpload @delete-img="delImg" :url="url"  width="50%"@delete-show-img="deleteShowImg" @image-list-change="imageListChange" @count-exceed-limit="countExceedLimit" @image-upload-error="imageUploadError" :showImageList="showImageList" @upload-img-success="uploadImg" :compressQuality="compressQuality" showProgress :ProgressPercent="ProgressPercent" ref="uploadImg"></alienUpload>
    <alienUpload :url="url"  width="50%"@delete-show-img="deleteShowImg" @image-list-change="imageListChange" @count-exceed-limit="countExceedLimit" @image-upload-error="imageUploadError" :showImageList="showImageList" @upload-img-success="uploadImg" :compressQuality="compressQuality" showProgress :ProgressPercent="ProgressPercent" ref="uploadImg"></alienUpload>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
        url:'http://image02.17wa.com/17wa/api/17wa-image/upload',
      imageLimit:1,
      compressQuality:.6,
      ProgressPercent:0,
      showImageList:[{name:'示例1',src:'http://otdc3q7z7.bkt.clouddn.com/146197530969E4FA88FFC41C3BA13A86.png'},{name:'示例2',src:'http://otdc3q7z7.bkt.clouddn.com/146197530969E4FA88FFC41C3BA13A86.png'}]
    }
  },
  mounted(){
  },
  methods:{
      delImg(img){
          console.log(img);
      },
      emptyImg(){
          this.$refs.uploadImg.clearUp()
      },
      uploadImg(file,response){
         /* console.log(file)
        console.log(response)*/
      },
      imageUploadError(code){
          console.log('图片上传出错，出错信息'+code);
      },
      countExceedLimit(type){
          if(type === 'more'){
              console.log('图片上传数量超出限制数！')
          }else if(type === 'less'){
              console.log('图片上传数量少于限制数！')
          }
      },
      imageListChange(file){
          console.log(file)
      },
      deleteShowImg(item,index){
          console.log(item)
          console.log(index)
        this.showImageList.splice(index,1);
      }

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

</style>
