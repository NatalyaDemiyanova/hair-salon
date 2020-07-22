<template>
  <div class="about-main">
    <app-layout class="about-main__layout" title="about us" />
    <the-about-description class="about-main__about-description" />
    <the-choose-us />
    <the-comments />
    <the-awards />
    
  </div>
</template>

<script>
import AppLayout from '../components/common/AppLayout'
import TheAboutDescription from '../components/TheAboutDescription'
import TheChooseUs from '../components/TheChooseUs'
import TheComments from '../components/TheComments'
import TheAwards from '../components/TheAwards'

export default {
  name: 'About',
  components: {
    AppLayout,
    TheAboutDescription,
    TheChooseUs,
    TheComments,
    TheAwards
  }
}
</script>

<style lang="scss">
.about-main {
  &__about-description {
    padding: 70px 0;

    @include media($screen-desktop) {
      padding: 115px 0;
    }
  }

}


</style>