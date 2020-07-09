<template>
  <div id="app" class="app">
    <the-navigation />	
    <router-view class="app__router"/>
  </div>
</template>

<script>
import TheNavigation from './components/common/TheNavigation'

export default {
	name: 'App',
	components: {
		TheNavigation
  },
}
</script>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  // @include flex(center, center, column);
  min-height: 100vh;

  &__router {
   flex: 1 1;
  }
}
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin: 0 auto;
// }
</style>
