<template>
  <div class="small-swiper clear-fix">
    <div class="swiper-item" v-for="(swiperItem,swiperIndex) in swiperData" :key="swiperIndex" :style="{transform:translateNo}">
      <a :href="swiperItem.link">
        <img :src="swiperItem.src" :alt="swiperItem.title" :title="swiperItem.description" @load="imgLoad" /></a>
    </div>
    <div class="ss-indicator" v-if="indicatorNum">
      <div class="indicator-item" v-for="(indicatorItem,indIndex) in indicatorNum" :key="indIndex">
        <span class="iconfont icon-radio-off-full" :style="{color:indIndex===swiperItemId?'#f3f4f5':''}" @click="indClick(indIndex)"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SmallSwiper",
  props: {
    swiperData: {
      type: Array,
      default() {
        return [];
      },
    },
    indicatorNum: {
      type: Number,
      default() {
        return 0;
      },
    },
    interval: {
      type: Number,
      default: 3000,
    },
  },
  data() {
    return {
      swiperItemNum: 0,
      swiperItemId: 0,
      translateNo: "",
      startItem: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.startTimer();
    }, 50);
  },
  methods: {
    imgLoad() {
      this.swiperItemNum = this.swiperData.length;
      this.$emit("swiperImgLoad");
    },
    indClick(index) {
      this.clearTimer();
      this.startItem = index;
      if (this.swiperItemId == index) return;
      this.swiperItemId = index;
      this.calculateTransform(index);
      this.startTimer();
    },
    calculateTransform(index) {
      for (let i = 0; i < this.swiperItemNum; i++) {
        this.translateNo = "translateX(" + index + "00%)";
      }
    },
    startTimer() {
      this.playTimer = window.setInterval(() => {
        if (this.startItem >= 0 && this.startItem < this.swiperItemNum - 1) {
          this.startItem++;
          this.indClick(this.startItem);
        } else if ((this.startItem = this.swiperItemNum - 1)) {
          this.startItem = 0;
          this.indClick(this.startItem);
        }
      }, this.interval);
    },
    clearTimer() {
      window.clearInterval(this.playTimer);
    },
  },
};
</script>
<style lang="scss" scoped>
a {
  display: block;
}
.small-swiper {
  display: flex;
  float: right;
  width: 300%;
}
.swiper-item {
  flex: 1;
  float: right;
  width: 100%;
  transition: transform 0.2s ease-in-out;
}
.swiper-item img {
  width: 100%;
}
.ss-indicator {
  position: absolute;
  display: flex;
  z-index: 1;
  width: 8%;
  right: 20%;
  bottom: 8%;
}
.indicator-item {
  flex: 1;
  cursor: pointer;
  margin-right: 30%;
}
</style>