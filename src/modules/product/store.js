import { defineStore } from 'pinia';

export default defineStore('product', {
  state: () => ({
    products: [
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
    ],
  }),
});
