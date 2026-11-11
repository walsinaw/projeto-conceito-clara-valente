// ============================================================================
// CONTEÚDO DO SITE (VERSÃO CONCEITO PARA O PORTFÓLIO DA WAW)
// Nutricionista fictícia. Nenhum dado de cliente real: nome, textos,
// depoimentos e e-books são ilustrativos. Contatos levam à WAW Studio.
//
// Todo texto, link e informação editável fica aqui. Altere só este arquivo
// para mudar o conteúdo; os componentes em src/components/ leem daqui.
// Regra de estilo do site: não usar travessão (— ou –) nem emoji nos textos.
// ============================================================================

// ---------------------------------------------------------------- contato ---
// Os botões de WhatsApp levam para a WAW: quem gostar do site vira contato.

const WHATSAPP_NUMERO = '5553981526416' // só números: 55 + DDD + número
const WHATSAPP_MENSAGEM = 'Olá, WAW! Vi o site conceito de nutricionista no portfólio e quero um site assim.'

export const contato = {
  whatsappExibicao: '(53) 98152-6416',
  whatsappLink: `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(WHATSAPP_MENSAGEM)}`,
  instagramUsuario: '@wawstudio.br',
  instagramLink: 'https://instagram.com/wawstudio.br',
}

// ---------------------------------------------------------------- marca -----

export const marca = {
  nome: 'Clara Valente',
  profissao: 'Nutricionista',
}

// Selo discreto que identifica o site como projeto conceito da WAW
export const selo = {
  texto: 'Projeto conceito por WAW Studio',
  link: 'https://wawstudio.com.br',
}

// ---------------------------------------------------------------- menu ------
// `id` precisa ser igual ao id da seção (veja src/App.tsx).

export const menu = [
  { label: 'Como funciona', id: 'como-funciona' },
  { label: 'Sobre mim', id: 'sobre' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'E-books', id: 'ebooks' },
  { label: 'Onde atendo', id: 'onde-atendo' },
]

export const menuBotao = 'Agendar consulta'
export const menuBotaoCurto = 'Agendar' // versão do celular

// ---------------------------------------------------------------- hero ------

export const hero = {
  rotulo: 'Nutricionista em Pelotas, on-line e presencial',
  titulo: 'Comer bem pode ser',
  destaque: 'leve, gostoso e do seu jeito.', // aparece na faixa verde-musgo
  texto:
    'Emagrecimento e nutrição esportiva com um plano feito pra sua rotina, acompanhamento próximo e espaço pra comida que você gosta.',
  botaoPrincipal: 'Agendar pelo WhatsApp',
  botaoSecundario: { label: 'Como funciona', id: 'como-funciona' },
  avaliacao: '', // deixe '' para esconder as estrelas
  foto: { arquivo: 'hero', alt: 'Clara Valente, nutricionista' },
  etiqueta: { titulo: 'Plano sob medida', texto: 'pra sua rotina real' },
}

// ---------------------------------------------------------------- como funciona
// Ícones disponíveis: 'plano', 'conversa', 'prato', 'folha', 'lupa'

export const comoFunciona = {
  rotulo: 'Como funciona',
  titulo: 'Um acompanhamento que cabe na sua vida',
  texto:
    'Nada de cardápio impossível de seguir. O plano nasce da sua rotina, dos seus gostos e do seu objetivo.',
  cards: [
    {
      icone: 'plano',
      titulo: 'Primeira conversa',
      texto: 'Entendemos seus horários, preferências, treinos e o que você quer conquistar.',
    },
    {
      icone: 'prato',
      titulo: 'Plano sob medida',
      texto: 'Refeições possíveis, com as comidas que você já gosta e ideias novas pra variar.',
    },
    {
      icone: 'conversa',
      titulo: 'Ajustes no caminho',
      texto: 'Retornos pra revisar o que funcionou e ajustar o plano junto com você.',
    },
  ],
} as const

// ---------------------------------------------------------------- sobre / para quem

export const sobre = {
  rotulo: 'Sobre mim',
  titulo: 'Prazer, eu sou a Clara',
  // Cada item vira um parágrafo
  texto: [
    'Sou nutricionista e acredito que comer bem não precisa ser sinônimo de sofrimento.',
    'No consultório e no on-line, trabalho com emagrecimento e nutrição esportiva de um jeito prático: plano possível, explicação clara e espaço pras refeições que fazem parte da sua vida.',
    'Meu objetivo é que você saia de cada consulta sabendo o que fazer, por que fazer e com vontade de continuar.',
  ],
  citacao: { texto: 'Nenhum plano funciona se não couber na sua vida.', autor: 'Clara Valente' },
  formacao: [] as string[], // deixe [] para esconder
  paraQuemTitulo: 'O acompanhamento é pra você que',
  lista: [
    'quer emagrecer sem cortar tudo o que gosta',
    'treina e quer melhorar desempenho e composição corporal',
    'cansou de começar dieta toda segunda-feira',
    'quer aprender a montar refeições sozinha',
  ],
  botao: 'Quero começar',
  foto: { arquivo: 'sobre', alt: 'Retrato da nutricionista Clara Valente' },
}

// ---------------------------------------------------------------- depoimentos
// Depoimentos ilustrativos (projeto conceito).

export const depoimentos = {
  rotulo: 'Depoimentos',
  titulo: 'O que as pacientes estão falando',
  itens: [
    {
      texto: 'Pela primeira vez consegui seguir um plano por mais de um mês. Ele cabe na minha rotina de verdade.',
      fonte: 'Depoimento ilustrativo',
    },
    {
      texto: 'Melhorei meu rendimento nos treinos sem viver de frango e batata-doce. Aprendi a montar meu prato.',
      fonte: 'Depoimento ilustrativo',
    },
    {
      texto: 'As consultas são leves e tudo é explicado com calma. Saio sempre sabendo exatamente o que fazer.',
      fonte: 'Depoimento ilustrativo',
    },
  ],
  google: {
    nota: '', // deixe '' para esconder a nota e o botão abaixo dos depoimentos
    texto: '',
    link: '', // deixe '' para esconder o botão
    linkTexto: 'Ver todas as avaliações',
  },
}

// ---------------------------------------------------------------- e-books ---
// `cor`: 'musgo' ou 'marrom'. Com `link: ''` o botão leva ao WhatsApp.

export const ebooks = {
  rotulo: 'E-books',
  titulo: 'Pra continuar comendo bem em casa',
  texto: 'Materiais práticos pra deixar a alimentação mais gostosa e descomplicada no dia a dia.',
  itens: [
    {
      titulo: 'Marmitas da semana',
      texto: 'Um guia pra planejar e preparar as refeições da semana em poucas horas de domingo.',
      lista: ['Cardápios prontos pra 4 semanas', 'Lista de compras organizada', 'Dicas de congelamento'],
      botao: 'Quero o guia',
      link: '',
      capa: { linha1: 'Marmitas', linha2: 'da semana', cor: 'musgo' },
    },
    {
      titulo: 'Lanches que salvam o dia',
      texto: 'Opções rápidas pra levar na bolsa, comer antes do treino ou matar a vontade de doce.',
      lista: ['Receitas doces e salgadas', 'Opções pré e pós-treino', 'Ideias sem precisar de forno'],
      botao: 'Quero os lanches',
      link: '',
      capa: { linha1: 'Lanches', linha2: 'que salvam o dia', cor: 'marrom' },
    },
  ],
  autoraCapa: 'Clara Valente', // nome que aparece pequeno nas capas
} as const

// ---------------------------------------------------------------- onde atendo

export const ondeAtendo = {
  rotulo: 'Onde atendo',
  titulo: 'Presencial em Pelotas ou on-line de onde você estiver',
  consultorio: 'Consultório',
  endereco: {
    linha1: 'Centro',
    linha2: 'Pelotas/RS',
    cep: '', // deixe '' para esconder
    // Local usado no mapa do Google (um ponto público, já que o consultório é fictício)
    busca: 'Praça Coronel Pedro Osório, Pelotas, RS',
  },
  horarios: [
    { dias: 'Segunda a sexta', horas: '8h às 19h' },
    { dias: 'Sábado', horas: '8h às 12h' },
  ],
  botao: 'Agendar horário',
  linkMapa: 'Abrir no Google Maps',
}

// ---------------------------------------------------------------- CTA final -

export const ctaFinal = {
  titulo: 'Seu objetivo, do seu jeito, com comida de verdade.',
  texto: 'Me chama no WhatsApp e agende sua consulta on-line ou presencial.',
  botao: 'Agendar pelo WhatsApp',
}

// ---------------------------------------------------------------- rodapé ----

// O rodapé também usa: menu (links das seções), contato, ondeAtendo (endereço e horários)
// e depoimentos.google (link das avaliações).
export const rodape = {
  frase: 'Comer bem pode ser leve, gostoso e do seu jeito.',
  crn: '', // deixe '' para esconder. Nunca invente um CRN.
  avaliarGoogle: 'Ver avaliações no Google',
  colunas: {
    secoes: 'Navegue',
    atendimento: 'Atendimento',
    contato: 'Contato',
  },
  modalidades: 'On-line e presencial',
  botao: 'Agendar consulta',
  copyright: 'Clara Valente é uma marca fictícia, criada como projeto conceito.', // o ano entra sozinho
  credito: 'Site por WAW Studio',
  creditoLink: 'https://wawstudio.com.br',
}
