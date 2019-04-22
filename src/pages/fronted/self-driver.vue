<style lang="less" scoped>
    .sd-top {
        /*height: 100%;*/
        margin: auto;
        width: 80%;
        max-width: 1000px;
        margin-top: 500px;
        background-color: white;
        /*display: flex;*/
        /*align-items: flex-end;*/
        .pm-wrap {
            width: 100%;
            margin-bottom: 5px;
            /*position: absolute;*/
            /*bottom: 0;*/
            /*left: 50%;*/
            /*transform: translate(-50%, 0);*/
        }
    }

    .demo-table-expand {
        font-size: 0;
    }

    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }

    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }

</style>
<template>
    <div class="sd-top">

        <el-tabs :tab-position="tabPosition" type="card">
            <el-tab-pane label="我发起的">
                <el-button type="text" @click="showDialog" class="new-button">发起新自驾</el-button>
                <el-table
                        :data="myDriveList"
                        style="width: 100%">
                    <el-table-column type="expand">
                        <template slot-scope="props">
                            <!--<div v-for="item in props.row.partnerList" >-->
                            <!--<el-checkbox v-model="checked">{{item.followerName}}</el-checkbox>-->
                            <!--</div>-->
                            <span>选择同行的人：</span>
                            <el-checkbox v-for="item in props.row.partnerList" :label="item.follower"
                                         @change="chooseFollower(item.follower, props.row.id, $event)">
                                {{item.followerName}}

                            </el-checkbox>

                        </template>
                    </el-table-column>
                    <el-table-column
                            label="目的地"
                            prop="targetAddress">
                    </el-table-column>
                    <el-table-column
                            label="资助类型"
                            prop="financialType">
                    </el-table-column>
                    <el-table-column
                            label="发起人"
                            prop="helperName">
                    </el-table-column>
                    <el-table-column
                            label="联系方式"
                            prop="phone">
                    </el-table-column>
                    <el-table-column
                            label="开始时间"
                            prop="beginTime">
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="可参与的">
                <el-table
                        :data="aliveDriveList"
                        style="width: 100%">
                    <el-table-column
                            label="目的地"
                            prop="targetAddress">
                    </el-table-column>
                    <el-table-column
                            label="资助类型"
                            prop="financialType">
                    </el-table-column>
                    <el-table-column
                            label="发起人"
                            prop="helperName">
                    </el-table-column>
                    <el-table-column
                            label="联系方式"
                            prop="phone">
                    </el-table-column>
                    <el-table-column
                            label="开始时间"
                            prop="beginTime">
                    </el-table-column>
                    <el-table-column
                            label="操作"
                            width="120">
                        <template slot-scope="scope">
                            <el-button
                                    @click.native.prevent="joinThem(scope.$index, scope.row)"
                                    type="text"
                                    size="small">参与

                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="已参与的">
                <el-table
                        :data="alreadyDriveList"
                        style="width: 100%">
                    <el-table-column
                            label="目的地"
                            prop="targetAddress">
                    </el-table-column>
                    <el-table-column
                            label="资助类型"
                            prop="financialType">
                    </el-table-column>
                    <el-table-column
                            label="发起人"
                            prop="helperName">
                    </el-table-column>
                    <el-table-column
                            label="联系方式"
                            prop="phone">
                    </el-table-column>
                    <el-table-column
                            label="开始时间"
                            prop="beginTime">
                    </el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>

        <el-dialog title="创建自驾" :visible.sync="dialogFormVisible" width="600px">
            <el-form :model="form" :rules="rules" ref="mySelfForm" label-width="100px" size="mini">
                <el-form-item label="标题:" prop="title">
                    <el-input v-model="form.title"></el-input>
                </el-form-item>

                <el-form-item label="资助类型:" prop="financialType">
                    <el-select v-model="form.financialType" placeholder="请选择" style="width: 460px">
                        <el-option v-for="item,index in financialType" :label="item" :value="index"
                                   :key="index"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="目的地:" prop="targetAddress">
                    <el-input v-model="form.targetAddress"></el-input>
                </el-form-item>

                <el-form-item label="电话:" prop="phone">
                    <el-input v-model="form.phone"></el-input>
                </el-form-item>

                <el-form-item label="出发日期:" prop="beginTime">
                    <el-date-picker style="width: 460px"
                                    v-model="form.beginTime"
                                    value-format="yyyy-MM-dd HH:mm:ss"
                                    type="datetime"
                                    placeholder="选择日期时间">
                    </el-date-picker>
                </el-form-item>


            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitForm('mySelfForm')">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>

    import {AJAX_WATER} from '@/dim/ajaxSource.js'
    import {province, financialType} from '@/util/optionsList.js';

    export default {
        data() {
            return {
                myDriveList: [],
                aliveDriveList: [],
                alreadyDriveList: [],
                tabPosition: 'left',
                dialogFormVisible: false,
                provinceList: province,
                financialType: financialType,
                checked: false,
                form: {
                    id: '',
                    title: '',
                    financialType: '',
                    targetAddress: '',
                    phone: '',
                    helper: '',
                    beginTime: ''
                },
                rules: {
                    name: [
                        {required: true, message: '名称', trigger: 'blur'},
                        {min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur'}
                    ],
                    username: [
                        {required: true, message: '用户名', trigger: 'blur'},
                        {min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '密码', trigger: 'blur'},
                        {min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur'}
                    ],
                    role: [
                        {required: true, message: '请选择', trigger: 'change'}
                    ],
                },
            }
        },
        computed: {},
        mounted() {
            this.getList1();
            this.getList2();
            this.getList3();
        },
        methods: {
            showDialog: function() {

                this.form.id = '';
                this.form.title = '';
                this.form.financialType = '';
                this.form.targetAddress = '';
                this.form.phone = '';
                this.form.helper = this.$store.state.user.id;
                this.form.helperName = this.$store.state.user.name;

                this.dialogFormVisible = true;
            },
            submitForm(formName) {
                let self = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        self.doAdd();
                    } else {
                        this.$message({
                            type: 'error',
                            message: '表单验证失败',
                        });
                        return false;
                    }
                });
            },
            doAdd: function() {
                let self = this;
                this.$ajax(AJAX_WATER).post('selfdriving', this.form).then(({r}) => {
                    this.$message({
                        type: 'success',
                        message: '新增成功',
                    });
                    self.dialogFormVisible = false;
                    self.getList1();
                })
            },
            getList1() {
                let userId = this.$store.state.user.id;
                this.$ajax(AJAX_WATER).get('selfdriving/getDrivingCreateByMe?userId=' + userId, {}).then(({r}) => {
//          console.log(r);
                    this.myDriveList = r;
                })
            },
            getList2() {
                let userId = this.$store.state.user.id;
                this.$ajax(AJAX_WATER).get('selfdriving/getDrivingToFollow?userId=' + userId, {}).then(({r}) => {
                    this.aliveDriveList = r;
                })
            },
            getList3() {
                let userId = this.$store.state.user.id;
                this.$ajax(AJAX_WATER).get('selfdriving/getAlreadyDriving?userId=' + userId, {}).then(({r}) => {
                    this.alreadyDriveList = r;
                })
            },
            chooseFollower(follower, selfdrivingId, event) {
                let data = {
                    allow: event ? 1 : 0,
                    selfDrivingId: selfdrivingId,
                    follower: follower
                };
                this.$ajax(AJAX_WATER).post('selfdriving/allowFollow', data, {}).then(({r}) => {
                    this.$message({
                        type: 'success',
                        message: '设置成功',
                    });
                    self.dialogFormVisible = false;
                    self.getList1();
                });
            },
            joinThem(index, row) {
                let userId = this.$store.state.user.id;
                let data = {
                    selfDrivingId: row.id,
                    follower: userId
                };
                this.$ajax(AJAX_WATER).post('selfdriving/allowFollow', data, {}).then(({r}) => {
                    this.$message({
                        type: 'success',
                        message: '设置成功',
                    });
                    self.dialogFormVisible = false;
                    self.getList2();
                });
            },
            clickTab1() {
                console.log("sss")
            }
        },
    }
</script>
