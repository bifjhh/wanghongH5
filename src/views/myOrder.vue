<template>
  <div class="content">
    <header>
      <div @click="goBack"> <i class="el-icon-close"></i></div>
      <span>订单列表</span>
    </header>
    <div class="titletab">
      <div class="tabbox">
        <div class="intab">
          <span v-cloak v-for="(item,index) in tabarr" :style="{'border-bottom-color': tabSel==index?'#F34D41':'transparent'}" :key="index" @click="tabselect(index)">{{item}}</span>
        </div>
      </div>
    </div>
    <div class="info">
      <div class="title">
        <div>
          <div></div>
          <span>NANA家</span>
          <i class="el-icon-arrow-right"></i>
        </div>
        <span>已完成</span>
      </div>
      <div class="goodsInfo">
        <div class="img"></div>
        <div>
          <span>时尚套装女装2018夏装新款修身显瘦气质名媛韩版小香风夏季两件套...</span>
          <p class="pri">
            <span>格子长袖；M</span>
            <span>×1</span>
          </p>
        </div>
      </div>
      <div class="goodsP">
        <span>实付：</span>
        <span>￥322.99</span>
        <span>(免邮费)</span>
      </div>
        <div class="goDes">
       <button>去评价</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabarr: ["全部", "待付款", "退款中", "待发货", "待收货", "待评价"],
      tabSel: 0
    };
  },
  methods: {
    goBack() {
      window.history.back(-1);
    },
    tabselect(e) {
      this.tabSel = e;
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
    div {
      position: absolute;
      font-size: 0.4rem;
    }
  }
  .titletab {
    width: 100%;
    height: 1rem;
    overflow: hidden;
    background: #fff;
    box-shadow: 0px 2px 4px 0px rgba(31, 28, 29, 0.05);
    .tabbox {
      overflow-y: hidden;
      overflow-x: auto;
    }
    .intab {
      white-space: nowrap;
      padding: 0;
      display: block;
      min-width: 7.5rem;
      line-height: 0.5rem;
      span {
        font-size: 0.32rem;
        color: #222228;
        margin: 0 0.3rem 0;
        height: 0.9rem;
        line-height: 0.9rem;
        display: inline-block;
        border-bottom: 0.04rem solid;
      }
    }
  }
  .info {
    padding: 0 0.28rem;
    background-color: #fff;
    margin-top: 0.2rem;
    .goDes {
      padding: 0.2rem 0rem;
      text-align: right;
      border-top: 1px solid #e5e5e5;
      button {
        width: 1.62rem;
        height: 0.62rem;
        background-color: #ffffff;
        border-radius: 8px;
        border: solid 1px #ff5750;
        color: #ff5750;
        font-size: 0.28rem;
      }
    }
    .goodsP {
      text-align: right;
      height: 0.88rem;
      border-top: 1px solid #e5e5e5;
      line-height: 0.88rem;
      font-size: 0.28rem;
    }
    .title {
      display: flex;
      align-items: center;
      padding: 0.24rem 0;
      justify-content: space-between;
      > span {
        font-size: 0.28rem;
        color: #ff5750;
      }
      div {
        display: flex;
        align-items: center;
        i {
          font-size: 0.36rem;
          color: #999;
          margin-left: 0.1rem;
        }
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
    .goodsInfo {
      padding: 0.28rem 0;
      display: flex;
      border-top: 1px solid #ddd;
      .img {
        display: block;
        width: 1.62rem;
        height: 1.62rem;
        background-color: skyblue;
        margin-right: 0.3rem;
        float: left;
      }
      div {
        width: 70%;
        display: flex;
        flex-direction: column;
        span {
          font-size: 0.3rem;
          line-height: 0.36rem;
        }
        p {
          margin-top: 0.14rem;
          font-size: 0.26rem;
          color: #999;
        }
        .pri {
          display: flex;
          font-size: 0.3rem;
          justify-content: space-between;
          margin-top: 0.3rem;
          span:last-child {
            color: #999;
          }
        }
      }
    }
  }
}
</style>

