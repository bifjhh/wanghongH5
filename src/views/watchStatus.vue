<template>
    <div class="content">
        <header>
            <div @click="goBack"> <i class="el-icon-close"></i></div>
            <span>查看物流</span>
        </header>
                <div class="orderInfo">
                <div class="orderList">
                    <div style="color:#ff5750;"><span>物流公司：</span >申通快递</div>
                </div>
                <div class="orderList">
                <div><span>运单编号：</span>123213213213213121</div>
                    <button>复制</button>
                </div>
                <div class="orderList">
                    <div><span>物流电话：</span>11111111111</div>
                </div>
            </div>
            <div class="arrive">
                <h3>物流跟踪</h3>
                <div class="goInfo">
                    <div class="timeI">
                    <p>06-21</p>
                    <span>10:58</span>
                    </div>
                    <div class="arriveL">
                        <div></div>
                        <span></span>
                    </div>
                    <div class="arriveAt">
                    <p>已签收</p>
                    <span>浙江萧山自派站，派件已签收，签收人是同行签收。</span>
                    </div>
                </div>
                                <div class="goInfo">
                    <div class="timeI">
                    <p>06-21</p>
                    <span>10:58</span>
                    </div>
                    <div class="arriveL">
                        <div></div>
                        <span></span>
                    </div>
                    <div class="arriveAt">
                    <p>已签收</p>
                    <span>浙江萧山自派站，派件已签收，签收人是同行签收。</span>
                    </div>
                </div>
            </div>
            
    </div>
</template>
<script>
export default {
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
    div {
      position: absolute;
      font-size: 0.4rem;
    }
  }
  .orderInfo {
    background-color: #fff;
    padding: 0.24rem 0.28rem;
    box-shadow: 0px 2px 4px 0px rgba(31, 28, 29, 0.05);
    margin-bottom: 0.2rem;
    .orderList {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.2rem;
      div {
        font-size: 0.28rem;
        span {
          margin-right: 0.2rem;
          color: #333;
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
  .arrive {
    padding: 0 0.28rem;
    background-color: #fff;
    h3 {
      font-weight: normal;
      font-size: 0.28rem;
      height: 0.88rem;
      line-height: 0.88rem;
      border-bottom: 1px solid #e5e5e5;
      margin-bottom: 0.4rem;
    }
  }
  .goInfo {
    display: flex;
    margin-bottom: 0.1rem;
    .timeI {
      font-size: 0.22rem;
      text-align: right;
      width: 0.8rem;
      line-height: 0.42rem;
      span {
        color: #999;
      }
    }
    .arriveL {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 0.21rem;
      div {
        height: 0.5rem;
        width: 0.5rem;
        background-color: skyblue;
        border-radius: 50%;
        margin-bottom: 0.1rem;
      }
      span {
        height: 1.56rem;
        width: 1px;
        background-color: #ccc;
      }
    }
    .arriveAt {
      display: flex;
      flex-direction: column;
      p {
        font-size: 0.28rem;
        color: #333;
        margin-bottom: 0.24rem;
      }
      span {
        font-size: 0.24rem;
        color: #999;
        line-height: 0.34rem;
      }
    }
  }
}
</style>
