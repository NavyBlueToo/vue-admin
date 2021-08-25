<template>
  <div class="topNavBar clear-fix" @mouseenter="navBarClick" @mouseleave="navBarLeave" :class="{navBarShowActive:!navBarActive}">
    <div class="nav-logo">
      <img src="~/assets/img/compBaseImg/logo.png" v-if="navBarActive" />
      <img src="~/assets/img/compBaseImg/logo-active.png" v-else />
    </div>
    <div class="nav-contents clear-fix">
      <div class="nav-content clear-fix" v-for="(item,index) in navBarContent" :key="index" @mouseenter="contentClick(index)" @mouseleave="contentLeave()">
        <a href="">{{item.title}}</a>
        <div id="childNav" class="child-nav clear-fix" v-if="item.childs.length > 0" :key="index" :style="{display:index===childId?'block':'none'}">
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
      topDistance: 0,
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
  mounted: function () {
    window.addEventListener("scroll", this.handleScroll, true); // 监听（绑定）滚轮滚动事件
  },
  methods: {
    navBarClick() {
      this.navBarActive = false;
    },
    navBarLeave() {
      if (this.topDistance <= 0) {
        this.navBarActive = true;
      }
    },
    contentClick(index) {
      this.childId = index;
      this.navContentShowActive = false;
      // let childLable = $event.currentTarget.querySelector("#childNav");
      // if (childLable) {
      //   childLable.className = "child-nav-active child-nav clear-fix";
      // }
    },
    contentLeave() {
      this.childId = 0;
      // let childLable = $event.currentTarget.querySelector("#childNav");
      // if (childLable) {
      //   childLable.className = "child-nav-leave child-nav clear-fix";
      // }
    },
    handleScroll() {
      this.topDistance =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (this.topDistance > 70) {
        this.navBarActive = false;
      } else if (this.topDistance <= 0) {
        this.navBarActive = true;
      }
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
  width: 100%;
  color: #fff;
  font-size: 20px;
  z-index: 999;
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
  width: 25%;
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
.nav-content:hover::before,
.cont-child:hover::before {
  width: 60%;
}
.navBarShowActive {
  color: #666;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  .nav-content a {
    color: #666;
  }
  .nav-content:hover > a,
  .cont-child:hover > a {
    color: #001eb4;
  }
}
.child-nav {
  position: fixed;
  display: none;
  float: left;
  left: 0;
  right: 0;
  z-index: 1;
  overflow: hidden;
  background-color: #fff;
  animation: childsActive 0.5s;
  border-top: 1px solid #dadcda;
}
// .child-nav-leave {
//   animation: childsLeave 0.5s;
// }
// .child-nav-active {
//   animation: childsActive 0.5s;
// }
.cont-childs {
  display: flex;
  justify-content: center;
  height: 50px;
  line-height: 50px;
}
.cont-child {
  position: relative;
  list-style-type: none;
  float: left;
  padding-left: 31px;
  padding-right: 30px;
  font-size: 18px;
  color: #fff;
}
.nav-contact p {
  padding-right: 10px;
}
a {
  color: inherit;
}
@keyframes childsActive {
  from {
    height: 0;
  }
  to {
    height: 50px;
  }
}
@keyframes childsLeave {
  from {
    height: 50px;
  }
  to {
    height: 0;
  }
}
</style>