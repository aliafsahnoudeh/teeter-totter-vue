import Vue from "vue";
import Vuex from "vuex";
import teeterTotter from "./modules/teeterTotter";
import objects from "./modules/objects";
import status from "./modules/status";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    teeterTotter,
    objects,
    status
  }
});

export default store;
