<template>
  <div class="others-products content-center">
    <product-type-title v-if="othersProducts.indexTopImg" :topImgSrc="othersProducts.indexTopImg" :topImgDetail="othersProducts.productType" />
    <div class="product-detail">
      <product-top :topTitle="othersProducts.productType" :productContents="othersProducts.productContent">
        <div slot="button" class="more-button fr">
          <more-button />
        </div>
        <tabbar :tabbarData="articleList" class="type-article clear-fix" ref="tabbar" @setTabbarIndex="getTabbarIndex">
          <a href="">更多<i class="el-icon-arrow-right"></i></a>
        </tabbar>
      </product-top>
      <div class="product-below clear-fix">
        <product-list class="product-list">
          <product-item class="product-item" v-for="(productItem,productIndex) in othersProducts.productList" :key="productIndex" :productItemDetail="productItem"></product-item>
        </product-list>
        <div class="product-news fl">
          <div class="article-items">
            <universal-article-ranking class="article-item" v-for="(articleData ,articleListIndex) in articleList" :key="articleListIndex" :articleData="articleData" :style="{transform:translateNo}" />
          </div>
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

import { tabbarClickMixin } from "common/mixin/mixin";

export default {
  components: {
    ProductList,
    ProductTypeTitle,
    ProductItem,
    ProductTop,
    MoreButton,
  },
  name: "GreaseProduct",
  mixins: [tabbarClickMixin],
  props: {
    othersProducts: {
      type: Object,
      default() {
        return {};
      },
    },
    articleList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.others-products {
  color: var(--color-text);
  margin-top: 50px;
}
</style>