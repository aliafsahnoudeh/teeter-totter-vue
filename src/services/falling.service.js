import gameService from "./game.service";
import store from "../store";
import objectType from "../statics/objectTypes";

class FallingService {
  constructor() {
    this.interval = 0;
    this.isRunning = false;
    this.increaseStep = 5;
  }
  start() {
    this.isRunning = true;
    this.interval = setTimeout(() => {
      if (!this.isRunning) return;
      //TODO detect when hitting some object or bar and stop\
      const fallingObject = store.getters["objects/fallingObject"];
      if (fallingObject.top > -57) {
        this.isRunning = false;
        clearInterval(this.interval);
        this.detectLeftOrRight();
      } else {
        this.increaseTop();
        this.start();
      }
    }, 100);
  }

  increaseTop() {
    const fallingObject = store.getters["objects/fallingObject"];
    //TODO dispatch store
    fallingObject.top += this.increaseStep;

    const degree = parseFloat(store.getters["teeterTotter/degree"]);
    if (degree > 0) {
      //TODO dispatch store
      fallingObject.left += 3;
    } else if (degree < -20) {
      //TODO dispatch store
      fallingObject.left -= 3;
    }
  }

  stop() {
    this.isRunning = false;
    clearTimeout(this.interval);
  }

  detectLeftOrRight() {
    const fallingObject = store.getters["objects/fallingObject"];
    store.dispatch("objects/stopFalling");
    fallingObject.degree = 0;
    if (fallingObject.objectType === objectType.triangle) {
      fallingObject.top -= 30;
    }
    if (fallingObject.left > 350) {
      //it's on right side
      store.dispatch("teeterTotter/addToRightWeight", fallingObject);
    } else {
      // it's on left side
      store.dispatch("teeterTotter/addToLeftWeight", fallingObject);
    }
    gameService.getInstance().checkWeights();
    //The drop speed of boxes may increase as the time goes on
    this.increaseStep += 1;
  }
}

const Singleton = (function() {
  let instance;

  function createInstance() {
    return new FallingService();
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
