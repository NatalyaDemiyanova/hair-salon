<template>
	<div class="header">
		
	</div>
    
</template>

<script>

export default {
	name: 'TheHeader',
	components: {
  }
}
</script>

<style lang="scss">
.header {
	background-image: url(../assets/header-photo.png),linear-gradient(0deg, rgba(47,47,47,1) 0%, rgba(133,133,133,1) 100%);
	@include background-image;
	background-size: cover;
	background-position: bottom 0px;
	height: 100vh;
	position: relative;
	top: 0px;

}


</style>