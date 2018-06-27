<template>
  <div class="product_list" @click="go">
    <div class="product" v-for="item in 3" :key="item">
      <div class="goods_img"></div>
      <div class="goods_ctn">
        <div class="g_info omit">shu uemura植村秀夏季针织显瘦连衣裙黑色百搭清新</div>
        <div class="g_num">
          <div class="price">
            ￥<span>98</span>.00
          </div>
          <div class="month_sum">
            月销1231笔
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {},

  data: () => ({}),
  methods: {
    go() {
      document.documentElement.scrollTop = 0;
      this.$router.push({
        name: "GoodsInfo"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.product_list {
  .product {
    height: 2.38rem;
    display: flex;
    margin-bottom: 0.13rem;

    .goods_img {
      width: 2.38rem;
      height: 2.38rem;
      background-color: #ccc;
      border-radius: 5px;
    }
    .goods_ctn {
      margin-left: 0.13rem;
      padding-left: 0.23rem;
      flex: 1;
      height: 2.38rem;
      display: flex;
      flex-direction: column;
      .g_info {
        margin-top: 0.28rem;
        font-size: 16px;
        padding-bottom: 0.1rem;
      }
      .g_num {
        margin-top: 0.4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .price {
          font-size: 13px;
          color: #ff5750;
          span {
            font-size: 21px;
          }
        }
        .month_sum {
          color: #999999;
          font-size: 11px;
        }
      }
    }
  }
}
</style>
