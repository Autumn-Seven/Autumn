<template>

        <el-menu class="top-menu" mode="horizontal" :router="true">
            <div class="project-title">水滴爱心互助平台</div>
            <el-menu-item   v-for="item,index in menuList" :key="index" :index="item.to"   v-permission="item.permission">
                    <div>{{item.name}}</div>
            </el-menu-item>



            <el-submenu index="10000" style="margin-left: 200px"  >
                <template slot="title">{{user}}</template>
                <el-menu-item index="2-1" @click="loginOut">退出</el-menu-item>
            </el-submenu>
        </el-menu>

</template>

<script>
    import {AJAX_WATER} from '@/dim/ajaxSource.js'
    import util from '@/util/util.js'


    export default {
        data(){
            return {
                menuList:[
                    {
                        index:1,
                        name:'爱心空间',
                        permission:[0,1,2,3],
                        to:'/home'
                    },{
                        index:2,
                        name:'帮帮我们',
                        permission:[0,3],
                        to:'/help-me'
                    },{
                        index:3,
                        name:'我们帮你',
                        permission:[0,2],
                        to:'/go-help'
                    },{
                        index:4,
                        name:'项目追踪',
                        permission:[0,2,3],
                        to:'/project-process'
                    },{
                        index:5,
                        name:'爱心自驾',
                        permission:[0,2],
                        to:'/self-driver'
                    },{
                        index:6,
                        name:'项目管理',
                        permission:[0,1],
                        to:'/project-manage'
                    },{
                        index:7,
                        name:'用户管理',
                        permission:[0,1],
                        to:'/user'
                    }
                ]
            }
        },
        computed:{
            user:function() {
                return this.$store.state.user.name || '用户'
            }
        },
        methods:{
            loginOut(){
                this.$store.commit('setUser', {});
                util.set('user', {});
                this.$router.push('/login');
            }
        }
    }
</script>

<style lang="css" scoped>
    .fade-enter-active, .fade-leave-active {
        transition: all .4s;
    }

    .fade-enter, .fade-leave-active {
        opacity: 0;
    }

    .top-menu{
        /*padding-left: 500px;*/
        display: flex;
        justify-content:flex-end;
    }

    .project-title{
        position: absolute;
        left: 60px;
        top: 15px;
        font-size: 1.8rem;
    }



</style>
