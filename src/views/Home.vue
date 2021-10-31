<template>
  <div class="wrapper">
    <div class="container-btn">
      <button class="btn-run-emulator" @click="goToEmulator">Запустить эмулятор светофора</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  methods: {
    goToEmulator() {
      this.$router.push({ path: '/runEmulator' })
    }
  }
}
</script>
<style scoped>
.wrapper {
  min-width: 650px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/DorogaHome.jpg") no-repeat;
  -moz-background-size: 100%;
  -webkit-background-size: 100%;
  -o-background-size: 100%;
  background-size: cover
}
.container-btn {
  position: absolute;
}
.btn-run-emulator {
  background: #2b414a;
  color: rgba(255, 255, 255, 0.2);
  border: none;
  height: 60px;
  font-size: 1.6em;
  padding: 0 2em;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
  border-radius: 20px;
}
.btn-run-emulator:hover {
  background: #638cc2;
  color: #ffffff;
}
.btn-run-emulator:before, .btn-run-emulator:after {
  content: '';
  position: absolute;
  top: 0;
  right: 15px;
  height: 4px;
  width: 0;
  background: #92a768;
  transition: 550ms ease all;
}
.btn-run-emulator:after {
  right: inherit;
  top: inherit;
  left: 15px;
  bottom: 0;
}
.btn-run-emulator:hover:before, .btn-run-emulator:hover:after {
  width: 93%;
  transition:800ms ease all;
}
</style>
