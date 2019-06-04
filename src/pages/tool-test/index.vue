/**
* Created by Seven on 2019/5/23.
 * project: Autumn
 * email: fighting20xx@126.com
 */ 

<template>
  <div class="main-tool-test">
     <div class="test-title"> 模块测试页</div>
      <router-view></router-view>
  </div>
</template>
<script>
    export default {
        name: ''
    }
</script>
<style>
    .main-tool-test{
        height: 100%;
    }
    .test-title{
        margin: 20px;
        color: lightslategray;
        font-size: 1.9rem;
    }
</style>

