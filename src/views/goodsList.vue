<template>
  <div class="content">
    <div class="banner">
    </div>
    <div class="head" v-show="controlClass==1||controlClass==2">
      <div class="title">
        <div class="shop_logo"></div>
        <div class="shop_name">Shu-uemura/植村秀</div>
        <div class="site">日本</div>
      </div>
      <div class="label">
        <div>"#自制一杯detoxwater"</div>
        <div>"#好吃不贵"</div>
        <div>#低卡料理</div>
        <div>#大美</div>
      </div>
      <div class="shop_info">
        “植村秀”品牌起名源于其品牌创始人，当今国际世界著名化妆艺术大师植村秀先生。作为日本第一植村秀”品牌起名源于其品牌创始人，当今国际世界著名化妆艺术大师植村秀先生。作为日本第一“
      </div>
    </div>
    <div class="headTop" v-show="controlClass==3||controlClass==4">
      <div class="title">
        <div class="shop_tit"></div>
        <div class="shop_name">Shu-uemura/植村秀</div>
        <div class="site">日本</div>
      </div>
    </div>

    <div class="tab">
      <div class="all_product ">
        <div class="all_title" ref="allShops" v-show="controlClass==1||controlClass==2">
          全部商品
        </div>
          <div class="all_title1" ref="allShops" v-show="controlClass==3||controlClass==4">
          <div>综合</div>
          <div>销量</div>
          <div class="price">价格 <span class="arrow"><i class="el-icon-caret-top"></i> <i class="el-icon-caret-bottom"></i></span></div>
        </div>
        <GoodsTmp1 v-show="controlClass==1" />
        <GoodsTmp2 v-show="controlClass==2" />
        <GoodsTmp3 v-show="controlClass==3" />
        <GoodsTmp1 v-show="controlClass==4" />
        
      </div>
    </div>
  </div>
</template>
<script>
import GoodsTmp2 from "@/components/GoodsTmp2";
import GoodsTmp1 from "@/components/GoodsTmp1";
import GoodsTmp3 from "@/components/GoodsTmp3";
export default {
  components: {
    GoodsTmp1,
    GoodsTmp2,
    GoodsTmp3
  },
  created() {
    let that = this;
    this.controlClass = this.$route.params.id;
    // that.$http.post("", { apiCode: "_diantailist_001" }).then(res => {
    //   if (res.status == 200 && res.statusText == "OK") {
    //     that.webview = res.data.info.link_to;
    //   }
    // });
  },

  data: () => ({
    controlClass: 1
  }),
  methods: {}
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 3.2rem;
  background-color: #ccc;
}
.head {
  background-color: #fff;
}
.headTop {
  position: absolute;
  top: 1.3rem;
  .shop_tit {
    width: 1.3rem;
    height: 1.3rem;
    background-color: #ffffff;
    box-shadow: 0px 3px 8px 0px rgba(0, 6, 13, 0.2);
    border-radius: 5px;
    position: absolute;
    left: 0;
  }
}
.title {
  height: 1rem;
  margin-left: 0.28rem;
  position: relative;
  padding-left: 1.6rem;
  color: #333;
  padding-top: 0.2rem;
  .shop_logo {
    width: 1.3rem;
    height: 1.3rem;
    background-color: #ffffff;
    box-shadow: 0px 3px 8px 0px rgba(0, 6, 13, 0.2);
    border-radius: 5px;
    position: absolute;
    left: 0;
    top: -0.3rem;
  }

  .shop_name {
    font-size: 18px;
    font-weight: 600;
  }
  .site {
    font-size: 12px;
  }
}
.label {
  padding: 0.3rem 0.28rem;
  display: flex;
  flex-wrap: wrap;
  div {
    background-color: rgba(255, 87, 80, 0.12);
    border-radius: 22px;
    padding: 0.05rem 0.12rem;
    margin-left: 0.18rem;
    margin-bottom: 0.2rem;
    font-size: 11px;
    color: #ff5750;
  }
  div:nth-of-type(1) {
    margin-left: 0;
  }
}
.shop_info {
  padding: 0 0.28rem;
  margin-bottom: 0.45rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 14px;
  line-height: 21px;
  color: #666666;
}

.tab {
  background-color: #fff;
  padding-bottom: 0.4rem;
  .tabnav {
    display: flex;
    border-bottom: 1px solid #eee;
    div {
      flex: auto;
      height: 1rem;
      line-height: 1rem;
      text-align: center;
      font-size: 15px;
      color: #333333;
    }
    div.active {
      border-bottom: 1px solid #ff5750;
    }
  }
  .product_box {
    padding-top: 0.13rem;
    .product_title {
      height: 0.94rem;
      font-size: 17px;
      color: #333333;
      line-height: 0.94rem;
    }
  }
  .all_product {
    .all_title {
      font-size: 17px;
      height: 0.98rem;
      line-height: 0.98rem;
      padding: 0 0.28rem;
    }
    .product_list {
      padding: 0 0.28rem;
    }
    .get_all {
      height: 0.88rem;
      line-height: 0.88rem;
      border-radius: 8px;
      border: solid 1px #dddddd;
      text-align: center;
    }
    .all_title1 {
      font-size: 17px;
      height: 0.98rem;
      line-height: 0.98rem;
      display: flex;
      justify-content: space-around;
      border-bottom: 1px solid #ddd;
      margin-bottom: 0.3rem;
    }
    .arrow {
      display: flex;
      flex-direction: column;
      position: relative;
    }
    .price {
      display: flex;
    }
    .el-icon-caret-top {
      position: absolute;
      top: 0.25rem;
    }
    .el-icon-caret-bottom {
      position: absolute;
      top: 0.4rem;
    }
  }
}
</style>
