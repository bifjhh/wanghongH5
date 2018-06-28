<template>
    <div class="content">
        <div class="info">
            <div class="title">
                <div></div>
                <span>NANA家</span>
            </div>
            <div class="goodsInfo">
                <div class="img"></div>
                <div>
                <span>时尚套装女装2018夏装新款修身显瘦气质名媛韩版小香风夏季两件套...</span>
                <p> 格子长袖；M</p>
                <p class="pri">
                    <span>￥322.00</span>
                    <span>×1</span>
                </p>
                </div>
            </div>
            <div class="baseInfo">
                <span>运费</span>
                <p><span>+</span>￥0.01</p>
            </div>
            <div class="baseInfo">
                <span>优惠</span>
                <p>满200元减2元 <i class="el-icon-arrow-right"></i> </p>
            </div>
                <div class="baseInfo">
                <span>合计</span>
                <p class="goodsPri">￥320.00</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.info {
  .title {
    display: flex;
    align-items: center;
    padding: 0.24rem 0;
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
        color: #ff5750;
        font-size: 0.3rem;
        justify-content: space-between;
        span:last-child {
          color: #999;
        }
      }
    }
  }
  .baseInfo {
    display: flex;
    justify-content: space-between;
    height: 0.75rem;
    border-top: 1px solid #ddd;
    align-items: center;
    font-size: 0.28rem;
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
</style>
