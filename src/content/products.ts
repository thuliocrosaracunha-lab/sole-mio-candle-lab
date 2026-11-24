import type { Product } from "./types";

/**
 * Catálogo de produtos.
 *
 * Enquanto a lista estiver vazia, a seção "Coleção" exibe molduras
 * provisórias. Para cadastrar uma peça, copie o modelo abaixo,
 * salve as fotos em /public/images/products/ e preencha os campos.
 *
 * {
 *   slug: "nome-da-peca",
 *   name: "Nome da peça",
 *   description: "Descrição curta da peça.",
 *   price: 89.9,               // opcional — sem preço exibe "Sob consulta"
 *   category: "Plissé",        // opcional
 *   images: [
 *     { src: "/images/products/nome-da-peca-1.jpg", alt: "Descrição da foto" },
 *     { src: "/images/products/nome-da-peca-2.jpg", alt: "Descrição da foto" }, // opcional
 *   ],
 * },
 */
export const products: Product[] = [];

/** Quantas molduras provisórias mostrar enquanto não houver produtos. */
export const PLACEHOLDER_PRODUCTS = 4;
