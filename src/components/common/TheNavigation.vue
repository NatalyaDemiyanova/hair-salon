<template>
  <div class="navigation" id="nav">
    <div class="container navigation__container">
      <logo />
      <transition name="fade">
        <the-navigation-list class="navigation__header-navigation"  :class="{_active: isActive}" />
      </transition>
      <the-social-nav class="navigation__social-nav" />
      <transition name="fade">
        <the-burger @click="toggle" :class="{_active: isActive}" />
      </transition>
    </div>
  </div>
</template>

<script>
import Logo from './Logo.vue'
import TheNavigationList from './TheNavigationList'
import TheSocialNav from './TheSocialNav'
import TheBurger from './TheBurger'

export default {
  name: 'TheNavigation',
  components: {
    Logo,
    TheBurger,
    TheSocialNav,
    TheNavigationList
  },
  data: function() {
    return {
      isActive: false,
      
    }
  },
  methods: {
    toggle: function() {
      this.isActive = !this.isActive;
    },

    // closeNav: function() {
    //   this.show = false
    // } 
  },

  // mounted: function(){
  //   this.closeNav()
  // }

  // watch:{
  //   $route (to, from){
  //       this.show = false;
  //   }
  // } 
}
</script>

<style lang="scss">
.navigation {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 10px 0;
  background-color: $navigation-bg-scroll-color;
  z-index: 10;

  @include media($screen-desktop) {
    padding: 26px 0;
    background-color: $navigation-bg-color;
  }

  &__container {
    @include flex(space-between, center);
  }

  &__header-navigation {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100%;
    height: 100vh;
    padding: 120px 40px;
    @include flex(center, center, column);
    display: none;
    text-align: center;
    z-index: -1;

    @include media($screen-desktop) {
      @include flex(center, center);
      position: static;
      width: auto;
      height: auto;
      top: 0;
      padding: 0;
      background-color: none;
      z-index: 5;
    }
  }

  &__social-nav {
    display: none;

    @include media($screen-small-tablet) {
      display: flex;
    }
  }
}

.router-link-active {
  color: $text-active;
}

// ._active {
//   display: block;
// }
</style> 