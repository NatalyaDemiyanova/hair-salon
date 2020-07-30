<template>
  <form class="form data-uk-form" @click.prevent="ShowNotification">
		<div class="form__container container">
			<div class="form__wrapper-label">
				<label class="form__label">
					NAME
					<input class="form__input" type="text" placeholder="Your name" minlength="5" required>
				</label>
			</div>
			<div class="form__wrapper-label">
				<label class="form__label">
					PHONE
					<input class="form__input" type="tel" placeholder="Your phone number" minlength="9" required>
				</label>
			</div>
			<div class="form__wrapper-label">
				<label class="form__label">
					DATE
					<!-- <vueye-datepicker v-model="date" color="#C89667" format="dd/mm/yyyy"/> -->
					<input class="form__input" type="data" placeholder="20/07/2020" required> 
				</label>
			</div>
				<!-- <button class="demo uk-button uk-button-default" type="button" onclick="UIkit.notification()"> -->
			<app-button
				class="form__button" 
				type="submit"
				@showNotification="notificationVisible = true"
			>
				make an appointment
			</app-button>
		<!-- </button> -->
			<!-- <the-notification 
				v-if="notificationVisible"  
        @closeNotification="notificationVisible = false"
			/> -->
		</div>
  </form>
</template>

<script>
import AppButton from './common/AppButton'
// import VueyeDatepicker from "vueye-datepicker";
// import TheNotification from './common/TheNotification'

export default {
  name: 'TheForm',
  components: {
		// VueyeDatepicker,
		AppButton,
		// TheNotification  
	},
	data() {
		return {
			dateInput: "",
			notificationVisible: false,
		}
	}, 
	
	// methods: {
  //   ShowNotification(){
  //     this.notificationVisible = true;
  //   },
  // }

}
</script>

<style lang="scss">
.form {
	position: relative;
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

		&:focus {
			opacity: 1;
			border-color: $secondary-color;
		}
		&:invalid:not(:placeholder-shown) {
			border-color: red;
		}

		&:valid:not(:placeholder-shown) {
			border-color: green;
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