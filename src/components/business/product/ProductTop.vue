<template>
  <div class="product-top clear-fix">
    <div class="top-left fl">
      <h2>{{topTitle}}</h2>
      <span class="hot fw">{{productContents}}</span>
      <p>种型号在售</p>
      <slot name="button" />
    </div>
    <div class="top-right fl">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductTop",
  props: {
    topTitle: {
      type: String,
      default() {
        return "";
      },
    },
    productContents: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.top-left {
  width: 68.6%;
  margin-right: 1.4%;
}
span,
p,
h2 {
  float: left;
}
h2 {
  font-weight: 400;
}
p {
  margin-top: 5px;
  text-indent: 5px;
}
span {
  margin-top: 5px;
  margin-left: 15px;
  padding-left: 10px;
  border-left: 3px solid var(--color-text);
}
.top-right {
  width: 28%;
  margin-left: 2%;
}
</style>