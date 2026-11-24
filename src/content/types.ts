/**
 * Uma fotografia do site.
 *
 * Enquanto `src` estiver vazio, o site mostra uma moldura provisória
 * com `slot` e `spec` — que descrevem exatamente a foto a ser enviada.
 * Para usar a foto real: salve o arquivo em /public/images/... e
 * preencha `src` com o caminho (ex.: "/images/hero/principal.jpg").
 */
export type Photo = {
  src?: string;
  alt: string;
  /** Nome da posição da foto, exibido na moldura provisória. */
  slot: string;
  /** Especificação da foto esperada (formato, tamanho mínimo). */
  spec: string;
  /** Enquadramento (CSS object-position). Ex.: "50% 30%". */
  position?: string;
  /** Dimensões originais — necessárias apenas para a foto mobile do hero. */
  width?: number;
  height?: number;
};

export type Product = {
  /** Identificador único, sem espaços nem acentos. Ex.: "plisse-areia". */
  slug: string;
  name: string;
  description?: string;
  /** Preço em reais. Deixe vazio para exibir "Sob consulta". */
  price?: number;
  /** Linha ou coleção. O filtro aparece quando houver duas ou mais. */
  category?: string;
  /** A primeira foto é a principal; a segunda aparece ao passar o mouse. */
  images: { src: string; alt: string }[];
  /** `false` exibe "Indisponível no momento". */
  available?: boolean;
};

export type ProcessStep = {
  title: string;
  text: string;
  photo: Photo;
};

export type InstagramPost = {
  /** Link do post no Instagram. */
  href: string;
  photo: Photo;
};
