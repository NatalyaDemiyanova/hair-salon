<template>
  <div class="gallery">
    <app-layout class="gallery__layout" title="gallery" />
    <!-- <the-filters :filter="filter" v-model="filter" /> -->
    <the-photo class="gallery__photo" />
  </div>
</template>

<script>
import AppLayout from '../components/common/AppLayout'
// import TheFilters from '@/components/common/TheFilters'
import ThePhoto from '@/components/common/ThePhoto'
import {mapGetters} from 'vuex'

export default {
  name: 'Gallery',
  components: {
    AppLayout,
  //  TheFilters,
    ThePhoto
  },

  data() {
    return {
      filter: 'all',
    }
  },
 
  computed: {
		...mapGetters([
			'PHOTOS'
    ]),
  },
}
</script>

<style lang="scss">
.gallery {
  &__photo {
    padding: 60px 0 100px;
  }
}
</style>
