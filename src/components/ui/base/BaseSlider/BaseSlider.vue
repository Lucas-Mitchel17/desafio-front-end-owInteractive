<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';

defineProps({
  slides: {
    type: Array,
  },
});
</script>

<template>
  <carousel
    :autoplay="5000"
    :wrap-around="true"
    :items-to-show="1"
  >
    <Slide
      v-for="slide in slides"
      :key="slide"
      class="slide"
    >
      <section class="slide-container">
        <AppText tag="h2"> {{ slide.title }} </AppText>
        <AppText tag="h3"> {{ slide.subtitle }} </AppText>
      </section>
    </Slide>

    <template #addons>
      <pagination />
    </template>
  </carousel>
</template>

<style lang="sass">
.slide
  min-height: 350px
  background-image: linear-gradient(to right, $purple , $lightPurple)

.slide-container
  display: flex
  flex-direction: column
  justify-content: end
  margin: auto
  max-width: $desktop
  width: 100%

  & > .text-h2
    color: $white
    text-align: right
    font-size: 50px
    line-height: 1.15
    margin: 0 20px 5px 0

    @media (min-width: $desktop)
      font-size: 60px
      margin: 0

  & > .text-h3
    color: $white
    font-size: 25px
    font-weight: 900
    margin: 0 20px 0 0
    text-align: right

    @media (min-width: $desktop)
      font-size: 30px
      margin: 0
</style>
