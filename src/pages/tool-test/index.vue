/**
* Created by Seven on 2019/5/23.
 * project: Autumn
 * email: fighting20xx@126.com
 */ 

<template>
  <div>
     <div class="test-title"> 模块测试页</div>
      <router-view class="main-content"></router-view>
  </div>
</template>
<script>
    export default {
        name: ''
    }
</script>
<style>
    .test-title{
        margin: 20px;
        color: lightslategray;
        font-size: 1.9rem;
    }
</style>

