<template>
  <div :class="lampClasses">
    <div class="lamp_counter" v-if="lampIsOn">
      {{ sec }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Lamps",
  props: ['color', 'currentColorIs', 'sec'],
  computed: {
    lampIsOn() {
      return this.color === this.currentColorIs;
    },
    lampClasses() {
      return `
        lamp_${this.color}
        ${this.lampIsOn ? 'lamp_on' : ''}
        ${this.lampIsOn && this.sec < 4 ? 'lamp_blink' : ''}`;
    },
  },
}
</script>

<style>
@keyframes blink-animation {
  to {
    opacity: 0.5;
  }
}
.lamp_red {
  background-color: red;
  color: white;
  opacity: 0.5;
}
.lamp_yellow {
  background-color: yellow;
  color: black;
  opacity: 0.5;
}
.lamp_green {
  background-color: rgb(0, 212, 0);
  color: white;
  opacity: 0.5;
}
.lamp_on {
  opacity: 1;
}
.lamp_counter {
  width: 30px;
  font-size: 1em;
  text-align: center;
  align-self: center;
  font-family: Arial, Helvetica, sans-serif;
}
.lamp_blink {
  animation: blink-animation 0.2s steps(10, start) infinite;
}
</style>
