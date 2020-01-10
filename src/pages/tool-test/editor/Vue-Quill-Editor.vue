<template>
    <div>
        <!-- bidirectional data binding（双向数据绑定） -->
        <quill-editor v-model="content"
                      ref="myQuillEditor"
                      :options="editorOption"
                      @blur="onEditorBlur($event)"
                      @focus="onEditorFocus($event)"
                      @ready="onEditorReady($event)">
        </quill-editor>

        <!-- Or manually control the data synchronization（或手动控制数据流） -->
<!--        <quill-editor :content="content"-->
<!--                      :options="editorOption"-->
<!--                      @change="onEditorChange($event)">-->
<!--        </quill-editor>-->
    </div>
</template>

<script>

    import Vue from 'vue'
    import VueQuillEditor from 'vue-quill-editor'

    // require styles
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'

    Vue.use(VueQuillEditor, /* { default global options } */)


    export default {
        data () {
            return {
                content: '<h2>I am Example</h2>',
                editorOption: {
                    // modules: {
                    //     toolbar: [
                    //         [{ 'size': ['small', false, 'large'] }],
                    //         ['bold', 'italic'],
                    //         [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                    //         ['link', 'image']
                    //     ],
                    //     history: {
                    //         delay: 1000,
                    //         maxStack: 50,
                    //         userOnly: false
                    //     },
                    //     imageDrop: true,
                    //     imageResize: {
                    //         displayStyles: {
                    //             backgroundColor: 'black',
                    //             border: 'none',
                    //             color: 'white'
                    //         },
                    //         modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
                    //     }
                    // }
                }
            }
        },
        // manually control the data synchronization
        // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
        methods: {
            onEditorBlur(quill) {
                console.log('editor blur!', quill)
            },
            onEditorFocus(quill) {
                console.log('editor focus!', quill)
            },
            onEditorReady(quill) {
                console.log('editor ready!', quill)
            },
            onEditorChange({ quill, html, text }) {
                console.log('editor change!', quill, html, text)
                this.content = html
            }
        },
        computed: {
            editor() {
                return this.$refs.myQuillEditor.quill
            }
        },
        mounted() {
            console.log('this is current quill instance object', this.editor)
        }
    }
</script>
