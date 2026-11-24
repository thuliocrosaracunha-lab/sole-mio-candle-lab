/**
 * Informações da marca e contatos.
 * Campos vazios ("" ou []) não aparecem no site.
 */
export const site = {
  name: "Sole Mio Candle Lab",
  shortName: "Sole Mio",
  tagline: "Velas orgânicas artesanais",
  description:
    "Velas orgânicas artesanais, feitas à mão com cera vegetal no laboratório da Sole Mio.",

  /** Endereço público do site. Configure NEXT_PUBLIC_SITE_URL em produção. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  instagram: {
    handle: "@solemio.candlelab",
    url: "https://www.instagram.com/solemio.candlelab/",
  },

  linktree: {
    label: "linktr.ee/solemiocandlelab",
    url: "https://linktr.ee/solemiocandlelab",
  },

  whatsapp: {
    /** Somente números, com DDI e DDD. */
    number: "5534984246687",
    display: "+55 (34) 98424-6687",
    defaultMessage: "Olá! Vim pelo site da Sole Mio e gostaria de fazer um pedido.",
  },

  /** Opcionais — preencha para exibir no rodapé. */
  email: "",
  address: "",
  /** Ex.: ["Segunda a sexta, 9h às 18h", "Sábado, 9h às 13h"] */
  hours: [] as string[],

  /**
   * Texto opcional sobre a história da marca (seção "A marca").
   * Fica oculto enquanto estiver vazio.
   */
  story: "",

  copyrightYear: 2026,
} as const;

export const navigation = [
  { label: "A marca", href: "#marca" },
  { label: "Coleção", href: "#colecao" },
  { label: "Processo", href: "#processo" },
  { label: "Instagram", href: "#instagram" },
  { label: "Contato", href: "#contato" },
] as const;
