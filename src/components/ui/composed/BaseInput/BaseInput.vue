<script setup>
import { computed } from 'vue';
import { maska as vMaska } from 'maska';
import { styleFromStateHelper } from '@Helpers';
import { AUTOCOMPLETE_ENUM, TYPE_ENUM } from './types';

const { disabledClass, errorClass, loadingClass } = styleFromStateHelper();

const emit = defineEmits(['change', 'blur', 'update:modelValue']);

const props = defineProps({
  id: String,

  inputClasses: String,

  disabled: Boolean,

  hasError: Boolean,

  hidden: Boolean,

  loading: Boolean,

  mask: String,

  maxlength: Number,

  placeholder: String,

  autofocus: {
    default: false,
    type: Boolean,
  },

  autocomplete: {
    default: AUTOCOMPLETE_ENUM.OFF,
    type: String,
    validator: (value) => Object.values(AUTOCOMPLETE_ENUM).includes(value),
  },

  modelValue: {
    default: '',
    required: true,
    type: [Array, Date, String, Number],
  },

  name: {
    require: true,
    type: String,
  },

  type: {
    default: TYPE_ENUM.TEXT,
    type: String,
    validator: (value) => Object.values(TYPE_ENUM).includes(value),
  },
});

const model = computed({
  get: () => props.modelValue,
  set: (newValue) => emit('update:modelValue', newValue),
});

const dynamicClasses = computed(() => {
  return [
    errorClass(props.hasError),
    loadingClass(props.loading),
    disabledClass(props.disabled),
  ];
});
</script>

<template>
  <input
    v-model="model"
    v-maska="mask"
    :autocomplete="autocomplete"
    :autofocus="autofocus"
    :class="['input', inputClasses, ...dynamicClasses]"
    :disabled="disabled || loading"
    :hidden="hidden"
    :id="id"
    :maxlength="maxlength"
    :name="name"
    :placeholder="placeholder"
    :type="type"
    ref="inputRef"
    @blur="emit('blur', model)"
    @change="emit('change', $event.target)"
  />
</template>

<style lang="sass" scoped>
.input
  border: 1px solid $inputGrey
  border-radius: 2px
  height: 34px
  padding: 0 10px

.input::placeholder
  color: $footer
  font-size: 11px
  font-weight: 600

.input-small
  max-width: 140px
  width: 100%
.input-medium
  max-width: 200px
  width: 100%

.input-full
  max-width: 437px
  width: 100%

.input:active,
.input:hover,
.input:focus,
.input:focus-visible
  border: 1px solid $black
  outline: none

.input.has-error
  border-color: $form-error
.input.has-error::placeholder
  color: $form-error
</style>
