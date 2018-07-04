import Vue from 'vue'
import router from './router'; //导入路由模块
import axios from 'axios'; //导入axios路由的依赖包
import ElementUI from 'element-ui';
Vue.config.productionTip = false

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.baseURL = process.env.API_ROOT
// request interceptor
axios.interceptors.request.use(config => {

    return config
}, error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
})
Vue.prototype.$http = axios //将 axios 改写为 Vue 的原型属性
import './styles/init.css'
// 使用 mint-ui 加载更多页面
// import 'mint-ui/lib/style.css'
// import { InfiniteScroll } from 'mint-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {
    Carousel,
    CarouselItem,
} from 'element-ui';


Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(ElementUI);

// 导入组件页面
import './config/rem'
import App from './App' //根组件

new Vue({
    el: '#app',
    render: c => c(App),
    router,
})