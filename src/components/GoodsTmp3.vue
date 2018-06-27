<template>
  <div class="product_list" @click="go">
    <div class="product" v-for="item in 3" :key="item">
      <div class="goods_img"></div>
      <div class="goods_ctn">
        <div class="g_info">
          <div class="tit">兰蔻夏季新款舒适简约短上衣</div>
          <div class="info">兰蔻「小黑瓶」，是全球首款以“基因保养”为主的精华兰蔻「小黑瓶」，是全球首款以“基因保养”为主的精华</div>
        </div>
        <div class="g_num">
          <div class="price">
            ￥<span>198</span>.00
            <s>566</s>
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
    height: 5.5rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 0.2rem;
    border: solid 1px #eeeeee;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    overflow: hidden;

    .goods_img {
      width: 100%;
      height: 3.44rem;
      background-color: #ccc;
    }
    .goods_ctn {
      padding: 0 0.18rem;
      flex: 1;
      height: 2.38rem;
      border-top: 1px solid #eee;
      display: flex;
      flex-direction: column;
      .g_info {
        margin-top: 0.28rem;
        font-size: 16px;
        padding-right: 0.16rem;
        div {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
        .info {
          font-size: 13px;
          color: #999;
          margin-top: 0.1rem;
        }
      }
      .g_num {
        margin-top: 0.25rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .price {
          font-size: 13px;
          color: #ff5750;
          span {
            font-size: 21px;
          }
          s {
            font-size: 14px;
            color: #999;
            margin-left: 0.4rem;
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
