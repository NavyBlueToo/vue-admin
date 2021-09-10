<template>
  <div class="space-product content-center">
    <product-type-title v-if="spaceProducts.indexTopImg" :topImgSrc="spaceProducts.indexTopImg" :topImgDetail="spaceProducts.productType" />
    <div class="product-detail">
      <product-top :topTitle="spaceProducts.productType" :productContents="spaceProducts.productContent">
        <div slot="button" class="more-button fr">
          <more-button />
        </div>
        <single-bar class="single-bar" :singleBarTitle="spaceProducts.tabbarType" :singleBarLink="spaceProducts.tabbarLink">
          <single-more-button />
        </single-bar>
      </product-top>
      <div class="product-below clear-fix">
        <product-list class="product-list">
          <product-item class="product-item" v-for="(productItem,productIndex) in spaceProducts.productList" :key="productIndex" :productItemDetail="productItem"></product-item>
        </product-list>
        <div class="adhibition fl">
          <sudoku>
            <sudoku-item v-for="(adhibition,adhibitionIndex) in adhibitionsData" :key="adhibitionIndex">
              <a :href="adhibition.link" class="adhibition-item">
                <span class="iconfont" :class="adhibition.iconSrc" :alt="adhibition.title" />
                <p>{{adhibition.title}}</p>
              </a>
            </sudoku-item>
          </sudoku>
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

import { singleBar } from "common/mixin/mixin";
import Sudoku from "components/common/utils/sudoku.vue";
import SudokuItem from "components/common/utils/sudokuItem.vue";

export default {
  components: {
    ProductList,
    ProductTypeTitle,
    ProductItem,
    ProductTop,
    MoreButton,
    Sudoku,
    SudokuItem,
  },
  name: "GreaseProduct",
  mixins: [singleBar],
  props: {
    spaceProducts: {
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
    adhibitionsData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.space-product {
  color: var(--color-text);
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
 * 单个选项卡样式
 */
.single-bar {
  margin-top: 5px;
}
/*
 * 九宫格应用场景样式
 */
.adhibition {
  width: 28%;
  height: 90%;
  margin-left: 2%;
  margin-top: 10px;
  text-align: center;
  background-color: #fff;
}
.adhibition span {
  display: block;
  font-size: 50px;
  margin-top: 10px;
  margin-bottom: 20px;
  transition: transform 0.36s ease-in-out;
}
.adhibition p {
  padding-left: 5px;
  padding-right: 5px;
  color: var(--color-text);
}
.icon-hangmu:before {
  font-size: 35px;
}
.icon-gaotie:before {
  font-size: 30px;
}
.adhibition-item:hover {
  color: #001eb4;
}
.adhibition-item:hover span {
  transform: translateY(5%);
}
.adhibition-item:hover p {
  color: #001eb4;
}
</style>