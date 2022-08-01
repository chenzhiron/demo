<!-- eslint-disable vue/valid-template-root -->
<template>
<div>
    <layout></layout>
  <div>
    <el-input-number v-model="vl" size="normal" label="新增"
      :min="0" :max="10" :step="0.1" :controls="true" controls-position="right">
    </el-input-number>
  </div>
  <el-button @click="print()">点击打印</el-button>
  <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="ruleForm2.pass" auto-complete="on"></el-input>
    </el-form-item>
    <el-form-item label="年龄" prop="age">
      <el-input v-model.number="ruleForm2.age"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
      <el-button @click="resetForm('ruleForm2')">重置</el-button>
    </el-form-item>
  </el-form>
  <el-button type="primary" size="default" @click="add">添加120条数据</el-button>
  <container>
      <list :tableData="tableDatalist"
        :total="tableData.length"
        :tableTitle="tableTitle"
        @pagechange="pageChange"
        @currentChange="currentChange"
        ></list>
  </container>
</div>
</template>

<script>
import list from './list.vue'
import layout from './layout.vue'
import container from './container.vue'
import {
  // validatePass2,
  validatePass,
  checkAge } from '../utils/verify'
export default {
  name: 'HelloWorld',
  components: {
    list,
    layout,
    container
  },
  watch: {
    tableData () {
      console.log('监听中')
      console.log(this.tableData)
    }
  },
  methods: {
    print () {
      window.print()
    },
    // 每页多少条
    pageChange (val) {
      // 条
      this.pagecount = val
      this.changeend(val)
    },
    // 当前第几页
    currentChange (val) {
      // 页
      this.currentpage = val
      this.changeend(val)
    },
    // 计算改变table数据
    changeend (val) {
      this.tableDatalist = val * this.currentpage > this.tableData.length
        ? this.tableData.slice((this.currentpage - 1) * this.pagecount)
        : this.tableData.slice((this.currentpage - 1) * this.pagecount, this.pagecount * this.currentpage)
    },
    // 添加数据
    add () {
      let l = this.tableData.length
      for (let i = 0; i < 120; i++) {
        let m = l < 120 ? i : l + i
        this.$set(this.tableData, m, {
          date: '2016-05-07',
          name: m,
          address: '上海市普陀区金沙江路 1518 弄'
        })
      }
      this.tableDatalist = l === 0
        ? this.tableData.slice((this.currentpage - 1) * this.pagecount, this.currentpage * this.pagecount)
        : this.tableDatalist
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert(this.$refs[formName])
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
  data () {
    var tableverify = {
      pwd: (rule, value, callback) => validatePass(rule, value, callback),
      // pwd2: (rule, value, callback) => validatePass2(rule, value, callback),
      checkAge: (rule, value, callback) => checkAge(rule, value, callback)
    }
    return {
      ruleForm2: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules2: {
        pass: [
          { required: true, validator: tableverify.pwd, trigger: 'blur' }
        ],
        // checkPass: [
        //   { required: true, validator: validatePass2, trigger: 'blur' }
        // ],
        age: [
          { required: true, validator: tableverify.checkAge, trigger: 'blur' }
        ]
      },
      vl: 0,
      pagecount: 10,
      currentpage: 1,
      tableData: [],
      tableDatalist: [],
      tableTitle: [
        {
          prop: 'date',
          label: '日期'
        },
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'address',
          label: '地址'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
