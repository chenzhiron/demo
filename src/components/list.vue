<!-- eslint-disable vue/require-valid-default-prop -->
<template>
  <div>
<!--    <el-button type="primary" size="default" @click="fn(10,20)">点击测试模块</el-button>-->

      <!-- 列表模块 -->
    <el-table
      :data="tableData"
      height="320px"

      style="width: 100%">
      <el-table-column
        :key="key"
        v-for="(item,key) in tableTitle"
        :prop="item.prop"
        :label="item.label">
      </el-table-column>
<!--
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column> -->
    </el-table>
    <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-size="10"
      :page-sizes="table.pagesize"
      layout="total, sizes, prev, pager, next"
      :total="total">
    </el-pagination>
  </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { fn, tableconfig } from './table'

export default {
  props: {
    tableData: {
      type: Array,
      default () {
        return []
      }
    },
    total: {
      type: Number,
      default: 0
    },
    tableTitle: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      table: tableconfig
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.$emit('pagechange', val)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.$emit('currentChange', val)
    },
    click (_this) {
      console.log(_this)
    },
    fn
  }
}
</script>

<style>
.block {
  padding-top: 20px;
}
</style>
