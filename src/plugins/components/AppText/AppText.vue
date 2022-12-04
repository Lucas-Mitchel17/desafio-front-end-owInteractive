<script setup>
import { computed } from 'vue';
import { TAGS_ENUM } from './types';

const props = defineProps({
  tag: {
    type: String,
    default: 'p',
    validator: (value) => Object.values(TAGS_ENUM).includes(value),
  },
});

const classes = computed(() => {
  const defaultTextClass = `text-${props.tag}`;

  return [defaultTextClass];
});
</script>

<template>
  <component
    :is="tag"
    :class="classes"
  >
    <slot />
  </component>
</template>
