<template>
  <div class="discount">
		<div class="container discount__container">
			<h4 class="discount__title">
				ONLY 3 DAYS
			</h4>
			<h2 class="discount__subtitle">
				20% OFF HAIRSTYLING SERVICES
			</h2>
			<app-button>
				<span class="discount__btn-text">
					VIEW MORE
				</span>
			</app-button>
		</div>
  </div>
</template>

<script>
import AppButton from './common/AppButton'

export default {
  name: 'TheDiscount',
  components: {
    AppButton  
  }
}
</script>

<style lang="scss">
.discount {
	background-image: url(../assets/discount-bg.jpg);
	@include background-image;
	padding: 115px 0;

	&__container {
		@include flex(center, center, column);
	}

	&__title {
		font-family: $secondary-font;
		@include text($H500, 700, $secondary-color);
		margin-bottom: 10px;
	}

	&__subtitle {
		font-family: $secondary-font;
		@include text($H650, 700, $white);
		text-align: center;
		letter-spacing: 1;
		margin-bottom: 35px;
	}

	&__btn-text {
		padding: 0 20px;
	}
}
</style>