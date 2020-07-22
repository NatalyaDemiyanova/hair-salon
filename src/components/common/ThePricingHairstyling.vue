<template class="pricing-hairstyling" id="hairstyling-template">
  <ul class="pricing-hairstyling__list">
    <li class="pricing-hairstyling__item">
      <span class="pricing-hairstyling__price">
       $20.89
      </span>
      <h3 class="pricing-hairstyling__title">
        BLOWOUT
      </h3>
      <p class="pricing-hairstyling__description">
        A full blowout service at Hellen includes two washes, one wash using clarifying shampoo, and the other is completed with a Blowout Shampoo and thermal protectant.
      </p>
    </li>
    <li class="pricing-hairstyling__item">
      <span class="pricing-hairstyling__price">
        $16.89
      </span>
      <h3 class="pricing-hairstyling__title">
        CURLS
      </h3>
      <p class="pricing-hairstyling__description">
        Enjoy a great shape with a customized curly cut, trim or shaping that's designed to bring out the best in your curls and express your individuality.
      </p>
    </li>
    <li class="pricing-hairstyling__item">
      <span class="pricing-hairstyling__price">
        $15.89
      </span>
      <h3 class="pricing-hairstyling__title">
        UP-DO
      </h3>
      <p class="pricing-hairstyling__description">
        An updo is a hairstyle that is completely pinned up. Whether it is a high ponytail with braiding included, a low side bun with twists, or anything in between, we can manage it.
      </p>
    </li>
    <li class="pricing-hairstyling__item">
      <span class="pricing-hairstyling__price">
        $14.89
      </span>
      <h3 class="pricing-hairstyling__title">
        EVENT HAIRSTYLING
      </h3>
      <p class="pricing-hairstyling__description">
        If you have a special event coming up, then our event styling services for your hair are just what you need. Our team of stylists will make you look your best.
      </p>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'ThePricingHairstyling', 
}
</script>

<style lang="scss">
.pricing-hairstyling {

  &__list {
    padding: 60px 30px;
    max-width: 720px;
    margin: 0 auto;
  }
  
  &__item {
    &:not(:last-of-type) {
      margin-bottom: 50px;
    }
  }

  &__price {
    font-family: $secondary-font;
    @include text($H100, 500, $secondary-color);
  }

  &__title {
    font-family: $secondary-font;
    @include text($H500, 700, $text-main-color);
      margin: 15px 0;
  }

  &__description {
    @include text($H200, 300, $text-main-color);
    opacity: 0.8;
    letter-spacing: -0.03em;
  }
}
</style>
