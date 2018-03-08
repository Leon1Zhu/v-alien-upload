<template>
  <div id="app">
    <alienUpload uploadType="drag" :compressQuality="compressQuality" showProgress :ProgressPercent="ProgressPercent" ref="uploadImg"></alienUpload>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      compressQuality:.6,
      ProgressPercent:0,
    }
  },
  mounted(){
  },
  methods:{
      emptyImg(){
          this.$refs.uploadImg.emptyFiles()
      },

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
