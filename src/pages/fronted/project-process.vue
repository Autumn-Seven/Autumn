<template>
    <div class="project-process">
        <div  class="project-card" v-for="project,index in tableData">
            <el-card :body-style="{ padding: '0px' }">
                <img :src="project.img" class="image">
                <div style="padding: 14px;">
                    <h3 class="project-name">{{project.name}}</h3>
                    <div class="text-wrap">
                        <div class="text-item">
                            <span  class="text-item-key">创建时间</span>
                            <span  class="text-item-value">{{project.createTime}}</span>
                        </div>
                        <div class="text-item">
                            <span  class="text-item-key">拥有人</span>
                            <span  class="text-item-value">{{project.ownerName}}</span>
                        </div>
                        <div class="text-item">
                            <span  class="text-item-key">拥有人状态</span>
                            <span  class="text-item-value">{{project.ownerStatus}}</span>
                        </div>
                        <div class="text-item">
                            <span  class="text-item-key">资助人</span>
                            <span  class="text-item-value">{{project.helperName}}</span>
                        </div>
                        <div class="text-item">
                            <span  class="text-item-key">资助状态</span>
                            <span  class="text-item-value">{{project.helperStatus}}</span>
                        </div>


                        <!--<el-button type="text" class="button">详情</el-button>-->
                    </div>
                </div>
            </el-card>
        </div>
    </div>
</template>
<script>

    import {AJAX_WATER} from '@/dim/ajaxSource.js'
    export default {
        data(){
            return {
                tableData:[],
                page: {
                    pageNum: 1,
                    pageSize: 10000,
                    total: 0,
                },
            }
        },
        computed:{
            offset:function (){ return (this.page.pageNum-1) * this.page.pageSize},
            limit:function(){return this.page.pageSize},
            isAdd:function() {
                return this.form.id ===''
            }
        },
        mounted(){
            this.getTableList();
        },
        methods: {

            getTableList(){
                this.$ajax(AJAX_WATER).get('project?limit=' + this.limit + '&offset=' + this.offset, {}).then(({r}) => {

//                    this.page.pageNum = r.pageNum;
//                    this.page.pageSize = r.pageSize;
//                    this.page.total = r.total;
                    this.tableData = [];
                    this.tableData.push( ...r.list);
                })
            },

            submitForm(formName) {
                let self = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        self.isAdd ? self.doAdd() : self.doUpdate()
                    } else {
                        this.$message({
                            type: 'error',
                            message: '表单验证失败',
                        });
                        return false;
                    }
                });
            },

            updateRow(index, row){
                this.form = row;
                this.dialogFormVisible = true;
            },
            goHelp() {
                let self = this;
                this.$ajax(AJAX_WATER).put('project/helpHim', this.form).then(({r}) => {
                    this.$message({
                        type: 'success',
                        message: '成功',
                    });
                    this.dialogFormVisible = false;
                    self.getTableList();
                })
            },
            pageChange(index){
                this.page.pageNum = index;
                this.getTableList();
            },

        },
    }
</script>
<style lang="scss" scoped>
    .project-process{
        display: flex;
        flex-wrap:wrap;
        justify-content:center;
        display: flex;
        flex-wrap:wrap;
        justify-content:center;

        .project-card{
            padding: 10px 20px 50px;
            img{
                width: 300px;
                height: 320px;
            }
            .project-name{
                text-align: center;
                line-height: .2;
            }

            .text-wrap{
                width: 100%;
                padding: 0;
                margin: 0;
                .text-item{
                    display: flex;
                    font-size: .7rem;
                    .text-item-key{
                        display: inline-block;
                        width: 120px;
                        padding-right: 30px;
                        text-align: right;
                        :after{
                            content: ':';
                        }
                    }
                    .text-item-value{
                        display: inline-block;
                        text-align: left;
                        color: green;
                        font-weight: 900;
                        font-size: .8rem;
                    }
                }
            }


        }
    }

</style>
