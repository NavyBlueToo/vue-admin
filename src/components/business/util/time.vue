<template>
  <div class="time-temp">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TimeTemp",
};
</script>
<style lang="scss" scoped>
.time-temp {
  height: 55px;
  padding-top: 40px;
  font-size: 12px;
}
</style>