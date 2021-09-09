<template>
  <div class="home-product-list content-center">
    <div class="product-type" v-for="(productTypeList , typeIndex) in productList" :key="typeIndex">
      <div v-show="productTypeList.indexTopImg" class="product-type">
        <img :src="productTypeList.indexTopImg" alt="" title="" />
      </div>
      <div class="product-content">
        <div class="product-detail clear-fix">
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
          <product-recommend class="product-recommend picture-recommend clear-fix" v-if="typeIndex==0">
            <span class="consider fn14">主力产品推荐</span>
            <a href="">更多<i class="el-icon-arrow-right"></i></a>
            <small-swiper :swiperData="pictureRecommend" class="picture-swiper" :indicatorNum="pictureRecommend.length" @swiperImgLoad='swiperImgLoad' :interval="3000">
            </small-swiper>
          </product-recommend>
          <product-recommend class="product-recommend clear-fix" v-if="typeIndex==1">
            <tabbar :tabbarData="articleList" class="type-article clear-fix" ref="tabbar" @setTabbarIndex="getTabbarIndex">
              <a href="">更多<i class="el-icon-arrow-right"></i></a>
            </tabbar>
            <div class="article-ranking">
              <div class="article-items">
                <universal-article-ranking class="article-item" v-for="(articleData ,articleListIndex) in articleList" :key="articleListIndex" :articleData="articleData" :style="{transform:translateNo}" />
              </div>
            </div>
          </product-recommend>
          <product-recommend class="product-recommend picture-recommend clear-fix" v-if="typeIndex==2">
            <span class="consider fn14">主力产品推荐</span>
            <a href="">更多<i class="el-icon-arrow-right"></i></a>
            <small-swiper :swiperData="pictureRecommend" class="picture-swiper" :indicatorNum="pictureRecommend.length" @swiperImgLoad='swiperImgLoad' :interval="3000">
            </small-swiper>
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

import SmallSwiper from "components/common/swiper/SmallSwiper";

import { tabbarClickMixin } from "common/mixin/mixin";

export default {
  components: {
    ProductList,
    ProductItem,
    ProductRecommend,
    SmallSwiper,
  },
  name: "HomeProductList",
  mixins: [tabbarClickMixin],
  props: {
    productList: {
      type: Array,
      default() {
        return [];
      },
    },
    consider: {
      type: Object,
      default() {
        return {};
      },
    },
    pictureRecommend: {
      type: Array,
      default() {
        return [];
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
  float: left;
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
.consider {
  padding-top: 5px;
  border-bottom: 2px solid #001eb4;
  color: #001eb4;
  font-weight: 700;
  line-height: 1.8;
}
.type-article {
  width: 100%;
  height: 27px;
  line-height: 27px;
}
.product-recommend a,
.type-article a {
  display: block;
  float: right;
}
.product-recommend a {
  margin-top: 5px;
  font-size: 14px;
}
.article-ranking {
  overflow: hidden;
  width: 100%;
}
.article-items {
  display: flex;
  float: right;
}
.article-items ::v-deep ul {
  flex: 1;
  transition: transform 0.2s ease-in-out;
}
.picture-recommend {
  position: relative;
  overflow: hidden;
}
.picture-swiper {
  margin-top: 10px;
}
</style>