<template>
  <div class="burger" @click="toggle" :class="{_active: isActive}">
    <span class="burger__line"></span>
  </div>
</template>

<script>

export default {
  name: 'TheBurger',

  data: function() {
    return {
      isActive: false
    }
  },
  methods: {
    toggle: function() {
      this.isActive = !this.isActive;
    },
  }
}
</script>

<style lang="scss">
.burger {
  display: block;
  position: relative;
  width: 30px;
  height: 20px;
  cursor: pointer;

  &__line {
    position: absolute;
    height: 2px;
    width: 100%;
    background-color: $white;
    top: 9px;
    transition: all 0.3s ease 0s;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    background-color: $white;
    top: 0;
    transition: all 0.3s ease 0s;
  }

  &::before {
    bottom: 0;
    top: auto;
  }

  @include media($screen-desktop){
    display: none;
  }
}

._active {
    .burger__line {
      transform: scale(0);
    }
    &::before {
      transform: rotate(45deg);
      top: 9px;
    }
    &::after {
      transform: rotate(-45deg);
      top: 9px;
    }
  }


</style>