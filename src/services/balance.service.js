import store from "../store";

class BalanceService {
  async calculateDegree() {
    const leftMomentum = store.getters["teeterTotter/leftMomentum"];
    const rightMomentum = store.getters["teeterTotter/rightMomentum"];
    let degree = ((rightMomentum - leftMomentum) / leftMomentum) * 100;
    //this is NOT related to The maximum bending percentage is %30 , if it exceeds this limit, simulation
    //ends.
    //It's just for controlling bar's angle
    if (degree > 30) {
      degree = 30;
    } else if (degree < -30) {
      degree = -30;
    }
    store.dispatch("teeterTotter/setDegree", degree);
  }
}

export default BalanceService;
