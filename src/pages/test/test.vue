<template>
    <div class="test-box">
        啊发顺丰的

    </div>
</template>

<script>
    import {AJAX_WATER} from '@/dim/ajaxSource.js'
    import common from '@/components/common/common'
    import util from 'tool/util.js';

    import X2JS from 'x2js';

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


//                axios({
//                    method: 'GET',
//                    url: '/ws/place/v1/search?keyword=%E9%85%92%E5%BA%97&boundary=nearby(39.908491,116.374328,1000)&key=RPNBZ-3EYK3-ZOA3O-3WTNP-6XTLZ-ZDF22',
//                    data: {}
//                })
//                .then(function (response) {
//                    console.log(response);
//                })
//                .catch(function (error) {
//                    console.log(error);
//                });




//                axios({
//                    method: 'GET',
//                    url: '/WebServices/WeatherWebService.asmx/getSupportCity?byProvinceName=浙江',
//                    data: {}
//                })
//                .then(function (response) {
//                    var x2js = new X2JS();
//                    console.log(x2js);
//                    console.log(response.data);
//                    var jsonObj = x2js.xml2js( response.data );
//                    var jsonObj2 = x2js.xml2dom( response.data );
//
//                    console.log(jsonObj);
//                    console.log(jsonObj2);
//                })
//                .catch(function (error) {
//                    console.log(error);
//                });








                let xmls='<?xml version="1.0" encoding="utf-8"?>\
                        <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">\
                            <soap:Body>\
                                <insert xmlns="http://example/">\
                                    <arg0 xmlns="">这个号</arg0>\
                                    <arg1 xmlns="">发个暗示法</arg1>\
                                 </insert>\
                            </soap:Body>\
                        </soap:Envelope>';


                axios({
                    method: 'POST',
                    url: '/HelloWorld',
                    data:xmls,
                    headers:{
                        "Content-Type": "text/xml; charset=utf-8"
                    }
                }).then(function (response) {
                    console.log(response);
                    var x2js = new X2JS();

                    var jsonObj = x2js.xml2js(response);
                    var jsonObj2 = x2js.xml2js( response.data );

                    console.log(jsonObj);
                    console.log(jsonObj2);
                })




//                //soap1.2成功
//
//                let xmls='<?xml version="1.0" encoding="utf-8"?>\
//                    <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">\
//                    <soap12:Body>\
//                <getSupportCity xmlns="http://WebXml.com.cn/">\
//                    <byProvinceName>浙江</byProvinceName>\
//                    </getSupportCity>\
//                    </soap12:Body>\
//                </soap12:Envelope>';
//
//
//                axios({
//                    method: 'POST',
//                    url: '/WebServices/WeatherWebService.asmx',
//                    data:xmls,
//                    headers:{
//                        "Content-Type": "application/soap+xml; charset=utf-8"
//                    }
//                }).then(function (response) {
//                    console.log(response);
//                    var x2js = new X2JS();
//
//                    var jsonObj = x2js.xml2js(response);
//                    var jsonObj2 = x2js.xml2js( response.data );
//
//                    console.log(jsonObj);
//                    console.log(jsonObj2);
//                })


















//
//                axios.post('/WebServices/WeatherWebService.asmx/getSupportCity',
//                    {
//                        byProvinceName:'浙江'
//                    },
//
//                    {
//                        headers:{
//                            'Content-Type': 'application/x-www-form-urlencoded'
//                        }
//                    }
//                 )
//                .then(res=>{
//                    console.log(res);
//                }).catch(err=>{console.log(err)});






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
