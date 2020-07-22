<template>
  <div class="about">
		<div class="container about__container">
			<div class="about__image-wrapper">
				<img class="about__image" src="../assets/about.jpg" alt="about">
			</div>
			<div class="about__content">
				<h2 class="about__title">ABOUT US</h2>
				<div class="about__subtitle">
					<div class="about__subtitle-divider"></div>
					<h3 class="about__subtitle-text">
						OFFERING THE BEST HAIRSTYLING SERVICES
					</h3>
				</div>
				<p class="about__description">
					Ullamcorper a lacus vestibulum sed arcu non odio euismod. Sociis natoque penatibus et magnis dis parturient montes nascetur. Non sodales neque sodales ut etiam sit amet nisl purus. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in.
				</p>
				<p class="about__description">
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
				</p>
			</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheAboutDescription',
}
</script>

<style lang="scss">
.about {
  background-color: $about-bg-color;
  
  &__container {
    width: 100%;
    padding: 0 15px;
		@include flex(center, center, column-reverse);
		
		@include media($screen-desktop) {
			@include flex(space-between, center);
		}
  }

  &__image-wrapper {
    width: 100%;
		margin-right: 0px;

		@include media($screen-small-tablet) {
			width: 80%;
		}
		
		@include media($screen-desktop) {
			width: 50%;
			margin-right: 50px;
		}
  }
  
  &__image {
    width: 100%;
  }

  &__content {
    width: 100%;
		text-align: center;
		margin-bottom: 60px;

		@include media($screen-small-tablet) {
			padding: 0 50px;
		}
		
		@include media($screen-desktop) {
			width: 50%;
			padding: 0 15px;
			text-align: left;
			margin-bottom: 0px;
		}
  }

  &__title {
    @include text($H600, 700, $text-main-color);
    font-family: $secondary-font;
		margin-bottom: 30px;
		
		@include media($screen-desktop) {
			font-size: $H650;
		}
		@include media {
			font-size: $H700;
		}

  }

  &__subtitle {
    font-family: $secondary-font;
    @include flex(flex-start, center, column);
    color: $text-main-color;
    opacity: 0.7;
		margin-bottom: 30px;
		
		@include media($screen-desktop) {
			@include flex(flex-start, center);
		}
		@include media {
			margin-bottom: 50px;
		}
  }

  &__subtitle-divider {
    width: 80px;
    height: 2px;
    background-color: $divider-color;
		margin-right: 0px;
		margin-bottom: 30px;
		
		@include media($screen-desktop) {
			width: 40px;
			margin-right: 20px;
			margin-bottom: 0px;
		}
  }

  &__subtitle-text {
    max-width: 300px;
    @include text($H500, 600, $text-main-color);
		opacity: 0.85;
  }

  &__description {
    font-family: $secondary-font;
    @include text($H200, 300, $text-main-color);
    opacity: 0.7;
    line-height: 1.7;
    &:not(:last-of-type) {
      margin-bottom: 20px;
    }
  }
}

</style>