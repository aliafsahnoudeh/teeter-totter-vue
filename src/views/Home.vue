<template>
  <div class="home">
    <Header />
    <TeeterTotter />
  </div>
</template>

<script>
import TeeterTotter from "../components/TeeterTotter";
import Header from "@/components/Header";
import gameService from "../services/game.service";

export default {
  name: "home",
  components: {
    TeeterTotter,
    Header
  },
  data() {
    return {};
  },
  mounted() {
    gameService.getInstance().start();
  }
};
</script>
