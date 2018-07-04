<template>
<div class="content">
  <header>
    <div @click="goBack"> <i class="el-icon-close"></i></div>
    <span >提交评价</span>
  </header>
 <div class="tit">
     <div class="img"></div>
     <span>歌莉娅 2018夏装新款修身显瘦气质名媛名...</span>
 </div>
 <div class="nothing"></div>
 <div class="info">
<textarea placeholder="添加评价详情"></textarea>
<div class="imgList">
<div class="add"></div>
</div>
 </div>
 <div class="nothing"></div>
 <div class="assess">
     <h3>店铺评价</h3>
    <div class="assessList" >
    <span >描述相符</span>
    <div>
        <i :class="index>chooseNum1?'el-icon-star-off':'el-icon-star-on'" v-for="(item,index) in 5" :key="index" @click="choose1(index)" ></i>
    </div>
    </div>
        <div class="assessList" >
    <span >物流服务</span>
    <div>
        <i :class="index>chooseNum2?'el-icon-star-off':'el-icon-star-on'" v-for="(item,index) in 5" :key="index" @click="choose2(index)" ></i>
    </div>
    </div>
    <div class="assessList" >
    <span >服务态度</span>
    <div>
        <i :class="index>chooseNum3?'el-icon-star-off':'el-icon-star-on'" v-for="(item,index) in 5" :key="index" @click="choose3(index)" ></i>
    </div>
    </div>

 </div>
  <div class="saveInfo">
    <button @click="saveInfo">提交评价</button>
  </div>
</div>

</template>
<script>
import { addressList } from "../assets/addressList.js";
export default {
  data() {
    return {
      chooseNum1: -1,
      chooseNum2: -1,
      chooseNum3: -1
    };
  },

  methods: {
    saveInfo() {},
    goBack() {
      window.history.back(-1);
    },
    choose1(e) {
      this.chooseNum1 = e;
    },
    choose2(e) {
      this.chooseNum2 = e;
    },
    choose3(e) {
      this.chooseNum3 = e;
    }
  }
};
</script>
<style lang="scss" scoped>
.content {
  height: 100vh;
  background-color: #fff;
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
  .tit {
    display: flex;
    align-items: center;
    height: 1rem;
    padding: 0 0.28rem;
    background-color: #fff;
    .img {
      width: 0.7rem;
      height: 0.7rem;
      background-color: #ffc350;
      border-radius: 8px;
      margin-right: 0.2rem;
    }
    span {
      font-size: 0.3rem;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    padding: 0.28rem 0.28rem;
    background-color: #fff;
    box-shadow: 0px 2px 4px 0px rgba(31, 28, 29, 0.05);
    textarea {
      height: 1.2rem;
      font-size: 0.3rem;
    }
  }
  .imgList {
    background-color: #fff;
    margin-top: 0.2rem;
    .add {
      height: 1.6rem;
      width: 1.6rem;
      background-color: skyblue;
      border-radius: 8px;
      display: inline-block;
      margin-right: 0.1rem;
      margin-bottom: 0.2rem;
    }
    .add:nth-of-type(4n) {
      margin-right: 0;
    }
  }
  .assess {
    padding: 0.28rem 0.28rem;
    background-color: #fff;
    h3 {
      font-weight: normal;
      font-size: 0.3rem;
      color: #666;
      margin-top: 0.2rem;
    }
    .assessList {
      margin-top: 0.45rem;
      display: flex;
      align-items: center;
      span {
        font-size: 0.3rem;
      }
      div {
        i {
          margin-left: 0.39rem;
          font-size: 0.5rem;
        }
        .el-icon-star-on {
          color: #ff5750;
        }
      }
    }
  }
  .nothing {
    background-color: #f5f5f5;
    height: 0.2rem;
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

