<template>
<div class="content">
<commont></commont>
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
  })
};
</script>

<style lang="scss" scoped>
</style>
