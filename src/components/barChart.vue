/**
* Created by Seven on 2019/4/21.
 * project: Autumn-Blog
 * email: fighting20xx@126.com
 */ 

<template>
    <div  class="chart-wrap" id="bar-graph"></div>
</template>
<script>
    import echarts from 'echarts';
    import {AJAX_WATER} from '@/dim/ajaxSource.js'

    export default {
        name: '',
        data() {
            return {
                dataList: [{area:'',count:0}],
            };
        },
        mounted:function () {
            this.getChartData();
        },
        methods:{
            getChartData: function() {
                let self = this;
                this.$ajax(AJAX_WATER).get('data/hotThings', this.form).then(({r}) => {
                    self.dataList = r;


                    console.log(r)
                    self.renderCharts();
                })
            },

            /**
             * 渲染图形。
             *
             * @return {void}
             */
            renderCharts() {


                let chartOptions = {
                    title: {
                        text: '资助类型',
                        subtext: '数量'
                    },
                    legend: {
                        data:['2015 降水量', '2016 降水量']
                    },
                    color: ['#3398DB'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : this.dataList.map((item)=>{return item.financialType}),
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'数量',
                            type:'bar',
                            barWidth: '60%',
                            data:this.dataList.map((item)=>{return item.count}),
                        }
                    ]
                };


                let oChart = echarts.init(document.getElementById('bar-graph'));
                oChart.setOption(chartOptions);
            },
        }
    }

</script>
<style lang="less" scoped>

    .chart-wrap{
        /*width: 300px;*/
        /*height: 400px;*/
        /*margin: 5px 5px 20px ;*/
        /*position: relative;*/
    }
    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
</style>


