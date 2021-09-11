<template>
  <div class="type-title">
    <img :src="topImgSrc" alt="topImgDetail" :title="topImgDetail">
  </div>
</template>

<script>
export default {
  name: "ProductTypeTitle",
  props: {
    topImgSrc: {
      type: String,
      default() {
        return "";
      },
    },
    topImgDetail: {
      type: String,
      default() {
        return "";
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.type-title {
  margin-top: 50px;
}
img {
  width: 100%;
}
</style>