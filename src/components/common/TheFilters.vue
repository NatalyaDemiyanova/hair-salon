<template>
  <div class="filters">
    <div class="filters__wrapper">
      <the-filter 
				class="filters__item" 
				val="all" 
				v-model="filterModel"
				>
				ALL
			</the-filter>
      <the-filter 
				class="filters__item" 
				val="haircuts" 
				v-model="filterModel"
				>
				HAIRCUTS
			</the-filter>
      <the-filter 
				class="filters__item" 
				val="coloring" 
				v-model="filterModel"
				>
				COLORING
			</the-filter>
      <the-filter 
				class="filters__item" 
				val="highlights" 
				v-model="filterModel"
				>
				HIGHLIGHTS
			</the-filter>
      <the-filter 
				class="filters__item" 
				val="other" 
				v-model="filterModel"
				>
				OTHER
			</the-filter>
    </div>
    <!-- <app-button class="filters__button button button--black">FILTER</app-button> -->
  </div>
</template>

<script>
import TheFilter from "./TheFilter";

export default {
  name: "TheFilters",
  components: {
    TheFilter
  },
  props: {
    filter: String
  },
  computed: {
    filterModel: {
      get() {
        return this.filter;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  }
};
</script>

<style lang="scss">
.filters {
  @include flex(center, center, column-reverse);
  padding: 0 24px;

  @include media($screen-small-tablet) {
    @include flex(center, center);
  }

  &__wrapper {
    // display: none;
    @include flex(center, center, column);

    @include media($screen-small-tablet) {
      @include flex(center, center);
    }
  }

  &__item {
    &:not(:last-of-type) {
      margin-right: 0px;
      margin-bottom: 5px;
    }

    @include media($screen-small-tablet) {
      &:not(:last-of-type) {
        margin-right: 32px;
        margin-bottom: 0px;
      }
    }
  }

  &__button {
    display: block;
    // margin: 0 24px;

    @include media($screen-small-tablet) {
      display: none;
    }
  }
}
</style>