<template>
    <div class="login-box">
        <!--<div v-wechat-title="$route.meta.title"></div>-->
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm" label-width="80px"
                 element-loading-text="页面跳转中">
            <h3 class="title">用户登录</h3>
            <el-form-item label="用户名" prop="username">
                <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm.password"></el-input>
            </el-form-item>
            <el-form-item class="button-box">
                <el-button type="primary" :loading="loading" @click="submitForm('ruleForm')">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>


    import {AJAX_WATER} from '@/dim/ajaxSource.js'
    import common from '@/components/common/common'
    import util from 'tool/util.js'
    export default {
        data() {
            return {
                dialogVisible: false,
                loading: false,
                ruleForm: {
                    username: 'test',
                    password: '123456'
                },
                rules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                let self =this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        self.login();
                    } else {
                        this.$message({
                            type:'error',
                            message:'表单验证失败',
                        });
                        return false;
                    }
                });
            },

            login(){
                let self = this;
                this.$ajax(AJAX_WATER).post('user/login', this.ruleForm).then(({r}) => {
//                    console.log(r)

                    self.$store.commit('setUser', r);
                    util.set('user', r);
                    self.$router.push('/home');

                })
            },
        },
    }
</script>
<style lang="scss" scoped>
    .demo-ruleForm {
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -200px;
        margin-top: -200px;
        width: 350px;
        height: 300px;
        padding: 35px 35px 15px;
        border-radius: 5px;
        -moz-border-radius: 5px;
        background-clip: padding-box;
        margin-bottom: 20px;
        background-color: #f9fafc;
        border: 2px solid #8492a6;
        .title {
            margin: 0 auto 40px;
            text-align: center;
            color: #505458;
            font-size: 1.17em;
        }

    }

    .login-box {
        height: 100%;
        position: relative;
        background: #1f2d3d;
    }

</style>
