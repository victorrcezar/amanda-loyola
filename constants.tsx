import { HealingCardItem, FaqItem, BookChapter, AuthorProfile, AudiencePoint } from './types';
import { Heart, Key, Shield, Feather, EyeOff, HeartCrack, ShieldAlert, AlertCircle } from 'lucide-react';

export const APP_CONTENT = {
  hero: {
    headline: "Não é apenas um livro. É o abraço que você esperou a vida inteira.",
    subheadline: "Um guia gentil e profundo para mulheres e homens que desejam curar a ferida da orfandade e assumir seu lugar de honra como filhos amados.",
    cta: "Sim, quero curar minha história",
    badges: ["Lançamento Oficial", "Estoque Limitado", "Bônus Exclusivo Hoje"]
  },
  letter: {
    greeting: "Querida leitora (e leitor),",
    intro: "Eu sei como é o silêncio. Aquele que ecoa na casa cheia, nas conquistas que ninguém celebrou e nos dias em que você só queria uma proteção que nunca veio.",
    body: [
      "Por muito tempo, acreditei que se eu fosse 'boa o suficiente', 'forte o suficiente' ou 'bem-sucedida', esse buraco no peito diminuiria. Mas a orfandade emocional não se cura com performance; ela se cura com pertença.",
      "Escrevi este livro não como uma especialista distante, mas como alguém que caminhou pela estrada da dor e encontrou, lá no fim, um Abraço que colou todos os meus pedaços.",
      "Esta obra é o meu coração entregue em suas mãos. É um mapa para sair da sobrevivência e entrar na vida plena de filho(a) amado(a)."
    ],
    closing: "Com amor e esperança,",
    author: "Amanda Loyola"
  },
  healingCards: [
    {
      pain: "Sinto-me invisível",
      promise: "Você nunca passou despercebido pelos olhos dEle. Antes de você nascer, Ele já sonhava com os seus dias.",
      reference: "Identidade Restaurada",
      icon: EyeOff
    },
    {
      pain: "Sinto um vazio constante",
      promise: "O buraco no peito não é falta de coisas, é saudade de Casa. E o Pai está de braços abertos esperando você voltar.",
      reference: "A Paternidade Real",
      icon: HeartCrack
    },
    {
      pain: "Tenho medo de confiar",
      promise: "A proteção dEle não falha. Onde o homem errou, Deus aperfeiçoa o amor e lança fora todo o medo.",
      reference: "Cura da Confiança",
      icon: ShieldAlert
    },
    {
      pain: "Carrego muita culpa",
      promise: "Não há condenação para quem está no Amor. Sua história não é definida pelos seus erros, mas pela Graça dEle.",
      reference: "Perdão e Graça",
      icon: AlertCircle
    }
  ] as HealingCardItem[],
  audience: [
    { text: "Sente que precisa provar seu valor o tempo todo para ser amado(a)." },
    { text: "Tem dificuldade em confiar nas pessoas ou em Deus por medo do abandono." },
    { text: "Carrega uma sensação de 'não pertencimento', mesmo cercado de pessoas." },
    { text: "Teve um pai ausente, abusivo ou emocionalmente distante." },
    { text: "Deseja quebrar ciclos de dor para não repeti-los com seus próprios filhos." }
  ] as AudiencePoint[],
  solution: {
    title: "O Caminho de Volta para Casa",
    description: "Nestes capítulos, não trago fórmulas mágicas, mas princípios eternos e vivências reais para destravar sua identidade.",
    features: [
      {
        title: "Identidade Blindada",
        description: "Descubra quem você é quando para de tentar agradar a todos e descansa na aprovação do Pai.",
        icon: Key
      },
      {
        title: "Cura das Memórias",
        description: "Exercícios guiados para visitar seu passado sem dor e ressignificar sua história.",
        icon: Heart
      },
      {
        title: "Paternidade de Deus",
        description: "Saia da orfandade espiritual e aprenda a se relacionar com Deus sem medo ou culpa.",
        icon: Shield
      },
      {
        title: "Legado Familiar",
        description: "Aprenda a ser o pai ou a mãe que você não teve, quebrando maldições hereditárias.",
        icon: Feather
      }
    ]
  },
  author: {
    name: "Amanda Loyola",
    bio: [
      "Cantora, compositora e uma voz que tem tocado milhares de corações pelo Brasil. Amanda transformou sua própria jornada de superação da ausência paterna em um ministério de cura.",
      "Através de suas canções e agora, através deste livro, ela compartilha com vulnerabilidade como o amor de Deus Pai preencheu os vazios que pareciam infinitos.",
      "Sua missão é clara: despertar uma geração de filhos que conhecem sua verdadeira identidade e não aceitam nada menos do que a plenitude."
    ],
    signature: "Amanda Loyola",
    imageUrl: "https://static.wixstatic.com/media/1f17f3_2e07f7b0ed3b441a992f4e0ac3080c91~mv2.png"
  } as AuthorProfile,
  chapters: [
    { title: "Capítulo 1", description: "O Silêncio que Grita: Identificando a orfandade oculta." },
    { title: "Capítulo 3", description: "A Maratona da Aprovação: Por que corremos tanto?" },
    { title: "Capítulo 7", description: "O Abraço do Pai: A experiência que muda tudo." },
    { title: "Capítulo 10", description: "Quebrando Ciclos: Seu legado começa agora." },
  ] as BookChapter[],
  offer: {
    regularPrice: "R$ 69,90",
    dealPrice: "R$ 47,90",
    spiritualHook: "Quanto vale reescrever a história das suas próximas gerações?",
    guarantee: "Risco Zero: 7 dias de garantia incondicional"
  },
  faq: [
    {
      question: "O livro é físico ou digital?",
      answer: "Você receberá o livro FÍSICO na sua casa, uma edição linda para marcar, chorar e guardar."
    },
    {
      question: "Serve para homens também?",
      answer: "Absolutamente. A orfandade não tem gênero. Homens que leem este livro relatam uma libertação profunda da necessidade de 'ser forte o tempo todo'."
    },
    {
      question: "Qual o prazo de envio?",
      answer: "Nossa equipe de lançamento está de prontidão. Seu pedido é processado em até 24h úteis e enviado com rastreio."
    },
    {
      question: "E se eu não gostar?",
      answer: "Eu confio tanto no poder dessa mensagem que assumo o risco. Se em 7 dias você sentir que não valeu a pena, devolvemos 100% do seu dinheiro."
    }
  ] as FaqItem[]
};