<template>
  <a class="scroll-btn" @click="scrollTop" v-show="visible">
    <span class="scroll-btn__icon">
      <i class="material-icons">keyboard_arrow_up</i>
    </span>
  </a>
</template>

<script>
export default {
  // name: TheScrollTopArrow,
  data () {
    return {
      visible: false
    }
  },
  methods: {
    scrollTop: function () {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId)
        }
        window.scroll(0, window.pageYOffset - 50)
      }, 20)
    },
    scrollListener: function () {
      this.visible = window.scrollY > 150
    }
  },
  mounted: function () {
    window.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy: function () {
    window.removeEventListener('scroll', this.scrollListener)
  }
}
</script>

<style lang="scss">

.scroll-btn {
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 60px;
  height: 60px;
  border-radius: 8px;
  background-color: $secondary-color;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.6;
  }

  &__icon {
    height: 100%;
    @include flex(center, center);
    color: $white;
    opacity: 1;
  }
}
</style>