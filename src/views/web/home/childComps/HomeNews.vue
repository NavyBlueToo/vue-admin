<template>
  <div id="home-news">
    <div class="news-content content-center">
      <div class="news-left">
        <div class="news-title fn36">视点</div>
        <time-temp>
          <p>2021/8/27</p>
        </time-temp>
        <div class="news-detail">
          <a href="" class="new-title fn30">江铜两员工被授予“全国技术能手”荣誉称号</a>
          <p class="new-content">近日，人力资源社会保障部向1603名在第45届世界技能大赛、中华人民共和国第一届职业技能大赛、2019-2020年度各类职业技能竞赛中取得优异成绩的选手授予“全国技术能手”称号，江铜员工何湘岳、徐礼军名列其中。</p>
          <br>
          <interactive :articleDetail='articleDetail' />
        </div>
        <dynamic-button class="dynamic-button" :btnContent="btnContent" />
      </div>
      <div class="news-center">
        <div class="news-title"><a href=""></a></div>
        <time-temp>
          <p>2021/8/27</p>
        </time-temp>
        <div class="news-detail">
          <a href="" class="new-title fn30">江铜两员工被授予“全国技术能手”荣誉称号</a>
          <p class="new-content">近日，人力资源社会保障部向1603名在第45届世界技能大赛、中华人民共和国第一届职业技能大赛、2019-2020年度各类职业技能竞赛中取得优异成绩的选手授予“全国技术能手”称号，江铜员工何湘岳、徐礼军名列其中。人力资源社会保障部向1603名在第45届世界技能大赛、中华人民共和国第一届职业技能大赛。</p>
          <br>
          <interactive />
        </div>
      </div>
      <div class="news-right">
        <div class="video-title fn36">精彩瞬间</div>
        <div class="mv-detail">
          <mv-player class="news-mv" :mvSrc='mvSrc' :mvImgSrc='mvImgSrc' :mvType='mvType' />
          <div class="mv-content">
            <h3>SpaceX 猎鹰重型 现代工程的杰作</h3>
            <p>美国东海岸时间2018年2月6日16点45分，在经历了两次临时推迟之后，重型猎鹰携带一辆红色2018款特斯拉Roadster跑车，从卡纳维拉尔角的约翰·菲茨杰拉德·肯尼迪国家航天中心LC-39A发射工位成功发射升空，这是重型猎鹰的首次试射
              。7分58秒，两枚助推火箭同时着陆。</p>
            <a href="">查看详情</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TimeTemp from "components/business/util/time";
import Interactive from "components/business/util/interactive";
import DynamicButton from "components/business/util/dynamicButton";
import MvPlayer from "components/common/video/MvPlayer";
export default {
  components: { TimeTemp, Interactive, DynamicButton, MvPlayer },
  data() {
    return {
      articleDetail: {
        title: "江铜两员工被授予“全国技术能手”荣誉称号",
        profile:
          "近日，人力资源社会保障部向1603名在第45届世界技能大赛、中华人民共和国第一届职业技能大赛、2019-2020年度各类职业技能竞赛中取得优异成绩的选手授予“全国技术能手”称号",
        qrCode: "img/others/qrCode.jpg",
        newLink: "www.baidu.com",
      },
      btnContent: "点击进入新闻中心",
      mvSrc: "videos/mv/SpaceX.mp4",
      mvImgSrc: "videos/img/SpaceX.jpg",
      mvType: "video/mp4",
    };
  },
  name: "HomeNews",
};
</script>
<style lang="scss" scoped>
.news-content {
  display: flex;
  height: 875px;
  padding-top: 100px;
  padding-bottom: 125px;
}
.news-content > div {
  flex: 1;
}
.news-title,
.video-title {
  position: relative;
  height: 15%;
}
.news-title::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: #403e43;
  transform: translate(-50%);
  transition: all 1s;
}
.news-left,
.news-center {
  padding-right: 60px;
}
.news-detail > a {
  display: block;
  padding-top: 40px;
  padding-bottom: 40px;
  color: #000;
}
.new-content {
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dynamic-button {
  margin-top: 47%;
  width: 200px;
  height: 45px;
  color: #666;
}
.news-right {
  padding-left: 60px;
}
.news-mv {
  width: 400px;
  height: 225px;
}
.mv-detail {
  width: 100%;
  height: 85%;
  color: #fff;
  background-color: #955124;
}
.mv-content {
  padding-left: 20px;
  padding-right: 25px;
}
.mv-content h3,
a {
  display: block;
}
.mv-content h3 {
  margin-top: 30px;
}
.mv-content p {
  display: -webkit-box;
  margin-top: 15px;
  line-height: 1.5;
  text-align: justify;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mv-content a {
  margin-top: 40px;
  text-decoration: underline;
  color: #f3f4f5;
}
</style>