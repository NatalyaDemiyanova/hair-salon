<template>
  <div class="contacts">
    <app-layout title="contacts" />
    <the-contact-info uk-scrollspy="cls:uk-animation-fade; repeat: true; delay: 300;"/>
    <the-get-in-touch class="contacts__get-in-touch"/>
  </div>
</template>

<script>
import AppLayout from '../components/common/AppLayout'
import TheContactInfo from '../components/TheContactInfo'
import TheGetInTouch from '../components/TheGetInTouch'

export default {
  name: 'Contacts',
  components: {
    AppLayout,
    TheContactInfo,
    TheGetInTouch
  }
}
</script>
