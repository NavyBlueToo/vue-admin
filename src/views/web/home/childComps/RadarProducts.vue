<template>
  <div class="radar-products content-center">
    <product-type-title v-if="radarProducts.indexTopImg" :topImgSrc="radarProducts.indexTopImg" :topImgDetail="radarProducts.productType" />
    <div class="product-detail">
      <product-top :topTitle="radarProducts.productType" :productContents="radarProducts.productContent">
        <div slot="button" class="more-button fr">
          <more-button />
        </div>
        <single-bar class="single-bar" :singleBarTitle="radarProducts.tabbarType" :singleBarLink="radarProducts.tabbarLink">
          <single-more-button />
        </single-bar>
      </product-top>
      <div class="product-below clear-fix">
        <product-list class="product-list">
          <product-item class="product-item" v-for="(productItem,productIndex) in radarProducts.productList" :key="productIndex" :productItemDetail="productItem"></product-item>
        </product-list>
        <div class="picture-recommend">
          <small-swiper :swiperData="pictureRecommend" class="picture-swiper" :indicatorNum="pictureRecommend.length" @swiperImgLoad='swiperImgLoad' :interval="3000" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductTypeTitle from "components/business/product/ProductTypeTitle";
import ProductTop from "components/business/product/ProductTop";
import ProductList from "components/business/product/ProductList";
import ProductItem from "components/business/product/ProductItem";
import MoreButton from "components/business/util/moreButton";

import { singleBar, smallSwiperMixin } from "common/mixin/mixin";

export default {
  components: {
    ProductList,
    ProductTypeTitle,
    ProductItem,
    ProductTop,
    MoreButton,
  },
  mixins: [singleBar, smallSwiperMixin],
  props: {
    radarProducts: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    swiperImgLoad() {
      document.querySelector(".picture-swiper").style.height =
        document.querySelector(".small-swiper .swiper-item img").offsetHeight +
        "px";
    },
  },
  name: "HydraulicProducts",
};
</script>
<style lang="scss" scoped>
.radar-products {
  color: var(--color-text);
  margin-top: 50px;
}
</style>