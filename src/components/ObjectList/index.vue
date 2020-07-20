<template>
  <div class="object-list">
    <FallingObject
      class="test"
      v-for="(object, index) in objects"
      :key="index"
      :objectType="object.objectType"
      :weight="object.weight"
      :top="object.top"
      :left="object.left"
      :degree="object.degree"
      :style="style"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import FallingObject from "@/components/FallingObjects";

export default {
  name: "ObjectList",
  components: {
    FallingObject
  },
  computed: {
    ...mapGetters("objects", ["objects"]),
    style() {
      return {
        position: "absolute"
      };
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
@import url("./style.scss");
</style>
