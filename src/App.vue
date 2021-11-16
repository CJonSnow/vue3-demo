<template>
  <div>
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <button @click="jumpToHome()">首页</button>
    <router-view />
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

  export default {
    methods: {
      // jumpToHome() {
      //   // 通过this.$router直接拿到router对象（router导出的对象），不用在import导入一个 —— 这是vue2
      //   this.$router.push("/home")
      // }
    },
    setup() {
      // vue3 需要导入一个hook，useRouter 用它拿到router对象
      const router = useRouter();

      const jumpToHome = () => {
        // router.push("/home") //此处也可以传入一个对象
        router.push({
          path: "/home",
          query: { // url传入参数
            name: "czy",
            age: 18
          }
        })
      }

      return {
        jumpToHome
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>