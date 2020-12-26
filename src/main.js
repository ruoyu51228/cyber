import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@assets/style.css'

import '@assets/icon/iconfont.css'
import '@assets/icon/iconfont.js'

import 'vant/lib/button/style';
import initApp from '@utils/init'

createApp(App)
  .use(store)
  .use(router)
  .use(initApp)
  .mount('#app')
