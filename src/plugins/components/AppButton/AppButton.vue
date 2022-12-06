<script setup>
import { computed } from 'vue';
import { ROLES_ENUM, TYPES_ENUM } from './types';

const props = defineProps({
  disabled: Boolean,

  label: String,

  loading: Boolean,

  outset: Boolean,

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
  return [`btn-${props.type}`, props.outset || props.loading ? 'outset' : ''];
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
    <section class="icon">
      <slot name="icon" />
    </section>

    {{ label }}
  </button>
</template>

<style lang="sass">
.btn
  border-radius: 2px
  border: none
  cursor: pointer
  font-family: 'Source Sans Pro'
  margin: 0

  & > .icon
    fill: $purple
    margin: 2px 5px 0 0

.btn:focus-visible
  outline: none

.btn-addCart
  background-color: $white
  border-radius: 0
  border-top: 1px solid $grey
  color: $purple
  font-weight: 900
  height: 60px
  text-transform: uppercase
  width: 269px

.btn-addCart:hover,
.btn-addCart:active
  background-color: $purple
  border-radius: 2px
  border-top: none
  color: $white
  transition: .5s

.btn-back
  background-color: $backgroundGrey
  color: $darkGrey
  font-weight: 600
  height: 38px
  width: 191px

.btn-back:hover,
.btn-back:active
  background-color: $white
  border: 1px solid $backgroundGrey
  transition: .5s

.btn-proceed
  background-color: $purple
  color: $white
  font-weight: 600
  height: 38px
  width: 191px

.btn-proceed:hover,
.btn-proceed:active
  background-color: $white
  border: 1px solid $purple
  color: $purple
  transition: .5s

// Bts Disabled
.btn-addCart:disabled
  background-color: $backgroundDisabled
  color: $white
  cursor: not-allowed

.btn-back:disabled
  border: none
  background-color: $backgroundGreyDisabled
  color: $white
  cursor: not-allowed

.btn-proceed:disabled
  border: none
  background-color: $backgroundDisabled
  color: $white
  cursor: not-allowed

.btn-modal
  align-items: center
  background: none
  color: $purple
  display: flex
  font-size: $modalButton
  height: auto
  justify-content: center
  letter-spacing: .15px
  margin: auto
  text-transform: uppercase
</style>
