<template>
  <form class="form">
		<div class="form__container container">
			<label class="form__name">
				NAME
				<input class="form__input" type="text" placeholder="Your name">
			</label>
			<label class="form__name">
				PHONE
				<input class="form__input" type="phone" placeholder="Your phone number">
			</label>
			<label class="form__name">
				DATE
				<input class="form__input" type="data" placeholder="20/07/2020">
			</label>
			<the-button class="form__button">make an appointment</the-button>
		</div>
  </form>
</template>

<script>
import TheButton from './common/TheButton'

export default {
  name: 'TheForm',
  components: {
		TheButton,  
  }
}
</script>

<style lang="scss">
.form {
	background-color: $dark;
	padding: 60px 0;

	&__container {
		@include flex(space-between, center);
	}

	&__name {
		@include flex(center, flex-start, column);
		font-family: $secondary-font;
		@include text($H100, 500, $white);
		letter-spacing: 0.05em;
		width: 100%;
	}

	&__input {
		width: 100%;
		height: 60px;
	}

	&__button {
		width: 100%;
	}
}
</style>