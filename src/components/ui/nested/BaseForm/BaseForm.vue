<script setup>
import { BUTTON_TYPES } from '@Types';
import { BaseFieldSet } from '@NestedUi';

defineProps({
  loading: Boolean,

  onlySubmit: Boolean,

  actions: {
    default: () => {
      return {
        confirm: {
          label: 'Enviar',
          outset: false,
          wide: false,
          role: BUTTON_TYPES.ROLES_ENUM.SUBMIT,
          type: BUTTON_TYPES.TYPES_ENUM.PROCEED,
        },

        error: {
          label: 'Cancelar',
          outset: false,
          wide: false,
          role: BUTTON_TYPES.ROLES_ENUM.BUTTON,
          type: BUTTON_TYPES.TYPES_ENUM.BACK,
        },
      };
    },
    type: Object,
  },

  fields: {
    required: true,
    type: Array,
  },
});

const emit = defineEmits(['onSubmit', 'onCancel']);
</script>

<template>
  <form @submit.prevent="emit('onSubmit')">
    <BaseFieldSet
      v-for="field in fields"
      v-bind="field"
      v-model="field.modelValue"
      :key="field.name"
    />

    <div class="actions">
      <AppButton
        v-if="!onlySubmit"
        v-bind="{ ...actions.error }"
        :disabled="loading"
        :loading="loading"
        @click="emit('cancel')"
      />

      <AppButton
        v-bind="{ ...actions.confirm }"
        :disabled="loading"
        :loading="loading"
      />
    </div>
  </form>
</template>
