/**
* Created by Seven on 2019/5/23.
 * project: Autumn
 * email: fighting20xx@126.com
 */ 

<template>
    <div>
        <input type="text" placeholder="Text input" @focus="show" data-layout="normal" />
        <vue-touch-keyboard class="virtual-board" :options="options" v-if="visible" :layout="layout" :cancel="hide" :accept="accept" :input="input" />
    </div>
</template>
<script>
    import VueTouchKeyboard from "vue-touch-keyboard";
    import style from "vue-touch-keyboard/dist/vue-touch-keyboard.css"; // load default style

    import Vue from 'vue';
    Vue.use(VueTouchKeyboard);

    export default {
        data(){
            return {
                visible: false,
                layout: "normal",
                input: null,
                options: {
                    useKbEvents: false,
                    preventClickEvent: false
                }
            }
        },

        methods: {
            accept(text) {
                this.hide();
            },

            show(e) {
                this.input = e.target;
                this.layout = e.target.dataset.layout;

                if (!this.visible)
                    this.visible = true
            },

            hide() {
                this.visible = false;
            }
        }
    }
</script>
<style lang="less">
.virtual-board{
    position:absolute;
    bottom: 0;
    width: 98%;
}
</style>


