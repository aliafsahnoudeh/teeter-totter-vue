<template>
  <div class="teeter-totter">
    <div class="main">
      <span class="bar" id="bar" :style="barStyle">
        <ObjectList />
      </span>
      <div class="foundation"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ObjectList from "@/components/ObjectList";
import fallingService from "../../services/falling.service";
import size from "../../statics/size";

export default {
  name: "TeeterTotter",
  components: {
    ObjectList
  },
  mounted() {
    fallingService.getInstance().start();
  },
  computed: {
    barStyle() {
      return {
        width: size.barWidthPixel,
        transform: `rotate(${this.degree}deg)`,
        "-webkit-transform": `rotate(${this.degree}deg)`,
        "-moz-transform": `rotate(${this.degree}deg)`,
        "-ms-transform": `rotate(${this.degree}deg)`,
        "-o-transform": `rotate(${this.degree}deg)`
      };
    },
    ...mapGetters("teeterTotter", ["degree"])
  }
};
</script>

<style lang="scss" scoped>
@import url("./style.scss");
</style>
