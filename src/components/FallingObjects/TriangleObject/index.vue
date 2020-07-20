<template>
  <div>
    <div
      class="triangle"
      :style="{
        'border-left': `${40 + weight * 2}px solid transparent`,
        'border-right': `${40 + weight * 2}px solid transparent`,
        'border-bottom': `${80 + weight * 2}px solid #ff6600`
      }"
    >
      <p class="triangle-text">{{ weight }} KG</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TriangleObject",
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
