import sizes from "../../../statics/size";

const state = {
  leftWeight: 0,
  rightWeight: 0,
  leftMomentum: 0,
  rightMomentum: 0,
  degree: 0
};

const getters = {
  leftWeight: state => {
    return state.leftWeight;
  },
  leftMomentum: state => {
    return state.leftMomentum;
  },
  rightWeight: state => {
    return state.rightWeight;
  },
  rightMomentum: state => {
    return state.rightMomentum;
  },
  degree: state => {
    return state.degree;
  }
};

const actions = {
  addToLeftWeight({ commit }, newObject) {
    try {
      commit("ADD_TO_LEFT_OBJECTS", newObject);
    } catch (error) {
      //TOOD handle error
      console.error(error);
    }
  },
  async clearLeftWeight({ commit }) {
    try {
      commit("CLEAR_LEFT_OBJECTS");
    } catch (error) {
      //TOOD handle error
      console.error(error);
    }
  },
  addToRightWeight({ commit }, newObject) {
    try {
      commit("ADD_TO_RIGHT_OBJECTS", newObject);
    } catch (error) {
      //TOOD handle error
      console.error(error);
    }
  },
  async clearRightWeight({ commit }) {
    try {
      commit("CLEAR_RIGHT_OBJECTS");
    } catch (error) {
      //TOOD handle error
      console.error(error);
    }
  },
  async setDegree({ commit }, degree) {
    try {
      commit("SET_DEGREE", degree);
    } catch (error) {
      //TOOD handle error
      console.error(error);
    }
  }
};

const mutations = {
  ADD_TO_LEFT_OBJECTS(state, object) {
    state.leftWeight += parseInt(object.weight);
    //TODO logic to services
    const distanceFromCenterPx = 350 - object.left;
    const distanceFromCenterMeter =
      (distanceFromCenterPx * sizes.barWidth) / sizes.barWidthPixel;
    state.leftMomentum += Math.round(
      parseFloat(object.weight * distanceFromCenterMeter)
    );
    console.log(`weight: ${object.weight}`);
    console.log(`left: ${object.left}`);
    console.log(`distanceFromCenterPx: ${distanceFromCenterPx}`);
    console.log(`distanceFromCenterMeter: ${distanceFromCenterMeter}`);
    console.log(`leftMomentum: ${state.leftMomentum}`);
  },
  CLEAR_LEFT_OBJECTS(state) {
    state.leftWeight = [];
  },
  ADD_TO_RIGHT_OBJECTS(state, object) {
    state.rightWeight += parseInt(object.weight);
    //TODO logic to services
    const distanceFromCenterPx = object.left - 350;
    const distanceFromCenterMeter =
      (distanceFromCenterPx * sizes.barWidth) / sizes.barWidthPixel;
    state.rightMomentum += Math.round(
      parseFloat(object.weight * distanceFromCenterMeter)
    );
    console.log(`weight: ${object.weight}`);
    console.log(`left: ${object.left}`);
    console.log(`distanceFromCenterPx: ${distanceFromCenterPx}`);
    console.log(`distanceFromCenterMeter: ${distanceFromCenterMeter}`);
    console.log(`rightMomentum: ${state.rightMomentum}`);
  },
  CLEAR_RIGHT_OBJECTS(state) {
    state.rightWeight = [];
  },
  SET_DEGREE(state, degree) {
    state.degree = degree;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
