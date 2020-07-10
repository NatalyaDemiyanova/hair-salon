<template>
  <form class="form">
		<div class="form__container container">
			<div class="form__wrapper-label">
				<label class="form__label">
					NAME
					<input class="form__input" type="text" placeholder="Your name">
				</label>
			</div>
			<div class="form__wrapper-label">
				<label class="form__label">
					PHONE
					<input class="form__input" type="phone" placeholder="Your phone number">
				</label>
			</div>
			<div class="form__wrapper-label">
				<label class="form__label">
					DATE
					<input class="form__input" type="data" placeholder="20/07/2020">
				</label>
			</div>
			<app-button class="form__button">make an appointment</app-button>
		</div>
  </form>
</template>

<script>
import AppButton from './common/AppButton'

export default {
  name: 'TheForm',
  components: {
		AppButton,  
  }
}
</script>

<style lang="scss">
.form {
	background-color: $dark;
	padding: 60px 0;

	&__container {
		@include flex(center, center, column);

		@include media {
			@include flex(space-between, center);
		}
	}

	&__wrapper-label {
		@include flex(center, center, column);
		width: 100%;
		max-width: 500px;
		margin-right: 0px;
		margin-bottom: 24px;

		@include media {
			margin-right: 24px;
			margin-bottom: 0px;
		}
	}

	&__label {
		width: 100%;
		font-family: $secondary-font;
		@include text($H100, 500, $white);
		letter-spacing: 0.05em;
	}

	&__input {
		width: 100%;
		max-width: 500px;
		height: 60px;
		border: none;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		outline: none;
		@include text($H400, 400, $white);
		background: transparent;
		
		&::placeholder {
			@include text($H400, 400, $white);
			opacity: 0.6;
		}
	}

	&__button {
		margin-top: 25px;

		@include media {
			margin-top: 0px;
		}
	}


	
}
</style>