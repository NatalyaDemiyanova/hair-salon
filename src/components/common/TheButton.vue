<template>
  <button class="button"><slot/></button>
</template>

<script>

export default {
  name: 'Button',
}
</script>

<style lang="scss">
.button {
  width: 100%;
  padding: 18px 35px;
  @include text($H200, 500, $dark);
  text-transform: uppercase;
  background-color: $white;
  border: none;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: $white;
    background-color: $secondary-color;
  }

  &--order {
    padding: 12px 25px;
    @include text($H50, 500, $white);
    text-transform: uppercase;
    background-color: $secondary-color;
  }

  @include media($screen-small-tablet) {
    width: auto;
  }

  

}

.button--order {
  &:hover {
    color: $secondary-color;
    background-color: $white;
  }
}


</style>