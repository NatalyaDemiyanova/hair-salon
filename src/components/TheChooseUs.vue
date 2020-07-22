<template>
  <div class="choose-us">
    <div class="choose-us__container container">
      <h2 class="choose-us__title">WHY PEOPLE CHOOSE US</h2>
      <ul class="choose-us__list">
        <li class="choose-us__item">
          <div class="choose-us__image-wrapper">
            <img class="choose-us__image" src="../assets/choose-us/eye.png" alt="eye">
          </div>
          <div class="choose-us__content">
            <h3 class="choose-us__content-title">
              FRIENDLY TEAM
            </h3>
            <span class="choose-us__square"></span>
            <p class="choose-us__content-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </li>
        <li class="choose-us__item">
          <div class="choose-us__image-wrapper">
            <img class="choose-us__image" src="../assets/choose-us/hair.png" alt="hair">
          </div>
          <div class="choose-us__content">
            <h3 class="choose-us__content-title">
              Best equipment
            </h3>
            <span class="choose-us__square"></span>
            <p class="choose-us__content-text">
              Cras ornare arcu dui vivamus arcu praesent semper feugiat
            </p>
          </div>
        </li>
        <li class="choose-us__item">
          <div class="choose-us__image-wrapper">
            <img class="choose-us__image" src="../assets/choose-us/woman.png" alt="woman">
          </div>
          <div class="choose-us__content">
            <h3 class="choose-us__content-title">
              Great Atmosphere
            </h3>
            <span class="choose-us__square"></span>
            <p class="choose-us__content-text">
              Erat pellentesque adipiscing commodo elit at imperdiet dui
            </p>
          </div>
        </li>
        <li class="choose-us__item">
          <div class="choose-us__image-wrapper">
            <img class="choose-us__image" src="../assets/choose-us/sunny.png" alt="sunny">
          </div>
          <div class="choose-us__content">
            <h3 class="choose-us__content-title">
              Unique Approach
            </h3>
            <span class="choose-us__square"></span>
            <p class="choose-us__content-text">
              Hac habitasse platea dictumst quisque placerat orci
            </p>
          </div>
        </li>
        <li class="choose-us__item">
          <div class="choose-us__image-wrapper">
            <img class="choose-us__image" src="../assets/choose-us/stars.png" alt="star">
          </div>
          <div class="choose-us__content">
            <h3 class="choose-us__content-title">
              Quality products
            </h3>
            <span class="choose-us__square"></span>
            <p class="choose-us__content-text">
              Nam libero justo laoreet sit amet cursus sit amet posuere morbi
            </p>
          </div>
        </li>
        <li class="choose-us__item">
          <div class="choose-us__image-wrapper">
            <img class="choose-us__image" src="../assets/choose-us/price.png" alt="price">
          </div>
          <div class="choose-us__content">
            <h3 class="choose-us__content-title">
              Affordable Prices
            </h3>
            <span class="choose-us__square"></span>
            <p class="choose-us__content-text">
              Et pharetra pharetra massa massa ultricies mi quis hendrerit
            </p>
          </div>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: 'TheChooseUs',
}
</script>

<style lang="scss">
.choose-us {
  padding: 50px 0;

  @include media($screen-small-tablet) {
		padding: 80px 0 50px;
	}
	@include media($screen-desktop) {
		padding: 115px 0 85px;
	}

  &__container {
    @include flex(center, center, column);
  }

  &__title {
    font-family: $secondary-font;
		@include text($H600, 700);
		text-transform: uppercase;
		text-align: center;
    margin-bottom: 40px;
    
    @include media($screen-small-tablet) {
      margin-bottom: 80px;
    }
    @include media($screen-desktop) {
      font-size: $H650;
    }
		@include media {
      font-size: $H700;
      margin-bottom: 100px;
		}
  }

  &__list {
    @include flex(center, flex-start);
    flex-wrap: wrap;
  }

  &__item {
    flex-basis: 80%;
    @include flex( center, center, column);
    margin: 0 20px 50px;

    @include media($screen-small-tablet) {
      @include flex( flex-start, center);
    }
    @include media($screen-tablet) {
      flex-basis: 44%;
    }
    @include media($screen-desktop) {
      flex-basis: 29%;
    }
  }

  &__image-wrapper {
    margin-right: 0px;
    margin-bottom: 20px;
    @include media($screen-small-tablet) {
      margin-right: 30px;
      margin-bottom: 0px;
    }
  }

  &__image {
    width: 70px;
  }

  &__content {
    position: relative;
    text-align: center;

    @include media($screen-small-tablet) {
      text-align: left;
    }
  }

  &__square {
    position: absolute;
    top: -84%;
    left: 56%;
    width: 16px;
    height: 16px;
    background-color: $secondary-color;
    opacity: 0.6;
    transform: translateY(0) rotate(45deg);
    transition: all 0.5s;

    @include media($screen-small-tablet) {
      top: 40%;
      left: -19%;
    }
  }

  &__content-title {
    font-family: $secondary-font;
		@include text($H500, 600);
    text-transform: uppercase;
    margin-bottom: 10px;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: $secondary-color;
    }
    &:hover + .choose-us__square {
      transform: translateX(-200%) rotate(270deg);
    }
  }

  &__content-text {
    @include text($H200, 300);
	}
}

</style>