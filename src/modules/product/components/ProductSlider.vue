<script setup>
import { useAttrs } from 'vue';
import { BaseSlider } from '@BaseUi';

const attrs = useAttrs();
</script>

<template>
  <BaseSlider v-bind="attrs" />
</template>
