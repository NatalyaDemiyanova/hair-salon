<template>
	<ul class="navigation__list" >
		<li class="navigation__item">
			<router-link class="navigation__link" exact to="/">HOME</router-link>
		</li>
		<li class="navigation__item">
			<router-link class="navigation__link" to="/about">ABOUT US</router-link>
		</li>
		<li class="navigation__item">
			<router-link class="navigation__link" to="/gallery">GALLERY</router-link>
		</li>
		<li class="navigation__item">
			<router-link class="navigation__link" to="/pricing">PRICING</router-link>
		</li>
		<li class="navigation__item">
			<router-link class="navigation__link" to="/contacts">CONTACTS</router-link>
		</li>
	</ul>
</template>

<script>

export default {
  name: 'TheNavigationList',
}
</script>

<style lang="scss">
.navigation {
	&__list {
    @include flex(center, center, column);
    background-color: $navigation-bg-scroll-color;

    @include media($screen-desktop) {
      @include flex(center, center);
      background-color: transparent;
    }

    &--footer {
      .navigation__item {
        &:not(:last-of-type) {
          border-right: 1px solid transparent;
          margin-bottom: 10px;

        }
        @include media($screen-tablet) {
          &:not(:last-of-type) {
            border-right: 1px solid $white;
            margin-bottom: 0px;
          }
        }
      }
    }
  }

  &__item {
    padding: 0 20px;
    &:not(:last-of-type) {
      margin-bottom: 24px;
    }
    
    @include media($screen-desktop) {
      &:not(:last-of-type) {
        margin-bottom: 0px;
      }
    }
  }

  &__link {
    // font-family: $secondary-font;
    @include text($H200, 500, $white);
		letter-spacing: .02em;
		
		&:hover,
    &:active {
      color: $text-active;
    }
  }
}
</style>