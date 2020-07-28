<template>
  <div class="home">
    <the-header />
    <the-form />
    <the-offer />
    <the-discount />
    <the-subscribe />
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader'
import TheForm from '../components/TheForm'
import TheOffer from '../components/TheOffer'
import TheDiscount from '../components/TheDiscount'
import TheSubscribe from '../components/TheSubscribe'

export default {
  name: 'Home',
  components: {
   TheHeader,
   TheForm,
   TheOffer,
   TheDiscount,
   TheSubscribe
  }
}
</script>
