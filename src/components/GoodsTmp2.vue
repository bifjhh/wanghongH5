<template>
  <div class="product_list" @click="go">
    <div class="product" v-for="item in 8" :key="item">
      <div class="goods_img"></div>
      <div class="goods_ctn">
        <div class="g_info">shu uemura植村秀小上衣</div>
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
  methods: {
    go() {
      this.$router.push({
        name: "GoodsInfo"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.product_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .product {
    width: 3.3rem;
    height: 5rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 0.3rem;
    border-right: 1px solid #eee;
    .goods_img {
      width: 3.3rem;
      height: 3.45rem;
      background-color: #ccc;
      border-radius: 5px;
    }
    .g_info {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      font-size: 13px;
    }
    .goods_ctn {
      margin-top: 0.2rem;
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 0 0.15rem;
      .g_num {
        margin-top: 0.4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .price {
          font-size: 13px;
          color: #ff5750;
          span {
            font-size: 18px;
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
