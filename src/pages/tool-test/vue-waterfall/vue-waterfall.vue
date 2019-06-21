/**
* Created by Seven on 2019/6/11.
 * project: Autumn
 * email: fighting20xx@126.com
 */ 

<template>
    <div class="waterfall-top">
        <waterfall
                :grow="grow"
                :watch="items"
                @reflowed="reflowed"
                ref="waterfall"
        >
            <!-- each component is wrapped by a waterfall slot -->
            <waterfall-slot
                    v-for="(item, index) in items"
                    :width="item.width"
                    :height="item.height"
                    :order="index"
                    :key="item.index"
                    move-class="item-move"
            >
                <div class="item" :style="item.style" :index="item.index"></div>
            </waterfall-slot>
        </waterfall>
    </div>
</template>
<script>
    import Waterfall from 'vue-waterfall/lib/waterfall'
    import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'


    export default {
        components: {
            Waterfall,
            WaterfallSlot
        },
        name: '',
        data(){
            return {
                grow: [3, 2, 1, 2],
                items: ItemFactory.get(20),
                isBusy: false
            }
        },
        mounted:function() {
            let app = this;
            document.body.addEventListener('click', function () {
                app.shuffle()
                // app.$refs.waterfall.$emit('reflow') // manually trigger reflow action
            }, false)
            window.addEventListener('scroll', function () {

                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                console.log('scrollTop',scrollTop)
                console.log('window.innerHeight',window.innerHeight);
                console.log('document.body.clientHeight',document.body.clientHeight);
                console.log('document.body.clientHeight',document.body.offsetHeight);

                if (scrollTop + window.innerHeight >= document.body.clientHeight) {
                    app.addItems()
                }
            })
        },
        methods: {
            addItems: function () {
                if (!this.isBusy && this.items.length < 500) {
                    this.isBusy = true
                    this.items.push.apply(this.items, ItemFactory.get(50))
                }
            },
            shuffle: function () {
                this.items.sort(function () {
                    return Math.random() - 0.5
                })
            },
            reflowed: function () {
                this.isBusy = false
            }
        }
    }



    var ItemFactory = (function () {

        var lastIndex = 0;

        function generateRandomItems (count) {
            var items = [], i
            for (i = 0; i < count; i++) {
                items[i] = {
                    index: lastIndex++,
                    style: {
                        background: getRandomColor()
                    },
                    width: 100 + ~~(Math.random() * 50),
                    height: 100 + ~~(Math.random() * 50)
                }
            }
            return items
        }

        function getRandomColor () {
            var colors = [
                'rgba(21,174,103,.5)',
                'rgba(245,163,59,.5)',
                'rgba(255,230,135,.5)',
                'rgba(194,217,78,.5)',
                'rgba(195,123,177,.5)',
                'rgba(125,205,244,.5)'
            ]
            return colors[~~(Math.random() * colors.length)]
        }

        return {
            get: generateRandomItems
        }

    })()
</script>
<style>
    .waterfall-top{
        width:100%;
        height:100%;
    }

    .item {
        position: absolute;
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 5px;
        font-size: 1.2em;
        color: rgb(0,158,107);
    }
    .item:after {
        content: attr(index);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
    }
    .wf-transition {
        transition: opacity .3s ease;
        -webkit-transition: opacity .3s ease;
    }
    .wf-enter {
        opacity: 0;
    }

</style>

