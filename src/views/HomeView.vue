<script setup>
import { ref } from 'vue';
import { BaseThumbnail, BaseDatePicker } from '@BaseUi';
import { BaseModal } from '@NestedUi';
import Check from '@Icons/check.svg?component';
import LeftArrow from '@Icons/left-arrow.svg?component';
// import { BaseInput } from '@ComposedUi';
// import { INPUT_TYPES } from '@Types';
// import { BaseFieldSet, BaseForm } from '@NestedUi';

// const input = ref('');
// const fieldset = ref('');

// const fields = reactive([
//   {
//     label: 'Field 1',
//     errorMessage: '',
//     placeholder: '',
//     mask: '',
//     type: INPUT_TYPES.TYPE_ENUM.TEXT,
//     inputClasses: 'input-full',
//   },
//   {
//     label: 'Field 2',
//     errorMessage: '',
//     placeholder: '',
//     mask: '',
//     type: INPUT_TYPES.TYPE_ENUM.TEXT,
//     inputClasses: 'input-medium',
//   },
//   {
//     label: 'Field 3',
//     errorMessage: '',
//     placeholder: '',
//     mask: '',
//     type: INPUT_TYPES.TYPE_ENUM.TEXT,
//     inputClasses: 'input-small',
//   },
//   {
//     label: 'Datetime',
//     placeholder: 'Escolha uma data',
//     type: INPUT_TYPES.TYPE_ENUM.DATE,
//     modelValue: '',
//   },
// ]);

const open = ref(false);

function toogleModal() {
  open.value = !open.value;
}
</script>

<template>
  <section class="test">
    <!-- <AppText tag="h1"> App Text </AppText>

    <AppText tag="h2"> Botões </AppText>
    <AppButton
      class="text-h4"
      label="Adicionar ao carrinho"
      type="addCart"
    />
    <AppButton
      label="Continuar comprando"
      type="back"
    />
    <AppButton
      label="Ir para Checkout"
      type="proceed"
    />

    <AppText tag="h2"> Botões Disabled</AppText>

    <AppButton
      class="text-h4"
      label="Adicionar ao carrinho"
      type="addCart"
      disabled
    />
    <AppButton
      label="Continuar comprando"
      type="back"
      disabled
    />
    <AppButton
      label="Ir para Checkout"
      type="proceed"
      disabled
    /> -->

    <!-- <AppText tag="h2"> Input </AppText>
    <BaseInput
      v-model="input"
      placeholder="texto aqui"
    />

    <AppText tag="h2"> FieldSet </AppText>
    <BaseFieldSet
      label="teste"
      v-model="fieldset"
      placeholder="Teste de FieldSet"
      errorMessage="Tem um erro aqui"
    />

    <AppText tag="h2"> FieldSet Sem Erro </AppText>
    <BaseFieldSet
      label="teste"
      v-model="fieldset"
      placeholder="Teste de FieldSet"
    />

    <AppText tag="h2"> BaseForm </AppText>
    <BaseForm :fields="fields" /> -->

    <AppText tag="h2"> Thumbnail </AppText>
    <BaseThumbnail />

    <AppText tag="h2"> BaseDatePicker </AppText>
    <BaseDatePicker />

    <AppText tag="h2"> BaseModal </AppText>
    <AppButton
      label="Abrir Modal"
      type="proceed"
      @click="toogleModal"
    />
    <BaseModal
      v-model="open"
      title="Seu cadastro foi realizado com sucesso!"
      closable
    >
      <template v-slot:icon>
        <Check />
      </template>
      <AppButton
        label="Voltar Para a home"
        type="modal"
        @click="toogleModal"
      >
        <template v-slot:icon>
          <LeftArrow />
        </template>
      </AppButton>
    </BaseModal>
  </section>
</template>

<style lang="sass"></style>
