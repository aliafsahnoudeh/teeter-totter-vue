<template>
  <div
    class="rectangle"
    :style="{
      width: `${80 + weight * 2}px`,
      height: `${60 + weight * 2}px`
    }"
  >
    <p class="text-rectangle">{{ weight }} KG</p>
  </div>
</template>

<script>
export default {
  name: "RectangleObject",
  props: {
    weight: {
      type: Number,
      default: 10
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("./style.scss");
</style>
