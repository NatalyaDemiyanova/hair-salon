<template>
  <div class="gallery">
    <!-- <the-filters :filter="filter" v-model="filter" /> -->
    <the-photo />
  </div>
</template>

<script>
// import TheFilters from '@/components/common/TheFilters'
import ThePhoto from '@/components/common/ThePhoto'
import {mapGetters} from 'vuex'

export default {
  name: 'Gallery',
  components: {
  //  TheFilters,
   ThePhoto
  },

  data() {
    return {
      // data: [...this.$store.state.photos],
      filter: 'all',
    }
  },
 
  computed: {
		...mapGetters([
			'PHOTOS'
    ]),
    // PHOTOS() {
    //   return this.$store.state.photos;
    // }, 
    // getCategory() {
    //   const {data, filter} = this;
    //   switch(filter) {
    //     default:
    //       return data;
    //       case 'haircuts':
    //         return console.log(data.filter( ({haircuts}) => haircuts));
    //   }
    // }
  },

 

}
</script>
