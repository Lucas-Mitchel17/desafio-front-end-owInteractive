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

  multiple: Boolean,

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
  get() {
    return props.modelValue;
  },

  set(newValue) {
    if (props.type !== TYPE_ENUM.FILE) {
      return emit('update:modelValue', newValue);
    }
  },
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
    :multiple="multiple"
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
  height: 32px
  padding: 0 10px

.input:active,
.input:hover,
.input:focus,
.input:focus-visible
  border: 1px solid $black
  outline: none
</style>
