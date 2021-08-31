<template>
  <div class="dynamic-button">
    <a href=""><button type="button" class="button">{{btnContent}}</button></a>
  </div>
</template>

<script>
export default {
  name: "DynamicButton",
  props: {
    btnContent: {
      type: String,
      default: "查看更多",
    },
  },
};
</script>
<style lang="scss" scoped>
a {
  display: block;
  width: 100%;
  height: 100%;
}
.button {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  color: #955124;
  border: 1px #955124 solid;
  background-color: #fff;
  -webkit-transition: all 0.36s;
  -moz-transition: all 0.36s;
  -ms-transition: all 0.36s;
  -o-transition: all 0.36s;
  transition: all 0.36s;
}
.button:hover {
  color: #f3f4f5;
  border: 1px #999 solid;
  background-color: #955124;
}
</style>