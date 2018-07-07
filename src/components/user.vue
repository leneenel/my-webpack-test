<template>
  <div>
    <h1>User</h1>
    <div>我是user组件, 动态部分是{{dynamicSegment}}</div>
  </div>
</template>

<script>
export default {
  // name: 'user'
  // computed: {
  //   dynamicSegment () {
  //     return this.$route.params.id
  //   }
  // }
  data () {
    return {
      dynamicSegment: this.$route.params.id
    }
  },
  watch: {
    $route (to, from) {
      console.log(from.path)
      console.log(to.path)
      this.dynamicSegment = to.params.id
    }
  }
}
</script>

<style scoped>

</style>
