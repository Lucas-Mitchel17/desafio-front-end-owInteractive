<script setup>
import { ref } from 'vue';
import { BaseInput } from '@ComposedUi';
import { FieldSet } from '@NestedUi';

const input = ref('');
const fieldset = ref('');
</script>

<template>
  <section class="test">
    <AppText tag="h1"> App Text </AppText>

    <AppText tag="h2"> Botão </AppText>
    <AppButton
      class="text-h3"
      label="Adicionar ao carrinho"
      type="addCart"
    />

    <AppText tag="h2"> Input </AppText>
    <BaseInput
      v-model="input"
      placeholder="texto aqui"
    />

    <AppText tag="h2"> FieldSet </AppText>
    <FieldSet
      label="teste"
      v-model="fieldset"
      placeholder="Teste de FieldSet"
      errorMessage="Tem um erro aqui"
    />
  </section>
</template>

<style lang="sass"></style>
