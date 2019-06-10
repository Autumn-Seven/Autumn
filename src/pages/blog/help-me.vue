<template>
    <div class="help-me">
        <el-form :model="form" :rules="rules"  ref="ruleForm" label-width="100px"   >
            <el-form-item label="项目名称:"  prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item label="学生姓名:"  prop="studentName">
                <el-input v-model="form.studentName"></el-input>
            </el-form-item>

            <el-form-item label="年龄:"  prop="age">
                <el-input v-model="form.age"></el-input>
            </el-form-item>


            <el-form-item label="区域:"  prop="role" >
                <el-select v-model="form.area" placeholder="请选择省份" style="width: 500px">
                    <el-option v-for="item ,index in provinceList" :label="item" :value="item" :key="index"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="地址:"  prop="address">
                <el-input v-model="form.address"></el-input>
            </el-form-item>





            <el-form-item label="资助类型:"  prop="financialType" >
                <el-select v-model="form.financialType" placeholder="请选择" style="width: 500px">
                    <el-option v-for="item,index in financialType" :label="item" :value="index" :key="index"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="图片:"  prop="img">
                <el-input type="file" v-model="form.img"  id="uploadFile"></el-input>
            </el-form-item>

            <el-form-item label="需求描述:"  prop="description">
                <el-input type="textarea" v-model="form.description" rows="8"></el-input>
            </el-form-item>


            <el-form-item >
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary"  @click="submitForm('ruleForm')">确 定</el-button>
            </el-form-item>
        </el-form>

    </div>
</template>
<script>

    import {AJAX_WATER} from '@/dim/ajaxSource.js'
    import util from '@/util/util.js'
    import {province,financialType} from '@/util/optionsList.js';

    export default {
        data() {
            return {
                form: {
                    id: '',
                    name: '',
                    studentName: '',
                    age: '',
                    area: '',
                    address: '',
                    financialType: '',
                    description: '',
                    img: "",
                },
                rules: {
                    name: [
                        { required: true, message: '名称', trigger: 'blur' },
//                        { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
                    ],
                    username: [
                        { required: true, message: '用户名', trigger: 'blur' },
                        { min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '密码', trigger: 'blur' },
                        { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
                    ],
                    area: [
                        {  required: true, message: '请选择', trigger: 'change' }
                    ],
                },
                provinceList:province,
                financialType:financialType,
            };
        },
        methods: {
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
            doAdd: function() {
                let self = this;

                var formData = new FormData();
                Object.keys(this.form).forEach(function(key) {
                    let val = self.form[key];
                    formData.append(key, val)
                })
                formData.append('owner', self.$store.state.user.id)

                formData.append('file', jQuery('#uploadFile')[0].files[0]);

                let config = {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                };

                this.$ajax(AJAX_WATER).post( 'project', formData, config).then(({r}) => {
                    this.$message({
                        type:'success',
                        message:'新增成功',
                    });
                    self.dialogFormVisible = false;
                    self.$router.push('/project-process');
                })
            },

            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
<style lang="scss" scoped>
    .help-me{
        display: flex;
        justify-content: center;
        align-items:flex-end;
        width: 600px !important;
        text-align: center;
        height: 100%;
        max-width: 900px;
        margin: auto;
        font-weight: bolder;


        .el-form-item__label{
            background-color: green !important;
            color: green !important;
        }
    }


</style>
