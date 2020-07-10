<template>
  <div class="photo">
		<the-filters 
			:filter="filter" 
			v-model="filter" 
			class="photo__filters"
		/>
    <div class="photo__container container">
			<the-photo-item
				class="photo__item"
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

  },
  mounted() {
    this.GET_PHOTOS_FROM_API()
  }

}
</script>

<style lang="scss">
.photo {
	&__filters {
		margin-bottom: 20px;
	}

	&__container {
		@include flex(space-between, center);
		flex-wrap: wrap;
	}

	&__item {
	}
}


</style>