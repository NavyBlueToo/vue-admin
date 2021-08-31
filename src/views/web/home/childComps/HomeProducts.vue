<template>
  <div id="home-products">
    <foldSwiper class="fold-swiper">
      <fold-swiper-item slot='fold-content' class="fold-content" v-for="(foldSwiper,foldIndex) in foldSwipers" :key="foldIndex" @mouseenter.native="foldItemClick(foldIndex)" @mouseleave.native="foldItemLeave(foldIndex)">
        <img slot="fold-img" :src="foldSwiper.src" alt="" />
        <div class="img-explain" slot="img-explain">
          <h3 slot="fold-title">{{foldSwiper.title}}</h3>
          <p slot="fold-detail">{{foldSwiper.summarize}}</p>
          <dynamic-button slot="fold-button" class="fold-button" :btnContent="btnContent" />
        </div>
      </fold-swiper-item>
    </foldSwiper>
  </div>
</template>

<script>
import dynamicButton from "components/business/util/dynamicButton";

import FoldSwiper from "components/common/foldSwiper/foldSwiper";
import FoldSwiperItem from "components/common/foldSwiper/foldSwiperItem";

export default {
  components: { dynamicButton, FoldSwiper, FoldSwiperItem },
  name: "HomeProducts",
  data() {
    return {
      btnContent: "立即咨询",
    };
  },
  props: {
    foldSwipers: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    foldItemClick(index) {
      document.querySelector(".fold-swiper").children[index].style =
        "flex-shrink: 0;";
    },
    foldItemLeave(index) {
      document.querySelector(".fold-swiper").children[index].style =
        "flex-shrink: 1;";
    },
  },
};
</script>
<style lang="scss" scoped>
.fold-swiper {
  position: relative;
  display: flex;
  width: 100%;
  max-width: 1920px;
  height: 550px;
}
.fold-content {
  position: relative;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 750px;
  overflow: hidden;
  box-shadow: 0 0 2px 0 #000;
  -webkit-transition: 0.3s;
  transition: 0.5s;
}
.fold-content img {
  width: 750px;
}
.img-explain {
  position: absolute;
  color: #f3f4f5;
  width: 410px;
  height: 550px;
  left: 325px;
  top: 0px;
  padding-right: 50px;
}
.img-explain > h3 {
  display: block;
  margin-top: 40%;
  font-size: 30px;
}
.img-explain > p {
  margin-top: 50px;
  font-size: 16px;
  line-height: 1.5;
  text-align: justify;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}
.fold-button {
  margin-top: 90px;
  width: 160px;
  height: 35px;
}
.fold-button ::v-deep .button {
  color: #f3f4f5;
  border: #f3f4f5 solid 1px;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 3px;
}
.fold-button ::v-deep .button:hover {
  color: #f3f4f5;
  border: #f3f4f5 solid 1px;
  background-color: rgba(234, 244, 245, 0.5);
}
</style>