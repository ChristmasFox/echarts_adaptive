<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import {refreshScale} from '@/unitls/util.js'
export default {
  name: 'app',
  mounted(){
    refreshScale();
    window.onresize=function(){
      refreshScale()
    }
  }
}
</script>
<style lang="scss">
  * {
  padding: 0;
  margin: 0;
  color: white;
  }
  body {
    background-image: url(./assets/blue.jpg);
  }
  #app {
    width: 1920px;
    height: 1080px;
    background: #101326;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 50%;
    right: 0;
    bottom: 0;
  }
</style>
