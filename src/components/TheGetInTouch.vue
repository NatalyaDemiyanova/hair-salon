<template>
  <div class="get-in-touch">
    <div class="container get-in-touch__container">
      <h2 class="get-in-touch__title">Get in Touch</h2>
      <form class="get-in-touch__form">
        <input class="get-in-touch__input input" type="text" placeholder="Your Name">
        <input class="get-in-touch__input input" type="email" placeholder="E-mail">
        <input class="get-in-touch__input input" type="phone" placeholder="Phone">
        <textarea class="get-in-touch__input get-in-touch__input--textarea input" cols="30" rows="10" placeholder="Message"></textarea>
        <app-button class="button button--black get-in-touch__button">
          <span class="get-in-touch__button-text">
            send
          </span>
        </app-button>
      </form>
    </div>
  </div>
</template>

<script>
import AppButton from '../components/common/AppButton'

export default {
  name: 'TheGetInTouch',
  components: {
    AppButton
  }
}
</script>

<style lang="scss">
.get-in-touch {
  background-color: $grey-light-bg-color;
  padding: 80px 0;

  @include media($screen-desktop) {
		padding: 115px 0;
  }

  &__container {
    @include flex(center, center, column);
  }

  &__title {
    font-family: $secondary-font;
    @include text($H600, 700);
    margin-bottom: 50px;

    @include media($screen-desktop) {
			@include text($H700, 600);
		}
  }

  &__form {
    @include flex(center, center, column);
    max-width: 700px;
    width: 100%;

    @include media($screen-small-tablet) {
      max-width: 520px;
    }
    @include media($screen-desktop-medium) {
      max-width: 700px;
    }
  }

  &__input {
    border-radius: 5px;
    margin-bottom: 20px;
    &--textarea {
      margin-bottom: 30px;
    }
  }

  &__button {
  }

  &__button-text {
    padding: 0 80px;
  }

  textarea::-webkit-input-placeholder { 
    @include text($H100, 300);
    opacity: 0.7;
  }
}

.input {
  width: 100%;
  padding: 16px 25px;
  outline: none;
  border: 1px solid $dark;
  @include text($H200, 300);
  line-height: 26px;
  letter-spacing: 1px;

  &:placeholder-shown {
    @include text($H100, 300);
  }
}
</style>

