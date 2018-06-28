<template>
<div class="addressList">
   <div class="addressInfo">
     <i class="el-icon-location"></i>
          <span>收货人：</span> <span>小三毛</span>
          <span>11111111111</span>
   </div>
    <div class="img">
       <i class="el-icon-location"></i>
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
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0.33rem 0;
  .img {
    padding-right: 0.5rem;
    display: flex;
    font-size: 0.3rem;
    width: 0.48rem;
    margin-right: 0.3rem;
    width: 100%;
    align-items: center;
    i {
      font-size: 0.64rem;
      color: #ff5750;
      margin-right: 0.2rem;
    }
    p {
      font-size: 0.26rem;
    }
  }
  .addressInfo {
    display: flex;
    i {
      font-size: 0.64rem;
      opacity: 0;
      margin-right: 0.2rem;
    }
    font-size: 0.34rem;
    span {
      margin-right: 0.1rem;
    }
    span:last-child {
      margin-right: 0;
      margin-left: 0.1rem;
    }
  }
  .moreInfo {
    position: absolute;
    right: 0rem;
    top: 50%;
    transform: translate(0, -50%);
    font-size: 0.4rem;
  }
}
</style>
