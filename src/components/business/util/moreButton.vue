<template>
  <div class="more-button">
    <a href=""><i class="el-icon-refresh"></i> 换一换</a>
    <a href="">更多<i class="el-icon-arrow-right"></i></a>
  </div>
</template>

<script>
export default {
  name: "MoreButton",
};
</script>
<style lang="scss" scoped>
.more-button {
  margin-top: 5px;
  font-size: 15px;
  text-align: center;
}
.more-button a {
  padding: 1px 8px;
  margin-left: 10px;
  border-radius: 2px;
  color: #666;
  border: 1px solid #999;
}
.el-icon-refresh {
  transition: all 1s ease-in-out;
  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
}
a:hover i {
  background-color: #f3f4f5;
  transform: rotate(-360deg);
  -webkit-transform: rotate(-360deg);
  -moz-transform: rotate(-360deg);
  -o-transform: rotate(-360deg);
  -ms-transform: rotate(-360deg);
}
</style>