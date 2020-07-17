<template>
  <div class="photo">
    <div class="photo__container container">
			<transition-group class="photo__list list-flip" name="list-flip" tag="ul">
				<the-photo-item
					class="list-flip-item"
					v-for="photo in photos"
					:key="photo.image"
					:photo_data="photo"
				/>
			</transition-group>
		</div>
  </div>
</template>

<script>
import ThePhotoItem from './ThePhotoItem'
// import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'ThePhoto',
  components: {
		ThePhotoItem,
	},

	props: {
		photos: Array,
		default() {
			return [];
		}
	}, 
	
	
	
  // computed: {
	// 	...mapGetters([
	// 		'PHOTOS'
	// 	]),	
  // },
  // methods: {
	// 	...mapActions([
	// 		'GET_PHOTOS_FROM_API'
	// 	]),

  // },
  // mounted() {
  //   this.GET_PHOTOS_FROM_API()
  // }
}
</script>

<style lang="scss">
.photo {
	&__container {
	
	}
	&__list {
		@include flex(space-between, center);
		flex-wrap: wrap;
	}

	// &__item {
	// }
}
.list-flip-item {
  transition: all 0.2s;
  display: inline-flex;
  margin-right: 10px;
}
.list-flip-enter, .list-flip-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-flip-leave-active {
  position: absolute;
}
</style>