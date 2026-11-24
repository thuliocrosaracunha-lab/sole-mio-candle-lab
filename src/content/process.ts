import type { ProcessStep } from "./types";

/**
 * Etapas do processo artesanal.
 *
 * TEXTOS PROVISÓRIOS: escritos apenas com o que a marca já informa
 * (feitas à mão, cera vegetal, pedidos pelo WhatsApp). Substitua pela
 * descrição real de cada etapa e envie as fotos correspondentes.
 * É possível adicionar ou remover etapas livremente.
 */
export const processSteps: ProcessStep[] = [
  {
    title: "A cera",
    text: "Tudo começa pela cera vegetal, a base de todas as velas da Sole Mio.",
    photo: {
      src: "",
      alt: "Cera vegetal antes de ser trabalhada",
      slot: "Processo — a cera",
      spec: "Vertical 4:5 · mín. 1600 × 2000 px",
    },
  },
  {
    title: "As mãos",
    text: "Cada vela é feita à mão, no laboratório. É no trabalho manual que a peça ganha forma.",
    photo: {
      src: "",
      alt: "Mãos moldando uma vela",
      slot: "Processo — feitio à mão",
      spec: "Vertical 4:5 · mín. 1600 × 2000 px",
    },
  },
  {
    title: "O acabamento",
    text: "Textura, superfície e formato recebem atenção de perto. São os detalhes que dão identidade a cada peça.",
    photo: {
      src: "",
      alt: "Detalhe do acabamento de uma vela",
      slot: "Processo — acabamento",
      spec: "Vertical 4:5 · mín. 1600 × 2000 px",
    },
  },
  {
    title: "O pedido",
    text: "A peça pronta segue para quem a escolheu, a partir de uma conversa pelo WhatsApp.",
    photo: {
      src: "",
      alt: "Vela embalada, pronta para entrega",
      slot: "Processo — peça pronta",
      spec: "Vertical 4:5 · mín. 1600 × 2000 px",
    },
  },
];
