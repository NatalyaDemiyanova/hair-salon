<template>
  <div class="subscribe">
    <div class="container subscribe__container">
      <h2 class="subscribe__title">
        SUBSCRIBE TO STAY INFORMED
      </h2>
      <form class="subscribe__form">
        <input class="subscribe__input input" type="email" placeholder="E-mail">
        <app-button class="button button--black subscribe__button">
          subscribe
        </app-button>
      </form>
    </div>
  </div>
</template>

<script>
import AppButton from '../components/common/AppButton'

export default {
  name: 'TheSubscribe',
  components: {
    AppButton
  }
}
</script>

<style lang="scss">
.subscribe {
  background-color: $grey-light-bg-color;
  padding: 80px 0;

  @include media($screen-desktop) {
		padding: 135px 0;
  }

  &__container {
    @include flex(center, center, column);
  }

  &__title {
    font-family: $secondary-font;
		@include text($H600, 700);
		text-transform: uppercase;
		text-align: center;
		margin-bottom: 60px;

		@include media($screen-desktop) {
			font-size: $H650;
		}
		@include media {
			font-size: $H700;
		}
	}

  &__form {
    @include flex(center, center, column);
    width: 100%;

    @include media($screen-small-tablet) {
      @include flex(center, center);
    }
  }

  &__input {
    max-width: 500px;
    margin-bottom: 20px;
    margin-right: 0px;
    @include media($screen-small-tablet) {
      margin-bottom: 0px;
      margin-right: 20px;
    }
  }
}
</style>