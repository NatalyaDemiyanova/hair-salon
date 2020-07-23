<template>
  <div id="app" class="app">
    <the-navigation v-scroll="handleScroll" />	
    <router-view class="app__router"/>
    <the-footer />
    <the-scroll-top-arrow /> 
  </div>
</template>

<script>
import TheNavigation from './components/common/TheNavigation'
import TheFooter from './components/TheFooter'
import TheScrollTopArrow from './components/common/TheScrollTopArrow'

export default {
	name: 'App',
	components: {
    TheNavigation, 
    TheFooter,
    TheScrollTopArrow 
  },

  methods: {
    handleScroll: function (evt, el) {
      if (window.scrollY > 50) {
        el.setAttribute(
          'style',
          'background-color: rgb(52, 51, 51);padding: 10px 0;'
        )
      }
      else {
        el.setAttribute(
          'style',
          ' background-color: $navigation-bg-color'
        )
      }
    }
  },

  mounted: function () {
    this.handleScroll()
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
