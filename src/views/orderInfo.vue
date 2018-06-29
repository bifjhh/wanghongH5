<template>
<div class="content">
  <header>
    <div @click="goBack"> <i class="el-icon-close"></i></div>
    <span>订单详情</span>
  </header>
<div class="waitGood">
<img src="../assets/wait.png" alt="">
<span>已发货，等待买家收货</span>
</div>
<div class="address">
<addressInfo></addressInfo>
</div>
<div class="goodsInfo">
        <div class="title">
        <div>
        <div></div>
            <span>NANA家</span>
            </div>
                <i class="el-icon-arrow-right"></i>
        </div>
        <div class="baseInfo">
        <div class="goodsInt">
            <div class="goodsImg"></div>
            <div>
            <span>时尚套装女装2018夏装新款修身显瘦气质...</span>
            <p>格子长袖，M"</p>
            </div>
        </div>
            <div class="goodsPri">
                <p>￥322.00</p>
                <span>× 1</span>
            </div>
        </div>
    <div class="handle">
            <button>申请退换货</button>
            <button>查看物流</button>
    </div>
</div>
<div class="shopList">
            <div class="shopInfo">
                <span>运费</span>
                <p><span>+</span>￥0.01</p>
            </div>
            <div class="shopInfo">
                <span>优惠</span>
                <p><span>-</span>￥2.00 </p>
            </div>
                <div class="shopInfo">
                <span>实付</span>
                <p class="goodsPri">￥320.00</p>
            </div>
            </div>
            <div class="orderInfo">
                <div class="orderList">
                    <div><span>订单编号：</span>12345-67890098765</div>
                    <button>复制</button>
                </div>
                <div class="orderList">
                <div><span>支付方式：</span>支付宝</div>
                </div>
                <div class="orderList">
                    <div><span>下单时间：</span>2018-11-11</div>
                </div>
            </div>
</div>
</template>
<script>
import addressInfo from "@/components/addressInfo";
export default {
  components: {
    addressInfo
  },
  methods: {
    goBack() {
      window.history.back(-1);
    }
  }
};
</script>
 
<style lang="scss" scoped>
.content {
  header {
    height: 0.88rem;
    width: 100%;
    background-color: #fff;
    position: relative;
    line-height: 0.88rem;
    font-size: 0.36rem;
    text-align: center;
    padding: 0 0.28rem;
    box-sizing: border-box;
    box-shadow: 0px 3px 6px 0px rgba(0, 6, 13, 0.08);
    margin-bottom: 0.05rem;
    div {
      position: absolute;
      font-size: 0.4rem;
    }
  }
  .baseInfo {
    display: flex;
    padding-top: 0.3rem;
    justify-content: space-between;
    .goodsPri {
      text-align: right;
      p {
        font-size: 0.3rem;
      }
      span {
        color: #999;
        font-size: 0.3rem;
      }
    }
    .goodsInt {
      display: flex;
      span {
        display: block;
        width: 3.1rem;
        font-size: 0.3rem;
      }
      .goodsImg {
        height: 1.75rem;
        width: 1.75rem;
        background-color: skyblue;
        margin-right: 0.2rem;
      }
      div {
        p {
          color: #999;
          font-size: 0.26rem;
          margin-top: 0.2rem;
        }
      }
    }
  }
  .waitGood {
    width: 100%;
    height: 2.1rem;
    background-image: linear-gradient(59deg, #ff635c 0%, #ff7d68 100%),
      linear-gradient(#ff5750, #ff5750);
    background-blend-mode: normal, normal;
    display: flex;
    align-items: center;
    img {
      height: 0.36rem;
      width: 0.34rem;
      margin-left: 0.56rem;
      margin-right: 0.15rem;
    }
    span {
      font-size: 0.34rem;
      color: #fff;
    }
  }
  .address {
    padding: 0 0.28rem;
    background-color: #fff;
    box-shadow: 0px 2px 4px 0px rgba(31, 28, 29, 0.05);
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
  }
  .goodsInfo {
    padding: 0 0.28rem;
    background-color: #fff;
    .title {
      display: flex;
      align-items: center;
      padding: 0.24rem 0;
      justify-content: space-between;
      i {
        font-size: 0.4rem;
      }
      div {
        display: flex;
        div {
          height: 0.52rem;
          width: 0.52rem;
          border-radius: 100%;
          background-color: skyblue;
          margin-right: 0.2rem;
        }
        span {
          font-size: 0.34rem;
        }
      }
    }
  }
  .handle {
    padding-bottom: 0.31rem;
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid #ddd;
    button {
      width: 1.9rem;
      height: 0.62rem;
      border-radius: 8px;
      border: solid 1px #929292;
      background-color: #fff;
      margin-left: 0.25rem;
    }
  }
  .shopList {
    box-shadow: 0px 2px 4px 0px rgba(31, 28, 29, 0.05);
    background-color: #fff;
    margin-bottom: 0.2rem;
    .shopInfo {
      display: flex;
      justify-content: space-between;
      height: 0.6rem;
      align-items: center;
      font-size: 0.28rem;
      padding: 0 0.28rem;
      p {
        span {
          margin-right: 0.1rem;
        }
        i {
          font-size: 0.3rem;
        }
      }
      .goodsPri {
        color: #ff5750;
      }
    }
  }
  .orderInfo {
    background-color: #fff;
    padding: 0.24rem 0.28rem;
    .orderList {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.2rem;
      div {
        font-size: 0.26rem;
        span {
          margin-right: 0.2rem;
        }
      }
      button {
        width: 0.88rem;
        height: 0.44rem;
        border-radius: 8px;
        border: solid 1px #929292;
        line-height: 0.44rem;
        text-align: center;
        font-size: 0.24rem;
        background-color: #fff;
      }
    }
  }
}
</style>
