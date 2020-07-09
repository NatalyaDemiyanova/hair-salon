<template>
  <div class="navigation" v-scroll="handleScroll" id="nav">
    <div class="container navigation__container">
      <logo />
      <transition name="fade">
        <ul class="navigation__list" :class="{_show: isShow}">
          <li class="navigation__item">
            <router-link class="navigation__link" exact to="/">HOME</router-link>
          </li>
          <li class="navigation__item">
            <router-link class="navigation__link" to="/about">ABOUT US</router-link>
          </li>
          <li class="navigation__item">
            <router-link class="navigation__link" to="/gallery">GALLERY</router-link>
          </li>
          <li class="navigation__item">
            <router-link class="navigation__link" to="/pricing">PRICING</router-link>
          </li>
          <li class="navigation__item">
            <router-link class="navigation__link" to="/contacts">CONTACTS</router-link>
          </li>
        </ul>
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
import TheBurger from './TheBurger'


export default {
  name: 'TheNavigation',
  components: {
    Logo,
    TheBurger
  },
  data: function() {
    return {
      isActive: false,
      isShow: false
    }
  },

  
  methods: {
    toggle: function() {
      this.isActive = !this.isActive;
      this.isShow = !this.isShow;
    },
    
  }
}
</script>

<style lang="scss">
  .navigation {
    position: fixed;
    position: sticky;
    top: 0;
    right: 0;
    left: 0;
    padding: 32px 0;
    background-color: $navigation-bg-color;
    z-index: 10;

    &__container {
      @include flex(space-between, center);
    }

    &__list {
      position: absolute;
      top: 80px;
      right: 0px;
      width: 320px;
      // background-color: $navigation-bg-color;
      padding: 50px 40px;
      display: none;
      @include media($screen-desktop) {
        @include flex(space-between, center);
        position: static;
        width: auto;
        top: 0;
        padding: 0;


      }
    }

    &__item {
      &:not(:last-of-type) {
        margin-right: 32px;
      } 
    }

    &__link {
      // font-family: $secondary-font;
      @include text($H200, 500, $white);
      letter-spacing: .02em;
      &:active {
        color: $text-active;
      }
    }
  }

  .router-link-active {
    color: $text-active;
  }
  
  ._show {
    display: none;
  }

</style> 