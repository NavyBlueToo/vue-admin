<template>
  <div>
    <a :href="productItemDetail.link" class="clear-fix">
      <div class="product-img">
        <img :src="productItemDetail.img" alt="" title="" />
      </div>
      <div class="product-sketch clear-fix">
        <div class="product-brand">
          <img :src="productItemDetail.brandImg" alt="" />
        </div>
        <div class="product-information">
          <h4 class="hidden-line">{{productItemDetail.title}}</h4>
          <p class="hidden-line">{{productItemDetail.standard}}</p>
        </div>
      </div>
      <div class="hot-icon" v-show="productItemDetail.hotState==1?true:false">
        <span class="iconfont icon-remen" title="热度产品" />
      </div>
      <div class="capacity">
        <span class="iconfont icon-shiyoutong" title="包装大小">{{productItemDetail.capacity}}</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    productItemDetail: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.product-sketch {
  margin-top: 10px;
  width: 100%;
}
.product-sketch > div {
  float: left;
}
.product-brand {
  width: 20%;
}
.product-brand img {
  width: 100%;
}
.product-information {
  width: 65%;
  margin-left: 5%;
}
.product-information h4 {
  height: 60%;
  padding-top: 5%;
  line-height: 1;
}
.product-information p {
  font-size: 12px;
}
p,
h4 {
  color: var(--color-text);
}
.product-img {
  overflow: hidden;
}
.product-img img {
  width: 100%;
  transition: all 0.36s ease-in-out;
  -webkit-transition: all 0.36s ease-in-out;
  -moz-transition: all 0.36s ease-in-out;
  -o-transition: all 0.36s ease-in-out;
}
.product-img:hover img {
  transform: scale(1.05);
  -webkit-transform: scale(1.05);
  -moz-transform: scale(1.05);
  -o-transform: scale(1.05);
  -ms-transform: scale(1.05);
}
h4 {
  font-size: 15px;
  margin-bottom: 5px;
  transition: all 0.36s ease-in-out;
  -webkit-transition: all 0.36s ease-in-out;
  -moz-transition: all 0.36s ease-in-out;
  -o-transition: all 0.36s ease-in-out;
}
.product-sketch:hover h4 {
  color: #001eb4;
}
a {
  position: relative;
  display: block;
}
.hot-icon {
  position: absolute;
  top: 8%;
  left: 8%;
  color: red;
}
.hot-icon .icon-remen {
  font-size: 20px;
}
.capacity {
  position: absolute;
  top: 58%;
  left: 8%;
  color: #999;
}
.capacity span {
  font-size: 10px;
}
</style>