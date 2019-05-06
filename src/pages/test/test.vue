<template>
    <div class="test-box">
        啊发顺丰的

    </div>
</template>

<script>
    import {AJAX_WATER} from '@/dim/ajaxSource.js'
    import common from '@/components/common/common'
    import util from 'tool/util.js';

    import axios from 'axios';

    export default {
        data() {
            return {};
        },
        mounted: function() {
            this.login();
        },
        methods: {

            login(){


                axios({
                    method: 'post',
                    url: 'WebServices/WeatherWebService.asmx/getSupportDataSet',
                    data: {
                        firstName: 'Fred',
                        lastName: 'Flintstone'
                    }
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });

//                let self = this;
//                this.$ajax().post( '/WebServices/WeatherWebService.asmx/getSupportDataSet', {
//                    type: "POST",   //访问WebService使用Post方式请求
//                    contentType: "application/json", //WebService 会返回Json类型
//                    url: "WebService1.asmx/HelloWorld", //调用WebService的地址和方法名称组合 ---- WsURL/方法名
//                    data: "{}",         //这里是要传递的参数，格式为 data: "{paraName:paraValue}",下面将会看到
//                    dataType: 'json',
//                    success: function(result) {     //回调函数，result，返回值
//                        console.log(result)
//                    }
//                }).then(({r}) => {
//                    console.log(r)
//
//                });

//                this.$ajax.post({
//                    type: "POST",   //访问WebService使用Post方式请求
//                    contentType: "application/json", //WebService 会返回Json类型
//                    url: "WebService1.asmx/HelloWorld", //调用WebService的地址和方法名称组合 ---- WsURL/方法名
//                    data: "{}",         //这里是要传递的参数，格式为 data: "{paraName:paraValue}",下面将会看到
//                    dataType: 'json',
//                    success: function(result) {     //回调函数，result，返回值
//                        console.log(result)
//                    }
//                });
            },
        },
    }
</script>
<style lang="scss" scoped>
    .demo-ruleForm {
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -200px;
        margin-top: -200px;
        width: 350px;
        height: 300px;
        padding: 35px 35px 15px;
        border-radius: 5px;
        -moz-border-radius: 5px;
        background-clip: padding-box;
        margin-bottom: 20px;
        background-color: #f9fafc;
        border: 2px solid #8492a6;
        .title {
            margin: 0 auto 40px;
            text-align: center;
            color: #505458;
            font-size: 1.17em;
        }

    }

    .login-box {
        height: 100%;
        position: relative;
        background: #1f2d3d;
    }

</style>
