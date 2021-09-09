<template>
  <div class="product-plus-item">
    <div class="item-left fl">
      <a :href="itemDate.link">
        <img :src="itemDate.imgSrc" :alt="itemDate.title">
      </a>
    </div>
    <div class="item-right fl">
      <div class="title fn15">
        <a :href="itemDate.link">
          <h4 class="hidden-line">{{itemDate.title}}</h4>
        </a>
      </div>
      <div class="detail fn12 hidden-line">
        <a :href="itemDate.link">
          <p>{{itemDate.trait}}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductPlusItem",
  props: {
    itemDate: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.product-plus-item {
  flex: 0 0 23%;
  height: 20%;
  min-width: 160px;
  margin-right: 2%;
  margin-top: 1%;
}
.product-plus-item .item-left {
  width: 40%;
  height: 100%;
  overflow: hidden;
}
.product-plus-item .item-right {
  width: 60%;
  height: 100%;
  padding-left: 5px;
}
img {
  width: 80%;
}
h4,
p,
img {
  transition: all 0.36s ease-in-out;
  -webkit-transition: all 0.36s ease-in-out;
  -moz-transition: all 0.36s ease-in-out;
  -o-transition: all 0.36s ease-in-out;
}
.title,
.detail {
  display: -webkit-flex;
  align-items: center;
}
.title {
  height: 65%;
}
.detail {
  height: 35%;
}
h4,
p {
  color: var(--color-text);
}
img:hover {
  transform: scale(1.05);
  -webkit-transform: scale(1.05);
  -moz-transform: scale(1.05);
  -o-transform: scale(1.05);
  -ms-transform: scale(1.05);
}
h4:hover {
  color: #001eb4;
}
p:hover {
  font-weight: 700;
}
</style>