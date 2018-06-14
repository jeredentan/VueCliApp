<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <!-- <app-nav></app-nav> -->
    <router-view/>
  </div>
</template>



<!-- <script>
import { Component, Vue } from 'vue-property-decorator';
import AppNav from '@/components/AppNav.vue';

@Component({
  components: {
    AppNav,
  },
})
export default class App extends Vue {
  constructor() {
    super();
    console.log(process.env.VUE_APP_API);
  }
}
</script> -->

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
