const state = {
  objects: []
};

const getters = {
  objects: state => {
    return state.objects;
  },
  fallingObject: state => {
    if (state.objects.length > 0) {
      if (state.objects[state.objects.length - 1].falling) {
        return state.objects[state.objects.length - 1];
      }
    }
    return null;
  }
};

const actions = {
  async addToObjects({ commit }, object) {
    try {
      commit("ADD_TO_OBJECTS", object);
    } catch (error) {
      //TOOD handle error
      console.error(error);
    }
  },
  stopFalling({ commit }) {
    try {
      commit("STOP_FALLING");
    } catch (error) {
      //TOOD handle error
      console.error(error);
    }
  }
};

const mutations = {
  ADD_TO_OBJECTS(state, object) {
    state.objects.push(object);
  },
  STOP_FALLING(state) {
    state.objects[state.objects.length - 1].falling = false;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
