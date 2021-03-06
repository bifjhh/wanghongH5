/* 导出路由模块 */

import Vue from "vue";
import VueRouter from "vue-router"; //导入vue路由的依赖包
Vue.use(VueRouter); //在vue中使用路由
import GoodsList from "@/views/goodsList";
import GoodsInfo from "@/views/goodsInfo";
import CommentList from "@/views/commentList";
import OrderList from "@/views/orderList";
import AddAddress from "@/views/addAddress";
import OrderInfo from "@/views/orderInfo";
import AddressList from "@/views/addressList";
import ReturnShop from "@/views/returnShop";
import AssessInfo from "@/views/assessInfo";
import MyOrder from "@/views/myOrder";
import WatchStatus from "@/views/watchStatus";

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
        },
        {
            path: "/commentList",
            name: "CommentList",
            component: CommentList
        },
        {
            path: "/orderList",
            name: "OrderList",
            component: OrderList
        },
        {
            path: "/addAddress",
            name: "AddAddress",
            component: AddAddress
        },
        {
            path: "/orderInfo",
            name: "OrderInfo",
            component: OrderInfo
        },
        {
            path: "/addressList",
            name: "AddressList",
            component: AddressList
        },
        {
            path: "/returnShop",
            name: "ReturnShop",
            component: ReturnShop
        },
        {
            path: "/assessInfo",
            name: "AssessInfo",
            component: AssessInfo
        },
        {
            path: "/myOrder",
            name: "MyOrder",
            component: MyOrder
        },
        {
            path: "/watchStatus",
            name: "WatchStatus",
            component: WatchStatus
        },
    ]
});

/* 导出路由模块 */
export default router;