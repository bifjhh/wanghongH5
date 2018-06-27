<template>
<div class="addressList">
   <div class="img">
       <i class="el-icon-location"></i>
   </div>
   <div class="addressInfo">
      <div>
          <span>收货人：</span> <span>小三毛</span>
          <span>11111111111</span>
      </div>
      <p>浙江省 杭州市 西湖区 古墩路616号 同人精华大厦C座6楼 杭州启博科技有限公司</p> 
   </div>
   <div class="moreInfo">
       <i class="el-icon-arrow-right"></i>
   </div>
</div>
</template>

<script>
export default {
  methods: {}
};
</script>

<style lang="scss" scoped>
.addressList {
  display: flex;
  box-shadow: 0px 2px 4px 0px rgba(31, 28, 29, 0.05);
  padding: 0.33rem 0;
  .img {
    font-size: 0.6rem;
    color: #ff5750;
    height: 100%;
    line-height: 2.5rem;
    width: 0.48rem;
    margin-right: 0.1rem;
  }
  .addressInfo {
    font-size: 0.34rem;
    div {
      margin-bottom: 0.3rem;
      span {
        margin-right: 0.1rem;
      }
      span:last-child {
        margin-right: 0;
        margin-left: 0.3rem;
      }
    }
    p {
      font-size: 0.26rem;
    }
  }
  .moreInfo {
    margin-left: 0.7rem;
    font-size: 0.4rem;
  }
}
</style>
