/**
* Created by Seven on 2019/6/10.
 * project: Autumn
 * email: fighting20xx@126.com
 测试复制到剪切板库
 */

<template>
    <div>
       <div v-for="item ,index in Arry" :key="index" v-test="{item,index,currentIndex}"
            @mouseover="selectStyle(index)"
            @mouseout="outStyle(index)"
           >
            {{item.name}}
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
                    {name:'访问',},
                    {name:'安抚',},
                    {name:'阿汤哥',},
                    {name:'爱国',},
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


</style>

