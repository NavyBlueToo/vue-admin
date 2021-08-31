<template>
  <div id="home-business">
    <swiper>
      <swiper-item v-for="(yw_banner, yw_index) in yw_banners" :key="yw_index">
        <img slot="img" :src="yw_banner.imgSrc" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  components: { Swiper, SwiperItem },
  props: {
    yw_banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  name: "HomeBusiness",
};
</script>
<style lang="scss" scoped>
</style>