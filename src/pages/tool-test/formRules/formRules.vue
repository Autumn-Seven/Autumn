/**
* Created by Seven on 2019/6/10.
 * project: Autumn
 * email: fighting20xx@126.com
 */ 


<template>
    <div class="formRules-top">
        <Form
                ref="infoForm"
                :model="infoData"
                :rules="ruleInline"
                :label-width="120">
            <FormItem prop="name" label="采集节点名称">
                <Input type="text" v-model="infoData.name"></Input>
            </FormItem>
            <FormItem prop="profileName" label="采集模板">
                <Select v-model="infoData.profileName">
                    <Option
                            v-for="(item, index) in tempsList"
                            :value="item.name"
                            :key="index"
                    >{{item.name}}
                    </Option>
                </Select>
            </FormItem>
            <FormItem prop="gatewayId" label="网关" class="wd-300">
                <Select v-model="infoData.gatewayId">
                    <Option
                            v-for="(item, index) in gatewayList"
                            :value="item.id"
                            :key="index"
                    >{{item.name}}
                    </Option>
                </Select>
            </FormItem>
            <FormItem prop="status" label="状态">
                <i-switch v-model="infoData.status">
                    <span slot="open">开启</span>
                    <span slot="close">关闭</span>
                </i-switch>
            </FormItem>
            <FormItem prop="status" label="状态">
                <Button type="primary" @click="submit">提交</Button>
            </FormItem>
        </Form>
    </div>

</template>
<script>


    import {createRules} from '@/util/createRules.js';

    export default {
        name: '',
        data() {
            return {
                ruleInline:createRules({
                    name: ['required','float_500.23'],
                    profileName: ['required_change'],
                    gatewayId: ['type_number','required_change'],
                    description: ['len_128', '<>$&'],
                    status: [],
                },{
                    code: [
                        {required: true, message: '请输入', trigger: 'blur'},
                    ],
                    name: [
//                        {required: true, message: '请输入', trigger: 'blur'},
                    ],
                    typeId: [
                        {type:'number',required: true, message: '请选择', trigger: 'change'},
                    ],
                }),
                infoData: {},
                gatewayList: [{id:20,name:'第一个'},{id:24,name:'第二个'}],
                tempsList: [{id:20,name:'第一个'},{id:24,name:'第二个'}],
            };
        },
        methods: {
            submit: function() {
                this.$refs.infoForm.validate(async valid => {
                    console.log(this.infoData)
                    if (valid) {
                        this.$Message.success('成功!');
                    } else {
                        this.$Message.error('表单验证出错!');
                    }
                });
            }
        }
    }

</script>
<style>
    .formRules-top {
        width: 400px;
        margin: auto;
    }

</style>

