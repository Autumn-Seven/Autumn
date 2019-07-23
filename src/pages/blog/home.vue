<template>
    <div class="home-wrap">

        <h2 class="h2" style="margin-top: 580px"> 爱心成果 </h2>

        <div class="bar-wrap">
            <div class="bar"><barChart  class="bar-main"></barChart></div>
            <div class="bar"><barChart2  class="bar-main"></barChart2></div>
            <div class="bar"><barChart3  class="bar-main"></barChart3></div>
        </div>





        <h2 class="h2"> 文章列表 </h2>
        <div class="add-article">
            <el-button type="text" class="button" @click="addRow" v-permission="[0,1]">添加文章</el-button>
        </div>
        <div class="article-list-wrap">
            <articleCard v-for="item,index in articleList" :content="item" :key="index"></articleCard>
        </div>

        <el-dialog title="添加文字" :visible.sync="dialogFormVisible" width="700px">
            <el-form :model="form" :rules="rules"  ref="ruleForm" label-width="100px" size="mini" >
                <el-form-item label="题头:"  prop="title">
                    <el-input v-model="form.title"></el-input>
                </el-form-item>

                <el-form-item label="图片:"  prop="img">
                    <el-input type="file" v-model="form.img"  id="uploadFile2"></el-input>
                </el-form-item>

                <el-form-item label="文章内容:"  prop="description">
                    <el-input type="textarea" v-model="form.description" rows="8"></el-input>
                </el-form-item>


            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary"  @click="submitForm('ruleForm')">确 定</el-button>
            </div>
        </el-dialog>



    </div>
</template>
<script>

import {AJAX_WATER} from '@/dim/ajaxSource.js'
import articleCard from '@/components/articleCard.vue'
import barChart from '@/components/barChart.vue'
import barChart2 from '@/components/barChart2.vue'
import barChart3 from '@/components/barChart3.vue'

export default {
    components:{
        articleCard,
        barChart,
        barChart2,
        barChart3,
    },
    data(){
        return{
            loading2:true,
            loadMoreFlag:false,
            loadMoreText:'加载更多',
            loadMoreShow:false,
            page:1,
            list:[],
            articleList:[],

            dialogFormVisible: false,
            form: {
                id: '',
                title: '',
                img: '',
                description: '',
                create_time: '',
            },
            rules: {
                title: [
                    { required: true, message: '名称', trigger: 'blur' },
                    { min: 2, max: 50, message: '长度在 2 到 50 个字符', trigger: 'blur' }
                ],
                description: [
                    { required: true, message: '名称', trigger: 'blur' },
                    { min: 2, max: 64, message: '长度在 2 到 64 个字符', trigger: 'blur' }
                ],

            },

        }
    },
    created:function() {
      this.getTableList();
    },
    methods:{

        getTableList(){
            this.$ajax(AJAX_WATER).get('article', {}).then(({r}) => {

                this.articleList.splice(1,this.articleList.length);
                this.articleList.push(...r);
            })
        },

        loadMore(){
             this.loadMoreText = '加载中'
            this.loadMoreFlag = true
        },

        addRow: function() {
            this.form.id = '';
            this.form.title = '';
            this.form.img = '';
            this.form.description = '';
            this.dialogFormVisible = true;
        },
        doAdd: function() {
            let self = this;

            var formData = new FormData();
            Object.keys(this.form).forEach(function(key) {
                let val = self.form[key];
                formData.append(key, val)
            });
            formData.append('owner', self.$store.state.user.name)

            formData.append('file', jQuery('#uploadFile2')[0].files[0]);

            let config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            };

            this.$ajax(AJAX_WATER).post( 'article', formData, config).then(({r}) => {
                this.$message({
                    type:'success',
                    message:'新增成功',
                });
                self.dialogFormVisible = false;
                self.getTableList();
            })


        },
        submitForm(formName) {
            let self =this;
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    self.doAdd();
                } else {
                    this.$message({
                        type:'error',
                        message:'表单验证失败',
                    });
                    return false;
                }
            });
        },

    },
    mounted(){

    }
}
</script>
<style lang="scss" scoped>
    .home-wrap{
        height: 100%;
        margin: auto;
        min-width: 1000px;
        width: 80% !important;

        .bar-wrap{
            height: 200px;
            background-color: gainsboro;
            display: flex;
            justify-content:center;
            margin-bottom: 20px;

            .bar{
                flex: 1;
                height: 100%;
                /*margin: 5px 10px 20px;*/
                padding: 5px 10px 20px;
                .bar-main{
                    height: 100%;
                    width: 100%;
                }
            }
        }

        .article-list-wrap{
            display: flex;
            flex-wrap:wrap;
            justify-content:center;
        }

        .add-article{
            position: fixed;
            top:50%;
            right:25px;
        }
    }




.h2{
    font-size: 2rem;
    margin-top: 1rem;
}
    .article-item{
        border:1px solid #dedede;
        margin:2rem 0;
        padding:1rem;
        .title{
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
        }
        .tag{
            margin-left: 0.5rem;
        }
        .descript{
            margin-bottom: 0.5rem;
        }
    }
    .loadMore{
        text-align: center;
        .btn{
            background: black;
            border:none;
        }
    }
</style>
