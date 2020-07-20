<template>
  <div class="header">
    <div class="main">
      <div id="left">
        <p>Left Side Weight: {{ leftWeight }}</p>
        <p>Momentum: {{ leftMomentum }}</p>
      </div>
      <div id="btn">
        <PlayPause />
        <Reset />
      </div>
      <div id="right">
        <p>Right Side Weight: {{ rightWeight }}</p>
        <p>Momentum: {{ rightMomentum }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import PlayPause from "./PlayPause";
import Reset from "./Reset";
import { mapGetters } from "vuex";

export default {
  name: "Header",
  components: {
    PlayPause,
    Reset
  },
  computed: {
    ...mapGetters("teeterTotter", [
      "leftWeight",
      "rightWeight",
      "leftMomentum",
      "rightMomentum"
    ])
  }
};
</script>

<style lang="sass">
@import url('./style.scss');
</style>
