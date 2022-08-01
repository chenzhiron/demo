<template>
  <div>
    <el-container  style="height: 400px;">
        <el-aside width="200px" style="background-color: red;">
          <!-- Aside content -->
        </el-aside>
        <div style="flex: 1;">
         <el-container  >
            <el-header height="50px">
              <!-- Header content -->
                <el-main height="150px" >
                  <!-- Main content -->
                      <slot></slot>
                </el-main>
              </el-header>
          </el-container>
        </div>
    </el-container>
  </div>
</template>
<script>
// import Layout from './layout.vue'
export default {
  // components: { Layout },
  name: 'container',
  data () {
    return {}
  }
}
</script>
