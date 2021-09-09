<template>
  <div class="sudoku">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Sudoku",
};
</script>
<style lang="scss" scoped>
.sudoku {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  flex-wrap: wrap;
}
.sudoku ::v-deep .sudoku-item:nth-child(1),
.sudoku ::v-deep .sudoku-item:nth-child(2),
.sudoku ::v-deep .sudoku-item:nth-child(4),
.sudoku ::v-deep .sudoku-item:nth-child(5) {
  border-right: 1px solid #f3f4f5;
  border-bottom: 1px solid #f3f4f5;
}
.sudoku ::v-deep .sudoku-item:nth-child(3),
.sudoku ::v-deep .sudoku-item:nth-child(6) {
  border-bottom: 1px solid #f3f4f5;
}
.sudoku ::v-deep .sudoku-item:nth-child(7),
.sudoku ::v-deep .sudoku-item:nth-child(8) {
  border-right: 1px solid #f3f4f5;
}
</style>