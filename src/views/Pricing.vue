<template>
  <div class="pricing">
    <app-layout  title="pricing" class="pricing__layout"/>
    <div class="container pricing__container">
      <div class="pricing__body">
        <ul class="pricing__list">
          <li class="pricing__item" @click="component='ThePricingHaircuts'">
            <a href="#" class="pricing__link" :class="{_active: component === 'ThePricingHaircuts'}">HAIRCUTS</a>
          </li>
          <li class="pricing__item" @click="component='ThePricingHairstyling'">
            <a href="#" class="pricing__link" :class="{_active: component === 'ThePricingHairstyling'}">HAIRSTYLING</a>
          </li>
          <li class="pricing__item" @click="component='ThePricingColoring'"> 
            <a href="#" class="pricing__link" :class="{_active: component === 'ThePricingColoring'}">COLORING</a>
          </li> 
        </ul>
        <component :is="component"></component>
      </div>
    </div>
  </div>
</template>

<script>
import AppLayout from '../components/common/AppLayout'
import ThePricingHaircuts from '../components/common/ThePricingHaircuts'
import ThePricingHairstyling from '../components/common/ThePricingHairstyling'
import ThePricingColoring from '../components/common/ThePricingColoring'

export default {
  name: 'Pricing',
  components: {
    AppLayout,
    ThePricingHaircuts,
    ThePricingHairstyling,
    ThePricingColoring
  },

  data() {
    return {
      component: 'ThePricingHaircuts', 
    }
  },
}
</script>

<style lang="scss">
.pricing {
  background-color: $pricing-bg-color;

  &__layout {
    margin-bottom: 115px;
  }
  
  &__body {
    background-color: $white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    overflow: hidden;
    margin-bottom: 115px;
  }

  &__list {
    @include flex(center, center, column);
    background-color: $dark;
    padding: 45px 0;
    @include media($screen-small-tablet) {
      @include flex(center, center);
    }
  }

  &__item {
    
    &:not(:last-of-type) {
      margin-bottom: 20px;
    }
    
    @include media($screen-small-tablet) {
      &:not(:last-of-type) {
        margin-right: 70px;
        margin-bottom: 0px;
      }
    }
  }

  &__link {
    font-family: $secondary-font;
    @include text($H100, 500, $white);
    opacity: 0.4;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    
    @include media($screen-desktop) {
      &:hover {
        opacity: 1;
      }
    }
  }
}

._active  {
  color: $white;
  opacity: 1;
}
</style>
