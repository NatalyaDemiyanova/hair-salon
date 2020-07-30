<template>
	<div class="discount">
		<div class="container discount__container" uk-scrollspy="cls:uk-animation-scale-up; repeat: true; delay: 700;">
			<!-- <transition appear name="fade"> -->
				<h4 class="discount__title">
					ONLY 3 DAYS
				</h4>
			<!-- </transition> -->
			<!-- <transition appear name="fade"> -->
			<h2 class="discount__subtitle">
				20% OFF HAIRSTYLING SERVICES
			</h2>
			<!-- </transition> -->
			<!-- <transition appear name="fade"> -->
			<app-button>
				<span class="discount__btn-text">
					VIEW MORE
				</span>
			</app-button>
			<!-- </transition> -->
		</div>
	</div>
</template>

<script>
import AppButton from './common/AppButton'

export default {
  name: 'TheDiscount',
  components: {
    AppButton  
	},
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
		@include text($H500, 600, $secondary-color);
		margin-bottom: 25px;
	}

	&__subtitle {
		font-family: $secondary-font;
		@include text($H650, 700, $white);
		text-align: center;
		letter-spacing: 1;
		margin-bottom: 35px;

		@include media {
			font-size: $H800;
		}
	}

	&__btn-text {
		padding: 0 20px;
	}
}

.fade-enter-active, 
.fade-leave-active {
  transition: all 1s;
}
.fade-enter, 
.fade-leave-to {
	transform: translateY(100px);
	opacity: 0;
}
</style>