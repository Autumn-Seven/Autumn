<template>
    <div v-loading="loading2"  element-loading-text="加载中">
       <h1>{{article.title}}</h1>
       <p class="type">  
           <i class="el-icon-time"></i><span>{{ article.create_time}}</span>
                <i class="tag fa fa-tag">{{ article.class_name }}</i>
        </p>
       <div class="content" v-html="markedToHtml">

       </div>
    </div>
</template>
<script>

import marked from 'marked'
import hlj from 'highlight.js'
import  'highlight.js/styles/atom-one-dark.css'
export default {
    data(){
        return{
            loading2:true,
            article:{},
        }
    },
    methods:{
        __init(){
            let id = this.$route.params.id;
            api.getArticle({id:id}).then(( res )=>{
                this.loading2 = false;
                if(res.data.code == 1){
                    this.article = res.data.data;
                }
            })

        }
    },
    computed:{
        markedToHtml(){
        marked.setOptions({
            highlight: function (code) {
            return hlj.highlightAuto(code).value;
            }
        });
        // console.log(this.article.content);
        return marked(this.article.content);
        }
  },
    mounted(){
        this.__init();

    }
}
</script>
<style lang="scss" scoped>
    h1{
        font-size: 2rem;
        margin: 1rem 0;
    }
    .type{
        margin-bottom: 1rem;
    }
</style>
