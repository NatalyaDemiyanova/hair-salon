<template>
  <section class="offer"
	>
		<div class="offer__container container">
			<h2 
				class="offer__title" 
				uk-scrollspy="cls:uk-animation-slide-top; repeat: true; delay: 300;"
			>
				WHAT WE OFFER
			</h2>
			<p 
				class="offer__description" 
				uk-scrollspy="cls:uk-animation-slide-top; repeat: true; delay: 300;"
			>
				We offer a complete range of hair services including haircuts & styling, coloring, eyebrow and eyelash tinting, perming, hair straightening, and a lot more.
			</p>
			<ul 
				class="offer__list"
				uk-scrollspy="cls:uk-animation-slide-bottom-medium; repeat: true; delay: 300;"			
			>
				<li class="offer__item card">
					<div class="card__image-wrapper">
						<img class="card__image" src="../assets/offer/haircuts.jpg" alt="haircuts">
						<app-button class="card__button button button--order"> order now</app-button>	
					</div>
					<h3 class="card__title">
						<a class="card__link" href="#">
							HAIRCUTS
						</a>
					</h3>
					<h4 class="card__subtitle">CREATING YOUR IMAGE</h4>
				</li>
				<li class="offer__item card">
					<div class="card__image-wrapper">
						<img class="card__image" src="../assets/offer/hairstyling.jpg" alt="hairstyling">
						<app-button class="card__button button button--order"> order now</app-button>	
					</div>
					<h3 class="card__title">
						<a class="card__link" href="#">
							HAIRSTYLING
						</a>
					</h3>
					<h4 class="card__subtitle">ACHIEVING THE BEST LOOK</h4>
				</li>
				<li class="offer__item card">
					<div class="card__image-wrapper">
						<img class="card__image" src="../assets/offer/coloring.jpg" alt="coloring">
						<app-button class="card__button button button--order"> order now</app-button>	
					</div>
					<h3 class="card__title">
						<a class="card__link" href="#">
							COLORING
						</a>
					</h3>
					<h4 class="card__subtitle">ANY COLORS YOU CAN IMAGINE</h4>
				</li>
			</ul>
		</div>
  </section>
</template>

<script>
import AppButton from './common/AppButton'

export default {
  name: 'TheOffer',
  components: {
		AppButton
  }
}
</script>

<style lang="scss">
.offer {
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
		text-align: center;
		margin-bottom: 25px;

		@include media($screen-desktop) {
			font-size: $H650;
		}
		@include media {
			font-size: $H700;
		}
	}

	&__description {
		max-width: 700px;
		@include text($H200, 300);
		line-height: 1.66667;
		opacity: 0.8;
		text-align: center;
		margin-bottom: 40px;

		@include media($screen-small-tablet) {
			margin-bottom: 70px;
		}
	}

	&__list {
		@include flex(space-between, center);
		flex-wrap: wrap;

		@include media($screen-tablet) {
			@include flex(space-between, center);
			flex-wrap: no-wrap;
		}
	}

	&__item {
		margin-right: 0px;
		width: 100%;
		&:not(:last-of-type) {
			margin-bottom: 40px;
		}

		@include media($screen-small-tablet) {
			width: 48%;
		}
		
		@include media($screen-tablet) {
			width: 33%;
			&:not(:last-of-type) {
				margin-right: 30px;
				margin-bottom: 0px;
			}
		}	
	}
}

.card {
	@include flex(center, center, column);

	&__image-wrapper {
		position: relative;
		margin-bottom: 10px;

		@include media($screen-small-tablet) {
			margin-bottom: 25px;
		}
	}

	&__image {
		width: 100%; 
		transition: all 0.3s ease-in-out;

		&:hover + .card__button {
			visibility: visible;
			bottom: 15%;
		}
	}

	&__button {
		position: absolute;
		bottom: 20%;
		left: 50%;
		transform: translateX(-50%);
		transition: all 0.3s ease-in-out;
		visibility: hidden;

		&:hover {
			visibility: visible;
			bottom: 15%;
		}
	}

	&__title {
		margin-bottom: 10px;
	}

	&__link {
		font-family: $secondary-font;
		@include text($H500, 600);
		text-transform: uppercase;
		transition: all 0.3s ease-in-out;

		&:hover {
			color: $secondary-color;
		}
	}

	&__subtitle {
		font-family: $secondary-font;
		@include text($H100, 500, $secondary-color);
		font-size: 14px;
		letter-spacing: 0.05em;
		height: 15px;
		text-align: center;
	}
}

</style>