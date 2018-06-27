<template>
  <div class="content">
    <div class="banner">
    </div>
    <div class="head">
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
      <div class="discounts">
        <div class="one" v-for="(item,index) in discounts" :key="index">
          <span>折</span>
          <div class="one_info">全店满15.00元包邮</div>
        </div>
      </div>
      <div class="ticket_list">
        <div class="ticket_box" :style="{width:3*4.1+'rem'}">
          <div class="ticket" v-for="item in 3" :key="item">
            <div class="ticket_l">
              ￥<span>800</span>
            </div>
            <div class="ticket_r">
              <div class="number">满8000可用</div>
              <div class="time">有效期至2018.07.01</div>
            </div>
            <span class="xian"></span>
          </div>
        </div>  
      </div>
    </div>
    <div class="tab">
      <div class="tabnav" v-if="1">
        <div :class="controlClass==1 ? 'active' : '' "   ref="content" @click="goTop(1)">新品上市</div>
        <div @click="goTop(2)" :class="controlClass==2 ? 'active' : '' " >全部商品</div>
      </div>
      <div class="product_box" v-if="1">
        <div class="product_title">
          新品上市
        </div>
        <GoodsTmp1 />
      </div>
      <div class="all_product ">
        <div class="all_title" ref="allShops">
          全部商品
        </div>
        <GoodsTmp2 />
        <GoodsTmp3 />
        <div class="get_all" @click="goList">查看全部商品</div>
      </div>
    </div>
  </div>
</template>

<script>
import GoodsTmp1 from "@/components/GoodsTmp1";
import GoodsTmp2 from "@/components/GoodsTmp2";
import GoodsTmp3 from "@/components/GoodsTmp3";
export default {
  components: {
    GoodsTmp1,
    GoodsTmp2,
    GoodsTmp3
  },
  created() {
    let that = this;
    // that.$http.post("", { apiCode: "_diantailist_001" }).then(res => {
    //   if (res.status == 200 && res.statusText == "OK") {
    //     that.webview = res.data.info.link_to;
    //   }
    // });
  },

  data: () => ({
    discounts: [1, 2, 3],
    controlClass: 1
  }),
  methods: {
    goList() {
      document.documentElement.scrollTop = 0;
      this.$router.push({
        path: `/goodsList/${3}`
      });
    },
    goTop(e) {
      let total = "";
      if (e == 1) {
        this.controlClass = 1;
        total = this.$refs.content.offsetTop;
      } else {
        this.controlClass = 2;
        total = this.$refs.allShops.offsetTop;
      }
      let distance =
        document.documentElement.scrollTop || document.body.scrollTop;
      let step = total / 50;
      if (total > distance) {
        smoothDown();
      } else {
        let newTotal = distance - total;
        step = newTotal / 50;
        smoothUp();
      }
      function smoothDown() {
        if (distance < total) {
          distance += step;
          document.body.scrollTop = distance;
          document.documentElement.scrollTop = distance;
          setTimeout(smoothDown, 10);
        } else {
          document.body.scrollTop = total;
          document.documentElement.scrollTop = total;
        }
      }
      function smoothUp() {
        if (distance > total) {
          distance -= step;
          document.body.scrollTop = distance;
          document.documentElement.scrollTop = distance;
          setTimeout(smoothUp, 10);
        } else {
          document.body.scrollTop = total;
          document.documentElement.scrollTop = total;
        }
      }
    }
  }
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
.discounts {
  background-color: rgba(255, 87, 80, 0.03);
  .one {
    height: 0.74rem;
    border-bottom: 1px solid #e5e5e5;
    padding-left: 0.33rem;
    display: flex;
    align-items: center;
    span {
      color: #fff;
      background-image: linear-gradient(59deg, #ff5750 0%, #ff8e50 100%),
        linear-gradient(#ff5750, #ff5750);
      background-blend-mode: normal, normal;
      border-radius: 4px;
      font-size: 8px;
      padding: 0 2px;
    }
    .one_info {
      margin-left: 0.4rem;
      font-size: 12px;
      color: #333333;
    }
  }
}
.ticket_list {
  height: 1.68rem;
  background-color: #fff;
  padding-left: 0.28rem;
  box-shadow: 0px 2px 4px 0px rgba(31, 28, 29, 0.05);
  overflow-x: scroll;
  .ticket_box {
    height: 100%;
  }
  .ticket {
    position: relative;
    margin-top: 0.25rem;
    display: flex;
    justify-content: space-between;
    float: left;
    width: 3.8rem;
    height: 1.2rem;
    background-image: linear-gradient(59deg, #ff635c 0%, #ffb08d 100%),
      linear-gradient(#ffa777, #ffa777);
    background-blend-mode: normal, normal;
    border-radius: 10px;
    margin-right: 0.24rem;
    color: #ffffff;

    .xian {
      position: absolute;
      left: 1.23rem;
      top: 0;
      height: 100%;
      border-left: 1px dashed #fff;
    }
    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 1.23rem;
      width: 0.3rem;
      height: 0.3rem;
      background-color: #fff;
      border-radius: 50%;
      overflow: hidden;
      transform: translate(-50%, -55%);
    }
    &:after {
      top: initial;
      bottom: 0;
      transform: translate(-50%, 55%);
    }
    .ticket_l {
      height: 100%;
      width: 1.23rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      span {
        font-size: 17px;
      }
    }
    .ticket_r {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 12px;
      padding-left: 0.2rem;
    }
  }
  .already {
    background-color: rgba(255, 255, 255, 0.5);
    opacity: 0.5;
  }
}
.tab {
  margin-top: 0.2rem;
  background-color: #fff;
  padding: 0 0.28rem;
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
    }
    .get_all {
      height: 0.88rem;
      line-height: 0.88rem;
      border-radius: 8px;
      border: solid 1px #dddddd;
      text-align: center;
    }
  }
}
</style>
