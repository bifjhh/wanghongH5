/* 导出路由模块 */

import Vue from "vue";
import VueRouter from "vue-router"; //导入vue路由的依赖包
Vue.use(VueRouter); //在vue中使用路由
import GoodsList1 from "@/views/goodsList1";
import GoodsList2 from "@/views/goodsList2";
import GoodsList3 from "@/views/goodsList3";
import GoodsList4 from "@/views/goodsList4";
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
            path: "/goodsList1",
            name: "GoodsList1",
            component: GoodsList1
        },
        {
            path: "/goodsList2",
            name: "GoodsList2",
            component: GoodsList2
        },
        {
            path: "/goodsList3",
            name: "GoodsList3",
            component: GoodsList3
        },
        {
            path: "/goodsList4",
            name: "GoodsList4",
            component: GoodsList4
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