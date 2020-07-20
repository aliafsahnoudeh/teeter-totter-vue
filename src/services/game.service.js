import fallingService from "./falling.service";
import BalanceService from "./balance.service";
import { getRandomNumber } from "../utils/randomHelper";
import store from "../store";
import objectTypes from "../statics/objectTypes";
import edges from "../statics/edges";
import gameStatus from "../statics/gameStatus";
import size from "../statics/size";

class GameService {
  constructor() {
    this.balanceService = new BalanceService();
    store.dispatch("status/setGameStatus", gameStatus.ended);
  }

  async start() {
    store.dispatch("status/setGameStatus", gameStatus.running);
    await this.createRightObjects();
    await this.createFallingObject();
  }

  async createFallingObject() {
    const falling = await this.createObject();
    falling.falling = true;
    falling.top = -400;
    const degree = parseFloat(store.getters["teeterTotter/degree"]);
    if (degree < -20) {
      falling.left = 300;
    } else if (degree < -10) {
      falling.left = 200;
    } else if (degree < 0) {
      falling.left = 100;
    } else if (degree < 10) {
      falling.left = -50;
    } else if (degree > 0) {
      falling.left = 0;
    }
    falling.degree = -parseFloat(store.getters["teeterTotter/degree"]);
    store.dispatch("objects/addToObjects", falling);
    fallingService.getInstance().start();
  }

  async createRightObjects() {
    const count = getRandomNumber(1, 5);
    for (let i = 0; i < count; i++) {
      if (store.getters["teeterTotter/rightMomentum"] > 20) break;
      const newObject = await this.createObject();
      newObject.left = edges.maxLeft - i * 20;
      newObject.top = -50;
      store.dispatch("objects/addToObjects", newObject);
      store.dispatch("teeterTotter/addToRightWeight", newObject);
    }
    this.balanceService.calculateDegree();
  }

  async createObject() {
    const weight = getRandomNumber(size.minWeight, size.maxWeight);
    const randomType = getRandomNumber(0, 2);
    let objectType = null;
    switch (randomType) {
      case 0:
        objectType = objectTypes.triangle;
        break;
      case 1:
        objectType = objectTypes.circle;
        break;
      case 2:
        objectType = objectTypes.rectangle;
        break;
      default:
        objectType = objectTypes.triangle;
        break;
    }
    return {
      weight: weight,
      objectType: objectType
    };
  }

  async checkWeights() {
    const leftMomentum = store.getters["teeterTotter/leftMomentum"];
    const rightMomentum = store.getters["teeterTotter/rightMomentum"];
    this.balanceService.calculateDegree();
    if (
      leftMomentum - rightMomentum >= 20 ||
      rightMomentum - leftMomentum >= 20
    ) {
      this.end();
    } else this.createFallingObject();
  }

  toggleGame() {
    if (store.getters["status/gameStatus"] === gameStatus.running) {
      store.dispatch("status/setGameStatus", gameStatus.paused);
      fallingService.getInstance().stop();
    } else if (store.getters["status/gameStatus"] === gameStatus.paused) {
      store.dispatch("status/setGameStatus", gameStatus.running);
      fallingService.getInstance().start();
    } else {
      window.location.reload();
      this.start();
    }
  }

  end() {
    store.dispatch("status/setGameStatus", gameStatus.ended);
    fallingService.getInstance().stop();
  }
}

const Singleton = (function() {
  let instance;

  function createInstance() {
    return new GameService();
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

export default Singleton;
