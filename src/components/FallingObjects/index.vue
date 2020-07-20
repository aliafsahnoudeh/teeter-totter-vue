<template>
  <component
    :style="objectStyle"
    :is="component"
    :objectType="objectType"
    :weight="weight"
  />
</template>

<script>
import objectTypes from "../../statics/objectTypes";
import MoveService from "../../services/move.service";

export default {
  name: "Register",
  methods: {
    moveToRight() {
      this.moveService.moveRight();
    },
    moveToLeft() {
      this.moveService.moveLeft();
    }
  },
  computed: {
    objectStyle() {
      if (this.degree) {
        return {
          "margin-top": this.top + "px",
          "margin-left": this.left + "px",
          transform: `rotate(${this.degree}deg)`,
          "-webkit-transform": `rotate(${this.degree}deg)`,
          "-moz-transform": `rotate(${this.degree}deg)`,
          "-ms-transform": `rotate(${this.degree}deg)`,
          "-o-transform": `rotate(${this.degree}deg)`
        };
      } else {
        return {
          "margin-top": this.top + "px",
          "margin-left": this.left + "px"
        };
      }
    },
    loader() {
      switch (this.objectType) {
        case objectTypes.circle:
          return () => import(`./CircleObject`);
        case objectTypes.rectangle:
          return () => import(`./RectangleObject`);
        case objectTypes.triangle:
          return () => import(`./TriangleObject`);
        default:
          return () => import(`./TriangleObject`);
      }
    }
  },
  props: {
    objectType: {
      type: String,
      default: "triangle"
    },
    weight: {
      tyep: Number,
      default: 10
    },
    top: {
      tyep: Number,
      default: 0
    },
    left: {
      tyep: Number,
      default: 0
    },
    degree: {
      tyep: Number,
      default: 0
    }
  },
  data() {
    return {
      component: null,
      moveService: new MoveService()
    };
  },
  mounted() {
    this.loader()
      .then(() => {
        this.component = () => this.loader();
      })
      .catch(() => {
        this.component = () => import(`./TriangleObject`);
      });

    window.addEventListener("keydown", event => {
      switch (event.keyCode) {
        //Left Key pressed
        case 37:
          this.moveToLeft();
          break;
        //Right Key pressed
        case 39:
          this.moveToRight();
          break;
        //Up Key pressed
        case 38:
          break;
        //Down Key pressed
        case 40:
          break;
      }
    });
  }
};
</script>

<style></style>
