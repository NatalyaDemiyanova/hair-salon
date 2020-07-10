<template>
  <div class="footer">
		<div class="container footer__container">
      <logo class="footer__logo"/>
			<the-navigation-list class="footer__navigation navigation__list navigation__list--footer"/>
      <the-social class="footer__social"/>
      <p class="footer__privacy">©  2020 All Rights Reserved. Hellen. Privacy Policy</p>
		</div>
  </div>
</template>

<script>
import Logo from './common/Logo'
import TheNavigationList from './common/TheNavigationList'
import TheSocial from './common/TheSocial'

export default {
  name: 'TheFooter',
  components: {
		Logo,
    TheNavigationList,
    TheSocial  
  }
}
</script>

<style lang="scss">
.footer {
  background-color: $footer-bg-color;
  @include flex(center, center, column);
  padding: 60px 0;

  @include media($screen-tablet) {
    padding: 90px 0;
  }

  &__logo {
    text-align: center;
    margin-bottom: 50px;
  }

  &__navigation {
    margin-bottom: 60px;

    @include media($screen-tablet) {
      @include flex(center, center);
    }
  }

  &__social {
    margin-bottom: 40px;

    @include media($screen-tablet) {
      margin-bottom: 90px;
    }
  }

  &__privacy {
    @include text($H200, 400, $white);
    opacity: 0.5;
    text-align: center;
  }
}

</style>