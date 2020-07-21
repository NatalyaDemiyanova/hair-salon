<template>
    <div class="modal">
      <div class="modal__container container">
        <div class="modal__header">
          <span class="modal__icon">
            <i class="material-icons">content_copy</i>
          </span>
          <span class="modal__icon">
            <i class="material-icons">zoom_in</i>
          </span> 
          <span class="modal__icon">
            <i class="material-icons">zoom_out</i>
          </span> 
          <span class="modal__icon">
            <i class="material-icons">vertical_align_bottom</i>
          </span> 
          <span class="modal__icon">
            <i class="material-icons" @click="$emit('closePopup')">close</i>
          </span> 
        </div>
        <div class="modal__image">
          <slot />
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'AppModal',
}
</script>

<style lang="scss">
.modal {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85); 
  display: table;
  transition: opacity 0.3s ease;

  &__container {
    display: table-cell;
    vertical-align: middle;
  }

  &__header {
    position: fixed;
    top: 0px;
    left: 0;
    width: 100%;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.4); 
    @include flex(flex-end, center);
    padding: 10px 24px;
  }

  &__icon {
    color: $white;
    opacity: 0.4;
    transition: all 0.3s ease-in-out;
    &:not(:last-of-type) {
      margin-right: 24px;
    }

    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    margin: 0px auto;
    transition: all 0.3s ease;
  }
}


</style>