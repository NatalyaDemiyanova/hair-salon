<template>
  <div class="awards">
		<div class="container awards__container">
			<h2 class="awards__title" uk-scrollspy="cls:uk-animation-slide-top; repeat: true; delay: 300;">
				OUR AWARDS
			</h2>
			<ul class="awards__list-image" uk-scrollspy="cls:uk-animation-slide-bottom; repeat: true; delay: 300;">
				<li class="awards__item-image">
					<a class="awards__link" href="#">
						<img class="awards__image" src="../assets/awards/award-1.png" alt="awards">
					</a>
				</li>
				<li class="awards__item-image">
					<a class="awards__link" href="#">	
						<img class="awards__image" src="../assets/awards/award-2.png" alt="awards">
					</a>
				</li>
				<li class="awards__item-image">
					<a class="awards__link" href="#">
						<img class="awards__image" src="../assets/awards/award-3.png" alt="awards">
					</a>
				</li>
				<li class="awards__item-image">
					<a class="awards__link" href="#">
						<img class="awards__image" src="../assets/awards/award-4.png" alt="awards">
					</a>
				</li>
			</ul>
		</div>
  </div>
</template>

<script>

export default {
  name: 'TheAwards',
}
</script>

<style lang="scss">
.awards {
	background-color: $about-bg-color;
	padding: 50px 0;

	@include media($screen-small-tablet) {
		padding: 80px 0;
	}
	@include media($screen-desktop) {
		padding: 115px 0;
	}

	&__container {
		@include flex(center, center, column);
	}

	&__title {
		font-family: $secondary-font;
		@include text($H600, 700);
		text-transform: uppercase;
		margin-bottom: 50px;

		@include media($screen-desktop) {
			font-size: $H650;
			margin-bottom: 100px;
		}
		@include media {
			font-size: $H700;
		}
	}

	&__list-image {
		@include flex(space-between, center);
		flex-wrap: wrap;
		width: 100%;

		@include media($screen-tablet) {
		}

		@include media($screen-desktop) {
			@include flex(space-between, center);
		}
	}

	&__item-image {
		width: 100%;
		@include flex(center, center);
		margin-bottom: 30px;
	

		@include media($screen-small-tablet) {
			width: 49%;
			&:nth-child(1),
			&:nth-child(2) {
				margin-bottom: 30px;
			}
		}

		@include media($screen-desktop) {
			margin-bottom: 0px;
			&:nth-child(1),
			&:nth-child(2) {
				margin-bottom: 0px;
			}
			&:not(:last-of-type) {
				margin-right: 30px;
			}
		}
	}

	&__image {
		background-color: $about-bg-color;
		max-width: 270px;
		width: 100%;
		transition: all 0.5s;

		&:hover {
			background-color: $white;
			box-shadow: 0 4px 8px rgba(0,0,0,.12);
		}

		@include media($screen-desktop) {
			&:not(:last-of-type) {
				margin-right: 30px;
			}
		}
	}
}
</style>