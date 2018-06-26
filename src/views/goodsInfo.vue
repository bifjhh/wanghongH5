<template>
  <div class="block">
    <el-carousel height="150px" trigger="hover">
      <el-carousel-item v-for="item in 4" :key="item">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {};
</script>

<style >
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel__indicator {
  height: 0.14rem;
  width: 0.14rem;
  border-radius: 100%;
  background-color: #fff;
  padding: 0;
  margin-right: 0.34rem;
}
.el-carousel__button {
  height: 0.14rem;
  width: 0.14rem;
  border-radius: 100%;
  background-color: #fff;
  padding: 0;
}
.el-carousel__indicator:last-child {
  margin-right: 0;
}
.el-carousel__indicators {
  bottom: 0.3rem;
}
.is-active {
  background-color: #ff5750;
}
</style>
