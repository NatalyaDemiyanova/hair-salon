<template class="pricing-coloring" id="coloring-template">
  <ul class="pricing-coloring__list">
    <li class="pricing-coloring__item">
      <span class="pricing-coloring__price">
        $10.89
      </span>
      <h3 class="pricing-coloring__title">
        ALL-OVER HAIR COLOR
      </h3>
      <p class="pricing-coloring__description">
        All-Over Hair Color is a single-process hair color with scalp-to-ends application, also known as a “solid color” service. Price depends on hair length.
      </p>
    </li>
    <li class="pricing-coloring__item">
      <span class="pricing-coloring__price">
        $19.89
      </span>
      <h3 class="pricing-coloring__title">
        INOA COLOR
      </h3>
      <p class="pricing-coloring__description">
        The ultimate in ammonia-free color that is gentler and healthier on your scalp. We have 22 patents for a color that is pure, vibrant and more beautiful than ever.
      </p>
    </li>
    <li class="pricing-coloring__item">
      <span class="pricing-coloring__price">
        $11.89
      </span>
      <h3 class="pricing-coloring__title">
        RETOUCH LIGHTENER (INCLUDES TONER)
      </h3>
      <p class="pricing-coloring__description">
        This service is ideal for maintaining an all-over blonde look. Toner guarantees an excellent result. Price depends on hair length.
      </p>
    </li>
    <li class="pricing-coloring__item">
      <span class="pricing-coloring__price">
        $16.89
      </span>
      <h3 class="pricing-coloring__title">
        6 FOIL HIGHLIGHT WITH HAIRCUT & BLOW-OUT
      </h3>
      <p class="pricing-coloring__description">
        This is a great service for a first-time highlight. Adds some highlight in the hairline and part. Limited to a total of 6 foils. Includes haircut and styling.
      </p>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'ThePricingColoring', 
}
</script>

<style lang="scss">
.pricing-coloring {

  &__list {
    padding: 80px 30px 55px;
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
