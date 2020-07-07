<template>
  <div id="app">
    <the-navigation />	
    <router-view/>
  </div>
</template>

<script>
import TheNavigation from './components/common/TheNavigation'


export default {
	name: 'App',
	components: {
		TheNavigation
  }
}
</script>

<style lang="scss">

// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin: 0 auto;
// }
</style>
