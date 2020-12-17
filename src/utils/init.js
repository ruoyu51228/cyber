import Vant from '@plugin/vant'

// TODO: 引入vant组件
export default {
  install(app){
    Object.keys(Vant).map(key=>{
      app.use(Vant[key]);
    })
  }
}