<template>
  <div class="zoom" @click="$emit('showPopup')">
    <a class="zoom__icon">+</a>
  </div>
</template>

<script>
export default {
  name: 'AppZoom',
}
</script>

<style lang="scss">
.zoom {
  position: absolute;
  top: 32%;
  left: 38%;
  transform: translateX(-50%);
  width: 70px;
  height: 70px;
  border-radius: 50%;
  box-shadow: 1px 0px 0px 8px rgba(255,255,255,0.5);
  background-color: $white;
  z-index: 5;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 1px 0px 0px 18px rgba(255,255,255,0.5);
  }

  &__icon {
    @include text($H700, 300);
    opacity: 0.8;
    @include flex(center, center);	
  }
}
</style>

