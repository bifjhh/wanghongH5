/* 导出路由模块 */

import Vue from "vue";
import VueRouter from "vue-router"; //导入vue路由的依赖包
Vue.use(VueRouter); //在vue中使用路由
import GoodsList from "@/views/goodsList";

import GoodsInfo from "@/views/goodsInfo";

// 定义路由规则
var router = new VueRouter({
    // mode: "history",
    routes: [{
            path: "/",
            redirect: "/home"
        }, //自动跳转到首页
        {
            path: "/home",
            component: () =>
                import ("@/views/home"),
            name: "home"
        }, //自动跳转到首页
        {
            path: "/goodsList/:id",
            name: "GoodsList",
            component: GoodsList
        },
        {
            path: "/goodsInfo",
            name: "GoodsInfo",
            component: GoodsInfo
        }
    ]
});

/* 导出路由模块 */
export default router;