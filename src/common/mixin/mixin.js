import UniversalArticleRanking from "components/common/universalArticleRanking/UniversalArticleRanking";
import Tabbar from "components/common/universalTabbar/Tabbar";
import SmallSwiper from "components/common/swiper/SmallSwiper";

import SingleBar from "components/business/util/singleBar";
import SingleMoreButton from "components/business/util/singleMoreButton";

/**
 * 右侧新闻/排行展示模块通用组件
 */
export const tabbarClickMixin = {
  components: {
    Tabbar,
    UniversalArticleRanking
  },
  props: {
    articleList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      tabbarIndex: 0,
      translateNo: "",
      tabbarNum: 0,
    };
  },
  mounted() {
    this.initModuleContent()
  },
  methods: {
    initModuleContent() {
      this.tabbarNum = this.articleList.length - 1;
      this.translateNo = "translateX(" + this.tabbarNum + "00%)";
      document.querySelectorAll('.article-items').forEach((item) => {
        item.style.width = this.articleList.length + '00%'
      });
    },
    getTabbarIndex(index) {
      this.tabbarIndex = index;
      this.calculateTransform(index);
    },
    calculateTransform(index) {
      this.translateNo = "translateX(" + (this.tabbarNum - index) + "00%)";
    },
  }
}

/**
 * 右侧小swiper通用组件
 */
export const smallSwiperMixin = {
  components: {
    SmallSwiper,
  },
  props: {
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
}

/**
 * 单个bar 
 */
export const singleBar = {
  components: {
    SingleBar,
    SingleMoreButton
  }
}