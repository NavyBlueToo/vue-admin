<template>
  <div id="home">
    <top-nav-bar />
    <home-swiper :banners='banners' />
  </div>
</template>

<script>
import topNavBar from "components/business/topNavBar/TopNavBar";
import HomeSwiper from "./childComps/HomeSwiper";

export default {
  components: { topNavBar, HomeSwiper },
  name: "Home",
  data() {
    return {
      banners: [
        { tiitle: "飞机", imgSrc: "img/banner/airplane-1.jpg" },
        { title: "产品", imgSrc: "img/banner/product-2.jpg" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
#home {
  height: 1500px;
}
</style>