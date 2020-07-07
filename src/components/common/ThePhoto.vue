<template>
  <div class="the-photo">
		<the-filters 
			:filter="filter" 
			v-model="filter" 
		/>
    <div class="the-photo__container container">
			<the-photo-item
				class="the-photo__item"
				v-for="photo in PHOTOS"
				:key="photo.image"
				:photo_data="photo"
			/>
		</div>
  </div>
</template>

<script>
import ThePhotoItem from './ThePhotoItem'
import {mapActions, mapGetters} from 'vuex'
import TheFilters from '@/components/common/TheFilters'


export default {
  name: 'ThePhoto',
  components: {
		ThePhotoItem,
		TheFilters
	},
	data() {
    return {
      filterPhotos: [],
      filter: 'all',
    }
  },
  computed: {
		...mapGetters([
			'PHOTOS'
		]),	
  },
  methods: {
		...mapActions([
			'GET_PHOTOS_FROM_API'
		]),

		filterCategories(filter) {
			this.filterPhotos = [];
			let vm = this;
			vm.PHOTOS.map(function(photo) {
				if (photo.category === filter) {
					console.log(vm.filterPhotos.push(photo));
					
				}
			})

		}

  },
  mounted() {
    this.GET_PHOTOS_FROM_API()
  }

}
</script>

<style lang="scss">
.the-photo {
	&__container {
		@include flex(space-between, center);
		flex-wrap: wrap;
	}

	&__item {
	}
}


</style>