/**
* Created by Seven on 2019/6/1.
 * project: Autumn
 * email: fighting20xx@126.com
 */ 


<template>
    <div class="echart3D-wrap">
        <div class="chart scheduling-progress-single-bar-4" ref="chart" ></div>
    </div>
</template>
<script>


    import utiljs from 'tool/util.js';
    import echarts from 'echarts';
    import 'echarts-gl';


    export default {
        name: 'echart3D',
        data() {
            return {
                charts: [],
            }
        },
        mounted:function () {
            let self = this;
            this.$nextTick(function () {
                self.renderCharts();
            })
        },
        methods:{
            /**
             * 渲染图形。
             *
             * @return {void}
             */
            renderCharts() {


                var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
                    '7a', '8a', '9a','10a','11a',
                    '12p', '1p', '2p', '3p', '4p', '5p',
                    '6p', '7p', '8p', '9p', '10p', '11p'];
                var days = ['Saturday', 'Friday', 'Thursday',
                    'Wednesday', 'Tuesday', 'Monday', 'Sunday'];

                var data = [
                    [5,7,1]
                ];

                let chartOptions = {
                    tooltip: {},
                    visualMap: {
                        max: 20,
                        inRange: {
                            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                        }
                    },
                    xAxis3D: {
                        type: 'category',
                        data: hours
                    },
                    yAxis3D: {
                        type: 'category',
                        data: days
                    },
                    zAxis3D: {
                        type: 'value'
                    },
                    grid3D: {
                        boxWidth: 200,
                        boxDepth: 80,
                        light: {
                            main: {
                                intensity: 1.2
                            },
                            ambient: {
                                intensity: 0.3
                            }
                        }
                    },
                    series: [{
                        type: 'bar3D',
                        data: data.map(function (item) {
                            return {
                                value: [item[1], item[0], item[2]]
                            }
                        }),
                        shading: 'color',

                        label: {
                            show: false,
                            textStyle: {
                                fontSize: 16,
                                borderWidth: 1
                            }
                        },

                        itemStyle: {
//                            opacity: 0.4
                        },

                        emphasis: {
                            label: {
                                textStyle: {
                                    fontSize: 20,
                                    color: '#900'
                                }
                            },
                            itemStyle: {
                                color: '#900'
                            }
                        }
                    },
                    ]
                }

                let containerList = document.querySelectorAll('.scheduling-progress-single-bar-4');
                containerList.forEach(function (container) {
                    let oChart = echarts.init(container);
                    oChart.setOption(chartOptions);
                })
            },
        }
    }

</script>
<style>
    .echart3D-wrap{
        width: 100%;
        height: 100%;
        /*background-color: #252020;*/
    }
    .chart{
        height: 100%;
        width: 100%;
    }
</style>


