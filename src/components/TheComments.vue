<template>
  <div class="comments">
		<div class="container comments__container">
			<h2 class="comments__title">TESTIMONIALS</h2>
			<div class="comments__wrapper-slider">
				<the-slider-comments class="comments__slider"/>
			</div>
		</div>
  </div>
</template>
<script>
import TheSliderComments from './common/TheGlideSliderComments'

export default {
	name: 'TheComments',
	components: {
		TheSliderComments
	}
}
</script>

<style lang="scss">
.comments {
	background-image: url(../assets/comments-bg.jpg);
	@include background-image;
	padding: 115px 0;

	&__container {
		@include flex(center, center, column);
	}

	&__title {
		font-family: $secondary-font;
		@include text($H700, 700, $white);
		text-transform: uppercase;
		margin-bottom: 80px;
	}

	&__wrapper-slider {
		width: 90%;
		@include flex(center, center);
		
	}

	&__slider {
			width: 100%;
	
	}
}
</style>