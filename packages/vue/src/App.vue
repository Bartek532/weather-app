<template>
  <Main />
</template>

<script>
import Main from "@/components/Main.vue";
export default {
  components: {
    Main,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Didact+Gothic&display=swap");

body {
  padding: 0;
  margin: 0;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
}

* {
  box-sizing: border-box;
  font-family: "Didact Gothic", sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

button:focus {
  outline: 1px solid #000;
}

#app::after {
  z-index: -5;
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-top: 90vh solid #ebedf1;
  border-right: 100vw solid transparent;
  top: 0;
  left: 0;
}

.sr-only {
  position: absolute;
  top: auto;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); /* IE 6/7 */
  clip: rect(1px, 1px, 1px, 1px);
  width: 1px;
  height: 1px;
  white-space: nowrap;
}
</style>
