<template>
<div class="content">
    <div class="addressInfo">
        <addressInfo></addressInfo>
    </div>
</div>
</template>

<script>
import addressInfo from "@/components/addressInfo";
export default {
  components: {
    addressInfo
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.content {
  padding: 0 0.28rem;
  background-color: #fff;
}
</style>
