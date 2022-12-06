<script setup>
import { computed, useAttrs } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { styleFromStateHelper } from '@Helpers';

const emit = defineEmits(['update:modelValue']);

defineProps({
  hasError: Boolean,
});

const attrs = useAttrs();
const { errorClass } = styleFromStateHelper();

const model = computed({
  get() {
    return attrs.modelValue;
  },

  set(newValue) {
    return emit('update:modelValue', newValue);
  },
});

const dynamicClasses = computed(() => {
  return [errorClass(attrs.hasError)];
});
</script>

<template>
  <Datepicker
    v-model="model"
    autoApply
    format="dd/MM/yyyy"
    locale="pt-br"
    class="BaseDatePicker"
    placeholder="dd/mm/yyyy"
    :class="[...dynamicClasses]"
    :dayNames="['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']"
    :disabled="attrs.disabled"
    :enableTimePicker="false"
    :flow="['year', 'month', 'calendar']"
    :state="!hasError"
  />
</template>

<style lang="sass">
.BaseDatePicker
  box-shadow: none
  border-radius: 2px
  max-width: 50%

.dp__input_valid
  box-shadow: none
  border: 1px solid $inputGrey
</style>
