<script setup>
import { computed } from 'vue';
import { ROLES_ENUM, TYPES_ENUM } from './types';

const props = defineProps({
  disabled: Boolean,

  label: String,

  loading: Boolean,

  outset: Boolean,

  wide: Boolean,

  role: {
    default: ROLES_ENUM.BUTTON,
    type: String,
    validator: (value) => Object.values(ROLES_ENUM).includes(value),
  },

  type: {
    default: TYPES_ENUM.SUCCESS,
    type: String,
    validator: (value) => Object.values(TYPES_ENUM).includes(value),
  },
});

const dynamicClasses = computed(() => {
  return [
    `btn-${props.type}`,
    props.outset || props.loading ? 'outset' : '',
    props.wide ? 'wide' : '',
  ];
});

const emit = defineEmits(['click']);
</script>

<template>
  <button
    :class="['btn', ...dynamicClasses]"
    :disabled="disabled"
    :title="label"
    :type="role"
    @click="emit('click')"
  >
    {{ label }}
  </button>
</template>

<style lang="sass">
.btn
  cursor: pointer
  height: 61px
  width: 362px
  text-transform: uppercase

.btn-addCart
  background-color: $purple
  color: $white
  font-weight: 600
</style>
