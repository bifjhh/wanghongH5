<template>
<div class="listContent">
  <div class="noAddress"  @click="goAddress">
    <div>
    <i class="el-icon-location"></i>
    <span>请手动添加地址</span>
    </div>
    <span>
    <i class="el-icon-arrow-right"></i>
    </span>
  </div>
    <div class="addressInfo" @click="goAddress">
        <addressInfo></addressInfo>
    </div>
    <div class="buyList">
      <buyList></buyList>
    </div>

  <div class="ensure">
    <p>
     实付款：
     <i>￥</i>
  <span>322.00</span>
    </p>
    <button @click="goBuy">立即购买</button>
  </div>

</div>
</template>

<script>
import addressInfo from "@/components/addressInfo";
import buyList from "@/components/buyList";
export default {
  created() {},
  components: {
    addressInfo,
    buyList
  },
  methods: {
    goAddress() {
      this.$router.push({
        name: "AddAddress"
      });
    },
    goBuy() {
      this.$router.push({
        name: "OrderInfo"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.listContent {
  background-color: #fff;
  .addressInfo {
    padding: 0 0.28rem;
    box-shadow: 0px 2px 4px 0px rgba(31, 28, 29, 0.05);
    margin-bottom: 0.2rem;
  }
  .noAddress {
    margin-bottom: 0.2rem;
    padding: 0 0.28rem;
    height: 1.24rem;
    display: flex;
    align-items: center;
    line-height: 1.24rem;
    justify-content: space-between;
    box-shadow: 0px 2px 4px 0px rgba(31, 28, 29, 0.05);
    div {
      display: flex;
      align-items: center;
      span {
        font-size: 0.3rem;
      }
      i {
        font-size: 0.64rem;
        color: #ff5750;
        margin-right: 0.2rem;
      }
    }
    span {
      font-size: 0.4rem;
    }
  }
  .buyList {
    padding: 0 0.28rem;
    background-color: #fff;
  }
  .ensure {
    height: 0.98rem;
    width: 100%;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 0.11rem 0.28rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-size: 0.32rem;
      span {
        font-size: 0.36rem;
        color: #ff5750;
      }
      i {
        font-style: normal;
        color: #ff5750;
      }
    }
    button {
      height: 100%;
      width: 2.16rem;
      border-radius: 8px;
      background-color: #ff5750;
      color: #fff;
    }
  }
}
</style>
