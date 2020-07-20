<template>
  <div
    class="circle"
    :style="{
      width: `${60 + weight * 2}px`,
      height: `${60 + weight * 2}px`
    }"
  >
    <p class="text-circle">{{ weight }} KG</p>
  </div>
</template>

<script>
export default {
  name: "CircleObject",
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
