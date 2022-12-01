<script setup>
defineProps({
  path: {
    type: String,
    default: 'https://cdn2.hubspot.net/hubfs/23489674/no-picture.jpg',
  },
});
</script>

<template>
  <section>
    <img
      class="thumbnail"
      :src="path"
    />
  </section>
</template>

<style lang="sass">
.thumbnail
  height: 100%
  max-height: 210px
  max-width: 300px
  width: 100%
</style>
