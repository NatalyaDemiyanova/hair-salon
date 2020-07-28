<template>
	<ul class="navigation__list" :class="{_hide: isHide}" >
		<li class="navigation__item" @click="closeNav">
			<router-link class="navigation__link" exact to="/" @click="closeNav">HOME</router-link>
		</li>
		<li class="navigation__item">
			<router-link class="navigation__link" to="/about" @click="closeNav" >ABOUT US</router-link>
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
  data: function() {
    return {
      isHide: false,
    }
  },

  metod: {
    closeNav: function() {
      this.isHide = !this.isHide
    } 
  },
  // watch: function() {
  //   this.closeNav()
  // }

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
    transition: all ease 0.3s;
		
		&:hover,
    &:active {
      color: $text-active;
    }
  }
}


</style>