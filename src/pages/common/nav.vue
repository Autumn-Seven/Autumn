/**
* Created by Seven on 2019/5/21.
 * project: Autumn
 * email: fighting20xx@126.com
 */ 

<template>
    <div class="nav-top">
        <div  class="nav-title">路由导航页面</div>
        <div class="nav-list-wrap">
            <div class="nav-list"  v-for="list,index in allRouterList" :key="index">
                <div  class="nav-item"  v-for="item,index2 in list" :key="index2">
                    <router-link :to="item.path" >{{index2+ ': '+item.name}}</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: '',
        data(){
            return {
                allRouterList:[],
            }
        },
        mounted:function() {
            this.getAllRoute();
        },
        methods:{
            getAllRoute:function() {
                let routeList = this.$router.options.routes;
                let self =this;

                function find(fatherPath, routeList, resultList) {
                    routeList.forEach(function(route) {
                        let path = fatherPath+ route.path;
                        if(route.children){
                            let list = [];
                            self.allRouterList.push(list);
                            find(path, route.children ,list);
                        }else {
                            resultList.push({
                                path:path,
                                name:route.meta ? route.meta.title : path,
                            })
                        }
                    });
                }

                let resultList = [];
                self.allRouterList.push(resultList);
                find('', routeList,  resultList );
            }
        }
    }

</script>
<style lang="less">
    .nav-top{
        .nav-title{
            font-size: 2rem;
            padding: 20px;
        }
        .nav-list-wrap{
            display: flex;
            justify-content: center;
            text-align: left;
            .nav-list{
                .nav-item{
                    padding: 2px;
                    width: 200px;
                }
            }
        }

    }

</style>

