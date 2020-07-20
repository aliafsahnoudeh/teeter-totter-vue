<template>
  <div id="app">
    <router-view />
    <notifications position="top center" />
  </div>
</template>

<style lang="scss">
html body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}

.vue-notification-group {
  margin-top: 150px;
}

.notification-title {
  font-size: 30px;
}

.notification-content {
  font-size: 30px;
}
</style>
