<template>
  <div class="space-product content-center">
    <product-type-title v-if="spaceProducts.indexTopImg" :topImgSrc="spaceProducts.indexTopImg" :topImgDetail="spaceProducts.productType" />
    <div class="product-detail">
      <product-top :topTitle="spaceProducts.productType" :productContents="spaceProducts.productContent">
        <div slot="button" class="more-button fr">
          <more-button />
        </div>
      </product-top>
      <div class="product-below clear-fix">
        <product-list class="product-list">
          <product-item class="product-item" v-for="(productItem,productIndex) in spaceProducts.productList" :key="productIndex" :productItemDetail="productItem"></product-item>
        </product-list>
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from "components/business/product/ProductList";
import ProductTypeTitle from "components/business/product/ProductTypeTitle";
import ProductItem from "components/business/product/ProductItem";
import ProductTop from "components/business/product/ProductTop";
import MoreButton from "components/business/util/moreButton";

export default {
  components: {
    ProductList,
    ProductTypeTitle,
    ProductItem,
    ProductTop,
    MoreButton,
  },
  name: "GreaseProduct",
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
  },
};
</script>
<style lang="scss" scoped>
.grease-product {
  color: var(--color-text);
}
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
</style>