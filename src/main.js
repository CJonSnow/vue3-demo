import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')

// 也可以使用链式调用
// use() 返回的是app对象所以可以使用链式调用，但mount返回的是组件对象，书写顺序需要注意
// createApp(App).use(router).mount('#app')

