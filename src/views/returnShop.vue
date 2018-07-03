<template>
    <div class="content">
        <header>
            <div @click="goBack"> <i class="el-icon-close"></i></div>
            <span>退货售后申请</span>
        </header>
        <div class="goodsInfo">
            <div class="img"></div>
            <div>
                <span>时尚套装女装2018夏装新款修身显瘦气质名媛韩版小香风夏季两件套...</span>
                <p> ￥322.00</p>
                <p class="pri">
                    <span>格子长袖；M</span>
                    <span>×1</span>
                </p>
            </div>
        </div>
        <div class="priInfo">
            <span>退款金额：</span>
            ￥322.00
        </div>
        <div class="warnInfo">
        最多￥<span>322.00</span> ，含发货邮费￥<span>0.00</span>
        </div>
        <div class="reason">
            <span>退款原因：</span>
            <p>请选择<i class="el-icon-arrow-right"></i></p>
        </div>
    <div class="reasonInfo">
            <span>退款说明</span>
            <textarea placeholder="选填"></textarea>
        </div>
          <div class="saveInfo">
    <button @click="saveInfo">提交申请</button>
  </div>
    </div>
</template>
<script>
export default {
  methods: {
    goBack() {
      window.history.back(-1);
    },
    saveInfo() {}
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
  .goodsInfo {
    padding: 0.28rem 0.28rem;
    display: flex;
    border-top: 1px solid #ddd;
    background-color: #fff;
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
        margin-top: 0.1rem;
        color: #ff5750;
        font-size: 0.3rem;
      }
      .pri {
        display: flex;
        font-size: 0.26rem;
        justify-content: space-between;
        color: #999;
      }
    }
  }
  .priInfo {
    width: 100%;
    height: 0.88rem;
    line-height: 0.88rem;
    background-color: #ffffff;
    box-shadow: 0px 2px 4px 0px rgba(31, 28, 29, 0.05);
    margin-top: 0.2rem;
    font-size: 0.3rem;
    padding: 0 0.28rem;
    color: #ff5750;
    span {
      color: #333;
    }
  }
  .warnInfo {
    height: 0.86rem;
    width: 100%;
    padding: 0 0.28rem;
    line-height: 0.86rem;
    font-size: 0.26rem;
  }
  .reason {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 0.88rem;
    line-height: 0.88rem;
    background-color: #ffffff;
    box-shadow: 0px 2px 4px 0px rgba(31, 28, 29, 0.05);
    padding: 0 0.28rem;
    font-size: 0.28rem;
    margin-bottom: 0.2rem;
    p {
      color: #999;
      display: flex;
      align-items: center;
      i {
        font-size: 0.36rem;
        margin-left: 0.1rem;
      }
    }
  }
  .reasonInfo {
    background-color: #ffffff;
    box-shadow: 0px 2px 4px 0px rgba(31, 28, 29, 0.05);
    width: 100%;
    padding: 0 0.28rem;
    padding-top: 0.2rem;
    display: flex;
    span {
      display: block;
      font-size: 0.28rem;
      width: 20%;
    }
    textarea {
      font-size: 0.28rem;
      width: 80%;
      padding-left: 0.2rem;
      height: 1.7rem;
    }
  }
  .saveInfo {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 0.98rem;
    background-color: #fff;
    text-align: center;
    line-height: 0.98rem;
    box-shadow: 0px 3px 8px 0px rgba(0, 6, 13, 0.2);
    button {
      width: 6.94rem;
      height: 0.76rem;
      border-radius: 8px;
      background-color: #ff5750;
      font-size: 0.32rem;
      color: #fff;
    }
  }
}
</style>
