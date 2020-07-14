<template>
  <vue-glide 
    class="glide"
    :type="carousel"
    :perView="1"
    :bullet="true"
    :autoplay= "3000"
   
    >
    <vue-glide-slide class="glide__slide">
      <p class="glide__comment">
        I've been coming here for years and i can confidently say that Hellen is the best hair salon that is also very consistent with the quality of service and hair color. Besides great hairstyling experience, you can also enjoy a unique and friendly atmosphere at this salon.
      </p>
      <span class="glide__name">
        Anne	Jackson
      </span>
    </vue-glide-slide>
    <vue-glide-slide class="glide__slide">
      <p class="glide__comment">
        Lauren made my hair look the best it's ever looked. My mom and I were in for the weekend out of town and decided to get our hair done. I knew I wanted to try something new with my hair, and your stylist was so accommodating and a joy to be around.
      </p>
      <span class="glide__name">
        Julia Parker
      </span>
    </vue-glide-slide>
    <vue-glide-slide class="glide__slide">
      <p class="glide__comment">
        There are hair salons, and there's Hellen, a team of true hair experts. Being from NYC, I've been to many well-known salons and I've never had a better experience. Stylists here listen to you and ensure that you always leave with what you have asked for.
      </p>
      <span class="glide__name">
        Susan	Davis
      </span>
    </vue-glide-slide>
    <vue-glide-slide class="glide__slide">
      <p class="glide__comment">
        Janette cut my hair and did partial highlights and my experience was excellent! She took her time doing my hair and I am very pleased with the results. If you are still looking where to have your hair cut the best way, head for Hellen!
      </p>
      <span class="glide__name">
        Kate Wilson
      </span>
    </vue-glide-slide>
    <template class="glide__arrows" slot="control">
      <button class="glide__arrow glide__arrow--left" data-glide-dir="<"><img src="../../assets/arrow-left.png"></button>
      <button class="glide__arrow glide__arrow--right" data-glide-dir=">"><img src="../../assets/arrow-right.png"></button>
    </template>
  </vue-glide>
</template>

<script>
import { Glide, GlideSlide } from 'vue-glide-js'

export default {
  name: 'TheSliderComments',
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
  },
  props: {
    type: String,
    perView: Number,
    bullet: Boolean,
    autoplay: Number,
  }
  // props: {
  //   animationDuration: Number,
  //   hoverpause: Boolean,
  // }
}
</script>

<style lang="scss">
.glide {
  @include flex(center, center, column);

  &__slide {
    @include flex(center, center, column);
    width: 100%;
   
  }

  &__arrows {

  }

  &__arrow {
    background-color: transparent;
    outline: none;
    border: none;
  }

  &__arrow--left {
  }

  &__arrow--right {
  }
}
</style>


//  :autoplay= "3000"
//     :hoverpause= "true"
//     :animationDuration= "500"

// :type="carousel"
//     :perView="1"
//     :bullet="true"