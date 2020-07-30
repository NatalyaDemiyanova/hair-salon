<template>
  <li class="photo-item">
    <img 
      class="photo-item__image" 
      :src=" require('../../assets/gallery/' + photo_data.image)" 
      alt="hair"
    >
    <app-zoom 
      class="photo-item__zoom"
      @showPopup="popupVisible = true"
    />
    <transition name="modal">
      <app-modal 
        v-if="popupVisible"  
        @closePopup="popupVisible = false"
      >
        <img 
        class="photo-item__image" 
        :src=" require('../../assets/gallery/' + photo_data.image)" 
        alt="hair"
      >
      </app-modal>
    </transition>
  </li>
</template>

<script>
import AppZoom from '../common/AppZoom'
import AppModal  from '../common/AppModal'

export default {
  name: 'ThePhotoItem',
  components: {
    AppZoom,
    AppModal
  },

  data() {
    return {
      popupVisible: false,
    }
  },

  props: {
    photo_data : {
      type: Object,
      default() {
        return {}
      }
    }
  },
  
  methods: {
    ShowPopupIn(){
      this.popupVisible = true;
    }
  }
}
</script>

<style lang="scss">
.photo-item {
  position: relative;
  flex-basis: 100%;
  @include padding-hack(83%);
  margin: 10px 0;
  
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

		&:hover + .photo-item__zoom {
      visibility: visible;
      transform: translateX(1px);
      opacity: 1;
		}
  }

  &__zoom {
    visibility: hidden;
    transition: all 0.5s ease-in-out;
    opacity: 0;

    &:hover {
      visibility: visible;
      transform: translateX(1px);
      opacity: 1;
		}
  }
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}
</style>