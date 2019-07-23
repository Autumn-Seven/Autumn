<template>
    <div class="swiperItem-wrap">
        <slot>sadf</slot>
    </div>
</template>
<script>
	export default {
		name: 'swiperItem',

		props: {
			status:{
				type:[Number,String],
                default:0
            },

			color: {
				default: null,
				type: String
			},
            bgColor: {
				default: "#fff",
				type: String
			},
            showBarNumber:{
				default:true,
				type: Boolean
            },
            showEndNumber:{
				default:false,
				type: Boolean
            },
		},
        computed:{
			filledStyle:function () {
				let bgColor = 'transparent';
				if (this.color) {
					bgColor = this.color;
                }else {
					this.status === 1 ? bgColor = '#81D0D8'
                        : this.status === 2 ? bgColor = '#F58634'
                        : bgColor = 'transparent'
                }

                return {
					backgroundColor:bgColor,
                }
			}
        }
	}

</script>
<style lang="less" scoped>
    .swiperItem-wrap{
        position:relative;
        width:100%;


    }

</style>
