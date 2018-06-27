<template>
<div class="commont-list">
    <div class="com-tit">
        <div>
            <div class="img"></div>
            <span>间安妮</span>
        </div>
        <span>2018-11-11</span>
    </div>
    <p>穿了好几天才来评价的，真的很好！穿了好几天才来评价的，真的很好！</p>
    <div class="com-style">
        <span>款式：</span>
        <span>黄色长袖，L</span>
    </div>
</div>
</template>

<script>
export default {
  methods: {}
};
</script>

<style lang="scss" scoped>
.commont-list {
  border-top: 1px solid #ddd;
  padding: 0.24rem 0;
  .com-tit {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.2rem;
    span {
      color: #999;
      font-size: 0.3rem;
    }
    div {
      display: flex;
      align-items: center;
      color: #999;
      font-size: 0.3rem;
      .img {
        height: 0.46rem;
        width: 0.46rem;
        background-color: #999;
        border-radius: 100%;
        display: inline-block;
        margin-right: 0.1rem;
      }
    }
  }
  p {
    font-size: 0.3rem;
    line-height: 0.36rem;
    color: #333333;
    margin-bottom: 0.2rem;
  }
  .com-style {
    color: #999;
    span {
      font-size: 0.3rem;
      margin-right: 0.1rem;
    }
  }
}
</style>
