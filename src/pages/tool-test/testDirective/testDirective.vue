/**
* Created by Seven on 2019/6/10.
 * project: Autumn
 * email: fighting20xx@126.com
 测试复制到剪切板库
 */

<template>
    <div>
        <div flex>
            <div v-for="item ,index in Arry" :key="index" v-forclass="{item,index,currentIndex}">
                {{item.name}}
            </div>
        </div>
        <div flex="dir:right">
            <div v-for="item ,index in Arry" :key="index" v-forclass="{item,index,currentIndex}">
                {{item.name}}
            </div>
        </div>
        <div flex="dir:top">
            <div v-for="item ,index in Arry" :key="index" v-forclass="{item,index,currentIndex}">
                {{item.name}}
            </div>
        </div>
        <div flex="dir:bottom">
            <div v-for="item ,index in Arry" :key="index" v-forclass="{item,index,currentIndex}">
                {{item.name}}
            </div>
        </div>




         <div flex="main:start" >
            <div v-for="item ,index in Arry" :key="index" v-forclass="{item,index,currentIndex}">
                {{item.name}}
            </div>
        </div>
         <div flex="main:end" >
            <div v-for="item ,index in Arry" :key="index" v-forclass="{item,index,currentIndex}">
                {{item.name}}
            </div>
        </div>
         <div flex="main:center" >
            <div v-for="item ,index in Arry" :key="index" v-forclass="{item,index,currentIndex}">
                {{item.name}}
            </div>
        </div>

        <div flex=" main:between" >
            <div v-for="item ,index in Arry" :key="index" v-forclass="{item,index,currentIndex}">
                {{item.name}}
            </div>
        </div>
        <div flex=" main:around" >
            <div v-for="item ,index in Arry" :key="index" v-forclass="{item,index,currentIndex}">
                {{item.name}}
            </div>
        </div>


        <div flex="main:around cross:start"  style="height: 100px;background-color: #2c3e50">
            <div v-for="item ,index in Arry" :key="index" v-forclass="{item,index,currentIndex}">
                {{item.name}}
            </div>
        </div>
        <div flex="main:around cross:end"  style="height: 100px;background-color: #254">
            <div v-for="item ,index in Arry" :key="index" v-forclass="{item,index,currentIndex}">
                {{item.name}}
            </div>
        </div>
        <div flex="main:around cross:center"  style="height: 100px;background-color: #762374">
            <div v-for="item ,index in Arry" :key="index" v-forclass="{item,index,currentIndex}">
                {{item.name}}
            </div>
        </div>

        <br>

        <div flex="main:around  wrap:start"  style="height: 100px;background-color: #345">
            <div v-for="item ,index in Arry" :key="index" v-forclass="{item,index,currentIndex}" style="width: 200px;color: #fff">
                {{item.name}}
            </div>
        </div>
        <div flex="main:around row:center cross:start wrap:start"  style="height: 100px;background-color: #684">
            <div v-for="item ,index in Arry" :key="index" v-forclass="{item,index,currentIndex}" style="width: 200px;color: #fff">
                {{item.name}}
            </div>
        </div>
        <div flex="main:around row:start wrap:start"  style="height: 100px;background-color: #863">
            <div v-for="item ,index in Arry" :key="index" v-forclass="{item,index,currentIndex}" style="width: 200px;color: #fff">
                {{item.name}}
            </div>
        </div>


    </div>
</template>
<script>


    export default {
        name: '',
        data(){
            return{
                currentIndex:0,
                message:'阿瑟的萨芬撒飞洒发沙发斯蒂芬',
                message2:'阿瑟的萨芬撒飞洒发沙发斯蒂芬',
                Arry:[
                    {name:'1访问',},
                    {name:'2安抚',},
                    {name:'3阿汤哥',},
                    {name:'4爱国',},
                    {name:'5爱国',},
                    {name:'6爱国',},
                    {name:'7爱国',},
                    {name:'8爱国',},
                    {name:'9爱国',},
                    {name:'10爱国',},
                ]
            }
        },
        mounted:function() {

        },
        methods: {
            selectStyle(index){
                this.currentIndex = index;

            },
            outStyle(index){

            },
        }
    }

</script>
<style>
    @import "flex.css";
    .for-item{}
    .for-item-active{
        background-color: grey;
    }

</style>

