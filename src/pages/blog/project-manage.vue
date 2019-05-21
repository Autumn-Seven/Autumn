<template>
  <div class="pm-top">
    <div class="pm-wrap">

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
          label="项目名">
        </el-table-column>
        <el-table-column
          prop="studentName"
          label="学生姓名">
        </el-table-column>
        <el-table-column
          prop="area"
          label="地区">
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
          label="操作"
          width="120">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="projectPass(scope.$index, scope.row)"
              type="text"
              size="small">审核通过
            </el-button>
            <el-button
              @click.native.prevent="projectUnpass(scope.$index, scope.row)"
              type="text"
              size="small">审核不通过
            </el-button>
            <el-button
              @click.native.prevent="projectFinish(scope.$index, scope.row)"
              type="text"
              size="small">项目完成
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
        this.$ajax(AJAX_WATER)
          .get('project?limit='+this.limit +'&offset='+this.offset +'&ownerStatus=审核中', {})
          .then(({r}) => {

            this.page.pageNum = r.pageNum;
            this.page.pageSize = r.pageSize;
            this.page.total = r.total;
            this.tableData = r.list;
          })
      },

      projectPass(index, row){
        let self = this;
        let data = {
          id: row.id
        };
        this.$ajax(AJAX_WATER).put('project/pass', data).then(({r}) => {
          this.$message({
            type:'success',
            message:'操作成功',
          });
          self.dialogFormVisible = false;
          self.getTableList();
        })
      },
      projectUnpass(index, row){
        let self = this;
        let data = {
          id: row.id
        };
        this.$ajax(AJAX_WATER).put('project/unpass', data).then(({r}) => {
          this.$message({
            type:'success',
            message:'操作成功',
          });
          self.dialogFormVisible = false;
          self.getTableList();
        })
      },
      projectFinish(index, row) {
        let self = this;
        let data = {
          id: row.id
        };
        this.$ajax(AJAX_WATER).put('project/finish', data).then(({r}) => {
          this.$message({
            type:'success',
            message:'操作成功',
          });
          self.dialogFormVisible = false;
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
<style lang="scss" scoped>
    .about{
        text-align: center;
        margin-top: 2rem;
        font-size: 2rem;
        h1{
            margin-bottom: 1rem;

        }
        h2{
            margin-bottom: 2rem;
            font-size: 1rem;
        }
        h3{
            font-size: 2rem;
        }

    }

    .pm-top{
      height: 100%;
      margin: auto;
      max-width: 900px;
      display: flex;
      align-items: flex-end;
      .pm-wrap{
        width: 100%;
        margin-bottom: 5px;
        /*position: absolute;*/
        /*bottom: 0;*/
        /*left: 50%;*/
        /*transform: translate(-50%, 0);*/
      }
    }
</style>
