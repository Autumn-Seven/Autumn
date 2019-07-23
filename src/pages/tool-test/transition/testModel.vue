/**
* Created by Seven on 2019/6/10.
 * project: Autumn
 * email: fighting20xx@126.com
 测试复制到剪切板库
 */ 
<template>
    <div class="content-wrap">
        <div class="tabs-row" v-for="dataArry,rowIndex in mulTabsArry" :key="rowIndex">
            <div class="tabs-row-wrap">
                <div class="tabs-item" v-for="tab,index in  dataArry" :key="index"
                     @click="selectStyle (tab,index) "
                     :class="{'active':tab.active}">
                    <div class="tab-title-content" :class="[{'tab-title-active':currentIndex===tab.number}]">
                        <div class="tab-name">{{tab.name}}</div>
                    </div>
                </div>
            </div>


            <!--<transition-group name="test"    enter-active-class=" zoomInLeft"  leave-active-class="  zoomOutRight">-->
                <div class="content-inner animated " v-show="currentTabRowIndex ===rowIndex  && col.number === currentTab.number" v-for="col ,j in dataArry"  :key="rowIndex+'-'+j">
                    <div class="content-item-wrap">
                        <div class="content-item" v-for="item,index2 in  currentTab.contentArry" :key="index2" >
                            <div class="active-content">
                                <div class="active-name">{{item.name}}</div>
                                <div class="content">{{item.content}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            <!--</transition-group>-->
        </div>
    </div>
</template>

<script>

    export default {
        name: 'companyCulture',
        props: {},
        data (){
            return {
                currentTabRowIndex: 1,
                currentTab: {},
                currentIndex: 1,
                mulTabsArry: [
                    [
                        {
                            name: '撒地方',
                            contentArry: [
                                {
                                    name: '阿斯蒂芬',
                                    content: '集宣传、管理、服务、教育、监督为一体、提供功能全覆盖的互联网+党建一体化管理系统',

                                },{
                                    name: '是法国',
                                    content: '公布党务指南，便于各级党务工作者快速熟悉党务工作',

                                },{
                                    name: '按时',
                                    content: '从任务下方、审批、执行反馈，到跟踪、统计',

                                },{
                                    name: '按规划',
                                    content: '提供一款自助式党务数据可视化分析工具，简单易操作，轻松制作各类报表',

                                },{
                                    name: '345的撒官方',
                                    content: '通过数据挖掘与可视化展现，实现危机预警、舆情风险评估，帮助快速决策',

                                },
                            ],
                            active: true,
                            number: 1,
                        }, {

                        name: '俺是个',
                        contentArry: [
                            {
                                name: '啊哈哈哈',
                                content: '通过移动端APP展示，支持多新闻图片轮换，支持跳转链接到新闻详情，用于重大事件的报道',

                            },{
                                name: '阿航',
                                content: '在地图上标识各党支部的位置，只管展现党组织的基本情况、新闻动态等',

                            },{
                                name: '阿瑟无法',
                                content: '同微信服务号，随时给用户推送各类新闻、文章、公告等消息',

                            },{
                                name: '啊大噶三个',
                                content: '支持党员或群众在线新闻投稿，发表所感所想，加强支部内部的交流',

                            },
                        ],
                        active: false,
                        number: 2,

                    },
                        {
                            name: '啊的官方',
                            contentArry: [
                                {
                                    name: '爱国发',
                                    content: '支持对视频、语音、文档等多类课件统一管理',

                                },{
                                    name: '啊哈 ',
                                    content: '课程报名、学习、评价、分享、点赞等，随时随地互动交流',

                                },{
                                    name: '阿瑟个人',
                                    content: '在线对热点问题、课程等互动答疑',

                                },{
                                    name: '爱德华发货人',
                                    content: '统计全体学员的学习、考试及成绩情况，支持错题分析',

                                },{
                                    name: '上的如果',
                                    content: '支持设置专题教育，如党中央会议精神、“两学一做”、公司内部教育活动等',

                                },
                            ],
                            active: false,
                            number: 3,
                        }, {

                        name: '阿3刚刚跟',
                        contentArry: [
                            {
                                name: '上的如果',
                                content: '如党费的计算与缴纳（支持多平台，微信、支付宝、银联等）',

                            },{
                                name: '俺是个',
                                content: '内置党员通讯录，可查看电话邮箱等信息，方便沟通和交流',

                            },{
                                name: '阿斯蒂芬',
                                content: '实现活动策划从发起、报名、开展到统计的全过程活动管理功能，打通线上线下，提高活动举办、参与效率',

                            },{
                                name: '35有好感',
                                content: '支持在线申请党员因调动工作、参军、学习、外出等原因导致的党组织关系的转接',

                            },{
                                name: '啊嘎嘎',
                                content: '为党员提供一个基于主题的自由讨论与交流的空间，促进互动沟通',

                            },
                        ],
                        active: false,
                        number: 4,
                    }, {
                        name: '上手',
                        contentArry: [
                            {
                                name: '俺是个负担',
                                content: '党员或群众可通过微信公众号、党建APP在线举报，系统生成工作单，支持举报情况进度查询、统计',

                            },{
                                name: '撒地方',
                                content: '支持网上票决如发展预备党员投票、补选组织委员',

                            },
                        ],
                        active: false,
                        number: 5,
                    },{
                        name: '啊合肥',
                        contentArry: [
                            {
                                name: '阀手动',
                                content: '学习、问答、投稿、举报、在线缴费、活动组织与报名、在线考试等',

                            },{
                                name: '火狐',
                                content: '可以按照支部、个人不同维度排名',

                            },
                        ],
                        active: false,
                        number: 6,
                    }
                    ]
                ]
            }
        },
        computed: {
//            currentTab(){
//                let currentIndex = this.currentIndex;
//                let tab = {};
//                this.mulTabsArry.forEach(function (tabRow) {
//                    tabRow.forEach((item) => {
//                        item.active = false;
//                        if (item.number === currentIndex) {
//                            tab = item;
//                        }
//                    })
//                });
//
//                return tab || {};
//            }
        },
        mounted (){

        },
        methods: {
            onClick(index){
                console.log(index);
                this.currentIndex = index;
            },
            selectStyle(tab,index){
                this.currentIndex = tab.number;
                this.currentTabRowIndex = index;
                this.currentTab = tab;

                console.log( this.currentIndex ,  this.currentTabRowIndex )

//				this.mulTabsArry.forEach(function(tabRow){
//					tabRow.forEach((item,index2)=>{
//						if(item.number === tab.number){
//							item.active = true;
//							tabRow.splice(index2,1,item)
//						}else{
//							item.active = false;
//                        }
//                    })
//                });
//
//				let temp =JSON.parse(JSON.stringify(this.mulTabsArry))
//                this.mulTabsArry = [];
//                this.mulTabsArry = this.mulTabsArry.concat(temp);
            },
            showThisTow(tabRow){
                return tabRow.map((item) => item.number).indexOf(this.currentIndex) > -1;
            },
            outStyle(index){
                index.active = false;
            },
        }
    }
</script>

<style scoped lang="scss">
    /*@import "animate.css";*/
    @import './../../../assets/css/animate.css';
    .content-wrap {
        /*<!--@include linear-gradient(RGBA(49, 64, 123, 1),RGBA(212, 211, 225, 1));-->*/
        background-repeat: no-repeat;
        background-size: 100% 100%;
        height: 556px;

        .title-1 {
            font-size: 72px;
            /* @include background-clip(text);
             background-image: linear-gradient(rgba(244, 122, 106, 0.74), rgba(255, 249, 243, 0.74));
             color: transparent;*/
            font-weight: bold;
            padding-top: 82px;
            /*background-image: url("~@/assets/img/solution/智慧党建解决方案.png");*/
        }


        .tabs-row {
            /*height: 100%;*/
            /*<!--@include flex-wrap(wrap);-->*/
            /*background: rgba(70, 85, 126, .3);*/
            width: 1200px;
            margin: 0 auto;
            padding-bottom:50px;
            .tabs-row-wrap {

                color: #bbb;
                /*background-color:rgba(255, 255, 255, .2);*/
                @include box-shadow(0px 5px 10px RGBA(149, 163, 195, .8));
                @include display-flex();
                @include justify-content(center);
                .tabs-item {
                    width: 150px;
                    position: relative;;

                    .tab-title-content {
                        /*padding: 20px 0;*/
                        height: 74px;
                        /*border-bottom: solid 4px transparent;*/
                        position: relative;
                        img{
                            @include be-absolute-center();
                            top:50px;
                        }
                        .tab-name{
                            @include be-absolute-center();
                            font-size:18px;
                            font-weight:bold;
                        }

                    }
                    .tab-title-active {
                        .tab-name{
                            @include background-clip(text);
                            background-image: linear-gradient(rgba(255, 222, 184, 1) 70%,rgba(255, 176, 155, 1));
                            color: transparent;
                        }
                        /*border-bottom: solid 4px rgba(189, 42, 33, 1);*/
                    }

                    .sanjiaoxing{
                        position:absolute;
                        width: 0;
                        height: 0;
                        left: 50%;
                        @include transform(translate(-50%,0));
                        border: 10px solid;
                        border-color: transparent transparent rgba(180,180,180, .5);
                    }
                    .sanjiaoxing2{
                        margin-top:-5px;
                        border: 10px solid;
                        border-color: transparent transparent #fff;
                    }
                }

            }

            .content-inner {
                margin-top:30px;
                /*padding-bottom:30px;*/
                /*background-color:rgba(255, 255, 255, 1);*/
                color:#000;
                .content-item-wrap {
                    padding: 0 81px  ;

                    @include display-flex();
                    /*<!--@include flex-flow(wrap);-->*/
                    .content-item {
                        width:196px;
                        height: 190px;
                        margin:0 7px;
                        /*height: 280px;*/
                        /*border: dashed 1px #aaa;*/
                        padding:  23px 18px 25px;
                        @include box-sizing(border-box);
                        text-align:left;
                        @include display-flex();



                        .active-content {
                            height: 100%;
                            padding: 0 6px 0;

                            .active-name {
                                @include background-clip(text);
                                background-image: linear-gradient(rgba(255, 222, 184, 1) 60% ,rgba(255, 176, 155, 1));
                                color: transparent;
                                font-size: 18px;
                                font-weight: bold;
                                text-align:center;
                            }
                            .content {
                                font-size: 12px;
                                /*padding: 5px;*/
                                margin-top: 33px;
                                line-height:25px;
                                color: #eee;
                                /*font-weight:600;*/

                            }
                        }
                        &:hover {
                            background-color: rgba(13, 25, 61, .08);
                            .active-name{
                                /*color:rgba(229, 95, 22, 1);*/
                            }
                        }
                    }
                    .active {
                        /*background-color: #00aadc;*/
                        /*color: #fff;*/
                        z-index: 20;
                        @include transform(scale(1.1));
                        .image-wrap {
                            .img-mask {
                                display: none;
                            }
                        }

                    }
                }

            }
        }
    }

</style>

