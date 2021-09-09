<template>
  <ul class="universal-article-ranking clear-fix">
    <li class="article-type clear-fix" v-for="(articleItem , articleIndex) in articleData.articleList" :key="articleIndex" :href="articleItem.link">
      <a :href="articleItem.link" class="clear-fix">
        <div class="article-no">{{articleItem.articleId}}</div>
        <div class="article-title">{{articleItem.title}}</div>
        <div class="article-detail fn14" v-if="articleData.articleIDD===1">{{articleItem.capacity +'装 | '}}{{articleItem.manufacturers}}</div>
        <div class="article-detail fn14" v-else-if="articleData.articleIDD===2">
          <span class="iconfont icon-guanzhuyonghuguanli" title="关注度">{{' '+articleItem.readCount}}</span>
        </div>
        <div class="article-detail product-standard fn14" v-else-if="articleData.articleIDD===3">
          <span class="iconfont icon-chakan" title="详情">{{' '+articleItem.annotation}}</span>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "UniversalArticleRanking",
  props: {
    articleData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.universal-article-ranking {
  margin-top: 10px;
}
a {
  display: block;
  width: 100%;
}
li:nth-child(-n + 3) > a .article-no {
  color: #f3f4f5;
  border: 1px solid #955124;
  border-radius: 4px;
  background-color: #955124;
}
li:nth-child(-n + 3) > a .article-title {
  color: #955124;
  font-weight: 700;
}
li:nth-child(-n + 3) > a .article-detail {
  color: #955124;
  font-weight: 700;
}
li {
  display: block;
  margin-bottom: 23px;
  line-height: 1;
  transition: all 0.36s ease-in-out;
  -webkit-transition: all 0.36s ease-in-out;
  -moz-transition: all 0.36s ease-in-out;
  -o-transition: all 0.36s ease-in-out;
}
li:hover a {
  cursor: pointer;
  color: #001eb4;
  font-weight: 700;
}
.article-no,
.article-title {
  float: left;
}
.article-detail {
  float: right;
  text-align: right;
  width: 40%;
}
.article-no {
  width: 16px;
  margin-right: 2%;
  text-align: center;
}
.article-title {
  width: 50%;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}
.icon-guanzhuyonghuguanli {
  font-size: 13px;
}
.article-detail span {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}
.product-standard {
  text-align: left;
}
</style>