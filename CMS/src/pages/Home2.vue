<template>
    
<div style="padding:20px">

<el-calendar v-model="value">
</el-calendar>
</div>
</template>

<script>
  export default {
    data() {
      return {
        value: new Date()
      }
    }
  }
</script>