<template>
  <div class="navigation" v-scroll="handleScroll" id="nav">
    <div class="container navigation__container">
      <logo />
      <transition name="fade">
        <the-navigation-list class="navigation__header" :class="{_active: isActive}" />
      </transition>
      <div class="navigation__social"></div>
      <transition name="fade">
        <the-burger @click="toggle" :class="{_active: isActive}" />
      </transition>
    </div>
  </div>
</template>

<script>
import Logo from './Logo.vue'
import TheNavigationList from './TheNavigationList'
import TheBurger from './TheBurger'

export default {
  name: 'TheNavigation',
  components: {
    Logo,
    TheBurger,
    TheNavigationList
  },
  data: function() {
    return {
      isActive: false,
      handleScroll: false
    }
  },
  methods: {
    toggle: function() {
      this.isActive = !this.isActive;
    },

    // handleScroll: function(evt, el) {
    //   if (window.scrollY > 50) {
    //     el.setAttribute("style", "color:red; ")
    //   }
    //   // return window.scrollY > 100;
    // }
    
  }
}
</script>

<style lang="scss">
.navigation {
  position: fixed;
  // position: sticky;
  top: 0;
  right: 0;
  left: 0;
  padding: 32px 0;
  background-color: $navigation-bg-color;
  z-index: 10;

  &__container {
    @include flex(space-between, center);
  }

  &__header {
    position: absolute;
    top: 100px;
    right: 0px;
    width: 100%;
    padding: 50px 40px;
    // background-color: $navigation-bg-color;
    @include flex(center, center, column);
    display: none;
    text-align: center;

    @include media($screen-desktop) {
      @include flex(center, center);
      position: static;
      width: auto;
      top: 0;
      padding: 0;
      background-color: none;
    }
  }

  // &__list {
  //   position: absolute;
  //   top: 100px;
  //   right: 0px;
  //   width: 100%;
  //   padding: 50px 40px;
  //   background-color: $navigation-bg-color;
  //   @include flex(center, center, column);
  //   display: none;
  //   text-align: center;

  //   @include media($screen-desktop) {
  //     @include flex(space-between, center);
  //     position: static;
  //     width: auto;
  //     top: 0;
  //     padding: 0;
  //     background-color: none;
  //   }
  // }

  // &__item {
  //   &:not(:last-of-type) {
  //     margin-right: 0px;
  //     margin-bottom: 24px;

  //   }
    
  //   @include media($screen-desktop) {
  //     &:not(:last-of-type) {
  //       margin-right: 32px;
  //       margin-bottom: 0px;
  //     }
  //   }
  // }

  // &__link {
  //   // font-family: $secondary-font;
  //   @include text($H200, 500, $white);
  //   letter-spacing: .02em;
  //   &:active {
  //     color: $text-active;
  //   }
  // }
}

.router-link-active {
  color: $text-active;
}

._active {
  display: block;
}

</style> 