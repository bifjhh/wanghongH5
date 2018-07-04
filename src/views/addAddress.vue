<template>
<div class="addList">
  <header>
    <div @click="goBack"> <i class="el-icon-close"></i></div>
    <span>收货地址</span>
  </header>
    <!-- 遮罩 -->
<div class="mask" v-show="controlMask" @touchmove.prevent>
   <div class="controlMask">
       <h3>您确定要删除该地址吗?</h3>
       <div>
           <span @click="ref">取消</span>
           <span @click="ensure">确定</span>
       </div>
   </div>
    </div>
<div class="addressList" v-for="(item,index) in list" :key="index">
    <div class="choose" :class="item.type?'chooseList':''" >
   <div class="addressInfo">
          <span>小三毛</span>
          <span>11111111111</span>
   </div>
      <p>浙江省 杭州市 西湖区 古墩路616号 同人精华大厦C座6楼 杭州启博科技有限公司</p> 
    </div>
   <div class="edit">
    <div class="editAdd">
         <img src="../assets/choose.png" alt="" v-show="item.type" @click="choose(index)">
        <span v-show="item.type" @click="choose(index)">默认地址</span>     
        <img src="../assets/unChoose.png" alt="" v-show="!item.type" @click="choose(index)">
        <span v-show="!item.type" @click="choose(index)">设为默认</span>     
    </div>
    <div class="controlAdd">
        <div @click="edit(index)">
        <img src="../assets/edit.png" alt="">
        <span>编辑</span>
        </div>
        <div @click="del(index)">
        <img src="../assets/delet.png" alt="">
        <span>删除</span>
        </div>
    </div>
   </div>
</div>
<div class="addNew" @click="addNew">
    <div>
        <img src="../assets/addNew.png" alt="">
        <span>新增地址</span>
    </div>
</div>
</div>
</template>
<script>
export default {
  data: () => ({
    list: [
      { type: true },
      { type: false },
      { type: false },
      { type: false },
      { type: false },
      { type: false },
      { type: false },
      { type: false },
      { type: false },
      { type: false },
      { type: false }
    ],
    controlMask: false,
    delIndex: 0,
    controlAdd: false
  }),
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.$http.post("/api/shop/user/address_list").then(res => {
        if (res.status == 200 && res.statusText == "OK") {
        }
      });
    },
    choose(e) {
      for (var i in this.list) {
        this.list[i].type = false;
      }
      this.list[e].type = !this.list[e].type;
    },
    del(e) {
      this.delIndex = e;
      this.controlMask = true;
    },
    ref() {
      this.controlMask = false;
    },
    ensure(e) {
      this.list.splice(this.delIndex, 1);
      this.controlMask = false;
    },

    edit(e) {
      this.$router.push({
        name: "AddressList",
        query: {
          id: 1
        }
      });
    },
    addNew() {
      this.$router.push({
        name: "AddressList"
      });
    },
    goBack() {
      window.history.back(-1);
    }
  }
};
</script>
 
<style lang="scss" scoped>
.addList {
  padding-bottom: 1rem;
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
  .newAdd {
    position: fixed;
    z-index: 1;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.6);
    .newMask {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 6.1rem;
      background-color: #ffffff;
      border-radius: 8px;
      .close {
        position: absolute;
        right: -0.15rem;
        top: -0.15rem;
        height: 0.38rem;
        width: 0.38rem;
      }
      h3 {
        text-align: center;
        font-weight: normal;
        font-size: 0.34rem;
        margin: 0.34rem 0;
      }
      textarea {
        height: 1.57rem;
        width: 100%;
        padding-left: 0.25rem;
        box-sizing: border-box;
        margin-top: 0.34rem;
      }
      button {
        width: 100%;
        height: 0.97rem;
        background-color: #f6f6f6;
        border-radius: 0px 0px 8px 8px;
        color: rgba(255, 87, 80, 0.5);
        font-size: 0.34rem;
      }
      .newInfo {
        height: 0.97rem;
        border-top: 1px solid #e5e5e5;
        width: 100%;
        padding-left: 0.25rem;
        line-height: 0.97rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
          font-size: 0.3rem;
        }
        input {
          font-size: 0.3rem;
        }
        i {
          margin-right: 0.24rem;
          font-size: 0.4rem;
        }
      }
    }
  }
  .mask {
    position: fixed;
    z-index: 1;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    left: 0;
    top: 0;
    .controlMask {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      height: 3.3rem;
      width: 6.1rem;
      border-radius: 8px;
      background-color: #fff;
      text-align: center;
      h3 {
        font-size: 0.34rem;
        font-weight: normal;
        margin-top: 1.04rem;
        margin-bottom: 1.04rem;
      }
      div {
        display: flex;
        height: 0.88rem;
        border-top: 1px solid rgba(4, 4, 4, 0.12);
        span {
          display: inline-block;
          width: 50%;
          height: 100%;
          border-right: 1px solid rgba(4, 4, 4, 0.12);
          text-align: center;
          font-size: 0.34rem;
          line-height: 0.8rem;
          color: #ff5750;
        }
      }
    }
  }
  .addressList {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    box-shadow: 0px 2px 4px 0px rgba(31, 28, 29, 0.05);
    margin-top: 0.2rem;
    .chooseList {
      background-color: #ffeeed;
    }
    .choose {
      padding: 0.28rem;
      p {
        font-size: 0.28rem;
        margin-top: 0.28rem;
      }
      .addressInfo {
        display: flex;
        justify-content: space-between;
        font-size: 0.3rem;
      }
    }
    .edit {
      padding: 0.26rem 0.28rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .editAdd {
        display: flex;
        align-items: center;
        position: relative;
        img {
          position: absolute;
          height: 0.3rem;
          width: 0.3rem;
        }
        span {
          margin-left: 0.45rem;
          color: #ff5750;
          font-size: 0.28rem;
        }
        span:last-child {
          color: #333;
        }
      }
      .controlAdd {
        display: flex;
        align-items: center;
        div {
          display: flex;
          align-items: center;
          margin-left: 0.37rem;
        }
        img {
          height: 0.28rem;
          width: 0.28rem;
          margin-right: 0.15rem;
        }
        span {
          font-size: 0.28rem;
        }
      }
    }
  }
  .addNew {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.98rem;
    background-color: #ffffff;
    box-shadow: 0px 3px 8px 0px rgba(0, 6, 13, 0.2);
    display: flex;
    align-items: center;
    div {
      width: 6.94rem;
      height: 0.76rem;
      background-color: #ff5750;
      border-radius: 8px;
      line-height: 0.76rem;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        display: inline-block;
        height: 0.3rem;
        width: 0.3rem;
        margin-right: 0.15rem;
      }
      span {
        font-size: 0.3rem;
        color: #fff;
      }
    }
  }
}
</style>
