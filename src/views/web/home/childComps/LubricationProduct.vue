<template>
  <div class="lubrication-product content-center">
    <product-type-title v-if="lubricationProducts.indexTopImg" :topImgSrc="lubricationProducts.indexTopImg" :topImgDetail="lubricationProducts.productType" />
    <div class="product-detail">
      <product-top :topTitle="lubricationProducts.productType" :productContents="lubricationProducts.productContent">
        <div slot="button" class="more-button fr">
          <more-button />
        </div>
        <tabbar :tabbarData="articleList" class="type-article clear-fix" ref="tabbar" @setTabbarIndex="getTabbarIndex">
          <a href="">更多<i class="el-icon-arrow-right"></i></a>
        </tabbar>
      </product-top>
      <div class="product-below clear-fix">
        <product-list class="product-list">
          <product-item class="product-item" v-for="(productItem,productIndex) in lubricationProducts.productList" :key="productIndex" :productItemDetail="productItem"></product-item>
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
  mixins: [tabbarClickMixin],
  props: {
    lubricationProducts: {
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
  name: "LubricationProduct",
};
</script>
<style lang="scss" scoped>
.lubrication-product {
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
 * 多选项卡tabbar及文章列表样式
 */
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