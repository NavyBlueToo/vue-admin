<template>
  <div class="tabbar fn14">
    <div class="tabbars">
      <div class="tabbar-item" v-for="(tabbarItem ,tabbarIndex) in tabbarData" :key="tabbarIndex" @click="tabbarItemClick(tabbarIndex)">
        <a :href="tabbarItem.link" :class="{active:tabbarIndex===currentIndex}">{{tabbarItem.articleType}}</a>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
  props: {
    tabbarData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
      tabbarIndex: 0,
    };
  },
  methods: {
    tabbarItemClick(index) {
      this.tabbarIndex = index;
      this.currentIndex = index;
      this.$emit("setTabbarIndex", this.tabbarIndex);
    },
  },
};
</script>
<style lang="scss" scoped>
.tabbar {
  display: flex;
}
.tabbar > div {
  flex: 1;
}
.active {
  font-weight: 700;
  color: #001eb4;
  border-bottom: 2px solid #001eb4;
}
.tabbar-item {
  float: left;
  margin-right: 20px;
}
</style>