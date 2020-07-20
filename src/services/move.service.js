import store from "../store";
import edges from "../statics/edges";

class MoveService {
  moveRight() {
    const fallingObject = store.getters["objects/fallingObject"];
    if (!fallingObject) return;
    if (fallingObject.left + 5 > edges.maxLeft) return;
    //TODO dispatch store
    fallingObject.left += 5;

    const degree = parseFloat(store.getters["teeterTotter/degree"]);
    if (degree < -10) {
      //TODO dispatch store
      fallingObject.top += 3;
    } else if (degree < -20) {
      //TODO dispatch store
      fallingObject.top += 5;
    } else if (degree > 0) {
      //TODO dispatch store
      fallingObject.top += degree / 10;
    }
  }
  moveLeft() {
    const fallingObject = store.getters["objects/fallingObject"];
    if (!fallingObject) return;
    if (fallingObject.left - 5 < edges.minLeft) return;
    //TODO dispatch store
    fallingObject.left -= 5;

    const degree = parseFloat(store.getters["teeterTotter/degree"]);
    if (degree > 0) {
      //TODO dispatch store
      fallingObject.top += degree / 10;
    }
  }
}

export default MoveService;
