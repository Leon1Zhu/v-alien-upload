<template>
  <div class="alien-upload" :style="{width:width}">
    <div class="upload">
      <div class="upload_warp">
        <div class="upload_warp_left" :class="{'full' : uploadType === 'click'}" @click="fileClick" v-if="uploadType === 'click' || uploadType === 'all'">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEmUlEQVR4Xu1b0VHcMBDVnvwfUkGggsRz6+9ABQkVABVAKghUEKiAo4JwFXB8WzeGCgIdwL9vlFmPzPgcy5JsWZwD+mI4WdZ72l2t3srAKi1N010AOGaMfa/+f+R/X0spL5IkWTThgPKfQohLxtjhyMG2TX+GiEf1DgUBbwB8ifsfEkCZ/c1/vPJr0KSUe1V3ACHENWPs21shgDE2R8SXGEcEyDcEvoCKiC+xr5UAKeUtAJxLKZ/GRBIAUDA/0M3ZigACnyTJ7piA17b0UwD42TR/KwIYY/uISPFhlC3Lsu3VavWnMwH1aDlGFnTxzcoC3gmo7ZfvFjBCBt5dQJPjvMcAm0TINQgKIQ4AYJs8ZTKZzOM4vnttrwniAlmWfcnz/BIAvtQANx4/Q5IShIA0TbMG8AVOKeVZkiSnIUFX3zU4Acvl8lBKSUKKrj0h4kcfBGRZthXHsdOZZHAC0jTV5tslaM557CMeCCF+M8auXNLzTSFgJ47jhz5WUCGaCLCW7QYngALgarXKdOB8nChripWTSw1OAAEXQpwzxkhJrrdnzvluH/NXJzoieKsyuPUpNQgBNDFloieMsQ8q+t9GUXTSE/xWnuc3DTuMtRsEI6BcHXIJxthTX59XlqWT6a3dIDgBfQJd9VmL7dXKDUZJgCmwKqKs3GB0BFCyo3aV4kzRN8EaHQFCCCrQWAmxNgnWqAho2U51hnCBiLTzaNtGEEDHZES8MkyUKjWU6rq0e0Ssn0DXnn91Asqia5u2oIIemX412TERMeecH5oOR0IIOjwVuUmlPSPiy7u0lSFXQaQ+41rF+QERd+p9KOhpkp02Aqx2AJVLNGWpa64zCAFN5fYmbaBDWd4aPBGgdhXSI8jFaNVnnPPTquV4J6AF1JOK3MXJcLlcnkgpf5lsvWq6nPNtk9k7jFd09UqAxYpeI+J+xzsJxqjvCt4rARbgy/ntM8Yoz3cJeiSvrV1sqIIVQhwDwBZVsTnnVy5W4sUCHMB3WaTimaqWXwO/ljxJKe+iKNqzJaE3ASHA6wjQuRIA/JhOp7QDGFsvAkKB1xGgC6QuanRnAkKCb7GARlF2cAJCg98oAgYGP1fJyoONnKaT5QezgAHB36vc3qmeGJSAgcGTeuxU9SG3CEZAh7O6cfspO9gIG7rBghFgjSZwx5bS3Gwymcx00wGAx1K57rwNDom1cm3flC6TdmjSD3VTXXDO9zeOgI4Hpa7rMd84AgJf3n7cOALSNF0AwNeuS+ryXHEXWicc9pXEXCZS7Wtz56Dr2PXnAOCo7ba4VfnJ12TKcZSMRRF8yG8YHqWUM7q+00bAAhH3fAO0HU8Jpq2yNwA0fumi0w6a3m36YGIhpTznnDtnabZAAeC+SxZI49vo/qZ5mAgwPe/ldwA4nU6nZ66D+SKADiCfXV/uu3+XoOuFAItavG+suvGcNH9vLqAGenUr6HKhyosFEAFq66FPS1/NFVxEjNKEvBFQDqiSELqH9ymU3av3WBU763PyTkAlGdnO87zrKcuJuyiK7npsg8bqr2kyLx8Qmjpu4u8aocaphDZqAmyqv6aF+wtk1Bw67F50LgAAAABJRU5ErkJggg==">
        </div>
        <div class="upload_warp_right" :class="{'full' : uploadType === 'drag'}" @drop="drop($event)" @dragenter="dragenter($event)" @dragover="dragover($event)" v-if="uploadType === 'drag' || uploadType === 'all'">
          或者将文件拖到此处
        </div>
      </div>
      <div class="upload_warp_text">
        <span>选中{{imgList.length}}张文件，共{{bytesToSize(this.size)}}</span>
        <div class="upload-img-btn" @click="uploadImg" :style="{ backgroundColor:BtnColor,borderColor: BtnColor}">上传文件</div>
      </div>
      <input  @change="fileChange($event)" type="file" class="upload_file" :class="[multipleClassObj]" :multiple="multiple" style="display: none"/>


      <div class="upload_warp_img" v-show="!(imgList.length === 0 && showImageList.length === 0)">
        <div class="upload_warp_img_div" v-for="(item,index) of showImageList">
          <div class="upload_warp_img_div_top">
            <div class="upload_warp_img_div_text">
              {{item.name}}
            </div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABdElEQVRYR+2W0VEDMQxEdzugk9ABpAJIB5QAlUAnJBUk6QA6oQMzujnPOMY+aT1zcz/4Mzlrn2VZWmLjxY318Q/wJwMppXsA7wAeAVwAHEj+jFxVSukOwGcR643kVxmrBWCiD8VHtmGvQsziZwB2oLwuJPceQGqcVoLoiE9hSd4cupWBI4CnUYglcQAnks9eBuze7Bp2KoQj/m21UF9l8xnOgSSIEfHpSnrVrUCMii8C2J8RiPkAdbXnczXTvlgDdUYCELalfGphcTcDOZID0bpF9+R5U3gWCBBh8XAGhExI4qMAvYKzeFLHlACcp1bWgQQRqgFBPIOEIVyAQJMxUblth15BQNw8gy2pbYcaUUQ8D5ZAs+r6iaVhJLXXUYiWH7BxLIkH+0SzMBVDEmoyTiaOJA+eIWlZspB4JBMRS1abUkncgbiSzC9n+rRnyz9mZ3wC8KI64grCPKa57CuAV9eWt2brmr+5nXBNcWkYrQWyeQZ+Ac/E4iHdfHjZAAAAAElFTkSuQmCC" class="upload_warp_img_div_del" @click="deleteShowImg(item,index)">
          </div>
          <img :src="item.src || item">
        </div>
        <div class="upload_warp_img_div" v-for="(item,index) of imgList">
          <div class="upload_warp_img_div_top">
            <div class="upload_warp_img_div_text">
              {{item.file.name}}
            </div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABdElEQVRYR+2W0VEDMQxEdzugk9ABpAJIB5QAlUAnJBUk6QA6oQMzujnPOMY+aT1zcz/4Mzlrn2VZWmLjxY318Q/wJwMppXsA7wAeAVwAHEj+jFxVSukOwGcR643kVxmrBWCiD8VHtmGvQsziZwB2oLwuJPceQGqcVoLoiE9hSd4cupWBI4CnUYglcQAnks9eBuze7Bp2KoQj/m21UF9l8xnOgSSIEfHpSnrVrUCMii8C2J8RiPkAdbXnczXTvlgDdUYCELalfGphcTcDOZID0bpF9+R5U3gWCBBh8XAGhExI4qMAvYKzeFLHlACcp1bWgQQRqgFBPIOEIVyAQJMxUblth15BQNw8gy2pbYcaUUQ8D5ZAs+r6iaVhJLXXUYiWH7BxLIkH+0SzMBVDEmoyTiaOJA+eIWlZspB4JBMRS1abUkncgbiSzC9n+rRnyz9mZ3wC8KI64grCPKa57CuAV9eWt2brmr+5nXBNcWkYrQWyeQZ+Ac/E4iHdfHjZAAAAAElFTkSuQmCC" class="upload_warp_img_div_del" @click="fileDel(index)">
          </div>
          <img :src="item.file.src">
        </div>




      </div>
      <div class="alien-progress" v-show="showProgress && onProgress">
        <div class="alien-progress-outer">
          <div class="alien-progress-inner">
            <div class="alien-progress-bg" :style="{background: progressColor,width:ProgressPercent + '%'}"></div>
          </div>
        </div>
        <span class="alien-progress-text">
          {{ProgressPercent}}%
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import imgCompress from './ImgCompress'
  export default {
    name: 'alienUpload',
    props:{
        //组件宽度
        width:{
            type:String,
            default:'100%'
        },
        //文件压缩质量,传入0.1到1
        compressQuality:{
            type:Number,
            default:1
        },
        //文件压缩的限制，大于这个尺寸开始压缩
        limitSize:{
            type:Number,
            default:1024
        },
        //click表示点选，drag表示拖拽，all表示两个都使用
        uploadType:{
            type:String,
            default:'all',
        },
        //图片上传数量最大限制，默认不限制
        imageLimit:{
          type:Number,
          default:0,
        },
        //图片最小上传数量，
        imageMinLimit:{
          type:Number,
          default:0,
        },
        //是否显示进度条
        showProgress:{
          type:Boolean,
          default:false
        },
        //进度条进度
        ProgressPercent:{
          type:Number,
          default:0
        },
        //进度条颜色
        progressColor:{
          type:String,
          default:'#2d8cf0'
        },
        //按钮颜色
        BtnColor:{
          type:String,
          default:'#2d8cf0'
        },
        //同一个页面多次使用时传入参数
         multipleClass:{
           type:String,
           default:null,
         },
        //需要展示的图片数组，
        showImageList:{
           type:Array,
          default: function () {
            return []
          }
        },
        //展示的图片是否算入限制数量里，
        showImageListLimit:{
          type:Boolean,
          default:true
        },
        //支持多选文件上传
        multiple:{
          type:Boolean,
          default:true
        },
    },
    data: function () {
      return {
        multipleClassObj:this.multipleClass,
        onProgress:false,
        imgList: [],
        size: 0,
        limit:null,
      }
    },
    created(){
      this.limit = this.imageLimit === 0 ? null : this.imageLimit;
      this.computerImageLength()
    },
    watch:{
      showImageList(v1,v2){
          if(v1.length > 0  && this.showImageListLimit &&  this.limit) {
            this.computerImageLength();
          }
      }
    },
    methods: {
      //清空待上传文件数组
      clearUp(){
         this.imgList = [];
        this.size = 0;
        if(this.showProgress){
          this.onProgress = false;
        }
         this.limit = this.imageLimit === 0 ? null : this.imageLimit;
        this.computerImageLength()
      },
      //删除展示的图片
      deleteShowImg(item,index){
          if(this.showImageListLimit){
            this.limit++;
          }
          this.$emit('delete-show-img',item,index);
      },
      //计算长度剩余
      computerImageLength(){
        if(this.showImageList.length > 0  && this.showImageListLimit &&  this.limit){
          if(this.showImageList.length >  this.limit){
            let start = parseInt(this.limit,10);
            let showImageListLength = parseInt(this.showImageList.length,10);
            this.showImageList.splice(start-1, showImageListLength - start);
            this.limit -=  this.showImageList.length;
          }
          this.limit -= this.showImageList.length
          console.log(this.limit)
        }
      },
      //上传
      uploadImg(){
        if( this.imgList.length === 0){
            return;
        }
        if(this.imageMinLimit > 0){
            let flag = false;
            if(this.showImageListLimit){
              flag = this.imageMinLimit  >  (this.imgList.length+this.showImageList.length) && true
            }else{
              flag = this.imageMinLimit  >  this.imgList.length && true
            }

            if(flag){
              this.$emit('count-exceed-limit','less')
              return;
            }
        }

        if(this.showProgress){
          this.onProgress = true;
        }
          this.$emit('upload-img',this.imgList)
      },
      //设置
      limitClick(state) {
        this.imgList = [];
        if (state)
          this.limit = state;
        else
          this.limit = null;
      },
      fileClick() {
         this.multipleClass ? document.querySelector('.upload_file.'+this.multipleClass+'').click() : document.querySelector('.upload_file').click()
      },
      fileChange(el) {
        if (!el.target.files[0].size) return;
        this.fileList(el.target);
        el.target.value = ''
      },
      fileList(fileList) {
        let files = fileList.files;
        for (let i = 0; i < files.length; i++) {
          //判断是否为文件夹
          if (files[i].type !=  '') {
            this.fileAdd(files[i]);
          } else {
            //文件夹处理
            this.folders(fileList.items[i]);
          }
        }
      },
      //文件夹处理
      folders(files) {
        let _this = this;
        //判断是否为原生file
        if (files.kind) {
          files = files.webkitGetAsEntry();
        }
        files.createReader().readEntries(function (file) {
          for (let i = 0; i < file.length; i++) {
            if (file[i].isFile) {
              _this.foldersAdd(file[i]);
            } else {
              _this.folders(file[i]);
            }
          }
        })
      },
      foldersAdd(entry) {
        let _this = this;
        entry.file(function (file) {
          _this.fileAdd(file)
        })
      },
      fileAdd(file) {
        if (this.limit !== null) this.limit--;
        if (this.limit !== null && this.limit < 0) {
            this.$emit('count-exceed-limit','more')
            return;
        }
        //判断是否为图片文件
        if (file.type.indexOf('image') == -1) {
          /*alert('请选择图片文件进行上传');*/
          this.$emit('image-upload-error','请选择图片文件进行上传')
        } else {
          let reader = new FileReader();
          let _this=this;
          reader.readAsDataURL(file);
          reader.onerror = function(){
              this.$emit('image-upload-error',reader.error.code)
          }
          reader.onload = function () {
              file.src = this.result;
              (_this.compressQuality <1 && _this.compressQuality >0.1 && (file.size/1024 > _this.limitSize)) ? imgCompress(file,_this.compressQuality,_this.limitSize,function(file){_this.drawImage(file)}) :  _this.drawImage(file);

          }
        }
      },
      drawImage(file){
        //总大小
        this.size = this.size + file.size;
        let _this=this;
        let image = new Image();
        image.onload=function(){
          let width = image.width;
          let height = image.height;
          file.width=width;
          file.height=height;
          _this.imgList.push({
            file
          });
          _this.$emit('image-list-change',file);
        };
        image.src= file.src;
      },
      fileDel(index) {
        this.size -= this.imgList[index].file.size;//总大小
        this.imgList.splice(index, 1);
        if (this.limit !== null) this.limit ++;
      },
      bytesToSize(bytes) {
        if (bytes === 0) return '0 B';
        let k = 1000, // or 1024
          sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
          i = Math.floor(Math.log(bytes) / Math.log(k));
        return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
      },
      dragenter(el) {
        el.stopPropagation();
        el.preventDefault();
      },
      dragover(el) {
        el.stopPropagation();
        el.preventDefault();
      },
      drop(el) {
        el.stopPropagation();
        el.preventDefault();
        this.fileList(el.dataTransfer);
      }
    }
  }
</script>
<style scoped>

  @keyframes progressSwing {
    0%{
      opacity:.5;
      width:0%;
    }
    100%{
      opacity:0;
      width:100%;
    }
  }
  .alien-progress{
    display: inline-block;
    width: 100%;
    position: relative;
    margin-left: 14px;
  }

  .alien-progress .alien-progress-outer{
    display: inline-block;
    width: 100%;
    margin-right: -55px;
    padding-right: 55px;
    box-sizing: border-box;
  }
  .alien-progress .alien-progress-outer  .alien-progress-inner{
    display: inline-block;
    width: 100%;
    background-color: #f3f3f3;
    border-radius: 100px;
    vertical-align: middle;
  }
  .alien-progress .alien-progress-outer  .alien-progress-inner .alien-progress-bg{
    border-radius:4px;
    width:10%;
    height:10px;
    transition: all .2s;
    position: relative;
  }
  .alien-progress .alien-progress-outer  .alien-progress-inner .alien-progress-bg:before{
    content: '';
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background: #fff;
    animation: progressSwing 2s ease-in-out infinite;
  }
  .alien-progress-text{
    margin-left:4px;
    font-size:14px;
  }
  .upload_warp_img_div_del {
    position: absolute;
    top: 6px;
    width: 16px;
    right: 4px;
  }
  .upload_warp_img_div_top {
    position: absolute;
    top: 0;
    width: 100%;
    height: 30px;
    background-color: rgba(0, 0, 0, 0.4);
    line-height: 30px;
    text-align: left;
    color: #fff;
    font-size: 12px;
    text-indent: 4px;
  }
  .upload_warp_img_div_text {
    white-space: nowrap;
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .upload_warp_img_div img {
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
  }
  .upload_warp_img_div {
    overflow: hidden;
    position: relative;
    height: 100px;
    width: 120px;
    border: 1px solid #ccc;
    margin: 0px 30px 10px 0px;
    float: left;
    line-height: 100px;
    display: table-cell;
    text-align: center;
    background-color: #eee;
  }
  .upload_warp_img {
    border-top: 1px solid #D2D2D2;
    padding: 14px 0 0 14px;
    overflow: hidden
  }
  .upload_warp_text {
    position: relative;
    text-align: left;
    padding-bottom: 15px;
    padding-top: 15px;
    text-indent: 14px;
    border-top: 1px solid #ccc;
    font-size: 14px;
  }

  .upload_warp_text .upload-img-btn{
    position: absolute;
    right: 14px;
    top: 6px;
    color: #fff;
    vertical-align: middle;
    line-height: 1.5;
    border-radius: 4px;
    font-size: 14px;
    padding: 6px 14px;
    text-align: left;
    text-indent: 0px;
  }
  .upload_warp_text .upload-img-btn:hover{
    cursor: pointer;
    filter: brightness(1.1)
  }

  .upload_warp_right {
    text-align: center;
    float: left;
    width: 57%;
    margin-left: 2%;
    height: 100%;
    border: 1px dashed #999;
    border-radius: 4px;
    line-height: 130px;
    color: #999;
  }
  .upload_warp_left img {
    width: 64px;
    height: 64px;
    margin-top: -32px;
    position: absolute;
    top: 50%;
    margin-left: -32px;
    left: 50%;
  }
  .upload_warp_left {
    text-align: center;
    float: left;
    width: 40%;
    height: 100%;
    border: 1px dashed #999;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
  }
   .upload_warp_left.full{
      width:100%;
   }
  .upload_warp_right.full{
    width:100%;
    margin-left:0;
  }
  .upload_warp {
    margin: 14px;
    height: 130px;
  }
  .upload {
    border: 1px solid #ccc;
    background-color: #fff;
    border-radius: 4px;
  }
</style>
