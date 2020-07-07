<template>
	<ul class="filters">
		<li class="filters__item">ALL</li>
		<li class="filters__item">HAIRCUTS</li>
		<li class="filters__item">COLORING</li>
		<li class="filters__item">HIGHLIGHTS</li>
		<li class="filters__item">OTHER</li>
	</ul>
</template>

<script>
export default {
	name: "TheFilters",
	data() {
		return {
			filter: '',
		}
	}
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