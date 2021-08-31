<template>
  <div class="interactive fn24 clear-fix">
    <div class="icon">
      <i class="el-icon-star-off" title="搜藏"></i>
      <i></i>
      <i class="el-icon-s-promotion" title="分享到" @mouseenter="shareClick" @mouseleave="shareClick">
        <div class="bounced clear-fix" :style="{display:shareShow===true?'block':'none'}" @click="bouncedClick">
          <div><span class="iconfont icon-qq-copy" title="QQ空间"></span></div>
          <div><span class="iconfont icon-weixin1" title="微信朋友圈"></span></div>
          <div><span class="iconfont icon-weibo1" title="微博"></span></div>
          <div><span class="iconfont icon-twitter1" title="推特"></span></div>
          <div><span class="iconfont icon-Linkedin" title="领英"></span></div>
          <div><span class="iconfont icon-facebook" title="脸书"></span></div>
        </div>
      </i>
    </div>

  </div>
</template>

<script>
export default {
  name: "Interactive",
  props: {
    articleDetail: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      shareShow: false,
      bouncedShow: false,
    };
  },
  methods: {
    shareClick() {
      this.shareShow = !this.shareShow;
    },
    bouncedClick() {
      alert("功能正在开发中...");
    },
  },
};
</script>
<style lang="scss" scoped>
.interactive {
  position: absolute;
}
i {
  margin-right: 3px;
}
i:hover {
  color: #001eb4;
}
.bounced {
  position: relative;
  color: #999;
  left: 3px;
  height: 25px;
  width: 100%;
  line-height: 25px;
  text-align: center;
}
.bounced div:nth-child(1) {
  animation-name: delayAnimation;
  animation-duration: 0.2s;
  animation-iteration-count: 1;
}
.bounced div:nth-child(2) {
  animation: delayAnimation 0.4s 1;
}
.bounced div:nth-child(3) {
  animation: delayAnimation 0.6s 1;
}
.bounced div:nth-child(4) {
  animation: delayAnimation 0.8s 1;
}
.bounced div:nth-child(5) {
  animation: delayAnimation 1s 1;
}
.bounced div:nth-child(6) {
  animation: delayAnimation 1.2s 1;
}
.bounced div {
  display: flex;
  float: left;
  padding-right: 5px;
}
.bounced div span:hover {
  flex: 1;
  color: #001eb4;
}
@keyframes delayAnimation {
  from {
    visibility: hidden;
  }
  to {
    visibility: hidden;
  }
}
</style>