<template>
    <div class="swiper-top" @mouseover="clearInv" @mouseout="runInv">
        <!--<transition-group tag="ul" class='slide-ul' :name="name">-->
        <!--</transition-group>-->


        <transition-group class="ys-notices" tag="ul" enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight" >

            <div class="swiper-page-item" v-for="index in 5" :key="index"  v-show="index === nowIndex">
                <slot  :name="'item'+index" ></slot>
            </div>

        </transition-group>






        <ul class="slide-pages">
            <li v-for="(item, index) in slides"
                @click="goto(index)"
                class="slide-page-point"
            >
                <a :class="{'active': index === nowIndex}">{{ index + 1 }}</a>
            </li>
        </ul>
        <div class="control-wrapper">
            <a class="prev" @click="goto(prevIndex)"></a>
            <a class="next" @click="goto(nextIndex)">{{nowIndex}}</a>
        </div>
    </div>
</template>

<script>
	export default {
		props: {
			inv: {
				type: Number,
				default: 3000
			},
			name: {
				type: String,
				default: 'move'
			},
			target: {
				type: String,
				default: '_blank'
			}
		},
		data () {
			return {
				nowIndex: 1,
                slides: [
                    {
                        src: 'http://i3.mifile.cn/a4/xmad_14913974588712_tsRvc.jpg',
                        href: ''
                    },
                    {
                        src: 'http://i3.mifile.cn/a4/xmad_14915894814419_zNYsr.jpg',
                        href: ''
                    },
                    {
                        src: 'http://i3.mifile.cn/a4/xmad_14913784864515_mkpqH.jpg',
                        href: ''
                    },
                    {
                        src: 'http://i3.mifile.cn/a4/xmad_14908694250786_fObqa.jpg',
                        href: ''
                    },
                    {
                        src: 'http://i3.mifile.cn/a4/xmad_14913755624659_gRtNH.jpg',
                        href: ''
                    }
                ],
                swiperItemList:[],
			}
		},
		computed: {
			prevIndex () {
				if (this.nowIndex === 1) {
					return this.slides.length - 1
				} else {
					return this.nowIndex - 1
				}
			},
			nextIndex () {
				if (this.nowIndex === this.slides.length - 1) {
					return 1
				} else {
					return this.nowIndex + 1
				}
			},
		},
		methods: {
			goto (index) {
				this.nowIndex = index
			},
			runInv () {
				this.invId = setInterval(() => {
					this.goto(this.nextIndex)
				}, this.inv)
			},
			clearInv () {
//				clearInterval(this.invId)
			},

            getSubItem (){
                let list = this.$children.filter(function(item) {
                    return item.$options._componentTag === 'swiperItem'
                });
                this.swiperItemList = list;
                console.log(this.$children);
                console.log(list);
                return list;
            }
		},
		mounted () {
			this.getSubItem();
			this.runInv();
		}
	}
</script>

<style lang="less"  scoped>
    .swiper-top {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        .swiper-page-item{
            position: absolute;
            width: 100%;
            height: 100%;
            bottom:0;
            left: 0;
            /*background-color:green;*/
            color: #000;
            /*transform: translate(100% ,100% );*/
        }
        /*.swiper-page-item-next{*/
            /*animation:itemPre 1s  ease;*/
            /*@keyframes itemPre {*/
                /*0% {*/
                    /*transform: translate(0,0);*/
                /*}*/
                /*100% {*/
                    /*transform: translate(100%,0);*/
                /*}*/
            /*}*/
        /*}*/
        /*.swiper-page-item-pre{*/
            /*animation:itemPre 1s  ease;*/
            /*@keyframes itemPre {*/
                /*0% {*/
                    /*transform: translate(0,0);*/
                /*}*/
                /*100% {*/
                    /*transform: translate(-100%,0);*/
                /*}*/
            /*}*/
        /*}*/
        /*.swiper-page-item-current{*/
            /*animation: itemCurrent  1s ease;*/
            /*@keyframes itemCurrent {*/
                /*0% {*/
                    /*transform: translate(-100%,0);*/
                /*}*/
                /*100% {*/
                    /*transform: translate(0,0);*/
                /*}*/
            /*}*/

        /*}*/
    }


    .slide-pages {
        position: absolute;
        bottom: 20px;
        right: 30px;
        li {
            display: inline-block;
            height: 18px;
            a {
                display: block;
                width: 6px;
                height: 6px;
                margin: 0 5px;
                border: 2px solid #fff;
                border-color: rgba(255, 255, 255, 0.3);
                border-radius: 10px;
                text-align: left;
                text-indent: -9999px;
                overflow: hidden;
                _zoom: 1;
                background: #f5f5f5;
                background: rgba(0, 0, 0, 0.4);
                -webkit-transition: all .2s;
                transition: all .2s;
                &.active {
                    background: #fff;
                    background: rgba(255, 255, 255, 0.4);
                    border-color: #757575;
                    border-color: rgba(0, 0, 0, 0.4);
                }
            }
        }
    }
    .control-wrapper {
        a {
            display: inline-block;
            position: absolute;
            top: 50%;
            width: 41px;
            height: 69px;
            transform: translateY(-50%);
        }
    }
    .prev {
        left: 0;
        background: url("http://c1.mifile.cn/f/i/2014/cn/icon/icon-slides.png") no-repeat -84px 50%;
        &:hover {
            background-position: 0 50%
        }
    }
    .next {
        right: 0;
        display: inline-block;
        background: url(//c1.mifile.cn/f/i/2014/cn/icon/icon-slides.png) no-repeat -125px 50%;
        &:hover {
            background-position: -42px 50%;
        }
    }

    .slide-ul {
        width: 100%;
        height: 100%;
        li {
            position: absolute;
            width: 100%;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
    .move-enter-active {
        transition: all 0.5s ease;
        transform: translateX(0)
    }
    .move-leave-active {
        transition: all 0.5s ease;
        transform: translateX(-100%);
    }
    .move-enter {
        transform: translateX(100%);
    }
    .move-leave {
        transform: translateX(0);
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>