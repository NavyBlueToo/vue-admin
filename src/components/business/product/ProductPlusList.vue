<template>
  <div class="product-plus-list">
    <slot />
  </div>
</template>

<script>
export default {
  name: "ProductPlusList",
};
</script>
<style lang="scss" scoped>
.product-plus-list {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
}
</style>