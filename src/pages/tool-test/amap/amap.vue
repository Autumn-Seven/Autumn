/**
* Created by Seven on 2019/9/3.
* project: Autumn
* email: fighting20xx@126.com
*/
<template>
    <div>
        <head-top signin-up='home' class="MapContainer" id="MapContainer">
            <span slot='logo' class="head_logo"  >FoodMap</span>
        </head-top>


    </div>
</template>
<script>

    import  loadScript from '@/util/loadScript.js';
    import {Geolocation,addMarker,initMap,startPositionPicker} from './mapUtil'
    import headTop from './components/head'

    export default {
        name: '',
        components:{
            headTop
        },
        created() {
            let self = this;
            // 已载入高德地图API，则直接初始化地图
            // console.log(this.AMap,window.AMap)
            if (window.AMap && this.AMap){

                this.initMap();
                // 未载入高德地图API，则先载入API再初始化
            } else {
                loadScript(
                    `http://webapi.amap.com/maps?v=1.4.3&key=a974e6e1cdbbacfd5c7962102ea76d08`
                ).then(function() {
                    loadScript('//webapi.amap.com/ui/1.0/main.js?v=1.0.11&key=a974e6e1cdbbacfd5c7962102ea76d08').then(function() {
                        self.initMap();
                    });
                })
            }
        },
        data(){
            return {
                AMap: null,
                guessCity: '',   //当前城市
                guessCityid: '', //当前城市id
                hotcity: [],     //热门城市列表
                groupcity: {},   //所有城市列表
            }
        },
        mounted:function(){



        },
        methods:{
            initMap(){
                console.log('加载成功')
                this.AMap = window.AMap
                console.log(window.AMap)
                console.log(window.AMapUI)


                var Totalwidth =this.Totalwidth= document.body.clientWidth ;
                var Totalhegiht  =this.Totalwidth = document.body.clientHeight ;
                var MapContainer = document.getElementById("MapContainer");
                MapContainer.style.width = Totalwidth+"px";
                MapContainer.style.height = Totalhegiht+"px";
                window.addEventListener('resize',function () {
                    Totalwidth = document.body.clientWidth ;
                    Totalhegiht = document.body.clientHeight ;
                    MapContainer.style.width = Totalwidth+"px";
                    MapContainer.style.height = Totalhegiht+"px";
                });


                var map = new this.AMap.Map('MapContainer', {
                    resizeEnable: true,
                    zoom:11,
                    center: [120.06396960094571,30.308969408253525]
                });
                var self = this;


                initMap(map);
                // this.INIT_MAP(map);
                startPositionPicker(window.AMapUI,function () {
                    // self.getfood();
                });

                Geolocation(function (rep) {
                        // store.commit('RECORD_ADDRESS',{latitude:rep.position.lat,longitude:rep.position.lng});
                        // self.getfood();
                    } ,
                    this.onError);



                var marker = new this.AMap.Marker({
                    position: new this.AMap.LngLat(120.06396960094571,30.308969408253525),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                    title: '北京'
                });

// 将创建的点标记添加到已有的地图实例：
                map.add(marker);

                var content = [
                    "<b>银江软件园F座2楼</b>",
                    "<div>杭州市西湖区西园八路2号</div>"
            ];

// 创建 infoWindow 实例
                var infoWindow = new this.AMap.InfoWindow({
                    anchor: 'bottom-left',
                    content: content.join("<br>")  //传入 dom 对象，或者 html 字符串
                });

// 打开信息窗体
                infoWindow.open(map,[120.06419417037063,30.309185024687217]);


            },
            reload(){
                window.location.reload();
            },

            onError(rep){
                console.log("错误信息",rep);
            },
        }
    };

</script>
<style>


</style>

