<template>
  <div class="home-product-list content-center">
    <div class="product-type" v-for="(productTypeList , typeIndex) in productList" :key="typeIndex">
      <div v-show="productTypeList.indexTopImg" class="product-type">
        <img :src="productTypeList.indexTopImg" alt="" title="" />
      </div>
      <div class="product-content">
        <div class="product-detail">
          <product-list class="product-list">
            <div class="product-type-title">
              <h2>{{productTypeList.productType}}</h2>
              <span>{{productTypeList.content}}</span>
              <p>种型号在售</p>
              <div class="more-button">
                <a href=""><i class="el-icon-refresh"></i> 换一换</a>
                <a href="">更多<i class="el-icon-arrow-right"></i></a>
              </div>
            </div>
            <product-item class="product-item" v-for="(productItem,productIndex) in productTypeList.productList" :key="productIndex" :productItemDetail="productItem"></product-item>
          </product-list>
          <product-recommend class="product-recommend">
          </product-recommend>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from "components/business/product/ProductList";
import ProductItem from "components/business/product/ProductItem";
import ProductRecommend from "components/business/product/ProductRecommend";
export default {
  components: { ProductList, ProductItem, ProductRecommend },
  name: "HomeProductList",
  props: {
    productList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.product-type {
  width: 100%;
  height: 20%;
}
.product-type {
  margin-top: 50px;
}
.product-content {
  margin-top: 20px;
  width: 100%;
  height: 80%;
}
.product-type img {
  width: 100%;
}
.product-type-title {
  width: 100%;
}
.product-type-title h2 {
  display: block;
  float: left;
}
.product-type-title p {
  display: inline-block;
}
h2 {
  font-weight: 400;
}
.product-type-title span {
  display: inline-block;
  margin-top: 5px;
  margin-left: 15px;
  padding-left: 10px;
  border-left: 3px solid #666;
  font-weight: 700;
  color: red;
}
.more-button {
  float: right;
  margin-right: 9px;
  margin-top: 5px;
  font-size: 15px;
  text-align: center;
}
.more-button a {
  padding: 1px 8px;
  margin-right: 10px;
  border-radius: 2px;
  color: #666;
  border: 1px solid #999;
}
.product-type-title > p {
  text-indent: 5px;
}
.el-icon-refresh {
  transition: all 1s ease-in-out;
  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
}
.more-button a:hover i {
  background-color: #f3f4f5;
  transform: rotate(-360deg);
  -webkit-transform: rotate(-360deg);
  -moz-transform: rotate(-360deg);
  -o-transform: rotate(-360deg);
  -ms-transform: rotate(-360deg);
}
.more-button a:hover .product-detail {
  width: 100%;
  display: flex;
}
.product-list {
  width: 70%;
  display: flex;
  flex-wrap: wrap;
}
.product-recommend {
  float: left;
  width: 28%;
  margin-left: 2%;
}
.product-item {
  flex: 0 0 23%;
  margin-top: 10px;
  min-width: 160px;
  margin-right: 2%;
}
</style>