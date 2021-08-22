<template>
  <div id="home">
    <top-nav-bar />
  </div>
</template>

<script>
import topNavBar from "components/business/topNavBar/TopNavBar";
export default {
  components: { topNavBar },
  name: "Home",
};
</script>
<style lang="scss" scoped>
#home {
  height: 200vh;
  background-image: url("~assets/img/banner/untitled.png");
}
</style>