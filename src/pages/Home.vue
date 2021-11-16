<template>
  <div>
    我是首页
    {{ $route.query.name }} - {{ $route.query.age }}
    <router-link to="/home/message">消息</router-link>
    <router-link to="/home/shop">商品</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>