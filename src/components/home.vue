<template>
  <div>
    <h1>HOME</h1>
    <div>
      <router-link to="/home/phone">手机</router-link>
      <router-link to="/home/tablet">平板</router-link>
      <router-link to="/home/computer">电脑</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'home组件'
    }
  }
}
</script>

<style scoped>

</style>
