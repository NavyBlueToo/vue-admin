<template>
  <div id="home">
    <!-- 页首导航 -->
    <top-nav-bar />
    <!-- banner图 -->
    <home-swiper :banners='banners' />
    <!-- 新闻模块 -->
    <home-news />
    <!-- 产品覆盖领域 -->
    <home-products :foldSwipers="foldSwipers" />
    <!-- 航空液压油列表 -->
    <hydraulic-product :hydraulicProducts="HydraulicProducts" :pictureRecommend="pictureRecommend" />
    <!-- 航空润滑油列表 -->
    <lubrication-product :lubricationProducts="LubricationProducts" :articleList="hkyyyArticle" />
    <!-- 雷达冷却液列表 -->
    <radar-products :radarProducts="RadarProducts" :pictureRecommend="pictureRecommend" />
    <!-- 润滑脂列表 -->
    <grease-product :greaseProducts="GreaseProducts" :articleList="hkyyyArticle" />
    <!-- 空间润滑剂列表 -->
    <space-product :spaceProducts="SpaceProducts" :adhibitionsData="Adhibitions" />
    <!-- 其他产品列表 -->
    <others-products :othersProducts="OthersProducts" :articleList="hkyyyArticle" />
  </div>
</template>

<script>
import "assets/css/index-product.css";
import topNavBar from "components/business/topNavBar/TopNavBar";

import HomeSwiper from "./childComps/HomeSwiper";
import HomeNews from "./childComps/HomeNews";
import HomeProducts from "./childComps/HomeProducts";
import GreaseProduct from "./childComps/GreaseProduct";
import SpaceProduct from "./childComps/SpaceProduct";
import OthersProducts from "./childComps/OthersProducts";
import HydraulicProduct from "./childComps/HydraulicProduct";
import LubricationProduct from "./childComps/LubricationProduct";
import RadarProducts from "./childComps/RadarProducts";

export default {
  components: {
    topNavBar,
    HomeSwiper,
    HomeNews,
    HomeProducts,
    GreaseProduct,
    SpaceProduct,
    OthersProducts,
    HydraulicProduct,
    LubricationProduct,
    RadarProducts,
  },
  name: "Home",
  data() {
    return {
      banners: [
        { tiitle: "飞机", imgSrc: "img/banner/airplane-1.jpg" },
        { title: "产品", imgSrc: "img/banner/product-2.jpg" },
      ],
      yw_banners: [
        { title: "业务背景图-1", imgSrc: "img/yw_banner/yw_bgc_1.jpg" },
        { title: "业务背景图-2", imgSrc: "img/yw_banner/yw_bgc_2.jpg" },
        { title: "业务背景图-3", imgSrc: "img/yw_banner/yw_bgc_3.jpg" },
      ],
      foldSwipers: [
        {
          title: "航空润滑油",
          src: "img/productImg/航空润滑油.jpg",
          summarize:
            "航空润滑油主要用于各类航空发动机、启动机等部位，具备高低温兼顾的特点。目前主要厂家主要为中国石化、中国石油、壳牌、美孚、尼科等。",
        },
        {
          title: "航空液压油",
          src: "img/productImg/航空液压油.jpg",
          summarize:
            "航空润滑油主要用于各类航空发动机、启动机等部位，具备高低温兼顾的特点。目前主要厂家主要为中国石化、中国石油、壳牌、美孚、尼科等。",
        },
        {
          title: "航空润滑脂",
          src: "img/productImg/航空润滑脂.jpg",
          summarize:
            "航空润滑油主要用于各类航空发动机、启动机等部位，具备高低温兼顾的特点。目前主要厂家主要为中国石化、中国石油、壳牌、美孚、尼科等。",
        },
        {
          title: "雷达冷却液",
          src: "img/productImg/航空润滑油.jpg",
          summarize:
            "航空润滑油主要用于各类航空发动机、启动机等部位，具备高低温兼顾的特点。目前主要厂家主要为中国石化、中国石油、壳牌、美孚、尼科等。",
        },
        {
          title: "陆战装备润滑剂",
          src: "img/productImg/航空液压油.jpg",
          summarize:
            "航空润滑油主要用于各类航空发动机、启动机等部位，具备高低温兼顾的特点。目前主要厂家主要为中国石化、中国石油、壳牌、美孚、尼科等。",
        },
        {
          title: "氟类特种润滑剂",
          src: "img/productImg/航空润滑脂.jpg",
          summarize:
            "航空润滑油主要用于各类航空发动机、启动机等部位，具备高低温兼顾的特点。目前主要厂家主要为中国石化、中国石油、壳牌、美孚、尼科等。",
        },
      ],
      hkyyyArticle: [
        {
          productType: 1,
          articleIDD: 1,
          articleType: "热销排行",
          articleList: [
            {
              articleId: 1,
              title: "10号航空液压油",
              link: "www.baidu.com",
              manufacturers: "昆仑玉门",
              capacity: "10kg",
            },
            {
              articleId: 2,
              title: "15号航空液压油",
              link: "",
              manufacturers: "昆仑玉门",
              capacity: "10kg",
            },
            {
              articleId: 3,
              title: "10号航空液压油地面",
              link: "",
              manufacturers: "昆仑玉门",
              capacity: "10kg",
            },
            {
              articleId: 4,
              title: "AeroShell Fluid 41",
              link: "",
              manufacturers: "昆仑玉门",
              capacity: "10kg",
            },
            {
              articleId: 5,
              title: "Royco 756",
              link: "",
              manufacturers: "昆仑玉门",
              capacity: "10kg",
            },
            {
              articleId: 6,
              title: "Nyco FH2",
              link: "",
              manufacturers: "昆仑玉门",
              capacity: "10kg",
            },
            {
              articleId: 7,
              title: "Nyco FH51",
              link: "",
              manufacturers: "昆仑玉门",
              capacity: "10kg",
            },
            {
              articleId: 8,
              title: "Royco 782",
              link: "",
              manufacturers: "昆仑玉门",
              capacity: "10kg",
            },
            {
              articleId: 9,
              title: "AeroShell Fluid 31",
              link: "",
              manufacturers: "昆仑玉门",
              capacity: "10kg",
            },
            {
              articleId: 10,
              title: "20号航空液压油",
              link: "",
              manufacturers: "昆仑玉门",
              capacity: "10kg",
            },
          ],
        },
        {
          productType: 1,
          articleIDD: 2,
          articleType: "常见问题",
          articleList: [
            {
              articleId: 1,
              title: "10号航空液压油为什么",
              link: "",
              readCount: 8386,
            },
            {
              articleId: 2,
              title: "15号航空液压油为什么",
              link: "",
              readCount: 7386,
            },
            {
              articleId: 3,
              title: "10号航空液压油地面",
              link: "",
              readCount: 4386,
            },
            {
              articleId: 4,
              title: "AeroShell Fluid 41",
              link: "",
              readCount: 1386,
            },
            {
              articleId: 5,
              title: "Royco 756为什么",
              link: "",
              readCount: 886,
            },
            { articleId: 6, title: "Nyco FH2为什么", link: "", readCount: 656 },
            {
              articleId: 7,
              title: "Nyco FH51为什么",
              link: "",
              readCount: 496,
            },
            {
              articleId: 8,
              title: "Royco 782为什么",
              link: "",
              readCount: 186,
            },
            {
              articleId: 9,
              title: "AeroShell Fluid 31",
              link: "",
              readCount: 83,
            },
            { articleId: 10, title: "20号航空液压油", link: "", readCount: 81 },
          ],
        },
        {
          productType: 1,
          articleIDD: 3,
          articleType: "技术资料",
          articleList: [
            {
              articleId: 1,
              title: "GJB 1263-1991",
              link: "",
              annotation: "国标宽温航空润滑油",
            },
            {
              articleId: 2,
              title: "SH 0358-1995",
              link: "",
              annotation: "石化标低温矿物液压油",
            },
            {
              articleId: 3,
              title: "MIL-PRF-23699 HTS",
              link: "",
              annotation: "美标高热航空润滑油",
            },
            {
              articleId: 4,
              title: "MIL-PRF-23699 STD",
              link: "",
              annotation: "美标宽温航空润滑油",
            },
            {
              articleId: 5,
              title: "MIL-PRF-5606",
              link: "",
              annotation: "美标超净度低温液压油",
            },
            {
              articleId: 6,
              title: "MIL-PRF-83282",
              link: "",
              annotation: "美标耐燃液压油",
            },
            {
              articleId: 7,
              title: "DoD-PRF-85734",
              link: "",
              annotation: "美标高极压润滑油",
            },
            {
              articleId: 8,
              title: "GB 439-1990",
              link: "",
              annotation: "国标喷气机油",
            },
            {
              articleId: 9,
              title: "GJB 1177A-2013",
              link: "",
              annotation: "国军标超净度低温液压油",
            },
            {
              articleId: 10,
              title: "SAE AS 1241",
              link: "",
              annotation: "SAE协会磷酸酯合成液压油",
            },
          ],
        },
      ],
      LubricationProducts: {
        productType: "航空润滑油",
        indexTopImg: "",
        productContent: 327,
        productTypeLink: "",
        tabbarLink: "",
        productList: [
          {
            title: "壳牌555航空润滑油",
            hotState: 1,
            img: "img/productImg/hkrhy/AeroShell Oil 555.jpg",
            standard: "DoD-PRF-85734",
            brandImg: "img/brandImg/AeroShell.png",
            link: "",
            capacity: "946ml",
          },
          {
            title: "AeroShell Oil 555",
            hotState: 1,
            img: "img/productImg/hkrhy/AeroShell Oil 555.jpg",
            standard: "SH 0358-1995",
            brandImg: "img/brandImg/AeroShell.png",
            link: "",
            capacity: "946ml",
          },
          {
            title: "AeroShell Fluid 41",
            hotState: 1,
            img: "img/productImg/hkrhy/AeroShell Oil 555.jpg",
            standard: "MIL-PRF-5606H",
            brandImg: "img/brandImg/AeroShell.png",
            link: "",
            capacity: "946ml",
          },
          {
            title: "Royco782",
            hotState: 0,
            img: "img/productImg/hkrhy/AeroShell Oil 555.jpg",
            standard: "MIL-RPF-83282D",
            brandImg: "img/brandImg/AeroShell.png",
            link: "",
            capacity: "946ml",
          },
          {
            title: "4050航空润滑油",
            hotState: 0,
            img: "img/productImg/hkrhy/AeroShell Oil 555.jpg",
            standard: "GJB 1263-1991",
            brandImg: "img/brandImg/AeroShell.png",
            link: "",
            capacity: "946ml",
          },
          {
            title: "4106航空润滑油",
            hotState: 0,
            img: "img/productImg/hkrhy/AeroShell Oil 555.jpg",
            standard: "GJB 1263-1991",
            brandImg: "img/brandImg/AeroShell.png",
            link: "",
            capacity: "946ml",
          },
          {
            title: "Mobil Jet Oil II",
            hotState: 0,
            img: "img/productImg/hkrhy/AeroShell Oil 555.jpg",
            standard: "MIL-PRF-23699",
            brandImg: "img/brandImg/AeroShell.png",
            link: "",
            capacity: "946ml",
          },
          {
            title: "bp turbo oil 2380",
            hotState: 0,
            img: "img/productImg/hkrhy/AeroShell Oil 555.jpg",
            standard: "MIL-PRF-23699",
            brandImg: "img/brandImg/AeroShell.png",
            link: "",
            capacity: "946ml",
          },
        ],
      },
      HydraulicProducts: {
        productType: "航空液压油",
        indexTopImg: "img/productImg/typeIndexImg/hkyyy.jpg",
        productContent: 550,
        tabbarType: "主力产品推荐",
        productTypeLink: "",
        tabbarLink: "",
        productList: [
          {
            title: "10号航空液压油",
            hotState: 1,
            img: "img/productImg/hkyyy/AeroShell Fluid 31.jpg",
            standard: "SH 0358-1995",
            brandImg: "img/brandImg/AeroShell.png",
            link: "",
            capacity: "3.78L",
          },
          {
            title: "15号航空液压油",
            hotState: 1,
            img: "img/productImg/hkyyy/AeroShell Fluid 31.jpg",
            standard: "SH 0358-1995",
            brandImg: "img/brandImg/AeroShell.png",
            link: "",
            capacity: "3.78L",
          },
          {
            title: "AeroShell Fluid 41",
            hotState: 1,
            img: "img/productImg/hkyyy/AeroShell Fluid 31.jpg",
            standard: "MIL-PRF-5606H",
            brandImg: "img/brandImg/AeroShell.png",
            link: "",
            capacity: "3.78L",
          },
          {
            title: "Royco782",
            hotState: 1,
            img: "img/productImg/hkyyy/AeroShell Fluid 31.jpg",
            standard: "MIL-RPF-83282D",
            brandImg: "img/brandImg/AeroShell.png",
            link: "",
            capacity: "3.78L",
          },
          {
            title: "4050航空润滑油",
            hotState: 0,
            img: "img/productImg/hkyyy/AeroShell Fluid 31.jpg",
            standard: "GJB 1263-1991",
            brandImg: "img/brandImg/AeroShell.png",
            link: "",
            capacity: "3.78L",
          },
          {
            title: "4106航空润滑油",
            hotState: 0,
            img: "img/productImg/hkyyy/AeroShell Fluid 31.jpg",
            standard: "GJB 1263-1991",
            brandImg: "img/brandImg/AeroShell.png",
            link: "",
            capacity: "3.78L",
          },
          {
            title: "Mobil Jet Oil II",
            hotState: 0,
            img: "img/productImg/hkyyy/AeroShell Fluid 31.jpg",
            standard: "MIL-PRF-23699",
            brandImg: "img/brandImg/AeroShell.png",
            link: "",
            capacity: "3.78L",
          },
          {
            title: "bp turbo oil 2380",
            hotState: 0,
            img: "img/productImg/hkyyy/AeroShell Fluid 31.jpg",
            standard: "MIL-PRF-23699",
            brandImg: "img/brandImg/AeroShell.png",
            link: "",
            capacity: "3.78L",
          },
        ],
      },
      RadarProducts: {
        productType: "雷达冷却液",
        indexTopImg: "img/productImg/typeIndexImg/hkyyy.jpg",
        tabbarType: "主力产品推荐",
        productTypeLink: "",
        productContent: 18,
        productList: [
          {
            title: "AF65号冷却液",
            hotState: 1,
            img: "img/productImg/ldlqy/AF65号冷却液.jpg",
            standard: "DoD-PRF-85734",
            brandImg: "img/brandImg/AeroShell.png",
            link: "",
            capacity: "20L",
          },
          {
            title: "65号冷却液",
            hotState: 1,
            img: "img/productImg/ldlqy/AF65号冷却液.jpg",
            standard: "SH 0358-1995",
            brandImg: "img/brandImg/AeroShell.png",
            link: "",
            capacity: "20L",
          },
          {
            title: "50号冷却液",
            hotState: 1,
            img: "img/productImg/ldlqy/AF65号冷却液.jpg",
            standard: "MIL-PRF-5606H",
            brandImg: "img/brandImg/AeroShell.png",
            link: "",
            capacity: "20L",
          },
          {
            title: "40号冷却液",
            hotState: 1,
            img: "img/productImg/ldlqy/AF65号冷却液.jpg",
            standard: "MIL-RPF-83282D",
            brandImg: "img/brandImg/AeroShell.png",
            link: "",
            capacity: "20L",
          },
          {
            title: "-50号全寿命冷却液",
            hotState: 0,
            img: "img/productImg/ldlqy/AF65号冷却液.jpg",
            standard: "GJB 1263-1991",
            brandImg: "img/brandImg/AeroShell.png",
            link: "",
            capacity: "20L",
          },
          {
            title: "4634坦克传动液",
            hotState: 0,
            img: "img/productImg/ldlqy/AF65号冷却液.jpg",
            standard: "GJB 1263-1991",
            brandImg: "img/brandImg/AeroShell.png",
            link: "",
            capacity: "20L",
          },
          {
            title: "7415火炮润滑脂",
            hotState: 0,
            img: "img/productImg/ldlqy/AF65号冷却液.jpg",
            standard: "MIL-PRF-23699",
            brandImg: "img/brandImg/AeroShell.png",
            link: "",
            capacity: "20L",
          },
          {
            title: "bp turbo oil 2380",
            hotState: 0,
            img: "img/productImg/ldlqy/AF65号冷却液.jpg",
            standard: "MIL-PRF-23699",
            brandImg: "img/brandImg/AeroShell.png",
            link: "",
            capacity: "20L",
          },
        ],
      },
      GreaseProducts: {
        productType: "航空润滑脂",
        productTypeLink: "",
        indexTopImg: "",
        productContent: 37,
        productList: [
          {
            title: "7254航空润滑脂",
            link: "",
            trait: "机身通用润滑脂",
            imgSrc: "img/productImg/hkrhz/AeroShell Grease 5.png",
          },
          {
            title: "7008航空润滑脂",
            link: "",
            trait: "高温航空润滑脂",
            imgSrc: "img/productImg/hkrhz/AeroShell Grease 5.png",
          },
          {
            title: "7254航空润滑脂",
            link: "",
            trait: "飞机仪表润滑脂",
            imgSrc: "img/productImg/hkrhz/AeroShell Grease 5.png",
          },
          {
            title: "7254航空润滑脂",
            link: "",
            trait: "高温轴承润滑脂",
            imgSrc: "img/productImg/hkrhz/AeroShell Grease 5.png",
          },
          {
            title: "7254航空润滑脂",
            link: "",
            trait: "低温航空润滑脂",
            imgSrc: "img/productImg/hkrhz/AeroShell Grease 5.png",
          },
          {
            title: "7254航空润滑脂",
            link: "",
            trait: "机身通用润滑脂",
            imgSrc: "img/productImg/hkrhz/AeroShell Grease 5.png",
          },
          {
            title: "7254航空润滑脂",
            link: "",
            trait: "机身通用润滑脂",
            imgSrc: "img/productImg/hkrhz/AeroShell Grease 5.png",
          },
          {
            title: "7254航空润滑脂",
            link: "",
            trait: "机身通用润滑脂",
            imgSrc: "img/productImg/hkrhz/AeroShell Grease 5.png",
          },
          {
            title: "7254航空润滑脂",
            link: "",
            trait: "机身通用润滑脂",
            imgSrc: "img/productImg/hkrhz/AeroShell Grease 5.png",
          },
          {
            title: "7254航空润滑脂",
            link: "",
            trait: "机身通用润滑脂",
            imgSrc: "img/productImg/hkrhz/AeroShell Grease 5.png",
          },
          {
            title: "7254航空润滑脂",
            link: "",
            trait: "机身通用润滑脂",
            imgSrc: "img/productImg/hkrhz/AeroShell Grease 5.png",
          },
          {
            title: "7254航空润滑脂",
            link: "",
            trait: "机身通用润滑脂",
            imgSrc: "img/productImg/hkrhz/AeroShell Grease 5.png",
          },
          {
            title: "7254航空润滑脂",
            link: "",
            trait: "机身通用润滑脂",
            imgSrc: "img/productImg/hkrhz/AeroShell Grease 5.png",
          },
          {
            title: "7254航空润滑脂",
            link: "",
            trait: "机身通用润滑脂",
            imgSrc: "img/productImg/hkrhz/AeroShell Grease 5.png",
          },
          {
            title: "7254航空润滑脂",
            link: "",
            trait: "机身通用润滑脂",
            imgSrc: "img/productImg/hkrhz/AeroShell Grease 5.png",
          },
          {
            title: "7254航空润滑脂",
            link: "",
            trait: "机身通用润滑脂",
            imgSrc: "img/productImg/hkrhz/AeroShell Grease 5.png",
          },
        ],
      },
      SpaceProducts: {
        productType: "航天润滑剂",
        productTypeLink: "",
        indexTopImg: "img/productImg/typeIndexImg/hkyyy.jpg",
        productContent: 66,
        tabbarType: "热门应用",
        tabbarLink: "",
        productList: [
          {
            title: "7804抗化学介质润滑脂",
            link: "",
            hotState: 1,
            capacity: "500g",
            trait: "机身通用润滑脂",
            standard: "SH 0358-1995",
            brandImg: "img/brandImg/长城.png",
            img: "img/productImg/htrhj/7804抗化学介质润滑脂.png",
          },
          {
            title: "7805抗化学介质润滑脂",
            link: "",
            hotState: 1,
            capacity: "500g",
            trait: "高温航空润滑脂",
            standard: "SH 0358-1995",
            brandImg: "img/brandImg/长城.png",
            img: "img/productImg/htrhj/7804抗化学介质润滑脂.png",
          },
          {
            title: "4838抗化学介质润滑油",
            link: "",
            hotState: 1,
            capacity: "5kg",
            trait: "高温航空润滑脂",
            standard: "SH 0358-1995",
            brandImg: "img/brandImg/长城.png",
            img: "img/productImg/htrhj/7804抗化学介质润滑脂.png",
          },
          {
            title: "FMZ-1抗化学润滑脂",
            link: "",
            hotState: 1,
            capacity: "500g",
            trait: "高温航空润滑脂",
            standard: "SH 0358-1995",
            brandImg: "img/brandImg/长城.png",
            img: "img/productImg/htrhj/7804抗化学介质润滑脂.png",
          },
          {
            title: "7805抗化学介质润滑脂",
            link: "",
            hotState: 0,
            capacity: "500g",
            trait: "高温航空润滑脂",
            standard: "SH 0358-1995",
            brandImg: "img/brandImg/长城.png",
            img: "img/productImg/htrhj/7804抗化学介质润滑脂.png",
          },
          {
            title: "7805抗化学介质润滑脂",
            link: "",
            hotState: 0,
            capacity: "500g",
            trait: "高温航空润滑脂",
            standard: "SH 0358-1995",
            brandImg: "img/brandImg/长城.png",
            img: "img/productImg/htrhj/7804抗化学介质润滑脂.png",
          },
          {
            title: "7805抗化学介质润滑脂",
            link: "",
            hotState: 0,
            capacity: "500g",
            trait: "高温航空润滑脂",
            standard: "SH 0358-1995",
            brandImg: "img/brandImg/长城.png",
            img: "img/productImg/htrhj/7804抗化学介质润滑脂.png",
          },
          {
            title: "7805抗化学介质润滑脂",
            link: "",
            hotState: 0,
            capacity: "500g",
            standard: "SH 0358-1995",
            trait: "高温航空润滑脂",
            brandImg: "img/brandImg/长城.png",
            img: "img/productImg/htrhj/7804抗化学介质润滑脂.png",
          },
        ],
      },
      OthersProducts: {
        productType: "陆战装备润滑剂",
        productTypeLink: "",
        indexTopImg: "",
        productContent: 85,
        tabbarType: "常见问题",
        tabbarLink: "",
        productList: [
          {
            title: "4634坦克传动液",
            link: "",
            hotState: 1,
            capacity: "10kg",
            trait: "机身通用润滑脂",
            standard: "SH 0358-1995",
            brandImg: "img/brandImg/长城.png",
            img: "img/productImg/others/7415火炮通用润滑脂.png",
          },
          {
            title: "通用火炮润滑脂",
            link: "",
            hotState: 1,
            capacity: "500g",
            trait: "高温航空润滑脂",
            standard: "SH 0358-1995",
            brandImg: "img/brandImg/长城.png",
            img: "img/productImg/others/7415火炮通用润滑脂.png",
          },
          {
            title: "多功能通用润滑脂",
            link: "",
            hotState: 1,
            capacity: "5kg",
            trait: "高温航空润滑脂",
            standard: "SH 0358-1995",
            brandImg: "img/brandImg/长城.png",
            img: "img/productImg/others/7415火炮通用润滑脂.png",
          },
          {
            title: "FMZ-1抗化学润滑脂",
            link: "",
            hotState: 0,
            capacity: "500g",
            trait: "高温航空润滑脂",
            standard: "SH 0358-1995",
            brandImg: "img/brandImg/长城.png",
            img: "img/productImg/others/7415火炮通用润滑脂.png",
          },
          {
            title: "7805抗化学介质润滑脂",
            link: "",
            hotState: 0,
            capacity: "500g",
            trait: "高温航空润滑脂",
            standard: "SH 0358-1995",
            brandImg: "img/brandImg/长城.png",
            img: "img/productImg/others/7415火炮通用润滑脂.png",
          },
          {
            title: "7805抗化学介质润滑脂",
            link: "",
            hotState: 0,
            capacity: "500g",
            trait: "高温航空润滑脂",
            standard: "SH 0358-1995",
            brandImg: "img/brandImg/长城.png",
            img: "img/productImg/others/7415火炮通用润滑脂.png",
          },
          {
            title: "7805抗化学介质润滑脂",
            link: "",
            hotState: 0,
            capacity: "500g",
            trait: "高温航空润滑脂",
            standard: "SH 0358-1995",
            brandImg: "img/brandImg/长城.png",
            img: "img/productImg/others/7415火炮通用润滑脂.png",
          },
          {
            title: "7805抗化学介质润滑脂",
            link: "",
            hotState: 0,
            capacity: "500g",
            trait: "高温航空润滑脂",
            standard: "SH 0358-1995",
            brandImg: "img/others/长城.png",
            img: "img/productImg/others/7415火炮通用润滑脂.png",
          },
        ],
      },
      Adhibitions: [
        { title: "运载火箭", link: "", iconSrc: "icon-shenzhouwuhaohuojian" },
        {
          title: "人造卫星",
          link: "",
          iconSrc: "icon-zhongbadiqiuziyuanweixing",
        },
        {
          title: "宇宙飞船",
          link: "",
          iconSrc: "icon-shenzhouliuhaofeichuan",
        },
        { title: "履带车辆", link: "", iconSrc: "icon-tanke" },
        { title: "口径火炮", link: "", iconSrc: "icon-huopao" },
        { title: "轻型武器", link: "", iconSrc: "icon-buqiang" },
        { title: "各类舰船", link: "", iconSrc: "icon-hangmu" },
        {
          title: "真空设备",
          link: "",
          iconSrc: "icon-donglizhaoming_shuibeng",
        },
        { title: "铁路车辆", link: "", iconSrc: "icon-gaotie" },
      ],
      pictureRecommend: [
        {
          titile: "10号航空液压油",
          src: "img/recommendImg/10号航空液压油.jpg",
          link: "",
          description: "昆仑玉门炼油厂产10号航空液压油天空",
        },
        {
          titile: "4050航空润滑油",
          src: "img/recommendImg/4050航空润滑油.jpg",
          link: "",
          description: "石科院4050航空润滑油，符合GJB1263-1991",
        },
        {
          titile: "Mobil Jet Oil II",
          src: "img/recommendImg/飞马2号航空润滑油.jpg",
          link: "",
          description: "飞马2号航空润滑油，用途最广泛的喷气机油之一",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
#home {
  background: url(/img/bgcImg/news_bgc.jpg) no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
}
</style>