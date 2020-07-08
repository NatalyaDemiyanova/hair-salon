<template>
  <div class="home">
    <the-header />
    <the-form />
    <the-offer />
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader'
import TheForm from '../components/TheForm'
import TheOffer from '../components/TheOffer'

export default {
  name: 'Home',
  components: {
   TheHeader,
   TheForm,
   TheOffer
  }
}
</script>
