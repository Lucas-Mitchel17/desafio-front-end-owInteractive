<script setup>
import { computed } from 'vue';
import { BaseInput } from '@ComposedUi';
import Glass from '@Icons/glass.svg?component';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
  modelValue: {
    default: '',
    required: true,
    type: String,
  },
});

const model = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});

function setSearch(value) {
  model.value = value;
}
</script>

<template>
  <section class="search-bar">
    <AppText tag="h3">Encontre seu produto</AppText>

    <BaseInput
      v-model="model"
      placeholder="Pesquisar..."
      type="search"
      @blur="setSearch"
    />

    <AppButton>
      <template #icon>
        <Glass />
      </template>
    </AppButton>
  </section>
</template>

<style lang="sass">
.search-bar
  align-items: center
  box-shadow: 0px 0px 25px -6px $grey
  display: grid
  grid-template-columns: 1fr
  background-color: $white
  padding: 20px 35px

  @media (min-width: $medium)
    grid-template-columns: minmax(100px, 200px) minmax(100px, 636px) 1fr

  @media (min-width: $tablet)
    padding: 20px 75px

  & > .text-h3
    color: $grey
    font-size: 18px
    font-weight: 600
    grid-column-end: 3
    grid-column-start: 1
    grid-row: 1
    margin: 0 0 10px
    text-align: center

    @media (min-width: $medium)
      grid-column-end: 2
      margin: 0
      text-align: left

  & > .input
    border-radius: 2px 0 0 2px
    grid-row: 2

    @media (min-width: $medium)
      grid-row: 1


  & > .btn
    background-color: $purple
    border-radius: 0 2px 2px 0
    height: 34px
    width: 38px
    grid-row: 2

    @media (min-width: $medium)
      grid-row: 1

    & > .icon > svg
      fill: $white
</style>
