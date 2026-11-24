import type { Photo } from "./types";

/**
 * Fotografias fixas das seções.
 * Salve os arquivos em /public/images/<pasta>/ e preencha `src`.
 */
type PhotoKey = "heroMain" | "heroMobile" | "heroDetail" | "aboutMain" | "aboutDetail";

export const photos: Record<PhotoKey, Photo> = {
  heroMain: {
    src: "",
    alt: "Velas da Sole Mio em composição sobre superfície natural",
    slot: "Hero — foto principal",
    spec: "Vertical 4:5 · mín. 2000 × 2500 px",
  },
  /** Opcional: versão para celular. Exige `width` e `height`. */
  heroMobile: {
    src: "",
    alt: "Velas da Sole Mio em composição sobre superfície natural",
    slot: "Hero — versão celular",
    spec: "Vertical 4:5 · mín. 1200 × 1500 px",
  },
  heroDetail: {
    src: "",
    alt: "Detalhe da textura da cera vegetal",
    slot: "Detalhe · recorte circular",
    spec: "Quadrada · mín. 1000 px",
  },
  aboutMain: {
    src: "",
    alt: "Vela artesanal sendo finalizada à mão",
    slot: "A marca — mãos e vela",
    spec: "Vertical 4:5 · mín. 1600 × 2000 px",
  },
  aboutDetail: {
    src: "",
    alt: "Detalhe do acabamento de uma vela Sole Mio",
    slot: "A marca — detalhe",
    spec: "Quadrada · mín. 1200 px",
  },
};
