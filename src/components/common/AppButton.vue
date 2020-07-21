<template>
  <button class="button"><slot/></button>
</template>

<script>
export default {
  name: 'AppButton',
}
</script>

<style lang="scss">
.button {
  width: 100%;
  padding: 18px 35px;
  @include text($H200, 500, $dark);
  text-transform: uppercase;
  text-align: center;
  background-color: $white;
  border: none;
  outline: none;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: $white;
    background-color: $secondary-color;
  }

  &--order {
    padding: 12px 25px;
    margin: 0 24px;
    @include text($H50, 500, $white);
    background-color: $secondary-color;
  }

  &--black {
    background-color: $dark;
    @include text($H200, 500, $white);
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