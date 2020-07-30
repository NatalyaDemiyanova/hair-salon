<template>
  <div class="notification" @click="$emit('closeNotification')">
    <span class="notification__icon"><i class="material-icons">done</i></span>
    Successfully sent!
  </div>
</template>

<script>

export default {
  name: 'TheNotification',
  data () {
    return {
      visible: false
    }
  },
}
</script>

<style lang="scss">
.notification {
  position: absolute;
  top: 40px;
  right: 40px;
  @include flex(center, center);
  background-color: $white;
  font-family: $secondary-font;
  @include text($H200, 600, $dark);
  // text-transform: uppercase;
  padding: 10px 25px;

  @include media {
    bottom: 70px;
    left: 40px;
    top: auto;
    right: auto;
  }
  &__icon {
    height: 100%;
    color: $dark;
    opacity: 1;
    margin-right: 10px;
  }

}
 

</style>