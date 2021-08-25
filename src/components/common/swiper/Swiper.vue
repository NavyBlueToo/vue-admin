<template>
  <div class="swiper">
    <div class="swiper-banners" @mouseenter="bannerMouseClick" @mouseleave="bannerMouseLeave" @mousedown="bannerMouseDown">
      <slot></slot>
    </div>
    <div class="indicator" v-if="showIndicator && bannerCount > 1">
      <div class="indi-item" v-for="(item, index) in bannerCount" :class="{active: index === currentIndex - 1 }" :key="index" @click="indicatorClick"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  /**
   * interval 轮播间隔/ms
   * duration 轮播速度/ms
   * moveRatio 拖动比率/0~1
   * showIndicator 是否显示下方播放图标
   */
  props: {
    interval: {
      type: Number,
      default: 3000,
    },
    duration: {
      type: Number,
      default: 300,
    },
    moveRatio: {
      type: Number,
      default: 0.25,
    },
    showIndicator: {
      type: Boolean,
      default: true,
    },
  },
  /**
   * bannerCount banner图组件的数量
   * totalWidth 组件显示宽度(不包含隐藏部分)
   * swiperStyle 当前显示图片的样式
   * currentIndex 显示图片的编号，默认显示第一张
   * scrolling 滚动开关
   */
  data: function () {
    return {
      bannerCount: 0,
      totalWidth: 0,
      swiperStyle: {},
      currentIndex: 1,
      scrolling: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.handleDom();
      this.startTimer();
    }, 500);
    this.listenerResize();
  },
  watch: {
    totalWidth(val) {
      this.totalWidth = val;
      this.scrollContent(-this.currentIndex * this.totalWidth);
    },
  },
  /**
   * updateTotalWidth() 获取组件宽度
   * listenerResize() 监听浏览器窗口变化，实时获取组件宽度
   * startTimer() 定时器 -> 开始滚动
   * stopTimer() 定时器 -> 停止滚动
   * handleDom() 给组件前后各添加1张图片
   * scrollContent(position) 变换滚动位置,position位移量，-/+ 代表方向
   * setTransform(position) 设置滚动动画,position位移量，-/+ 代表方向
   * checkPosition() 检测滚动中banner图是第几张
   * bannerMouseClick() 鼠标移入，停止滚动
   * bannerMouseLeave() 鼠标移出，开始滚动
   * bannerMouseDown() 鼠标拖动事件
   * indicatorClick() 点击标识
   */
  methods: {
    updateTotalWidth() {
      this.totalWidth = document.querySelector(".swiper-banners").offsetWidth;
      console.log("------------");
    },
    listenerResize() {
      let that = this;
      window.onresize = function () {
        that.updateTotalWidth();
      };
    },
    startTimer() {
      this.playTimer = window.setInterval(() => {
        this.currentIndex++;
        this.scrollContent(-this.currentIndex * this.totalWidth);
      }, this.interval);
    },
    stopTimer() {
      window.clearInterval(this.playTimer);
    },
    handleDom() {
      let bannerEl = document.querySelector(".swiper-banners");
      let bannersEls = bannerEl.getElementsByClassName("swiper-item");
      this.bannerCount = bannersEls.length;
      if (this.bannerCount > 1) {
        let bannerFirst = bannersEls[0].cloneNode(true);
        let bannerLast = bannersEls[this.bannerCount - 1].cloneNode(true);
        bannerEl.insertBefore(bannerLast, bannersEls[0]);
        bannerEl.appendChild(bannerFirst);
        this.totalWidth = bannerEl.offsetWidth;
        this.swiperStyle = bannerEl.style;
      }
      this.setTransform(-this.totalWidth);
    },
    scrollContent(position) {
      this.scrolling = true;
      this.swiperStyle.transition = "transform" + this.duration + "ms";
      this.setTransform(position);
      this.checkPosition();
      this.scrolling = false;
    },
    setTransform(position) {
      this.swiperStyle.transform = `translate3d(${position}px,0,0)`;
      this.swiperStyle["-webkit-transform"] = `translate3d(${position}px,0,0)`;
      this.swiperStyle["-ms-transform"] = `translate3d(${position}px,0,0)`;
    },
    checkPosition() {
      window.setTimeout(() => {
        this.swiperStyle.transition = "0ms";
        if (this.currentIndex >= this.bannerCount + 1) {
          this.currentIndex = 1;
          this.setTransform(-this.currentIndex * this.totalWidth);
        } else if (this.currentIndex <= 0) {
          this.currentIndex = this.bannerCount;
          this.setTransform(-this.currentIndex * this.totalWidth);
        }
      }, this.duration);
    },
    bannerMouseClick() {
      this.stopTimer();
    },
    bannerMouseLeave() {
      this.startTimer();
    },
    bannerMouseDown(e) {
      if (this.scrolling) {
        return;
      }
      this.stopTimer();
      this.startX = e.touches[0].pageX;
    },
    indicatorClick() {
      // this.currentIndex = index - 1;
      // let that = this;
      // debounce(that.scrollContent(-index * this.totalWidth), 500);
    },
  },
};
</script>
<style lang="scss" scoped>
.swiper {
  position: relative;
  overflow: hidden;
}
.swiper-banners {
  display: flex;
}
.indicator {
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  bottom: 30px;
}
.indi-item {
  box-sizing: border-box;
  width: 14px;
  height: 14px;
  border-radius: 10px;
  line-height: 14px;
  text-align: center;
  font-size: 12px;
  background-color: #fff;
  margin: 0 6px;
  transition: all 0.5s;
}
.indi-item.active {
  width: 14px;
  background-color: #001eb4;
}
</style>