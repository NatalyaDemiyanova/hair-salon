<template>
  <div id="app" class="app">
    <the-navigation />	
    <router-view class="app__router"/>
    <the-footer />
  </div>
</template>

<script>
import TheNavigation from './components/common/TheNavigation'
import TheFooter from './components/TheFooter'

export default {
	name: 'App',
	components: {
    TheNavigation, 
    TheFooter
  },
}
</script>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
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
