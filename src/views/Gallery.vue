<template>
  <div class="gallery">
    <app-layout class="gallery__layout" title="gallery" />
    <the-filters
      class="gallery__filters" 
			:filter="filter" 
			v-model="filter" 
		/>
    <the-photo class="gallery__photo" :photos="getPhotos"/>
  </div>
</template>

<script>
import AppLayout from '../components/common/AppLayout'
import TheFilters from '@/components/common/TheFilters'
import ThePhoto from '@/components/common/ThePhoto'
// import {mapGetters} from 'vuex'

export default {
  name: 'Gallery',
  components: {
    AppLayout,
   TheFilters,
    ThePhoto
  },

  data() {
    return {
      filter: 'all',
      photos: [
				{
          id: 1,
					image: "gallery-1.jpg",
					category: "highlights"
				},
				{
          id: 2,
					image: "gallery-2.jpg",
					category: "haircuts"
				},
				{
          id: 3,
					image: "gallery-3.jpg",
					category: "coloring"
				},
				{
          id: 4,
					image: "gallery-4.jpg",
					category:  "highlights"
				},
				{
          id: 5,
					image: "gallery-5.jpg",
					category: "coloring"
				},
				{
          id: 6,
					image: "gallery-6.jpg",
					category: "haircuts"
				},
				{
          id: 7,
					image: "gallery-7.jpg",
					category: "highlights"
				},
				{
          id: 8,
					image: "gallery-8.jpg",
					category: "highlights"
				},
				{
          id: 9,
					image: "gallery-9.jpg",
					category: "haircuts"
				},
				{
          id: 10,
					image: "gallery-10.jpg",
					category: "other"
				},
				{
          id: 11,
					image: "gallery-11.jpg",
          category: "coloring"
				},
				{
          id: 12,
					image: "gallery-12.jpg",
          category: "haircuts"
          
				}
      ]
    }
  },

  computed: {
    getPhotos() {
      // return this.photos;
      const { photos, filter } = this;
      
      switch (filter) {
        default:
          return photos;
        case "haircuts":
          return photos.filter(photo => photo.category === "haircuts");
        case "coloring":
          return photos.filter(photo => photo.category === "coloring");
        case "highlights":
          return photos.filter(photo => photo.category === "highlights");
        case "other":
          return photos.filter(photo => photo.category === "other");
      }
    }
  }, 
 
  // computed: {
	// 	...mapGetters([
	// 		'PHOTOS'
  //   ]),
  // },
}
</script>

<style lang="scss">
.gallery {
  &__layout {
    margin-bottom: 50px;
  }

  &__filters {
		margin-bottom: 30px;
	}

  &__photo {
    margin-bottom: 100px;
  }
}
</style>
