<template>
  <div class="contact-info">
    <div class="container contact-info__container">
      <div class="contact-info__box">
        <div class="contact-info__image-wrapper">
          <img class="contact-info__image" src="../assets/phone-2.png" alt="phone">
        </div>
        <h3 class="contact-info__title">
          <a href="#" class="contact-info__link">
            1-800-123-1234
          </a>
        </h3>
        <span class="contact-info__square"></span>
        <span class="contact-info__text">
          You can call us anytime
        </span>
      </div>
      <div class="contact-info__box">
        <div class="contact-info__image-wrapper">
          <img class="contact-info__image" src="../assets/address.png" alt="address">
        </div>
        <h3 class="contact-info__title">
          <a href="#" class="contact-info__link">
            51 FRANCIS STREET, DARLINGHURST NSW 2010, UNITED STATES
          </a>
        </h3>
        <span class="contact-info__square"></span>
        <span class="contact-info__text"></span>
      </div>
      <div class="contact-info__box">
        <div class="contact-info__image-wrapper">
          <img class="contact-info__image" src="../assets/email.png" alt="email">
        </div>
        <h3 class="contact-info__title">
          <a href="#" class="contact-info__link" >
            INFO@DEMOLINK.ORG
          </a>
        </h3>
        <span class="contact-info__square"></span>
        <span class="contact-info__text">
          Feel free to email us your questions
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheContactInfo',
}
</script>

<style lang="scss">
.contact-info {
  padding: 80px 0;

  @include media($screen-desktop) {
		padding: 115px 0;
  }

  &__container {
    @include flex(space-around, flex-start);
    flex-wrap: wrap;
  }

  &__box {
    position: relative;
    width: 310px;
    @include flex(center, center, column);
    margin: 0 10px;
    &:not(:last-child) {
      margin-bottom: 50px;
    }

    @include media($screen-desktop) {
      &:not(:last-child) {
        margin-bottom: 0px;
      }
    }
  }

  &__image-wrapper {
    position: relative;
    margin-bottom: 20px;
    border-bottom: 3px solid $secondary-color;
  }

  &__image {
    width: 70px;
    margin-bottom: 20px;
  }

  &__title {
    text-align: center;
    
    &:hover + .contact-info__square {
      transform: translateX(-200%) rotate(270deg);
    }
  }

  &__link {
    font-family: $secondary-font;
    @include text($H500, 600);
    text-transform: uppercase;
		transition: all 0.3s ease-in-out;

    &:hover {
      color: $secondary-color;
    }
  }
  
  &__square {
    position: absolute;
    top: 12%;
    left: 59%;
    width: 16px;
    height: 16px;
    background-color: $secondary-color;
    opacity: 0.6;
    transform: translateY(0) rotate(45deg);
    transition: all .6s;
    z-index: -1;
  }

  &__text {
    @include text($H200, 300);
    opacity: 0.8;
    margin-top: 15px;
  }
}
</style>

