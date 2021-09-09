<template>
  <div class="single-bar clear-fix fn14">
    <div class="bar fl">
      <span>{{singleBarTitle}}</span>
    </div>
    <div class="more fr">
      <a :href="singleBarLink">
        <slot />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleBar",
  props: {
    singleBarTitle: {
      type: String,
      default() {
        return "";
      },
    },
    singleBarLink: {
      type: String,
      default() {
        return "";
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.bar {
  color: #001eb4;
  font-weight: 700;
  border-bottom: 2px solid #001eb4;
}
</style>