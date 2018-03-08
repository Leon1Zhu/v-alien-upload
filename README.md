# v-alien-upload

#### vue.js上传组件，支持自动压缩、可预、删除、多选、显示上传进度、图片展示等功能

#### 安装（npm）
```
npm install alienupload --save
```

#### 使用

```javascript
import ValienUpload from 'alienupload'
Vue.use(ValienUpload)
```

#### 属性

<table>
  <tr>
    <th>属性</th>
    <th>说明</th>
    <th>类型</th>
    <th>默认值</th>
  </tr>
  <tr>
    <td>width</td>
    <td>组件宽度</td>
    <td>String</td>
    <td>100%</td>
  </tr>
  <tr>
    <td>compressQuality</td>
    <td>文件压缩质量（0.1-1）1表示不压缩</td>
    <td>Number</td>
    <td>1</td>
  </tr>
  <tr>
    <td>limitSize</td>
    <td>文件压缩的限制，大于这个尺寸开始压缩(单位KB)</td>
    <td>Number</td>
    <td>1024</td>
  </tr>
  <tr>
    <td>uploadType</td>
    <td>click表示使用点选，drag表示拖拽，all表示两个都使用</td>
    <td>String</td>
    <td>all</td>
  </tr>
  <tr>
    <td>imageLimit</td>
    <td>图片上传数量最大限制，默认不限制</td>
    <td>Number</td>
    <td>0</td>
  </tr>
  <tr>
    <td>imageMinLimit</td>
    <td>图片最小上传数量(默认不限制)</td>
    <td>Number</td>
    <td>0</td>
  </tr>
  <tr>
    <td>showProgress</td>
    <td>是否显示进度条</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
  <tr>
    <td>ProgressPercent</td>
    <td>进度条进度</td>
    <td>Number</td>
    <td>0</td>
  </tr>
  <tr>
    <td>progressColor</td>
    <td>进度条颜色</td>
    <td>Number</td>
    <td>#2d8cf0</td>
  </tr>
  <tr>
    <td>multipleClass</td>
    <td>同一个页面该组件使用多个时传入该参数,给组件加上该类名，以防止图片添加混乱</td>
    <td>String</td>
    <td>null</td>
  </tr>
  <tr>
    <td>BtnColor</td>
    <td>按钮颜色</td>
    <td>String</td>
    <td>#2d8cf0</td>
  </tr>
  <tr>
    <td>showImageList</td>
    <td>需要展示的图片数组，如果有图片需要进行展示，直接传入该数组([{name:X,src:XX}])</td>
    <td>Array</td>
    <td>[ ]</td>
  </tr>
  <tr>
    <td>showImageListLimit</td>
    <td>传入的展示图片数组是否算入限制数量</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
  <tr>
    <td>multiple</td>
    <td>是否支持文件多选</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>

  
    
    
</table>


| 属性      |      说明     |  类型 |  默认值 |
|----------|:-------------:|------:|------:|
| width |  组件宽度 | String | 100% |
| compressQuality |    文件压缩质量（0.1-1）1表示不压缩   |   Number | 1 |
| limitSize |文件压缩的限制，大于这个尺寸开始压缩(单位KB)|Number| 1024 |
| uploadType|click表示使用点选，drag表示拖拽，all表示两个都使用| String | all |
| imageLimit | 图片上传数量最大限制，默认不限制 |   Number | 0 |
| imageMinLimit |图片最小上传数量|    Number| 0 |
|showProgress|是否显示进度条| Boolean | true |
| ProgressPercent|进度条进度|  Number | 0 |
|progressColor|进度条颜色|String| #2d8cf0 |
|multipleClass|同一个页面该组件使用多个时传入该参数，以防止图片添加混乱|String| null |
|BtnColor|按钮颜色|String| #2d8cf0 |
|showImageList|需要展示的图片数组，如果有图片需要进行展示，直接传入该数组([{name:X,src:XX}])|Array| [] |
|showImageListLimit|传入的展示图片数组是否算入限制数量|Boolean| true |
|multiple|是否支持文件多选|Boolean| true |

