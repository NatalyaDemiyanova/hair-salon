<template>
  <li class="photo-item">
    <img 
      class="photo-item__image" 
      :src=" require('../../assets/gallery/' + photo_data.image)" 
      alt="hair">
  </li>
</template>

<script>

export default {
  name: 'ThePhotoItem',
  props: {
    photo_data : {
      type: Object,
      default() {
        return {}
      }
    }
  },  
}
</script>

<style lang="scss">
.photo-item {
  flex-basis: 100%;
  @include padding-hack(83%);
  margin: 10px 0;
  // background-color: pink;
  
  @include media($screen-small-tablet) {
    flex-basis: 46%;
    @include padding-hack(39%);
    margin: 10px;
  }

  @include media($screen-tablet) {
    flex-basis: 30%;
    @include padding-hack(26%);
  }

  @include media($screen-desktop-medium) {
    flex-basis: 23%;
    @include padding-hack(19.5%);
  }

  &__image{
    width: 100%;
    object-fit: contain;
  }
}

</style>