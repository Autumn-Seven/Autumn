<template>
    <div>
        <el-button type="text" @click="addRow">新增</el-button>

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
                    label="姓名">
            </el-table-column>
            <el-table-column
                    prop="username"
                    label="用户名">
            </el-table-column>
            <el-table-column
                    prop="password"
                    label="密码">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址">
            </el-table-column>
            <el-table-column
                    prop="job"
                    label="工作">
            </el-table-column>
            <el-table-column
                    prop="role"
                    label="角色">
            </el-table-column>
            <el-table-column
                    label="操作"
                    width="120">
                <template slot-scope="scope">
                    <el-button
                            @click.native.prevent="updateRow(scope.$index, scope.row)"
                            type="text"
                            size="small">编辑
                    </el-button>
                    <el-button
                            @click.native.prevent="deleteRow(scope.$index, scope.row)"
                            type="text"
                            size="small">移除
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


        <el-dialog title="新增用户" :visible.sync="dialogFormVisible" width="600px">
            <el-form :model="form" :rules="rules"  ref="ruleForm" label-width="100px" >
                <el-form-item label="姓名:"  prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>

                <el-form-item label="用户名:"  prop="username">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>

                <el-form-item label="密码:"  prop="password">
                    <el-input v-model="form.password"></el-input>
                </el-form-item>

                <el-form-item label="工作:"  prop="job">
                    <el-input v-model="form.job"></el-input>
                </el-form-item>

                <el-form-item label="电话:"  prop="phone">
                    <el-input v-model="form.phone"></el-input>
                </el-form-item>

                <el-form-item label="角色:"  prop="role" >
                    <el-select v-model="form.role" placeholder="请选择角色" style="width: 460px">
                        <el-option label="平台工作人员" :value="1"></el-option>
                        <el-option label="爱心人士" :value="2"></el-option>
                        <el-option label="受资助人" :value="3"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="地址:"  prop="address">
                    <el-input v-model="form.address"></el-input>
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
                    id: '',
                    name: '',
                    username: '',
                    password: '',
                    job: '',
                    phone: '',
                    role: "",
                    address: '',
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
                formLabelWidth: '100px'
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
                this.$ajax(AJAX_WATER).get('user?limit='+this.limit +'&offset='+this.offset, {}).then(({r}) => {

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

            addRow: function() {
                this.form.id = '';
                this.form.name = '';
                this.form.username = '';
                this.form.password = '';
                this.form.phone = '';
                this.form.role = '';
                this.form.job = '';
                this.form.address = '';

                this.dialogFormVisible = true;
            },
            doAdd: function() {
                let self = this;
                this.$ajax(AJAX_WATER).post('user', this.form).then(({r}) => {
                    this.$message({
                        type:'success',
                        message:'新增成功',
                    });
                    self.dialogFormVisible = false;
                    self.getTableList();
                })
            },
            updateRow(index, row){
                this.form = row;
                this.dialogFormVisible = true;
            },
            doUpdate(index, row){
                let self = this;
                this.$ajax(AJAX_WATER).put('user', this.form).then(({r}) => {
                    this.$message({
                        type:'success',
                        message:'更新成功',
                    });
                    self.dialogFormVisible = false;
                    self.getTableList();
                })
            },
            deleteRow(index, row) {
                let self = this;
                this.$confirm('确认要删除记录吗 , 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.doDelete(row);
                })
            },
            doDelete( row) {
                let self = this;
                this.$ajax(AJAX_WATER).delete('user?id='+row.id, this.form).then(({r}) => {
                    this.$message({
                        type:'success',
                        message:'删除成功',
                    });
                    self.getTableList();
                })
            },

            pageChange(index){

                this.page.pageNum = index;
                console.log(index)
                console.log(this.page)
                this.getTableList();
            },
        },
    }
</script>