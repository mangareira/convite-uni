import { Event } from '../events';

const events: Event[] = [
  {
    id: "21ff36d7-8fa7-495e-9339-d1687458b660",
    alias: 'evento-fullstack',
    password: 'password123',
    name: 'Evento de Desenvolvimento Fullstack',
    date: new Date('2024-12-01T10:00:00Z'),
    local: 'São Paulo, SP',
    description:
      'Um evento completo para aprender desenvolvimento fullstack do zero.',
    image:
      'https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981',
    imageBackground:
      'https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981',
    expectedAudience: 200,
    guests: [
      {
        id: "9db594ba-2015-4126-923b-9453d7edd552",
        name: 'Alice Silva',
        email: 'alice@example.com',
        confirmed: true,
        hasCompanions: true,
        qtdCompanion: 1,
      },
      {
        id: "7f76598d-5025-45d7-950a-45dbc52307ab",
        name: 'Carlos Pereira',
        email: 'carlos@example.com',
        confirmed: false,
        hasCompanions: false,
        qtdCompanion: 0,
      },
      {
        id: "be33b1e3-6d44-45d3-80dc-c9a4b61e389a",
        name: 'Beatriz Lima',
        email: 'beatriz@example.com',
        confirmed: true,
        hasCompanions: true,
        qtdCompanion: 2,
      },
    ],
  },
  {
    id: "f4b18eb7-13c6-4bde-aa26-a9551a5c31f2",
    alias: 'evento-js-avancado',
    password: 'js2024',
    name: 'Workshop Avançado de JavaScript',
    date: new Date('2024-11-20T15:00:00Z'),
    local: 'Rio de Janeiro, RJ',
    description: 'Um workshop avançado para programadores JavaScript.',
    image:
      'https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200',
    imageBackground:
      'https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg',
    expectedAudience: 100,
    guests: [
      {
        id: "ce7781f9-ce90-480b-b33f-79551b436b30",
        name: 'Eduardo Santos',
        email: 'eduardo@example.com',
        confirmed: true,
        hasCompanions: false,
        qtdCompanion: 0,
      },
      {
        id: "89fe8fda-bdd2-4a0c-aa4c-efed7a4da7a7",
        name: 'Fernanda Costa',
        email: 'fernanda@example.com',
        confirmed: true,
        hasCompanions: true,
        qtdCompanion: 1,
      },
    ],
  },
  {
    id: "3a588693-650e-4c6d-868e-9090ff5c07b3",
    alias: 'evento-dev-frontend',
    password: 'front123',
    name: 'Bootcamp de Desenvolvimento Frontend',
    date: new Date('2024-11-15T09:00:00Z'),
    local: 'Belo Horizonte, MG',
    description: 'Aprenda a criar interfaces incríveis e responsivas.',
    image:
      'https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg',
    imageBackground:
      'https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg',
    expectedAudience: 150,
    guests: [
      {
        id: "961e8ef3-8492-4bb6-8e99-4e07d175a18c",
        name: 'Gabriela Rocha',
        email: 'gabriela@example.com',
        confirmed: true,
        hasCompanions: true,
        qtdCompanion: 1,
      },
      {
        id: "c9807f9f-d3c8-4dee-b49c-ae09cf3329e8",
        name: 'Hugo Nogueira',
        email: 'hugo@example.com',
        confirmed: false,
        hasCompanions: false,
        qtdCompanion: 0,
      },
      {
        id: "d4f25df3-bd22-4b1d-a6ba-c8fd625ef117",
        name: 'Isabela Martins',
        email: 'isabela@example.com',
        confirmed: true,
        hasCompanions: false,
        qtdCompanion: 0,
      },
    ],
  },
  {
    id: "7a0a5640-8e46-404d-bd90-dcba6589d57c",
    alias: 'casamento-alberto-marina',
    password: 'casamento2024',
    name: 'Casamento do Alberto e Marina',
    date: new Date('2024-11-25T16:00:00Z'),
    local: 'Florianópolis, SC',
    description:
      'Celebração do casamento de Alberto e Marina com amigos e familiares.',
    image:
      'https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg',
    imageBackground:
      'https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg',
    expectedAudience: 150,
    guests: [
      {
        id: "c7f15188-0f9a-454e-8d05-694308106b21",
        name: 'Bruno Cardoso',
        email: 'bruno@example.com',
        confirmed: true,
        hasCompanions: true,
        qtdCompanion: 1,
      },
      {
        id: "384493ec-f538-4af0-95bb-eff54a17d7eb",
        name: 'Carla Mendes',
        email: 'carla@example.com',
        confirmed: true,
        hasCompanions: false,
        qtdCompanion: 0,
      },
    ],
  },
  {
    id: "5e25282b-cde5-45ff-9436-c4320d7c2f6f",
    alias: 'aniversario-joao',
    password: 'joao2024',
    name: 'Aniversário do João - 30 Anos',
    date: new Date('2024-12-05T18:00:00Z'),
    local: 'Curitiba, PR',
    description:
      'Comemoração dos 30 anos de João com amigos próximos e familiares.',
    image:
      'https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg',
    imageBackground:
      'https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg',
    expectedAudience: 80,
    guests: [
      {
        id: "62f27c65-d52e-4e4b-aeb1-e6c861539806",
        name: 'Maria Souza',
        email: 'maria@example.com',
        confirmed: true,
        hasCompanions: true,
        qtdCompanion: 2,
      },
      {
        id: "eb5d60e7-ee91-4d6f-8365-33a2ef65ffd7",
        name: 'José Almeida',
        email: 'jose@example.com',
        confirmed: false,
        hasCompanions: false,
        qtdCompanion: 0,
      },
    ],
  },
  {
    id: "53ae44ec-30fb-4e5a-9b0b-a9fbedd8e3c1",
    alias: 'inauguracao-loja-estrela',
    password: 'estrela2024',
    name: 'Inauguração da Loja Estrela',
    date: new Date('2024-12-10T09:00:00Z'),
    local: 'Porto Alegre, RS',
    description:
      'Evento de inauguração da nova loja Estrela com brindes e promoções.',
    image:
      'https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png',
    imageBackground:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s',
    expectedAudience: 300,
    guests: [
      {
        id: "56d33644-21e0-45d6-8374-b63492542957",
        name: 'Cláudia Lima',
        email: 'claudia@example.com',
        confirmed: true,
        hasCompanions: true,
        qtdCompanion: 3,
      },
      {
        id: "08ce7902-a86f-4991-97bc-8cf5661fa328",
        name: 'Ricardo Barbosa',
        email: 'ricardo@example.com',
        confirmed: true,
        hasCompanions: false,
        qtdCompanion: 0,
      },
    ],
  },
  {
    id: "65965e1c-8055-4795-b4a3-da93bbe97e31",
    alias: 'reuniao-familia-oliveira',
    password: 'familia2024',
    name: 'Reunião da Família Oliveira',
    date: new Date('2024-12-15T12:00:00Z'),
    local: 'Salvador, BA',
    description: 'Reunião de fim de ano da família Oliveira.',
    image:
      'https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg',
    imageBackground:
      'https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid',
    expectedAudience: 50,
    guests: [
      {
        id: "70aad3a8-3307-4b4b-a8c6-a3796b7aef66",
        name: 'Thiago Oliveira',
        email: 'thiago@example.com',
        confirmed: true,
        hasCompanions: true,
        qtdCompanion: 4,
      },
      {
        id: "5cf2c395-a931-4234-889f-7a8701c8e5fc",
        name: 'Letícia Oliveira',
        email: 'leticia@example.com',
        confirmed: true,
        hasCompanions: false,
        qtdCompanion: 0,
      },
    ],
  },
];

export default events;
