<template>
  <div class="topNavBar clear-fix" @mouseenter="navBarClick" @mouseleave="navBarClick" :class="{navBarShowActive:!navBarActive}">
    <div class="nav-logo">
      <img src="~/assets/img/compBaseImg/logo.png" v-if="navBarActive" />
      <img src="~/assets/img/compBaseImg/logo-active.png" v-else />
    </div>
    <div class="nav-contents clear-fix">
      <div class="nav-content clear-fix" v-for="(item,index) in navBarContent" :key="index" @mouseenter="contentClick(index)" @mouseleave="contentLeave">
        <a href="">{{item.title}}</a>
        <div class="child-nav clear-fix" v-if="item.childs.length > 0" :key="index" :style="{display:(index===childId ? 'inline' : 'none' )}">
          <ul class="cont-childs  clear-fix">
            <li class="cont-child" v-for="child in item.childs" :key="child.id"><a href="">{{child}}</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="nav-contact">
      <p>400-660-6666</p>
      <i class="el-icon-phone-outline"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "TopNavBar",
  data() {
    return {
      navBarActive: true,
      navContentShowActive: true,
      contentShow: false,
      childId: 0,
      navBarContent: [
        { title: "首页", childs: [] },
        {
          title: "关于",
          childs: ["企业简介", "企业文化", "企业战略", "社会责任"],
        },
        {
          title: "产品",
          childs: [
            "航空润滑油",
            "航空液压油",
            "航空润滑脂",
            "雷达冷却液",
            "航天润滑剂",
            "舰船润滑剂",
          ],
        },
        {
          title: "领域",
          childs: ["陆战装备", "海军舰船", "民航军航", "航天深空"],
        },
        { title: "服务", childs: [] },
        { title: "视点", childs: ["行业新闻", "军网动态", "技术文献"] },
      ],
    };
  },
  methods: {
    navBarClick() {
      this.navBarActive = !this.navBarActive;
    },
    contentClick(index) {
      this.childId = index;
      this.navContentShowActive = false;
    },
    contentLeave() {
      this.childId = 0;
    },
  },
};
</script>
<style lang="scss" scoped>
.topNavBar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  color: #fff;
  font-size: 20px;
  transition: all 0.5s;
}
.nav-logo,
.nav-contents,
.nav-contact {
  display: flex;
  float: left;
  align-items: center;
  justify-content: center;
  height: 70px;
  line-height: 70px;
}
.nav-logo,
.nav-contact {
  width: 22%;
}
.nav-logo img {
  width: 220px;
  height: 25px;
}
.nav-contents {
  width: 50%;
  padding-left: 10%;
  padding-right: 10%;
  .nav-content {
    position: relative;
    flex: 1;
    text-align: center;
  }
}
.nav-content > a {
  display: inline-block;
  padding: 0 15%;
  color: #fff;
}
.nav-content::before,
.cont-child::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 0;
  height: 4px;
  background: #001eb4;
  transform: translate(-50%);
  transition: all 0.36s;
}
.nav-content:hover::before {
  width: 72%;
}
.navBarShowActive {
  color: #666;
  background-color: #fff;
  .nav-content a {
    color: #666;
  }
  .nav-content a:hover {
    color: #001eb4;
  }
}
.child-nav {
  display: none;
}
.cont-childs {
  position: fixed;
  display: flex;
  float: left;
  top: 70px;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  border-top: 1px solid #dadcda;
  .cont-child {
    position: relative;
    display: flex;
    float: left;
    padding-left: 30px;
    padding-right: 30px;
    font-size: 18px;
  }
}
.cont-child:hover::before {
  width: 50%;
}
.nav-contact p {
  padding-right: 10px;
}
</style>