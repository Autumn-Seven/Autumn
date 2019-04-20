<template>
    <header>
        <el-menu class="top-menu" mode="horizontal">
            <el-menu-item   v-for="item,index in menuList" :key="index">
                <router-link  :to="item.to">
                    <div>{{item.name}}</div>
                </router-link>
            </el-menu-item>
        </el-menu>
    </header>
</template>

<script>
    import {mapState} from 'vuex'
    import '@/components/common/common.scss';
    export default {
        data(){
            return {
                finalheadline: '',
                show_headline: true,

                menuList:[
                    {
                        index:1,
                        name:'爱心空间',
                        to:'/home'
                    },{
                        index:2,
                        name:'帮帮我们',
                        to:'/help-me'
                    },{
                        index:3,
                        name:'我们帮忙',
                        to:'/go-help'
                    },{
                        index:4,
                        name:'项目追踪',
                        to:'/project-process'
                    },{
                        index:5,
                        name:'爱心自驾',
                        to:'/self-driver'
                    },{
                        index:6,
                        name:'项目管理',
                        to:'/project-manage'
                    },{
                        index:7,
                        name:'用户管理',
                        to:'/user'
                    }
                ]
            }
        },
        computed: mapState(['headline']),
        watch: {
            headline(val){
                this.show_headline = false;
                setTimeout(() => {
                    this.show_headline = true;
                    this.finalheadline = val
                }, 200)
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
        justify-content:center;
    }

    header {
        height: 30rem;
        display: flex;
        flex-direction: column;
    }



</style>
