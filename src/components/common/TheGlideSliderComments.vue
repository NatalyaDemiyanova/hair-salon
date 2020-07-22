<template>
  <div class="glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li class="glide__slide">
          <span class="glide__quotes">&#10076;&#10076;</span>
          <p class="glide__comment">
            I've been coming here for years and i can confidently say that Hellen is the best hair salon that is also very consistent with the quality of service and hair color. Besides great hairstyling experience, you can also enjoy a unique and friendly atmosphere at this salon.
          </p>
          <span class="glide__name">
            Anne	Jackson
          </span>
        </li>
        <li class="glide__slide">
          <span class="glide__quotes">&#10076;&#10076;</span>
          <p class="glide__comment">
            Lauren made my hair look the best it's ever looked. My mom and I were in for the weekend out of town and decided to get our hair done. I knew I wanted to try something new with my hair, and your stylist was so accommodating and a joy to be around.
          </p>
          <span class="glide__name">
            Julia Parker
          </span>
        </li>
        <li class="glide__slide">
          <span class="glide__quotes">&#10076;&#10076;</span>
          <p class="glide__comment">
            There are hair salons, and there's Hellen, a team of true hair experts. Being from NYC, I've been to many well-known salons and I've never had a better experience. Stylists here listen to you and ensure that you always leave with what you have asked for.
          </p>
          <span class="glide__name">
            Susan	Davis
          </span>
        </li>
        <li class="glide__slide">
          <span class="glide__quotes">&#10076;&#10076;</span>
          <p class="glide__comment">
            Janette cut my hair and did partial highlights and my experience was excellent! She took her time doing my hair and I am very pleased with the results. If you are still looking where to have your hair cut the best way, head for Hellen!
          </p>
          <span class="glide__name">
            Kate Wilson
          </span>
        </li>
      </ul>
    </div>
    <div class="glide__arrows" data-glide-el="controls">
      <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
        <svg class="glide__arrow-image" viewBox="0 0 512 512" >
          <g>
            <g>
              <path d="M492,236H68.442l70.164-69.824c7.829-7.792,7.859-20.455,0.067-28.284c-7.792-7.83-20.456-7.859-28.285-0.068
                l-104.504,104c-0.007,0.006-0.012,0.013-0.018,0.019c-7.809,7.792-7.834,20.496-0.002,28.314c0.007,0.006,0.012,0.013,0.018,0.019
                l104.504,104c7.828,7.79,20.492,7.763,28.285-0.068c7.792-7.829,7.762-20.492-0.067-28.284L68.442,276H492
                c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"/>
            </g>
          </g>
        </svg>
      </button>
      <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
        <svg class="glide__arrow-image" viewBox="0 0 512 512">
          <g>
            <g>
              <path d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068
                c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557
                l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104
                c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z"/>
            </g>
          </g>
        </svg>
      </button>
    </div>
    <div class="glide__bullets" data-glide-el="controls[nav]">
      <button class="glide__bullet" data-glide-dir="=0"></button>
      <button class="glide__bullet" data-glide-dir="=1"></button>
      <button class="glide__bullet" data-glide-dir="=2"></button>
      <button class="glide__bullet" data-glide-dir="=3"></button>
    </div>
  </div>
</template>

<script>
import Glide from "@glidejs/glide";
const config = {
  type: "carousel",
  startAt: 0,
  gap: 100,
  perView: 1,
  animationDuration: 500,
  autoplay: 5000,
  hoverpause: true,
}; 

export default {
  name: 'TheSliderComments',
  data() {
    return {
      slider: null
    };
  },
  mounted() {
    this.slider = new Glide(".glide", config).mount();
  },
  beforeDestroy() {
    this.slider.destroy();
  }
}
</script>

<style lang="scss">
.glide {

  &__slides {
    margin-bottom: 50px;
  }

  &__slide {
    @include flex(center, center, column);
  }

  &__quotes {
    @include text($H700, 500, $secondary-color);
    line-height: 50px;
  }
  &__comment {
    max-width: 550px;
    @include text($H400, 300, $white);
    text-align: center;
    line-height: 35px;
    margin-bottom: 20px;

    @include media($screen-desktop){
      max-width: 650px;
    }
    @include media($screen-desktop-medium){
      max-width: 800px;
    }
  }

  &__name {
    @include text($H100, 500, $secondary-color);
    text-transform: uppercase;
  }

  &__arrow {
    display: none;

    @include media($screen-tablet) {
      display: block;
      position: absolute;
      
      transform: translateY(-430%);
      z-index: 5;
      border: none;
      outline: none;
      background-color: transparent;
      &--right {
        right: -30px;
        left: auto;
      }  
    }
     
    @include media($screen-tablet){
      transform: translateY(-560%);
      left: -40px;
      &--right {
        right: -40px;
        left: auto;
      } 
    }
    @include media($screen-desktop-medium){
      transform: translateY(-430%);
      left: -50px;
      &--right {
        right: -50px;
        left: auto;
      } 
    }
  }

  &__arrow-image {
    fill: $white;
    width: 30px;
    transition: all 0.3s ease-in-out;

    &:hover {
      fill: $secondary-color; 
    }   
  }

  &__bullets {
    @include flex(space-between, center); 
    margin: 0 auto;
    width: 150px;
    &--header {
      @include flex(center, flex-end, column); 
      position: absolute;
      right: 24px;
      transform: translateY(-25%);

      @include media($screen-tablet) {
        top: -50%;
        transform: translateY(30%);
      }
      @include media($screen-desktop) {
        transform: translateY(15%);
      }
    }  
  }

  &__bullet {
    height: 12px;
    width: 12px;
    border-radius: 50%;
    border: none;
    background-color: $white;
    outline: none;
    transition: all 0.3s ease-in-out;
    &--header {
      &:not(:last-of-type) {
        margin-bottom: 40px;
      }
    }
    &--active {
      background-color: $secondary-color;
    }
  }
}
</style>