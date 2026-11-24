"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { copy } from "@/content/copy";
import { PLACEHOLDER_PRODUCTS, products } from "@/content/products";
import type { Product } from "@/content/types";
import { formatPrice, productWhatsappLink, whatsappLink } from "@/lib/whatsapp";
import { Accent } from "@/components/ui/Accent";
import { Reveal } from "@/components/ui/Motion";
import { Photo } from "@/components/ui/Photo";
import { SectionLabel } from "@/components/ui/SectionLabel";

/**
 * Ritmo editorial da vitrine (repete a cada 4 peças).
 * Tamanhos e alturas alternados para fugir da grade uniforme.
 */
const rhythm = [
  { item: "lg:col-span-7", frame: "aspect-[4/5]" },
  { item: "md:mt-28 lg:col-span-4 lg:col-start-9 lg:mt-52", frame: "aspect-[3/4]" },
  { item: "lg:col-span-4 lg:col-start-2", frame: "aspect-[3/4]" },
  { item: "md:mt-28 lg:col-span-6 lg:col-start-7 lg:mt-36", frame: "aspect-[4/5]" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Collection() {
  const { collection } = copy;
  const categories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category).filter((c): c is string => Boolean(c)))),
    [],
  );
  const [filter, setFilter] = useState<string | null>(null);
  const visible = filter ? products.filter((p) => p.category === filter) : products;
  const isEmpty = products.length === 0;

  return (
    <section id="colecao" aria-labelledby="colecao-title" className="shell pb-28 md:pb-36 lg:pb-48">
      <header className="grid gap-y-8 border-t border-cafe/15 pt-14 lg:grid-cols-12 lg:gap-x-6 lg:pt-20">
        <div className="lg:col-span-7">
          <Reveal>
            <SectionLabel>{collection.label}</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 id="colecao-title" className="mt-7 text-h2">
              <Accent text={collection.title} />
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.2} className="lg:col-span-4 lg:col-start-9 lg:self-end">
          <p className="max-w-[40ch] leading-[1.75] text-cafe/80">{collection.lede}</p>
        </Reveal>
      </header>

      {categories.length > 1 && (
        <div role="group" aria-label="Filtrar por linha" className="mt-14 flex flex-wrap gap-x-7 gap-y-3">
          {[null, ...categories].map((category) => {
            const active = filter === category;
            return (
              <button
                key={category ?? "todas"}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(category)}
                className={`label min-h-11 border-b transition-colors duration-500 ${
                  active ? "border-cafe text-cafe" : "border-transparent text-cafe/55 hover:text-cafe"
                }`}
              >
                {category ?? collection.allFilter}
              </button>
            );
          })}
        </div>
      )}

      <ul className="mt-16 grid gap-y-20 md:grid-cols-2 md:gap-x-10 lg:mt-24 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-28">
        {isEmpty
          ? Array.from({ length: PLACEHOLDER_PRODUCTS }, (_, i) => (
              <li key={i} className={itemClass(i)}>
                <Reveal delay={(i % 2) * 0.1}>
                  <PlaceholderCard index={i} />
                </Reveal>
              </li>
            ))
          : null}

        <AnimatePresence mode="popLayout">
          {visible.map((product, i) => (
            <motion.li
              key={product.slug}
              layout
              className={itemClass(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.9, delay: (i % 2) * 0.1, ease }}
            >
              <ProductCard product={product} index={products.indexOf(product)} frame={rhythm[i % 4].frame} />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </section>
  );
}

function itemClass(i: number) {
  // No celular, peças alternadas recuam à direita para criar ritmo.
  const mobileOffset = i % 2 === 1 ? "ml-[12%] md:ml-0" : "";
  return `${rhythm[i % 4].item} ${mobileOffset}`;
}

function serial(index: number) {
  return `Nº ${String(index + 1).padStart(2, "0")}`;
}

function ProductCard({ product, index, frame }: { product: Product; index: number; frame: string }) {
  const { collection } = copy;
  const [cover, hover] = product.images;
  const unavailable = product.available === false;

  return (
    <article className="group">
      <div className={`relative overflow-hidden bg-creme ${frame}`}>
        <div className="absolute inset-0 transition-transform duration-[1400ms] ease-soft group-hover:scale-[1.04]">
          {cover && (
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 90vw"
              className="object-cover"
            />
          )}
          {hover && (
            <Image
              src={hover.src}
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 90vw"
              className="object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            />
          )}
        </div>
        {unavailable && (
          <p className="label absolute left-4 top-4 bg-marfim px-3 py-2 text-cafe">{collection.unavailable}</p>
        )}
      </div>

      <div className="mt-5 flex items-baseline justify-between gap-4 border-b border-cafe/15 pb-3">
        <span className="label text-cafe/60">{serial(index)}</span>
        {product.category && <span className="label text-cafe/60">{product.category}</span>}
      </div>

      <h3 className="mt-5 text-h3">{product.name}</h3>
      {product.description && (
        <p className="mt-3 max-w-[42ch] leading-[1.7] text-cafe/75">{product.description}</p>
      )}

      <div className="mt-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
        <p className="font-serif text-xl">
          {product.price != null ? formatPrice(product.price) : collection.onRequest}
        </p>
        <a
          href={productWhatsappLink(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="label link-line text-musgo"
        >
          {collection.cta}
          <span className="sr-only"> sobre {product.name} (abre em nova aba)</span>
        </a>
      </div>
    </article>
  );
}

function PlaceholderCard({ index }: { index: number }) {
  const { collection } = copy;
  return (
    <article>
      <div className={`relative ${rhythm[index % 4].frame}`}>
        <Photo
          photo={{
            alt: "",
            slot: `Produto ${String(index + 1).padStart(2, "0")}`,
            spec: "Vertical 4:5 · mín. 1600 × 2000 px",
          }}
          sizes="50vw"
        />
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-4 border-b border-cafe/15 pb-3">
        <span className="label text-cafe/60">{serial(index)}</span>
      </div>
      <h3 className="mt-5 text-h3 text-cafe/45">{collection.placeholderName}</h3>
      <p className="mt-3 max-w-[42ch] leading-[1.7] text-cafe/50">{collection.placeholderText}</p>
      <div className="mt-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
        <p className="font-serif text-xl text-cafe/45">{collection.onRequest}</p>
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="label link-line text-musgo">
          {collection.cta}
          <span className="sr-only"> (abre em nova aba)</span>
        </a>
      </div>
    </article>
  );
}
