<template>
  <button>
    <img src="../../../assets/reset.png" @click="onClick" />
  </button>
</template>

<script>
export default {
  methods: {
    onClick() {
      window.location.reload();
    }
  }
};
</script>

<style></style>
