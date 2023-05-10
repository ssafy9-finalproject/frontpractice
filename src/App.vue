<template>
  <div id="app">
    <nav-bar></nav-bar>
    <end-footer></end-footer>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue';
import EndFooter from './components/EndFooter.vue';
export default{
  name:'App',
  components: {
    NavBar, EndFooter
  },
}
</script>
<style></style>
