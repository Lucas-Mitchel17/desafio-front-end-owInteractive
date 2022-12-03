<script>
export default {
  inheritAttrs: false,
};
</script>

<script setup>
import { BaseDatePicker } from '@BaseUi';
import { BaseInput } from '@ComposedUi';
import { INPUT_TYPES } from '@Types';
import { computed, useAttrs } from 'vue';

const attrs = useAttrs();

defineProps({
  errorMessage: String,
  label: String,
});

const isDate = computed(() => attrs.type === INPUT_TYPES.TYPE_ENUM.DATE);
</script>

<template>
  <fieldset>
    <legend>
      <label for=""> {{ label }} </label>
    </legend>

    <BaseDatePicker
      v-if="isDate"
      v-bind="attrs"
      :hasError="!!errorMessage"
    />

    <BaseInput
      v-else
      v-bind="attrs"
      :hasError="!!errorMessage"
    />

    <AppText
      class="text-error"
      tag="span"
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
