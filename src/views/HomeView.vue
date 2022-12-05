<script setup>
// import { ref } from 'vue';
// import { BaseThumbnail, BaseDatePicker } from '@BaseUi';
// import { BaseModal } from '@NestedUi';
// import Check from '@Icons/check.svg?component';
// import LeftArrow from '@Icons/left-arrow.svg?component';
import { ProductSlider, ProductSearchBar, ProductCard } from '@Modules/product';
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

// const open = ref(false);

// function toogleModal() {
//   open.value = !open.value;
// }

const products = [
  {
    id: 1,
    name: 'Notebook HP ProBook',
    category: 'Eletrônicos',
    description:
      'Notebook HP Probook 640 G1, com processador 4° geração Intel Core i5-4300M de 2.6 GHz, memória RAM 4GB, HD 500GB, tela de 14 polegadas e sistema operacional Windows 10.',
    price: 2300.99,
    imageUrl: 'http://dev.owinteractive.com/produtos/1.jpg',
  },
  {
    id: 2,
    name: 'Notebook Samsung Ativ Book 2 - Cinza',
    category: 'Eletrônicos',
    description:
      'Alto desempenho sem comprometer a mobilidade! O Notebook Samsung ATIV Book 2 conta com processador de última geração e 8GB de memória RAM que proporciona maior rapidez na realização das suas tarefas e permite executar mesmo os softwares e aplicativos mais pesados.',
    price: 3560.99,
    imageUrl: 'http://dev.owinteractive.com/produtos/2.jpg',
  },
  {
    id: 3,
    name: 'Notebook Samsung Ativ Book 2 - Branco',
    category: 'Eletrônicos',
    description:
      'Alto desempenho sem comprometer a mobilidade! O Notebook Samsung ATIV Book 2 conta com processador de última geração e 8GB de memória RAM que proporciona maior rapidez na realização das suas tarefas e permite executar mesmo os softwares e aplicativos mais pesados.',
    price: 2999.99,
    imageUrl: 'http://dev.owinteractive.com/produtos/3.jpg',
  },
  {
    id: 4,
    name: 'Notebook Dell Inspiron 15 3000',
    category: 'Eletrônicos',
    description:
      'Com o Inspiron 15 3000, você terá uma nova perspectiva sobre como um notebook poderá te ajudar, seja no trabalho, estudo ou entretenimento. Além de um design moderno e diferenciado, este modelo conta com uma tela HD de 15.6 com antirreflexo, ótima para utilizar em ambientes externos.Possui a 8a geração Intel Core i7 e placa de vídeo integrada Intel UHD Graphics 620 para uma ótima experiência gráfica. Memória de 8GB para uma navegação rápida.',
    price: 4999.0,
    imageUrl: 'http://dev.owinteractive.com/produtos/4.jpg',
  },
  {
    id: 5,
    name: 'Notebook Positivo Motion Premium',
    category: 'Eletrônicos',
    description:
      'Ter um notebook hoje em dia oferece muita praticidade, tanto para usar em casa como levar pra onde você quiser. Os modelos mais atuais de notebook são cada vez mais leves e potentes, por isso, às vezes é comum usar ele por muito tempo, ele é bem rápido para atividades do dia a dia, seja de estudo, trabalho e até mesmo diversão. O notebook Motion C4500C da Positivo com tela de 14 e processador Intel Celeron Dual Core é fabricado com 500GB de HD e 4GB de memória RAM, e sistema operacional Windows 10 Home. Agora você já pode adquirir seu novo notebook, e fazer o melhor uso dele conforme suas necessidades.',
    price: 2300.99,
    imageUrl: 'http://dev.owinteractive.com/produtos/5.jpg',
  },
  {
    id: 6,
    name: 'Notebook Positivo Motion q232a',
    category: 'Eletrônicos',
    description:
      'Com design moderno - fino e elegante - os notebooks da linha Motion série C disponibilizam o máximo em entretenimento e diversão.',
    price: 999.9,
    imageUrl: 'http://dev.owinteractive.com/produtos/6.jpg',
  },
];

const slides = [
  {
    title: 'Notebooks',
    subtitle: 'As melhores ofertas',
  },
  {
    title: 'Preço baixo',
    subtitle: 'Você encontra aqui',
  },
];
</script>

<template>
  <MainLayout>
    <ProductSlider :slides="slides" />
    <section class="container">
      <ProductSearchBar />

      <div class="card-section">
        <ProductCard :products="products" />
      </div>
    </section>
  </MainLayout>
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

  <!-- <AppText tag="h2"> Thumbnail </AppText>
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

    <AppText tag="h2"> BaseSLider </AppText>
    -->
</template>

<style lang="sass">
.container
  display: grid
  max-width: $desktop
  margin: 40px auto 0
  padding: 0 10px

  & > .card-section
    display: grid
    grid-template-columns: 1fr
    grid-gap: 60px 20px
    margin: 70px auto 0

    @media (min-width: $tablet)
      grid-template-columns: repeat(2, 1fr)

    @media (min-width: $desktop)
      grid-template-columns: repeat(3, 1fr)
      margin: 70px 0 0
</style>
