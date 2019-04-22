/**
* Created by Seven on 2019/4/21.
 * project: Autumn-Blog
 * email: fighting20xx@126.com
 */ 

<template>
   <div>
       <div  class="article-card">
           <el-card :body-style="{ padding: '0px' }">
               <img :src='content.img' class="image">
               <div style="padding: 14px;">
                   <h3>{{content.title}}</h3>
                   <div class="bottom clearfix">
                       <time class="time">{{ content.createTime }}</time>
                       <div>{{content.description}}</div>
                       <el-button type="text" class="button" @click="ShowDetail">详情</el-button>
                       <el-button type="text" class="button" @click="deleteRow" v-permission="[0,1]">删除</el-button>
                   </div>
               </div>
           </el-card>
       </div>
       <div>
           <el-dialog title="详情" :visible.sync="dialogShowDetail" width="700px">
               <div class="detail">
                   <img :src='content.img' class="image">
                   <div style="padding: 14px;">
                       <h3>{{content.title}}</h3>
                       <div class="bottom clearfix">
                           <time class="time">{{ content.createTime }}</time>
                           <div>{{content.description}}</div>
                       </div>
                   </div>
               </div>
               <!--<div slot="footer" class="dialog-footer">-->
               <!--<el-button @click="dialogFormVisible = false">取 消</el-button>-->
               <!--<el-button type="primary"  @click="submitForm('ruleForm')">确 定</el-button>-->
               <!--</div>-->
           </el-dialog>
       </div>

   </div>
</template>
<script>

    import {AJAX_WATER} from '@/dim/ajaxSource.js'

    export default {
        name: '',
        data() {
            return {
                currentDate: new Date(),
                dialogShowDetail: false,
            };
        },
        props:{
            content:{
                require:true,
                type:Object,
                default:{
                    id:'',
                    title:'新建一个项目',
                    createTime:'2019 07:50:47 GMT+0800 ',
                    description:'这是胜多负少的胜多负少的',
                    img:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                }
            }
        },
        methods:{
            deleteRow() {
                let self = this;
                this.$confirm('确认要删除该文章吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    self.doDelete();
                })
            },
            doDelete( ) {
                let self = this;
                this.$ajax(AJAX_WATER).delete('article?id='+this.content.id, {}).then(({r}) => {
                    this.$message({
                        type:'success',
                        message:'删除成功',
                    });
                    self.$parent.getTableList();
                })
            },

            ShowDetail( ) {
               this.dialogShowDetail = true;
            },
        }
    }

</script>
<style lang="less" scoped >

    .article-card {
        margin: 5px 5px 20px ;
        width: 300px;
        .image{
            width: 300px;
            height: 200px;
            background-size:cover;
        }

        .time {
            font-size: 13px;
            color: #999;
        }
        .button{
            margin: 0 5px;
           float: right;
        }
    }


    .detail{
        width: 100%;
        height: 100%;
        .image{
            width: 100%;
        }
    }
</style>


