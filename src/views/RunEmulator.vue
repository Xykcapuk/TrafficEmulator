<template>
  <div class="wrapper">
    <div class="container-btn">
      <button class="btn-back" @click="goToBack">Назад</button>
    </div>

    <div class="container-traffic-light">
      <div>
        <img src="../assets/TravelingRuralRoad.jpg" alt="picture">
      </div>
      <div class="traffic-light">
        <div class="container-lamps">
          <Lamps class="lamp" color="red" :currentColorIs="currentColorIs" :sec="counter"/>
          <Lamps class="lamp" color="yellow" :currentColorIs="currentColorIs" :sec="counter"/>
          <Lamps class="lamp" color="green" :currentColorIs="currentColorIs" :sec="counter"/>
        </div>
        <div class="pole"></div>
      </div>
    </div>

  </div>
</template>

<script>
import Lamps from '@/components/Lamps.vue';

export default {
  name: "RunEmulator",
  props: ['currentColorIs', 'time'],
  components: {
    Lamps,
  },
  data() {
    return {
      counter: null,
      interval: null,
    };
  },
  computed: {
    getNextColor() {
      this.$store.commit('setNextColor', this.currentColorIs);
      return this.$store.state.nextColor;
    },
  },
  watch: {
    $route() {
      this.setTimer();
    },
  },
  mounted() {
    this.setTimer();
  },
  methods: {
    goToBack() {
      this.$router.push({path: '/'})

    },
    setTimer() {
      const timer = this.time;

      setTimeout(() => {
        this.$router.push(this.getNextColor);
      }, timer);

      this.counter = this.time / 1000;

      if (this.interval) clearInterval(this.interval);

      this.interval = setInterval(() => {
        this.counter -= 1;
      }, 1000);
    },
  }
}
</script>

<style scoped>
.wrapper {
  min-width: 650px;
  height: 100vh;
  overflow: hidden;
}
.container-btn {
  position: absolute;
  top: 20px;
  left: 20px;
}
.btn-back {
  background: none;
  color: rgb(255, 255, 255);
  border: 1px solid white;
  height: 30px;
  font-size: 1.2em;
  padding: 0 2em;
  cursor: pointer;
  outline: none;
  border-radius: 20px;
}
.btn-back:hover {
  background: black;
}
img {
  width: 100vw;
  height: 100vh;
}
.container-traffic-light {
  display: flex;
  justify-content: center;
  align-items: center;
}
.traffic-light {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 39%;
  left: 80%;
}
.container-lamps {
  border: 1px solid rgb(196,138,23);
  border-radius: 5px;
  width: 55px;
  padding: 10px;
  background-color: rgb(52,45,27);
}
.lamp {
  width: 30px;
  height: 30px;
  margin: 2px auto;
  border-radius: 50%;
  display: flex;
  justify-content: center;
}
.pole {
  width: 12px;
  height: 180px;
  background-color: rgb(51,43,20);
}
</style>
