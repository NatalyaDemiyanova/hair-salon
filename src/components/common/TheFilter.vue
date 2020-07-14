<template>
	<label class="filter">
		<input 
			class="filter__input" 
			name="filters"
			type="radio" 
			:value="val"
			v-model="filter"
		>
		<span class="filter__name"><slot/></span>
	</label>
</template>

<script>

export default {
	name: "TheFilter",
	props: {
		value: String,
		val: String,
	},

	computed: {
    filter: {
			// тоже самое что value
      get() {
        return this.value;
			},
			// тоже самое что @change
      set() {
        this.$emit('input', this.val);
      }
    }
  }
}
</script>

<style lang="scss">
.filter {
	cursor: pointer;
	
	&__input {
		display: none;
		&:checked + .filter__name {
			color: $text-active;
		}
	}

	&__name {
		@include text($H300, 700);
		transition: color 0.2s ease;
		&:hover {
			color: $text-active;
		}		
	}
}

</style>