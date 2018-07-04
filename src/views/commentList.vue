<template>
<div class="content">
    <header>
    <div @click="goBack"> <i class="el-icon-close"></i></div>
    <span>评论列表</span>
  </header>
  <div class="commentInfo">
  <commont></commont>
  </div>
</div>
</template>

<script>
import commont from "@/components/goodsCommont";
export default {
  components: {
    commont
  },
  data: () => ({
    commontList: [1, 2]
  }),
  methods: {
    goBack() {
      window.history.back(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  background-color: #fff;
  .commentInfo {
    padding: 0 0.28rem;
  }
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
}
</style>
