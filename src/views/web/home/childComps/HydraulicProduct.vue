<template>
  <div class="hydraulic-products content-center">
    <product-type-title v-if="hydraulicProducts.indexTopImg" :topImgSrc="hydraulicProducts.indexTopImg" :topImgDetail="hydraulicProducts.productType" />
    <div class="product-detail">
      <product-top :topTitle="hydraulicProducts.productType" :productContents="hydraulicProducts.productContent">
        <div slot="button" class="more-button fr">
          <more-button />
        </div>
        <single-bar class="single-bar" :singleBarTitle="hydraulicProducts.tabbarType" :singleBarLink="hydraulicProducts.tabbarLink">
          <single-more-button />
        </single-bar>
      </product-top>
      <div class="product-below clear-fix">
        <product-list class="product-list">
          <product-item class="product-item" v-for="(productItem,productIndex) in hydraulicProducts.productList" :key="productIndex" :productItemDetail="productItem"></product-item>
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
    hydraulicProducts: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  name: "HydraulicProducts",
};
</script>
<style lang="scss" scoped>
.hydraulic-products {
  color: var(--color-text);
  margin-top: 50px;
}
/*
 * 产品类型详情大盒子
 */
.product-detail {
  margin-top: 20px;
  width: 100%;
  height: 430px;
}
.product-top {
  width: 100%;
}
.product-top .top-left {
  width: 70%;
  height: 100%;
}
.product-top .top-right {
  width: 30%;
  height: 100%;
  background-color: red;
}
.product-below {
  width: 100%;
  height: 90%;
}
.product-list {
  width: 70%;
  display: flex;
  float: left;
  flex-wrap: wrap;
}
.product-item {
  flex: 0 0 23%;
  margin-top: 10px;
  min-width: 160px;
  margin-right: 2%;
}
/*
 * 主力产品推荐样式
 */
.picture-recommend {
  position: relative;
  overflow: hidden;
  float: left;
  width: 28%;
  margin-left: 2%;
}
.picture-swiper {
  margin-top: 10px;
}
</style>