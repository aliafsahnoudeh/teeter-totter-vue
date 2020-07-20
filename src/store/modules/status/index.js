import gameStatus from "../../../statics/gameStatus";

const state = {
  gameStatus: gameStatus.ended
};

const getters = {
  gameStatus: state => {
    return state.gameStatus;
  }
};

const actions = {
  setGameStatus({ commit }, newStatus) {
    try {
      commit("SET_GAME_STATUS", newStatus);
    } catch (error) {
      //TOOD handle error
      console.error(error);
    }
  }
};

const mutations = {
  SET_GAME_STATUS(state, newStatus) {
    state.gameStatus = newStatus;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
