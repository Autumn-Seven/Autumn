<style lang="less">
    .user-top{
        height: 100%;
        margin: auto;
        max-width: 900px;
        display: flex;
        align-items: flex-end;
        .user-wrap{
            width: 100%;
            margin-bottom: 5px;
            /*position: absolute;*/
            /*bottom: 0;*/
            /*left: 50%;*/
            /*transform: translate(-50%, 0);*/
        }
    }
</style>
<template>
    <div class="user-top">
        <div class="user-wrap">
            <!--<el-button type="text" @click="addRow">新增</el-button>-->

            <el-table
                    :data="tableData"
                    style="width: 100%;background-color: rgba(0,0,0,0)"
            >
                <el-table-column
                        type="index"
                        width="50">
                </el-table-column>
                <!--<el-table-column-->
                <!--prop="id"-->
                <!--label="id">-->
                <!--</el-table-column>-->
                <el-table-column
                        prop="name"
                        label="项目名称">
                </el-table-column>
                <el-table-column
                        prop="ownerName"
                        label="项目所有人">
                </el-table-column>
                <el-table-column
                        prop="area"
                        label="地区">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址">
                </el-table-column>
                <el-table-column
                        prop="financialType"
                        label="资助类型">
                </el-table-column>
                <el-table-column
                        prop="createTime"
                        label="创建时间">
                </el-table-column>
                <el-table-column
                        prop="helperStatus"
                        label="状态">
                </el-table-column>
                <el-table-column
                        label="操作"
                        width="120">
                    <template slot-scope="scope">
                        <el-button
                                @click.native.prevent="updateRow(scope.$index, scope.row)"
                                type="text"
                                size="small">详情
                    </el-button>

                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                    layout="prev, pager, next"
                    :page-size="page.pageSize"
                    :current-page="page.pageNum"
                    :total="page.total"
                    @current-change="pageChange"
            ></el-pagination>


            <el-dialog :title="form.name" :visible.sync="dialogFormVisible" width="600px">
                    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                    <div style="padding: 14px;">
                        <div class="bottom clearfix">
                            <div>申请人：{{form.ownerName}}</div>
                            <div>学生姓名：{{form.studentName}}</div>
                            <div>申请状态：{{form.ownerStatus}}</div>
                            <div>区域：{{form.area}}</div>
                            <div>地址：{{form.address}}</div>
                            <div>创建时间：{{form.createTime}}</div>
                            <div>资助类型：{{form.financialType}}</div>
                            <!--<div>{{form.helperStatus}}</div>-->

                           <el-button type="primary" @click="goHelp" class="button">帮助他</el-button>
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
        data() {
            return {
                tableData: [],
                page: {
                    pageNum: 1,
                    pageSize: 10,
                    total: 0,
                },
                dialogFormVisible: false,
                form: {
                    address: "",
                    age: null,
                    area: "",
                    count: null,
                    createTime: "2019-04-20 21:02:55",
                    description: "",
                    financialType: null,
                    helper: null,
                    helperName: "无资助人",
                    helperStatus: "未认领",
                    id: 1,
                    img: "http://119.3.36.108:8080/show?name=null",
                    name: "",
                    owner: null,
                    ownerName: "无所有人",
                    ownerStatus: "审核中",
                    studentName: "",
                },
                rules: {
                    name: [
                        { required: true, message: '名称', trigger: 'blur' },
                        { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
                    ],
                    username: [
                        { required: true, message: '用户名', trigger: 'blur' },
                        { min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '密码', trigger: 'blur' },
                        { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
                    ],
                    role: [
                        {  required: true, message: '请选择', trigger: 'change' }
                    ],
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
                this.$ajax(AJAX_WATER).get('project?limit='+this.limit +'&offset='+this.offset, {}).then(({r}) => {

                    this.page.pageNum = r.pageNum;
                    this.page.pageSize = r.pageSize;
                    this.page.total = r.total;
                    this.tableData = r.list;
                })
            },

            submitForm(formName) {
                let self =this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        self.isAdd ?  self.doAdd() : self.doUpdate()
                    } else {
                        this.$message({
                            type:'error',
                            message:'表单验证失败',
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
                this.form.helper = this.$store.state.user.id;
                this.$ajax(AJAX_WATER).put('project/helpHim', this.form).then(({r}) => {
                    this.$message({
                        type:'success',
                        message:'成功',
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
