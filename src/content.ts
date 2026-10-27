/* ===========================================================================
   CONTEÚDO DA PÁGINA — Aula gratuita "O Mapa do Posicionamento"
   Preparação para a Imersão Posicione-se Sem Culpa · Milena Grisólia

   Este é o ÚNICO arquivo que precisa ser editado para trocar textos, data,
   links e depoimentos. O layout não depende de nada daqui.

   Convenções de formatação dentro dos textos:
     *palavra*   → itálico verde (palavra-chave do título)
     **trecho**  → trecho em negrito na cor da seção
    10|
   Datas: nos textos com {dia}, a página escreve sozinha "hoje", "amanhã"
   ou "terça, 03/11", conforme o dia (horário de Brasília). {Dia} faz o mesmo
   com a primeira letra maiúscula. {data} = 03/11/2026, {dataCurta} = 03/11,
   {diaSemana} = Terça-feira, {diaSemanaCurto} = Terça (ou Hoje / Amanhã).
   Tudo calculado a partir de event.startsAt.
   =========================================================================== */

export const event = {
  name: 'O Mapa do Posicionamento',
  /** Início da aula, com fuso de Brasília. */
  startsAt: '2026-11-03T20:00:00-03:00',
  /** Até quando a faixa do topo diz "ao vivo agora" (depois disso volta à data). */
  endsAt: '2026-11-03T22:00:00-03:00',
}

export const links = {
  /** Grupo do WhatsApp para onde a pessoa vai depois do cadastro. */
  whatsappGroup: 'https://chat.whatsapp.com/KMuOVwLEn7bCxImN2pZmAR',
  /**
   * URL do Google Apps Script que grava o lead na planilha (ver apps-script/README.md).
   * Enquanto for null, o cadastro não é enviado e a pessoa segue direto para o grupo.
   */
  leadWebhook: 'https://script.google.com/macros/s/AKfycbyEjN0DRGRHvZ1MpjWO71IPl5mjp_uQ0Pla37ZtkO1s8eIA2zCQ4-nlRXtGoHfpFll92g/exec' as string | null,
}

export const tracking = {
  /** PENDENTE: ID do Meta Pixel. Enquanto for null, nenhum pixel é carregado. */
  metaPixelId: null as string | null,
}

/* ---------------------------------------------------------------------------
   PÁGINA DE CAPTURA (index.html) — escura, no estilo "evento ao vivo".
   Usa também: form, pain.items, testimonials e footer, mais abaixo.
   --------------------------------------------------------------------------- */
export const capture = {
  topBar: 'Aula gratuita',
  /** Selo em formato de coordenada: ● AO VIVO ◆ 03.11 ◆ 20H00 · BRASÍLIA */
  seal: { live: 'Ao vivo', time: '20h00', place: 'Brasília' },
  title: 'Você não precisa continuar *se abandonando* para não decepcionar ninguém.',
  subtitle:
    '**{Dia}, às 20h**, aprenda a dizer “não” sem se sentir uma pessoa ruim, colocar limites sem se justificar o tempo todo e sustentar suas decisões sem voltar atrás por medo de decepcionar.',
  submit: 'Quero garantir minha vaga',
  micro: 'Você entra no **grupo do WhatsApp** onde o link da aula será enviado.',
  badges: ['100% gratuita', 'Online e ao vivo', 'Com Milena Grisólia'],
  photo: '/images/milena-grisolia.webp',
  photoAlt: 'Milena Grisólia sorrindo',
  /** Alfinetes presos na bússola do topo (o da data aparece só no desktop). */
  pins: { here: 'Você está aqui', date: '{dataCurta} · 20h' },

  /** Paradas da rota pontilhada que desce pela página. */
  stops: {
    pain: 'Onde você está',
    proof: 'Quem já chegou',
    mentor: 'Quem te guia',
  },

  /** Fim da rota, antes do último botão. */
  destination: {
    label: 'Destino · {dataCurta} · 20h',
    text: 'Saia do ciclo de aceitar o que te machuca para agradar aos outros e comece a fazer escolhas que respeitem *suas necessidades, seu tempo e os projetos que você vem adiando*.',
  },

  pain: {
    label: 'Essa aula é para você',
    title: 'Você diz “tudo bem”, mas por dentro *já passou do seu limite*?',
    closing: '**{Dia}, às 20h**, você vai entender por que isso acontece e por onde começar a mudar.',
    cta: 'Quero participar da aula gratuita',
  },

  proof: {
    label: 'Alunas da Academia',
    title: 'Mulheres que já começaram a *olhar para dentro* com a Milena.',
    closing: 'O próximo passo pode ser o seu. **{Dia}, às 20h**, ao vivo e de graça.',
    cta: 'Quero participar da aula gratuita',
  },

  mentor: {
    label: 'Quem vai conduzir a aula',
    title: 'Conheça *Milena Grisólia*.',
    lead: 'Terapeuta, mentora cristã e fundadora da Academia Grisólia de Desenvolvimento.',
    paragraphs: [
      'Ela também já teve medo de se posicionar. Sentia culpa sempre que queria tomar uma decisão diferente, chegou a ter crises de ansiedade e perdeu oportunidades por não acreditar na própria capacidade.',
      'Hoje, ensina mulheres a reconhecer os padrões que as fazem recuar, colocar limites com respeito e sustentar suas escolhas, **sem abrir mão dos princípios cristãos**.',
    ],
    photo: '/images/milena-turma.webp',
    photoAlt: 'Milena Grisólia sorrindo no corredor de um encontro presencial, com a turma de alunas de braços erguidos ao fundo',
    tag: 'Fé · Identidade · Autogoverno emocional',
    values: ['Base cristã', 'Verdade e integridade', 'Profundidade', 'Responsabilidade'],
    cta: 'Sim, quero sair desse ciclo',
    ctaNote: 'Aula gratuita e ao vivo · **{Dia}, às\u00a020h**',
  },
}

export const topBar = {
  label: 'Aula gratuita',
  live: 'Ao vivo agora',
}

export const hero = {
  eyebrow: 'Online, ao vivo e gratuita • {dataCurta} • 20h',
  title: 'Descubra onde a culpa está *decidindo por você*.',
  subtitle:
    '**{Dia}, às 20h**, Milena Grisólia vai te mostrar o mapa para reconhecer os padrões que te fazem recuar e dar o primeiro passo para se posicionar, sem abrir mão dos seus princípios cristãos.',
  photo: '/images/milena-ensinando.webp',
  photoAlt: 'Milena Grisólia ensinando em um encontro presencial',
  photoCaption: 'Fé, identidade e autogoverno emocional',
  badges: ['100% gratuita', 'Online e ao vivo', 'Com Milena Grisólia'],
}

export const form = {
  namePlaceholder: 'Seu primeiro nome',
  phonePlaceholder: 'Seu WhatsApp com DDD',
  submit: 'Quero participar da aula gratuita',
  sending: 'Abrindo o grupo do WhatsApp…',
  note: 'Depois do cadastro, você entra no grupo do WhatsApp onde o link da aula será enviado.',
  privacy: 'Seus dados são usados só para os avisos da aula.',
  errors: {
    name: 'Escreva seu nome.',
    phone: 'Coloque seu WhatsApp com DDD, por exemplo (11) 98765-4321. Se for de outro país, comece com + e o código do país.',
  },
  modalTitle: 'Garanta sua vaga na aula de {dia}, às 20h',
  modalText: 'É gratuita. Preencha e entre no grupo do WhatsApp onde o link será enviado.',
}

export const ribbon = ['{data}', '{diaSemana}, às 20h (Brasília)', 'Online, ao vivo e gratuita']

export const pain = {
  eyebrow: 'Talvez ninguém perceba. Mas você sente.',
  title: 'Você diz “tudo bem”.\nMas, por dentro,\n*já passou do seu limite.*',
  paragraphs: [
    'Você ensaia o que vai dizer. Imagina a reação da sua mãe, do seu marido ou de alguém importante. E, para não correr o risco de magoar, engole mais uma vez o que precisava falar.',
    'Depois vem o cansaço, a irritação e aquela sensação de que você faz tanto por todos, mas não fazem da mesma maneira por você.',
  ],
  quote: '“Eu sei o que preciso fazer. Só não consigo continuar quando sinto que alguém vai se decepcionar comigo.”',
  items: [
    { title: 'Quando diz não, não consegue descansar.', text: 'Fica revendo a conversa e pensando em como compensar a pessoa.' },
    { title: 'Quando escolhe por si, se sente egoísta.', text: 'Até investir no seu trabalho, cuidar de você ou descansar parece precisar de autorização.' },
    { title: 'Quando seus pais discordam, você volta a se sentir pequena.', text: 'Explica demais, duvida de si e adia decisões que já poderia assumir.' },
    { title: 'Quando começa a avançar, acaba recuando.', text: 'Tem medo de prosperar, mudar e deixar de pertencer aos lugares de antes.' },
    { title: 'Quando pensa em se posicionar, a fé vira uma dúvida.', text: '“Será que estou sendo orgulhosa? Não deveria ser mais humilde e suportar?”' },
  ],
}

export const beliefs = {
  eyebrow: 'O que eu acredito',
  title: 'Você pode ser uma mulher de Deus e ainda assim dizer: “Isso eu não aceito.”',
  items: [
    'Honrar seus pais pode caminhar junto com assumir suas decisões adultas.',
    'Servir com amor precisa incluir verdade sobre seus limites.',
    'Humildade também é reconhecer seu valor e assumir o que Deus confiou a você.',
  ],
}

export const learn = {
  eyebrow: 'O que você vai ver na aula',
  title: 'Um mapa para sair do lugar onde você *se anula para agradar*.',
  intro:
    'Em uma noite, ao vivo, você vai enxergar o caminho que a culpa percorre até te fazer recuar e por onde começar a mudar essa direção.',
  steps: [
    {
      title: 'Onde você está.',
      text: 'Reconheça os sinais de que a necessidade de aprovação está decidindo por você: nas conversas, na família, no trabalho e na fé.',
    },
    {
      title: 'O que te faz recuar.',
      text: 'Entenda a diferença entre responsabilidade real e medo de desagradar, e por que a culpa aparece justamente quando você tenta avançar.',
    },
    {
      title: 'Para onde ir.',
      text: 'Descubra o primeiro passo para se posicionar com respeito, sem se justificar o tempo todo e sem abrir mão dos seus princípios cristãos.',
    },
  ],
  cta: 'Quero participar da aula gratuita',
}

export const journey = {
  eyebrow: 'Minha trajetória • Antes e hoje',
  title: 'Eu também já tive medo\n*de me posicionar.*',
  paragraphs: [
    'Eu já me senti insegura, insuficiente. Perdi oportunidades porque não acreditava na minha própria capacidade.',
    'Quando queria tomar uma decisão diferente e avançar, vinha a culpa. Só de pensar em me posicionar, eu passava mal e tinha crises de ansiedade. Minha identidade estava distorcida e meus sentimentos, conturbados.',
    'Hoje, quando ensino sobre identidade e autogoverno emocional, essa história também faz parte do que me trouxe até aqui. **Eu vivi uma transformação sem abrir mão dos meus princípios cristãos. É essa possibilidade que quero mostrar a você.**',
  ],
  photos: [
    { src: '/images/milena-antes-1.webp', width: 600, height: 800, alt: 'Milena em um registro pessoal de uma fase anterior da sua trajetória', label: 'Antes', caption: 'Um registro da minha caminhada.' },
    { src: '/images/milena-antes-2.webp', width: 600, height: 800, alt: 'Milena de uniforme e capacete em uma fase anterior de sua trajetória profissional', label: 'Antes', caption: 'Outra etapa da minha história.' },
    { src: '/images/milena-hoje.webp', width: 800, height: 1200, alt: 'Milena hoje, ministrando um encontro e ensinando sobre medo de rejeição e culpa', label: 'Hoje', caption: 'Ensinando sobre fé, identidade e emoções.' },
  ],
}

/* ---------------------------------------------------------------------------
   DEPOIMENTOS
   Prints originais de alunas da Academia (pasta assets/depoimentos).
   Nenhum texto foi reescrito. Publicar somente com autorização de cada aluna.
   --------------------------------------------------------------------------- */
export type Testimonial = { src: string; alt: string; width: number; height: number }

export const testimonials = {
  eyebrow: 'O que dizem as alunas',
  title: 'Mulheres que já começaram a *olhar para dentro* com a Milena.',
  items: [
    { src: '/images/depoimentos/depoimento-09.webp', width: 1034, height: 1385, alt: 'Depoimento de aluna: "É um processo de desconstruir algumas coisas que carreguei por muito tempo e, ao mesmo tempo, construir uma mulher mais consciente".' },
    { src: '/images/depoimentos/depoimento-01.webp', width: 421, height: 171, alt: 'Comentário de Vania Cassilhas: "Meu Deus que aula maravilhosa, continuo aprendendo glória Deus pela vida da Milena."' },
    { src: '/images/depoimentos/depoimento-07.webp', width: 1022, height: 1122, alt: 'Depoimento de aluna agradecendo: "Suas palavras têm me ajudado a enxergar coisas em mim que eu nunca tinha conseguido perceber".' },
    { src: '/images/depoimentos/depoimento-02.webp', width: 472, height: 112, alt: 'Comentário de @flaviacrispim4072: "Vamos entendendo melhor as situações e como sentimos elas, melhorou muito meu relacionamento com minha família".' },
    { src: '/images/depoimentos/depoimento-08.webp', width: 1052, height: 597, alt: 'Depoimento de aluna: "Depois, saio com uma compreensão diferente, como se conseguisse dar um passo para trás e olhar para mim com mais consciência e carinho."' },
    { src: '/images/depoimentos/depoimento-03.webp', width: 472, height: 88, alt: 'Comentário de @paola.cassilhas: "Minha mente e emoções eram desequilibradas. Na academia pude entender como governar as emoções".' },
    { src: '/images/depoimentos/depoimento-06.webp', width: 1113, height: 609, alt: 'Depoimento de aluna: "Aula maravilhosa! Se abrir para o novo dá medo. Identifiquei na minha vida também muito o orgulho que impede de ceder, mudar e desconstruir."' },
    { src: '/images/depoimentos/depoimento-04.webp', width: 487, height: 67, alt: 'Comentário de @fabrinaoliveira6251: "vejo que a academia é a ferramenta que Deus me abençoou pra alcançar cura e libertação".' },
    { src: '/images/depoimentos/depoimento-10.webp', width: 1057, height: 1054, alt: 'Depoimento de aluna: "Estou amando esse processo de Desconstrução e Construção".' },
    { src: '/images/depoimentos/depoimento-05.webp', width: 1027, height: 676, alt: 'Depoimento de aluna: "As aulas tem sido um BUM de clarificação na mente. Tem sido momento de muita Luz em detalhes da minha vida."' },
  ] as Testimonial[],
  /** Quantos prints aparecem antes do botão "ver mais". */
  initialVisible: 6,
  seeMore: 'Ver mais depoimentos',
  seeLess: 'Ver menos',
}

export const mentor = {
  eyebrow: 'Quem vai conduzir a aula',
  title: 'Eu sou Milena Grisólia.',
  role: 'Terapeuta, mentora cristã e fundadora da Academia Grisólia de Desenvolvimento.',
  photo: '/images/milena-grisolia.webp',
  photoAlt: 'Milena Grisólia sorrindo',
  paragraphs: [
    'Falo sobre governo emocional, identidade e relacionamentos. Na Academia Grisólia de Desenvolvimento, ensino mulheres a olhar para o que sentem, reconhecer padrões e assumir os próximos passos da própria vida.',
    '**Eu acredito que a renovação da mente precisa chegar às nossas decisões.** Na forma como nos tratamos, nos posicionamos e nos relacionamos.',
    'Por isso, meu compromisso é te trazer clareza e direção prática. Eu acolho a sua história e também confronto, com amor, aquilo que está te mantendo no mesmo lugar.',
  ],
  values: 'Base cristã · Verdade e integridade · Profundidade · Responsabilidade',
}

export const finalCta = {
  eyebrow: 'O Mapa do Posicionamento',
  title: '{Dia}, às 20h.\n*Sua vaga é gratuita.*',
  text: 'Uma noite para ganhar clareza, reconhecer onde você se abandona e enxergar o primeiro passo para se posicionar sem culpa.',
  cardLabel: 'Aula gratuita e ao vivo',
  cardDate: '{dataCurta} · 20h',
  cardDetail: '{diaSemana}, horário de Brasília',
  /** Ponte para o evento pago. Para não exibir, troque por null. */
  bridge: 'Esta aula prepara o caminho para a Imersão Posicione-se Sem Culpa, em 11 de novembro.' as string | null,
  cta: 'Quero participar da aula gratuita',
}

/* ---------------------------------------------------------------------------
   PÁGINA DE VENDA (venda/index.html) — Imersão Posicione-se Sem Culpa.
   Mesmo estilo escuro da captura, com a rota de mapa descendo pela página.
   Usa também: pain, beliefs, journey, testimonials e footer.
   --------------------------------------------------------------------------- */
export const sale = {
  /** Início da imersão, com fuso de Brasília (usado na contagem regressiva). */
  startsAt: '2026-11-11T20:00:00-03:00',
  /**
   * Link de pagamento (Kiwify). Trocando por null, os botões de compra
   * voltam a levar ao grupo do WhatsApp.
   */
  checkout: 'https://pay.kiwify.com.br/tgihBkd' as string | null,

  topBar: { label: 'Inscrições abertas', date: 'Imersão 11/11 · 20h' },
  seal: { live: 'Ao vivo', date: '11.11', time: '20h00', place: 'Brasília' },
  title: 'Até quando você vai *se abandonar* para não decepcionar ninguém?',
  subtitle:
    'Aprenda a reconhecer a culpa que te faz recuar, colocar limites e sustentar suas escolhas **sem abrir mão dos seus princípios cristãos**.',
  cta: 'Quero aprender a me posicionar',
  highlights: ['Ao vivo com Milena Grisólia + gravação por 1 ano', 'Material didático escrito + plano prático de 21 dias'],
  photo: '/images/milena-turma-circulo.webp',
  /** Recorte do topo no celular (a foto ocupa a largura da tela). */
  photoMobile: '/images/milena-turma-mobile.webp',
  photoAlt: 'Milena Grisólia sorrindo diante de uma turma de alunas com os braços erguidos',
  pins: { here: 'Seu próximo passo', date: '11/11 · 20h' },
  countdown: { label: 'A imersão começa em', live: 'A imersão está acontecendo agora', units: ['dias', 'horas', 'min', 'seg'] },

  stops: {
    pain: 'Onde você está',
    beliefs: 'No que eu acredito',
    path: 'O caminho',
    kit: 'O que você leva',
    journey: 'Quem já fez esse caminho',
    proof: 'Quem já está caminhando',
    mentor: 'Quem te guia',
  },

  beliefsCommitment:
    'Meu compromisso é com profundidade espiritual e emocional, verdade e transformação com responsabilidade. Vamos confrontar, com amor, as crenças que fazem você confundir **fidelidade a Deus com a obrigação de agradar a todos**.',

  path: {
    label: 'Da percepção à prática',
    title: 'Quebre os padrões que fazem você *desistir de si* para agradar aos outros.',
    intro:
      'Na imersão, você vai entender o que acontece quando o medo de rejeição e a necessidade de aprovação começam a decidir por você, e aprender passos para responder de outra forma.',
    steps: [
      {
        title: 'Identifique a culpa e os padrões que te fazem se anular.',
        text: 'Perceba as crenças, os pensamentos e os vínculos que te levaram a cuidar de todos, silenciar suas necessidades e deixar seus projetos para depois. Reconheça por que esses padrões se repetem nas suas relações e decisões.',
      },
      {
        title: 'Coloque limites sem abrir mão de quem você é.',
        text: 'Diferencie responsabilidade real do medo de desagradar. Aprenda a dizer não e comunicar limites com respeito, sem se justificar o tempo todo, e continuar sendo uma pessoa sensível e espiritual.',
      },
      {
        title: 'Sustente suas escolhas, mesmo com desconforto.',
        text: 'Aprenda a lidar com a culpa depois do limite e a retomar seus objetivos sem desistir automaticamente diante da frustração de alguém.',
      },
    ],
    cta: 'Quero fazer esse caminho',
  },

  kit: {
    label: '3 recursos para continuar depois da imersão',
    title: 'Você recebe a aula.\nE leva *o que precisa* para colocar em prática.',
    image: '/images/kit-digital.svg',
    imageAlt: 'Representação ilustrativa dos materiais digitais da imersão',
    imageNote: 'Representação ilustrativa dos materiais digitais.',
    items: [
      { title: 'Material didático escrito', text: 'Um resumo dos ensinamentos para revisar, fazer suas anotações e reconhecer os padrões que precisa trabalhar.' },
      { title: 'Plano prático de 21 dias', text: 'Um passo a passo para levar o aprendizado às suas decisões, praticar limites e sustentar novos posicionamentos.' },
      { title: '1 ano de acesso à gravação', text: 'Assista novamente, pause e retome os conteúdos para aprofundar sua compreensão no seu ritmo.' },
    ],
  },

  journeyClosing:
    'Você pode aprender a reconhecer esses padrões, construir uma identidade mais firme e se posicionar sem deixar sua fé pelo caminho.',

  proof: {
    label: 'Alunas da Academia',
    title: 'Mulheres que já começaram a *olhar para dentro* com a Milena.',
  },

  mentor: {
    label: 'Quem vai conduzir você',
    title: 'Eu sou *Milena Grisólia*.',
    photo: '/images/milena-retrato-arco.webp',
    photoAlt: 'Milena Grisólia sorrindo, de camisa branca',
    closing:
      'Seus princípios cristãos podem caminhar com uma identidade firme, limites saudáveis e coragem para avançar. **É isso que quero te ensinar aqui.**',
  },

  offer: {
    label: 'Destino · 11/11 · 20h',
    title: 'Comece a sustentar as escolhas que fazem *sua vida avançar*.',
    text: 'Um encontro para ganhar clareza, reconhecer onde você se abandona e construir seus primeiros passos de mudança.',
    includes: [
      'Imersão online e ao vivo com Milena Grisólia',
      '11 de novembro de 2026, às 20h (Brasília)',
      'Acesso à gravação por um ano',
      'Material didático escrito com resumo da imersão',
      'Passo a passo prático para executar nos próximos 21 dias',
    ],
    /** PENDENTE: confirmar com a Milena as datas de cada valor. */
    price: { label: 'Valor de abertura', value: '67', note: 'Liberado ao fim da live de 03/11' },
    nextPrice: { label: 'Depois da abertura', value: 'R$ 97' },
    fineprint: 'Os dois valores incluem todos os materiais e a gravação. Inscrições até o início do encontro, em 11/11.',
    cta: 'Quero participar da imersão',
    /** Texto do botão enquanto o link de pagamento não existe (leva ao grupo do WhatsApp). */
    ctaPending: 'Quero ser avisada da abertura',
    pendingNote: 'As inscrições abrem ao fim da live de 03/11. Entre no grupo para receber o link primeiro.',
    help: 'Dúvidas sobre a inscrição? Fale com a equipe pelo WhatsApp.',
  },

  /** Barra fixa no celular, que aparece depois da primeira tela. */
  stickyBar: { price: 'R$ 67', label: 'Quero participar' },

  faq: {
    label: 'Dúvidas frequentes',
    title: 'Antes de você *decidir*.',
    items: [
      { q: 'E se eu não puder assistir ao vivo?', a: 'Você terá acesso à gravação por um ano, tanto no valor de abertura quanto no valor seguinte.' },
      {
        q: 'O que está incluído no material escrito?',
        a: 'Um resumo dos ensinamentos da imersão e um passo a passo prático para aplicar nos próximos 21 dias. É um roteiro de execução pessoal; não inclui acompanhamento diário.',
      },
      {
        q: 'Consigo aplicar mesmo com uma rotina corrida?',
        a: 'O plano de 21 dias foi pensado para levar os ensinamentos ao cotidiano. Você poderá rever a gravação e consultar o material escrito para organizar sua prática.',
      },
      {
        q: 'Aprender a me posicionar significa me afastar da minha família?',
        a: 'O foco é aprender a comunicar limites e assumir suas escolhas com respeito e responsabilidade. Os exemplos e orientações serão guiados por princípios cristãos.',
      },
      {
        q: 'Qual é a proposta da imersão?',
        a: 'Oferecer clareza e ferramentas educativas para começar a mudar padrões. Autoestima, constância e relacionamentos se desenvolvem com prática ao longo do tempo. A imersão não substitui psicoterapia ou acompanhamento individual.',
      },
    ],
  },

  disclaimer: 'A imersão tem caráter educativo e não substitui psicoterapia ou acompanhamento individual.',
}

export const footer = {
  line: 'Milena Grisólia · Academia Grisólia de Desenvolvimento',
  disclaimer:
    'A aula tem caráter educativo e não substitui psicoterapia ou acompanhamento individual.',
  copyright: `© ${new Date().getFullYear()} Academia Grisólia de Desenvolvimento.`,
}
