<template>
  <button @click="handleClick">
    <img :src="image" />
  </button>
</template>

<script>
import { mapGetters } from "vuex";
import gameSerivce from "../../../services/game.service";
import gameStatus from "../../../statics/gameStatus";

export default {
  name: "PlayPause",
  data() {
    return {
      image: this.getImgUrl(`pause`)
    };
  },
  computed: {
    ...mapGetters("status", ["gameStatus"])
  },
  watch: {
    gameStatus: function(newStatus) {
      switch (newStatus) {
        case gameStatus.ended:
          //TODO add messages some where!
          this.$notify({
            text: "Game over!",
            type: "warn",
            duration: 5000
          });
          this.image = this.getImgUrl("play");
          break;
        case gameStatus.running:
          this.image = this.getImgUrl("pause");
          break;
        case gameStatus.paused:
          this.image = this.getImgUrl("play");
          break;
      }
    }
  },
  methods: {
    handleClick() {
      gameSerivce.getInstance().toggleGame();
    },
    getImgUrl(name) {
      let images = require.context("../../../assets", false, /\.png$/);
      return images("./" + name + ".png");
    }
  }
};
</script>

<style></style>
