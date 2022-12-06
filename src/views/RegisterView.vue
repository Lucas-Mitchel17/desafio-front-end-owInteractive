<script setup>
import { reactive, ref, watch } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import CheckIcon from '@Icons/check.svg?component';
import LeftArrow from '@Icons/left-arrow.svg?component';
import { BUTTON_TYPES, INPUT_TYPES } from '@Types';
import { BaseForm, BaseModal } from '@NestedUi';
import { getCepRequest } from '@Modules/user';

const ROUTER = useRouter();

const loading = ref(false);
const isModalOpen = ref(false);

const zipcode = ref('');
const neighborhood = ref('');
const address = ref('');
const address2 = ref('');
const city = ref('');
const state = ref('');

const actions = {
  confirm: {
    label: 'Concluir Compra',
    role: BUTTON_TYPES.ROLES_ENUM.SUBMIT,
    type: BUTTON_TYPES.TYPES_ENUM.PROCEED,
  },
};

const fields = reactive([
  {
    label: 'Nome *',
    loading: loading,
    errorMessage: '',
    required: false,
    name: 'name',
    type: INPUT_TYPES.TYPE_ENUM.TEXT,
    modelValue: '',
  },
  {
    label: 'Email *',
    loading: loading,
    errorMessage: '',
    required: true,
    name: 'email',
    type: INPUT_TYPES.TYPE_ENUM.EMAIL,
    modelValue: '',
  },
  {
    label: 'CPF *',
    loading: loading,
    errorMessage: '',
    required: true,
    name: 'cpf',
    mask: '###########',
    type: INPUT_TYPES.TYPE_ENUM.NUMBER,
    modelValue: '',
  },
  {
    label: 'Data de Nascimento *',
    loading: loading,
    errorMessage: '',
    required: true,
    name: 'date',
    type: INPUT_TYPES.TYPE_ENUM.DATE,
    modelValue: '',
    inputClasses: 'input-medium',
  },
  {
    label: 'Telefone *',
    loading: loading,
    errorMessage: '',
    required: true,
    name: 'phone',
    mask: '(##) #####-####',
    type: INPUT_TYPES.TYPE_ENUM.TEL,
    modelValue: '',
    inputClasses: 'input-medium',
  },
  {
    label: 'CEP *',
    loading: loading,
    errorMessage: '',
    required: true,
    name: 'cep',
    mask: '########',
    type: INPUT_TYPES.TYPE_ENUM.TEXT,
    modelValue: zipcode,
  },
  {
    label: 'Endereço *',
    loading: loading,
    errorMessage: '',
    required: true,
    name: 'adress',
    type: INPUT_TYPES.TYPE_ENUM.TEXT,
    modelValue: address,
    inputClasses: 'input-full',
  },

  {
    label: 'Número *',
    loading: loading,
    errorMessage: '',
    required: true,
    name: 'number',
    type: INPUT_TYPES.TYPE_ENUM.NUMBER,
    modelValue: '',
    inputClasses: 'input-small',
  },
  {
    label: 'Complemento',
    loading: loading,
    errorMessage: '',
    required: false,
    name: 'complement',
    type: INPUT_TYPES.TYPE_ENUM.TEXT,
    modelValue: address2,
    inputClasses: 'input-medium',
  },
  {
    label: 'Bairro *',
    loading: loading,
    errorMessage: '',
    required: true,
    name: 'neighborhood',
    type: INPUT_TYPES.TYPE_ENUM.TEXT,
    modelValue: neighborhood,
    inputClasses: 'input-medium',
  },
  {
    label: 'Cidade *',
    loading: loading,
    errorMessage: '',
    required: true,
    name: 'city',
    type: INPUT_TYPES.TYPE_ENUM.TEXT,
    modelValue: city,
    inputClasses: 'input-full',
  },
  {
    label: 'Estado *',
    loading: loading,
    errorMessage: '',
    required: true,
    name: 'state',
    type: INPUT_TYPES.TYPE_ENUM.TEXT,
    modelValue: state,
    inputClasses: 'input-small',
  },
]);

watch(zipcode, () => {
  const sanitizedCep = zipcode.value.replace(/[^0-9]+/, '');

  if (sanitizedCep.length === 8) {
    getCepRequest(sanitizedCep).then((address) => setAddress(address));
  }

  if (!sanitizedCep.length) {
    clearAddress();
  }
});

function clearAddress() {
  neighborhood.value = '';
  address.value = '';
  address2.value = '';
  city.value = '';
  state.value = '';
}

function newUser() {
  let hasError = false;

  fields.forEach((field) => {
    if (field.required && !field.model) {
      hasError = true;
      field.errorMessage = 'Campo obrigatório';
      return;
    }

    field.errorMessage = '';
  });

  if (!hasError) {
    isModalOpen.value = true;
  }
}

function setAddress(userAddress) {
  const { bairro, complemento, localidade, logradouro, uf } = userAddress;

  neighborhood.value = bairro;
  address.value = logradouro;
  address2.value = complemento;
  city.value = localidade;
  state.value = uf;
}

function onCloseModal() {
  isModalOpen.value = false;

  ROUTER.push('/');
}
</script>

<template>
  <MainLayout>
    <section class="checkout-section">
      <BaseForm
        onlySubmit
        class="form"
        :actions="actions"
        :fields="fields"
        @onSubmit="newUser"
      />

      <BaseModal
        v-model="isModalOpen"
        closable
        title="Seu cadastro foi solicitado com sucesso!"
        @onCloseModal="onCloseModal"
      >
        <template #icon>
          <CheckIcon />
        </template>

        <RouterLink to="/">
          <AppButton
            type="modal"
            label="Voltar para home"
          >
            <template #icon>
              <LeftArrow />
            </template>
          </AppButton>
        </RouterLink>
      </BaseModal>
    </section>
  </MainLayout>
</template>

<style lang="sass">
.checkout-section
  display: grid
  max-width: $desktop
  margin: 90px auto 0
  padding: 0 10px

  & > .form
    display: grid
    grid-template-columns: 1fr

    @media (min-width: $tablet-medium)
      grid-template-columns: 1fr 1fr
      grid-gap: 0 50px

    & .fieldset:nth-child(-n+5)
      @media (min-width: $tablet-medium)
        grid-column: 1

    & .fieldset:nth-child(n+6)
      @media (min-width: $tablet-medium)
        grid-column: 2

    & .fieldset:nth-child(4)
      @media (min-width: $tablet-medium)
        grid-row: 4

    & .fieldset:nth-child(5)
      @media (min-width: $tablet-medium)
        grid-row: 4
        margin: 0 0 0 auto

        & > .input-medium
          max-width: 90%

    & .fieldset:nth-child(6)
      @media (min-width: $tablet-medium)
        grid-row: 1

    & .fieldset:nth-child(7)
      @media (min-width: $tablet-medium)
        grid-row: 2

    & .fieldset:nth-child(8)
      @media (min-width: $tablet-medium)
        grid-row: 2
        margin: 0 0 0 auto

    & .fieldset:nth-child(9)
      @media (min-width: $tablet-medium)
        grid-row: 3

    & .fieldset:nth-child(10)
      @media (min-width: $tablet-medium)
        grid-row: 3
        margin: 0 0 0 auto

        & > .input-medium
          max-width: 90%

    & .fieldset:nth-child(11)
      @media (min-width: $tablet-medium)
        grid-row: 4

    & .fieldset:nth-child(12)
      @media (min-width: $tablet-medium)
        grid-row: 4
        margin: 0 0 0 auto

    & > .actions
      margin: 0 0 auto auto

      @media (min-width: $tablet-medium)
        grid-column: 2
</style>
