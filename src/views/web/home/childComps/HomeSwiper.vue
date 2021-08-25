<template>
  <div class="home-swiper">
    <swiper>
      <swiper-item v-for="(banner, index) in banners" :key="index">
        <a href=""><img :src="banner.imgSrc" /></a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  components: { Swiper, SwiperItem },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.home-swiper {
  width: 100%;
}
</style>