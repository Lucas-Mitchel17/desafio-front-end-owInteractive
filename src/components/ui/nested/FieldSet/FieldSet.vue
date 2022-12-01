<script setup>
import { BaseInput } from '@ComposedUi';
import { useAttrs } from 'vue';

const attrs = useAttrs();

defineProps({
  errorMessage: String,
  label: String,
});
</script>

<template>
  <fieldset>
    <legend>
      <label for=""> {{ label }} </label>
    </legend>
    <BaseInput
      v-bind="attrs"
      :hasError="!!errorMessage"
    />

    <AppText
      class="text-error"
      tag="spam"
    >
      {{ errorMessage }}
    </AppText>
  </fieldset>
</template>

<style lang="sass">
fieldset
  border: none
  display: grid
  grid-template-columns: 1fr
  margin: 0
  padding: 0

.text-error
  color: $form-error
  font-size: $text-error
  font-weight: 600
  margin-left: 1px
</style>
