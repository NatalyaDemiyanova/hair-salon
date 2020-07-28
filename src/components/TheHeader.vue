<template>
	<div class="header">
		<div class="container header__container">
			<transition appear name="fade">
				<h1 class="header__title">
					STYLE
				</h1>
			</transition>
			<transition appear name="fade">
				<div class="header__divider"></div>
			</transition>
			<transition appear name="fade">
				<h4 class="header__subtitle">
					Hellen Hair Salon, established in 1999, is an oasis of beauty, hair indulgence, and the synonym of stylish haircuts.
				</h4>
			</transition>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TheHeader',
}
</script>

<style lang="scss">
.header {
	// background: linear-gradient(0deg, rgba(47,47,47,1) 0%, rgba(133,133,133,1) 100%);
	@include flex(center, center, column);
	height: 100vh;

	background-image: url(../assets/header-photo.png), linear-gradient(0deg, rgba(47,47,47,1) 0%, rgba(133,133,133,1) 100%);
	@include background-image;
	background-size: cover;
	background-position: center center;

	@include media($screen-tablet) {
		background-size: contain;
		background-position: center bottom;
	}
			
	&__container {
		// background-image: url(../assets/header-photo.png);
		// @include background-image;
		// background-size: contain;
		// background-position: 	right -45px bottom -80px;
		// width: 100%;
		// height: 120%;
		// position: relative;
		@include flex(center, center, column);
	}

	&__title {
		font-family: $secondary-font;
		@include text($H900, 700, $white);

		@include media($screen-desktop) {
			@include text($H950, 700, $white);
		}
	}

	&__divider {
		width: 62px;
		height: 3px;
		background-color: $white;
		margin-bottom: 20px;
	}

	&__subtitle {
		@include text($H400, 400, $white);
		margin-bottom: 10px;
		max-width: 560px;
		text-align: center;
	}
}

.fade-enter-active, 
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter, 
.fade-leave-to {
	transform: translateY(400px);
	opacity: 0;
}

</style>