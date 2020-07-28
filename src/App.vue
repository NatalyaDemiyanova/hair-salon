<template>
  <div id="app" class="app">
    <the-navigation v-scroll="handleScroll" class="app__navigation" />	
    <transition mode="in-out" name="fade-link">
      <router-view class="app__router" @click = "click"/>
    </transition>
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
    },
  },

  mounted: function () {
    this.handleScroll()
  },

  watch: {
    $route() {
      console.log(11111111)
      // обрабатываем изменение параметров маршрута...
    }
  }
}
</script>

<style lang="scss">

// @import "../node_modules/uikit/src/scss/uikit.scss";

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__navigation {
    transition: 0.3s all;
    // transition: all 0.3s ease-in-out;
  }

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
._active {
  display: block;
}

.fade-link-enter-active, 
.fade-link-leave-active {
  // transition: all 0.5s;
  transition: 0.5s;
}
.fade-link-enter, 
.fade-link-leave-to {
	transform: scale(1.1);
	opacity: 0;
}
</style>
