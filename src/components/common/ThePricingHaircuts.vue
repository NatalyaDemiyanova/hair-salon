<template class="pricing-haircuts" id="haircuts-template">
  <ul class="pricing-haircuts__list">
    <li class="pricing-haircuts__item">
      <span class="pricing-haircuts__price">
        $25.89
      </span>
      <h3 class="pricing-haircuts__title">
        LADIES’ HAIRCUT
      </h3>
      <p class="pricing-haircuts__description">
        Hellen provides a long list of salon services that will have women looking fabulous. Women can treat themselves to just a haircut or they can also choose from any of our expert services.
      </p>
    </li>
    <li class="pricing-haircuts__item">
      <span class="pricing-haircuts__price">
        $23.89
      </span>
      <h3 class="pricing-haircuts__title">
        MEN’S HAIRCUT
      </h3>
      <p class="pricing-haircuts__description">
        A men’s haircut comes with a refreshing shampoo, stimulating scalp massage and an essential oil hot towel treatment.
      </p>
    </li>
    <li class="pricing-haircuts__item">
      <span class="pricing-haircuts__price">
        $17.89
      </span>
      <h3 class="pricing-haircuts__title">
        KIDS’ HAIRCUT
      </h3>
      <p class="pricing-haircuts__description">
        A trip to our salon is always enjoyable for kids of all ages. While we service clients of all ages, the experience for children will make them feel special.
      </p>
    </li>
    <li class="pricing-haircuts__item">
      <span class="pricing-haircuts__price">
        $18.89
      </span>
      <h3 class="pricing-haircuts__title">
        SENIOR HAIRCUT
      </h3>
      <p class="pricing-haircuts__description">
        Our staff a great amount of pride in our senior haircut service as we believe people simply get better with age. Style and elegance can be yours at discounted senior prices.
      </p>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'ThePricingHaircuts', 
}
</script>

<style lang="scss">
.pricing-haircuts {

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
    transition: all 0.3s ease-in-out;
    &:hover {
      color: $secondary-color;
    }
  }

  &__description {
    @include text($H200, 300, $text-main-color);
    opacity: 0.8;
    letter-spacing: -0.03em;
  }
}
</style>
