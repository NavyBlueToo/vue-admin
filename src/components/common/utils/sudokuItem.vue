<template>
  <div class="sudoku-item">
    <slot />
  </div>
</template>

<script>
export default {
  name: "sudokuItem",
};
</script>
<style lang="scss" scoped>
.sudoku-item {
  position: relative;
  flex: 0 0 33.333%;
}
</style>