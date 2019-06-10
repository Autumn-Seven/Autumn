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

    import Vue from 'vue';
    import iView from 'iview';
    import 'iview/dist/styles/iview.css';
    // import i18n from '@/locale';
    Vue.use(iView
        // , {i18n: (key, value) => i18n.t(key, value)}
    );


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

