<template>
	<div class="filters">
		<the-filter val="all" v-model="filterModel">ALL</the-filter>
		<the-filter val="haircuts" v-model="filterModel">HAIRCUTS</the-filter>
		<the-filter val="coloring" v-model="filterModel">COLORING</the-filter>
		<the-filter val="hightlights" v-model="filterModel">HIGHLIGHTS</the-filter>
		<the-filter val="other" v-model="filterModel">OTHER</the-filter>
	</div>
</template>

<script>
import TheFilter from './TheFilter'

export default {
	name: "TheFilters",
	components: {
		TheFilter
	},
	props: {
		filter: String,
	},
	computed: {
		filterModel: {
			get() {
				return this.filter;
			},
			set(value) {
				this.$emit('input', value);
			}
		}
	},

}
</script>

<style lang="scss">
.filters {
	@include flex(center, center);

	&__item {
		&:not(:last-of-type) {
			margin-right: 32px;
		}
	}
}

</style>