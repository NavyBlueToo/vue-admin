<template>
  <div class="grease-product content-center">
    <product-type-title v-if="greaseProducts.indexTopImg" />
    <div class="product-detail">
      <product-top :topTitle="greaseProducts.productType" :productContents="greaseProducts.productContent">
        <div slot="button" class="more-button fr">
          <more-button />
        </div>
        <tabbar :tabbarData="articleList" class="type-article clear-fix" ref="tabbar" @setTabbarIndex="getTabbarIndex">
          <a href="">更多<i class="el-icon-arrow-right"></i></a>
        </tabbar>
      </product-top>
      <div class="product-below clear-fix">
        <product-plus-list class="product-list fl">
          <product-plus-item v-for="(item ,index) in greaseProducts.productList" :key="index" :itemDate="item" />
        </product-plus-list>
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
import ProductPlusList from "components/business/product/ProductPlusList";
import ProductTypeTitle from "components/business/product/ProductTypeTitle";
import ProductPlusItem from "components/business/product/ProductPlusItem";
import ProductTop from "components/business/product/ProductTop";
import MoreButton from "components/business/util/moreButton";

import UniversalArticleRanking from "components/common/universalArticleRanking/UniversalArticleRanking";

import { tabbarClickMixin } from "common/mixin/mixin";

export default {
  components: {
    ProductPlusList,
    ProductTypeTitle,
    ProductPlusItem,
    ProductTop,
    MoreButton,
    UniversalArticleRanking,
  },
  name: "GreaseProduct",
  props: {
    greaseProducts: {
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
  mixins: [tabbarClickMixin],
};
</script>
<style lang="scss" scoped>
.grease-product {
  margin-top: 50px;
  color: var(--color-text);
}
.product-detail {
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
.consider {
  display: inline-block;
  padding-top: 5px;
  padding-bottom: 6px;
  color: #001eb4;
  border-bottom: 2px solid #001eb4;
}
.product-below {
  width: 100%;
  height: 90%;
}
.product-below .product-list {
  width: 70%;
  height: 100%;
}
.product-below .product-news {
  width: 28%;
  height: 100%;
  margin-left: 2%;
  overflow: hidden;
}
.article-items {
  display: flex;
  float: right;
}
.article-items ::v-deep ul {
  flex: 1;
  transition: transform 0.2s ease-in-out;
}
.type-article {
  margin-top: 5px;
}
</style>