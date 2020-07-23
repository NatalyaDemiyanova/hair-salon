<template>
  <section class="layout">
		<h2 class="layout__title">{{ title }}</h2>
		<ul class="layout__list">
			<li class="layout__item">
				<router-link class="layout__link layout__link--active" exact to="/">HOME</router-link>
			</li>
			<li class="layout__item"><span class="layout__circle"></span></li>
			<li class="layout__item">
				<a class="layout__link">{{ title }}</a>
			</li>
    </ul>
  </section>
</template>

<script>
export default {
	name: 'AppLayout',
	props: {
		title: String
  }
}
</script>

<style lang="scss">
.layout {
	@include flex(flex-start, center, column);
	background-image: url(../../assets/layout-bg.jpg);
	@include background-image(no-repeat, center center);
	padding: 140px 0 40px;

	@include media($screen-tablet) {
		padding: 180px 0 120px;	
	}
	@include media {
		padding: 220px 0 140px;
	}

	&__title {
		font-family: $secondary-font;
		@include text($H600, 700, $white);
		margin-bottom: 10px;
		text-transform: uppercase;

		@include media($screen-small-tablet) {
			margin-bottom: 30px;
		}
		@include media($screen-tablet) {
			font-size: $H650;
			margin-bottom: 50px;
		}
		@include media {
			font-size: $H850;
		}
	}

	&__list {
		@include flex(center, center);
	}

	&__link {
		@include text($H50, 400, $white);
		padding: 0 15px;
    letter-spacing: .08em;
		text-transform: uppercase;
		opacity: 0.5;
		transition: all 0.3s ease-in-out;

		&--active {
			opacity: 1;
			&:hover {
				opacity: 0.5;		
			}
		}
	}

	&__circle {
		display: block;
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background-color: $white;
	}
}

</style>