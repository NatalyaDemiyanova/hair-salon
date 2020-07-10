<template>
  <div class="home">
    <the-header />
    <the-form />
    <the-offer />
    <the-discount />
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader'
import TheForm from '../components/TheForm'
import TheOffer from '../components/TheOffer'
import TheDiscount from '../components/TheDiscount'

export default {
  name: 'Home',
  components: {
   TheHeader,
   TheForm,
   TheOffer,
   TheDiscount
  }
}
</script>
