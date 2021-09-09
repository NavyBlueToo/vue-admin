import UniversalArticleRanking from "components/common/universalArticleRanking/UniversalArticleRanking";
import Tabbar from "components/common/universalTabbar/Tabbar";

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
 * 单个bar 
 */
export const singleBar = {
  components: {
    SingleBar,
    SingleMoreButton
  }
}