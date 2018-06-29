<template>
  <div class="contentInfo">
    <header>
    <div @click="goBack"> <i class="el-icon-arrow-left"></i></div>
    <div>
      <img src="../assets/share.png" alt="">
    </div>
  </header>
    <!-- 遮罩层 -->
    <div class="goodMask" v-show="controlMask==1" @touchmove.prevent>
      <div class="goodsInfo">
        <div class="goodsHead">
          <div class="img"></div>
          <div class="goodPri">
            <p>￥<span>233.00</span></p>
            <p> <i>已选</i> 格子长衫：M一件</p>
          </div>
          <div class="closeMask" @click="closeMask">
            <i class="el-icon-close"></i>
          </div>
        </div>
        <div class="goodsStyle">
          <h3>尺码</h3>
          <div class="styleList">
          <span v-for="(item,index) in styleList" :key="index" @click="choose(index)" :class="chooseStyle==index?'choose':''">X</span>
          </div>
        </div>
        <div class="goodsNum">
          <h3>数量</h3>
          <div>
            <span  @click="addNum">
              <i class="el-icon-plus"></i>
            </span>
            <i>{{buyNum}}</i>
            <span @click="subNum">
              <i class="el-icon-minus"></i>
            </span>
          </div>
        </div>
        <div class="ensure">
          <button @click="ensureInfo">确认</button>
        </div>
      </div>
    </div>
    <div class="block">
      <el-carousel height="150px" trigger="hover">
        <el-carousel-item v-for="item in 4" :key="item">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="info">
      <p>
        歌莉娅 2018夏装新款修身显瘦气质名媛韩版小香风 夏季连衣裙【预售6月18日】
      </p>
      <div class="price">
        <div>
          <span class="nowPri">
            <span>￥</span>322</span>
          <span>￥322</span>
        </div>
        <span>
            销量：1234
          </span>
      </div>
    </div>
    <div class="desc">
      <div class="list">
        <div>
          <span>描述</span>
          <span>西装领，直筒版型，印花衬衫。</span>
        </div>
      </div>
      <div class="list">
        <div>
          <span>已选</span>
          <span>西装领，直筒版型，印花衬衫。</span>
        </div>
        <div class="moreList">
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
    </div>
    <div class="commont">
      <div class="list">
        <div>
          <span>商品评价</span>
          <span>(998)</span>
        </div>
        <div class="moreList" @click="go">
          <span>更多</span>
          <span>
          <i class="el-icon-arrow-right"></i>
            </span>
        </div>
      </div>
      <commont v-for="(item,index) in commontList" :key="index"></commont>
    </div>
    <div class="goShop">
      <div class="shopName">
        <div class="img"></div>
        <span>
            NAN之家
          </span>
      </div>
      <div class="enterShop">
        <span>进店逛逛</span>
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
    <div class="shopInfo">
      <div class="shopTit">
        <span>商品详情</span>
      </div>
      <div class="imgList">
        <div></div>
      </div>
    </div>
    <div class="goBuy">
      <button @click="goBuy">
        立即购买
      </button>
    </div>
  </div>
</template>

<script>
import commont from "@/components/goodsCommont";
export default {
  components: {
    commont
  },
  data: () => ({
    commontList: [1, 2],
    controlMask: 0,
    styleList: [1, 2, 3, 4, 5],
    chooseStyle: 0,
    buyNum: 1
  }),
  methods: {
    go() {
      document.documentElement.scrollTop = 0;
      this.$router.push({
        name: "CommentList"
      });
    },
    choose(e) {
      this.chooseStyle = e;
    },
    closeMask() {
      this.controlMask = 0;
      // var mo = function(e) {
      //   e.preventDefault();
      // };
      // document.body.style.overflow = ""; //出现滚动条
      // document.removeEventListener("touchmove", mo, false);
    },
    goBuy() {
      this.controlMask = 1;
      // var mo = function(e) {
      //   e.preventDefault();
      // };
      // document.body.style.overflow = "hidden";
      // document.addEventListener("touchmove", mo, false); //禁止页面滑动
    },
    addNum() {
      this.buyNum = this.buyNum + 1;
    },
    subNum() {
      this.buyNum = this.buyNum - 1;
      if (this.buyNum <= 0) {
        // var mo = function(e) {
        //   e.preventDefault();
        // };
        // document.body.style.overflow = ""; //出现滚动条
        // document.removeEventListener("touchmove", mo, false);
        this.buyNum = 1;
        this.controlMask = 0;
      }
    },
    ensureInfo() {
      this.$router.push({
        name: "OrderList"
      });
    },
    goBack() {
      window.history.back(-1);
    }
  }
};
</script>

<style>
.block .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.block .el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.block .el-carousel__indicator {
  height: 0.14rem;
  width: 0.14rem;
  border-radius: 100%;
  background-color: #fff;
  padding: 0;
  margin-right: 0.34rem;
}
.block .el-carousel__button {
  height: 0.14rem;
  width: 0.14rem;
  border-radius: 100%;
  background-color: #fff;
  padding: 0;
}
.block .el-carousel__indicator:last-child {
  margin-right: 0;
}
.block .el-carousel__indicators {
  bottom: 0.3rem;
}
.block .el-carousel__button {
  background-color: #ff5750;
}
.block .el-carousel__indicator {
  background-color: #fff;
}
.block .is-active {
  background-color: rgba(255, 255, 255, 0.5);
}
.block .el-carousel__button {
  background-color: rgba(255, 255, 255, 0.5);
}
.contentInfo header {
  height: 0.88rem;
  width: 100%;
  position: absolute;
  line-height: 0.88rem;
  font-size: 0.36rem;
  text-align: center;
  padding: 0 0.28rem;
  box-sizing: border-box;
  margin-bottom: 0.05rem;
  z-index: 111;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.contentInfo header div {
  font-size: 0.4rem;
  color: #fff;
  line-height: 0.88rem;
  display: flex;
  align-items: center;
}
.contentInfo header div img {
  height: 0.32rem;
  width: 0.32rem;
  display: inline-block;
}
.contentInfo .info {
  padding: 0 0.28rem;
  padding-top: 0.39rem;
  height: 2.32rem;
  background-color: #fff;
  box-shadow: 0px 2px 4px 0px rgba(31, 28, 29, 0.05);
}
.contentInfo .info p {
  font-size: 0.3rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 0.42rem;
  letter-spacing: 0px;
  color: #333333;
  margin-bottom: 0.3rem;
}
.contentInfo .info .price {
  display: flex;
  justify-content: space-between;
  align-content: center;
  height: 0.4rem;
  line-height: 0.4rem;
}
.contentInfo .info .price div .nowPri {
  font-size: 0.4rem;
  letter-spacing: 0px;
  color: #ff5750;
  margin-right: 0.18rem;
}
.contentInfo .info .price div .nowPri > span {
  font-size: 0.3rem;
  color: #ff5750;
}
.contentInfo .info .price div span {
  font-size: 0.3rem;
  color: #999;
}
.contentInfo .info .price span {
  font-size: 0.3rem;
  color: #666;
}
.contentInfo .desc {
  margin-top: 0.21rem;
  padding: 0 0.28rem;
  background-color: #fff;
  box-shadow: 0px 2px 4px 0px rgba(31, 28, 29, 0.05);
}
.contentInfo .desc .list {
  height: 0.8rem;
  line-height: 0.8rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
}
.contentInfo .desc .list .moreList {
  line-height: 0.84rem;
}
.contentInfo .desc .list div i {
  display: inline-block;
  font-size: 0.36rem;
}
.contentInfo .desc .list:last-child {
  border-bottom: 0;
}
.contentInfo .desc .list span {
  font-size: 0.3rem;
}
.contentInfo .desc .list span:first-child {
  color: #999;
  margin-right: 0.16rem;
  font-size: 0.3rem;
}
.contentInfo .commont {
  margin-top: 0.21rem;
  padding: 0 0.28rem;
  background-color: #fff;
  box-shadow: 0px 2px 4px 0px rgba(31, 28, 29, 0.05);
}
.contentInfo .commont .list {
  height: 0.85rem;
  line-height: 0.85rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
}
.contentInfo .commont .list div span {
  font-size: 0.3rem;
  margin-right: 0.1rem;
}
.contentInfo .commont .list .moreList span {
  color: #999;
  margin-right: 0;
}
.contentInfo .commont .list div i {
  display: inline-block;
  font-size: 0.36rem;
}
.contentInfo .goShop {
  padding: 0 0.28rem;
  height: 1rem;
  line-height: 1rem;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  margin-top: 0.2rem;
}
.contentInfo .goShop .shopName {
  display: flex;
  align-items: center;
  font-size: 0.3rem;
}
.contentInfo .goShop .shopName .img {
  height: 0.52rem;
  width: 0.52rem;
  margin-right: 0.1rem;
  border-radius: 100%;
  background-color: #999;
}
.contentInfo .goShop .enterShop {
  font-size: 0.3rem;
  color: #ff5750;
}
.contentInfo .shopInfo {
  margin-top: 0.2rem;
  background-color: #fff;
}
.contentInfo .shopInfo .shopTit {
  height: 0.84rem;
  line-height: 0.84rem;
  font-size: 0.3rem;
  border-bottom: 1px solid #ddd;
}
.contentInfo .shopInfo .shopTit span {
  display: inline-block;
  padding-left: 0.28rem;
}
.contentInfo .shopInfo .imgList {
  display: flex;
  flex-direction: column;
}
.contentInfo .shopInfo .imgList div {
  height: 7.5rem;
  width: 100%;
  background-color: #999;
  margin-bottom: 0.2rem;
}
.contentInfo .goBuy {
  height: 1.1rem;
  width: 100%;
  text-align: center;
}
.contentInfo .goBuy button {
  display: inline-block;
  height: 0.89rem;
  width: 6.95rem;
  background-color: #fe713a;
  border-radius: 8px;
  margin: 0 auto;
  color: #fff;
  font-size: 0.34rem;
}
.contentInfo .goodMask {
  height: 100vh;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 111;
}
.goodMask .goodsInfo {
  background-color: #fff;
  padding: 0 0.28rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
.goodMask .goodsInfo .goodsHead {
  display: flex;
  align-content: center;
  position: relative;
  justify-content: space-between;
  padding-top: 0.32rem;
}
.goodMask .goodsInfo .goodsHead .img {
  height: 2.1rem;
  width: 2.1rem;
  position: absolute;
  background-color: skyblue;
  left: 0;
  top: -0.3rem;
  border-radius: 8px;
}
.goodMask .goodsInfo .goodsHead .goodPri {
  margin-left: 2.5rem;
}
.goodMask .goodsInfo .goodsHead .goodPri p {
  color: #ff5750;
  font-size: 0.28rem;
  margin-bottom: 0.32rem;
}
.goodMask .goodsInfo .goodsHead .goodPri p span {
  font-size: 0.4rem;
}
.goodMask .goodsInfo .goodsHead .goodPri p i {
  font-style: normal;
  font-size: 0.28rem;
  color: #333;
}
.goodMask .goodsInfo .goodsHead .closeMask {
  height: 0.5rem;
  width: 0.5rem;
  border: 1px solid #c5c5c5;
  font-size: 0.3rem;
  border-radius: 100%;
  text-align: center;
  color: #c5c5c5;
}
.goodMask .goodsInfo .goodsStyle {
  margin-top: 0.5rem;
}
.goodMask .goodsInfo .goodsStyle h3 {
  font-style: normal;
  font-size: 0.28rem;
  margin-bottom: 0.28rem;
  font-weight: normal;
}
.goodMask .goodsInfo .goodsStyle .styleList span {
  display: inline-block;
  height: 0.62rem;
  width: 1.2rem;
  line-height: 0.62rem;
  text-align: center;
  border-radius: 8px;
  background-color: #f4f4f4;
  margin-right: 0.32rem;
  margin-bottom: 0.3rem;
}
.goodMask .goodsInfo .goodsStyle .styleList span:nth-child(4n) {
  margin-right: 0;
}
.goodMask .goodsInfo .goodsStyle .styleList .choose {
  background-color: #ff5750;
  color: #fff;
}

.goodMask .goodsInfo .goodsNum {
  margin-top: 0.37rem;
}
.goodMask .goodsInfo .goodsNum h3 {
  font-style: normal;
  font-size: 0.28rem;
  margin-bottom: 0.28rem;
  font-weight: normal;
}
.goodMask .goodsInfo .goodsNum div {
  display: flex;
}
.goodMask .goodsInfo .goodsNum div span {
  display: inline-block;
  width: 0.62rem;
  height: 0.62rem;
  background-color: #f4f4f4;
  border-radius: 8px;
  line-height: 0.62rem;
  font-size: 0.3rem;
  color: #333;
  text-align: center;
}
.goodMask .goodsInfo .goodsNum div > i {
  display: inline-block;
  line-height: 0.63rem;
  font-style: normal;
  margin: 0 0.5rem;
}
.goodMask .goodsInfo .ensure {
  width: 100%;
  height: 0.76rem;
  margin-top: 1rem;
  margin-bottom: 0.12rem;
}
.goodMask .goodsInfo .ensure button {
  width: 100%;
  height: 100%;
  line-height: 0.76rem;
  text-align: center;
  border-radius: 8px;
  color: #fff;
  font-size: 0.3rem;
  margin: 0 auto;
  background-color: #ff5750;
}
</style>
