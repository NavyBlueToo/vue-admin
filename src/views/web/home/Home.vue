<template>
  <div id="home">
    <top-nav-bar />
    <home-swiper :banners='banners' />
    <home-news />
    <home-products :foldSwipers="foldSwipers" />
    <home-product-list :productList="productList" />
  </div>
</template>

<script>
import topNavBar from "components/business/topNavBar/TopNavBar";

import HomeSwiper from "./childComps/HomeSwiper";
import HomeNews from "./childComps/HomeNews";
import HomeProducts from "./childComps/HomeProducts";
import HomeProductList from "./childComps/HomeProductList";

export default {
  components: {
    topNavBar,
    HomeSwiper,
    HomeNews,
    HomeProducts,
    HomeProductList,
  },

  name: "Home",
  data() {
    return {
      banners: [
        { tiitle: "飞机", imgSrc: "img/banner/airplane-1.jpg" },
        { title: "产品", imgSrc: "img/banner/product-2.jpg" },
      ],
      yw_banners: [
        { title: "业务背景图-1", imgSrc: "img/yw_banner/yw_bgc_1.jpg" },
        { title: "业务背景图-2", imgSrc: "img/yw_banner/yw_bgc_2.jpg" },
        { title: "业务背景图-3", imgSrc: "img/yw_banner/yw_bgc_3.jpg" },
      ],
      foldSwipers: [
        {
          title: "航空润滑油",
          src: "img/productImg/航空润滑油.jpg",
          summarize:
            "航空润滑油主要用于各类航空发动机、启动机等部位，具备高低温兼顾的特点。目前主要厂家主要为中国石化、中国石油、壳牌、美孚、尼科等。",
        },
        {
          title: "航空液压油",
          src: "img/productImg/航空液压油.jpg",
          summarize:
            "航空润滑油主要用于各类航空发动机、启动机等部位，具备高低温兼顾的特点。目前主要厂家主要为中国石化、中国石油、壳牌、美孚、尼科等。",
        },
        {
          title: "航空润滑脂",
          src: "img/productImg/航空润滑脂.jpg",
          summarize:
            "航空润滑油主要用于各类航空发动机、启动机等部位，具备高低温兼顾的特点。目前主要厂家主要为中国石化、中国石油、壳牌、美孚、尼科等。",
        },
        {
          title: "雷达冷却液",
          src: "img/productImg/航空润滑油.jpg",
          summarize:
            "航空润滑油主要用于各类航空发动机、启动机等部位，具备高低温兼顾的特点。目前主要厂家主要为中国石化、中国石油、壳牌、美孚、尼科等。",
        },
        {
          title: "陆战装备润滑剂",
          src: "img/productImg/航空液压油.jpg",
          summarize:
            "航空润滑油主要用于各类航空发动机、启动机等部位，具备高低温兼顾的特点。目前主要厂家主要为中国石化、中国石油、壳牌、美孚、尼科等。",
        },
        {
          title: "氟类特种润滑剂",
          src: "img/productImg/航空润滑脂.jpg",
          summarize:
            "航空润滑油主要用于各类航空发动机、启动机等部位，具备高低温兼顾的特点。目前主要厂家主要为中国石化、中国石油、壳牌、美孚、尼科等。",
        },
      ],
      productList: [
        {
          productType: "航空液压油",
          indexTopImg: "img/productImg/typeIndexImg/hkyyy.jpg",
          content: 550,
          productList: [
            {
              title: "10号航空液压油",
              hotState: 1,
              img: "img/productImg/hkyyy/AeroShell Fluid 31.jpg",
              standard: "SH 0358-1995",
              brandImg: "img/brandImg/AeroShell.png",
              link: "",
            },
            {
              title: "15号航空液压油",
              hotState: 1,
              img: "img/productImg/hkyyy/AeroShell Fluid 31.jpg",
              standard: "SH 0358-1995",
              brandImg: "img/brandImg/AeroShell.png",
              link: "",
            },
            {
              title: "AeroShell Fluid 41",
              hotState: 1,
              img: "img/productImg/hkyyy/AeroShell Fluid 31.jpg",
              standard: "MIL-PRF-5606H",
              brandImg: "img/brandImg/AeroShell.png",
              link: "",
            },
            {
              title: "Royco782",
              hotState: 1,
              img: "img/productImg/hkyyy/AeroShell Fluid 31.jpg",
              standard: "MIL-RPF-83282D",
              brandImg: "img/brandImg/AeroShell.png",
              link: "",
            },
            {
              title: "4050航空润滑油",
              hotState: 0,
              img: "img/productImg/hkyyy/AeroShell Fluid 31.jpg",
              standard: "GJB 1263-1991",
              brandImg: "img/brandImg/AeroShell.png",
              link: "",
            },
            {
              title: "4106航空润滑油",
              hotState: 0,
              img: "img/productImg/hkyyy/AeroShell Fluid 31.jpg",
              standard: "GJB 1263-1991",
              brandImg: "img/brandImg/AeroShell.png",
              link: "",
            },
            {
              title: "Mobil Jet Oil II",
              hotState: 0,
              img: "img/productImg/hkyyy/AeroShell Fluid 31.jpg",
              standard: "MIL-PRF-23699",
              brandImg: "img/brandImg/AeroShell.png",
              link: "",
            },
            {
              title: "bp turbo oil 2380",
              hotState: 0,
              img: "img/productImg/hkyyy/AeroShell Fluid 31.jpg",
              standard: "MIL-PRF-23699",
              brandImg: "img/brandImg/AeroShell.png",
              link: "",
            },
          ],
        },
        {
          productType: "航空润滑油",
          indexTopImg: "",
          content: 327,
          productList: [
            {
              title: "壳牌555航空润滑油",
              hotState: 1,
              img: "img/productImg/hkrhy/AeroShell Oil 555.jpg",
              standard: "DoD-PRF-85734",
              brandImg: "img/brandImg/AeroShell.png",
              link: "",
            },
            {
              title: "AeroShell Oil 555",
              hotState: 1,
              img: "img/productImg/hkrhy/AeroShell Oil 555.jpg",
              standard: "SH 0358-1995",
              brandImg: "img/brandImg/AeroShell.png",
              link: "",
            },
            {
              title: "AeroShell Fluid 41",
              hotState: 1,
              img: "img/productImg/hkrhy/AeroShell Oil 555.jpg",
              standard: "MIL-PRF-5606H",
              brandImg: "img/brandImg/AeroShell.png",
              link: "",
            },
            {
              title: "Royco782",
              hotState: 0,
              img: "img/productImg/hkrhy/AeroShell Oil 555.jpg",
              standard: "MIL-RPF-83282D",
              brandImg: "img/brandImg/AeroShell.png",
              link: "",
            },
            {
              title: "4050航空润滑油",
              hotState: 0,
              img: "img/productImg/hkrhy/AeroShell Oil 555.jpg",
              standard: "GJB 1263-1991",
              brandImg: "img/brandImg/AeroShell.png",
              link: "",
            },
            {
              title: "4106航空润滑油",
              hotState: 0,
              img: "img/productImg/hkrhy/AeroShell Oil 555.jpg",
              standard: "GJB 1263-1991",
              brandImg: "img/brandImg/AeroShell.png",
              link: "",
            },
            {
              title: "Mobil Jet Oil II",
              hotState: 0,
              img: "img/productImg/hkrhy/AeroShell Oil 555.jpg",
              standard: "MIL-PRF-23699",
              brandImg: "img/brandImg/AeroShell.png",
              link: "",
            },
            {
              title: "bp turbo oil 2380",
              hotState: 0,
              img: "img/productImg/hkrhy/AeroShell Oil 555.jpg",
              standard: "MIL-PRF-23699",
              brandImg: "img/brandImg/AeroShell.png",
              link: "",
            },
          ],
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
#home {
  background: url(/img/bgcImg/news_bgc.jpg) no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
}
</style>