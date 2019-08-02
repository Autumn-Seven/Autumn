/**
* Created by Seven on 2019/6/10.
 * project: Autumn
 * email: fighting20xx@126.com
 测试复制到剪切板库
 */ 

<template>
    <div>
        <div id="top">
            <div id="a" >
                <div id="a-1" >A-1</div>
            </div>

            <div id="b">
                <div id="b-1" >B-1</div>
            </div>

            <div id="c">
                <div id="c-1" >
                    <div id="c-1-1">
                        <div id="c-1-1-1"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="test-position">

            <div>
                <div>
                    <div>
                        <div class="item-wrap">
                            <div class="item">23432</div>
                            <div class="item-back"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>
<script>
    export default {
        components: {}

    }

</script>
<style lang="scss" scoped>
    #top{
        //当直接子元素有 z-index，  那么会在父元素这里建立  元素层叠 （我们给他暂时取名为  ‘层叠top’）。

        #a {
            background-color: red;
            width: 200px;
            height: 200px;
            position: absolute;
            z-index:2;              //当子元素设立z-index之后，自己在父层叠所处的层固定了，就是层2      自己的子元素永远无法逾越，自己在‘层叠top’所处的层
            #a-1 {
                background-color: green;
                height: 40px;
                width:150px;
                left:50px;
                position:absolute;
                z-index:3;
            }
        }

        #b {
            background-color: yellow;
            width: 300px;
            height: 100px;
            position: absolute;            //absolute 和z-index没有关系，
            left:2px;
            #b-1 {
                background-color: blue;
                z-index:5;               //所有后代元素都在，’层叠top’--------同一个层叠上面，都可用z-index来排序，
                position:relative;
            }
        }


        //所有的后代都在（以靠近自己最近的带 z-index顶层元素）的层级上面
        #c-1-1-1{
            background-color: gray;
            width:60px;
            height:300px;
            z-index:6;
            position:relative;
        }
    }

    .test-position{
        position: absolute;
        left: 500px;
        top:100px;
        width: 500px;
        height: 500px;
        background-color: lightslategray;

        .item-wrap{
            display:inline;
            .item{
                position: absolute;
                left:120px;
                top:40px;
                height:40px;
                /*background-color: yellow;*/
            }
            .item-back{
                background-color: yellow;
                height:100%;
                width:100%;
            }
        }
    }



</style>

