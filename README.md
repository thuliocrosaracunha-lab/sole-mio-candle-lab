# Sole Mio Candle Lab: site institucional

Site em página única feito com Next.js 16, React 19, TypeScript, Tailwind CSS 4 e Motion.

## Como rodar

```bash
npm install        # só na primeira vez
npm run dev        # desenvolvimento: http://localhost:3000
npm run build      # gera a versão de produção
npm run start      # serve a versão de produção
```

Em produção, defina a variável `NEXT_PUBLIC_SITE_URL` com o endereço final do site
(ex.: `https://solemiocandlelab.com.br`). Ela é usada no SEO, no sitemap e na imagem de compartilhamento.

## Onde editar o conteúdo

Todo o conteúdo fica em `src/content/`. Não é preciso mexer nos componentes.

| Arquivo | O que contém |
|---|---|
| `site.ts` | WhatsApp, Instagram, Linktree, e-mail, endereço, horários, texto opcional da história da marca |
| `copy.ts` | Todos os textos das seções. Palavras entre `[colchetes]` aparecem em itálico. |
| `products.ts` | Catálogo de produtos (há um modelo comentado no arquivo) |
| `photos.ts` | Fotos do hero e da seção "A marca" |
| `process.ts` | Etapas do processo artesanal (textos provisórios, substituir pelos reais) |
| `instagram.ts` | Posts escolhidos do Instagram (links reais já preenchidos; faltam as imagens) |

Campos vazios (`""` ou `[]`) não aparecem no site.

## Como trocar uma foto provisória

1. Salve a imagem na pasta correspondente em `public/images/` (`hero`, `about`, `products`, `process`, `instagram`).
2. No arquivo de conteúdo, preencha `src` com o caminho, por exemplo `"/images/hero/principal.jpg"`.
3. Revise o texto `alt` (descrição da foto para leitores de tela e buscadores).

Enquanto `src` estiver vazio, o site mostra uma moldura com o nome da posição e o tamanho mínimo esperado.
O enquadramento pode ser ajustado com `position` (ex.: `"50% 30%"`).

## Como cadastrar um produto

Em `src/content/products.ts`, adicione um item à lista `products`:

```ts
{
  slug: "nome-da-peca",
  name: "Nome da peça",
  description: "Descrição curta.",
  price: 89.9,            // opcional; sem preço aparece "Sob consulta"
  category: "Plissé",     // opcional; com 2+ linhas aparece o filtro
  images: [
    { src: "/images/products/nome-da-peca-1.jpg", alt: "Descrição da foto" },
    { src: "/images/products/nome-da-peca-2.jpg", alt: "Descrição da foto" }, // aparece ao passar o mouse
  ],
  // available: false,    // mostra "Indisponível no momento"
}
```

O botão de cada produto abre o WhatsApp com a mensagem
"Olá! Vim pelo site e gostaria de saber mais sobre a vela {nome}."

## Estrutura

```
src/
  app/            layout, página, estilos globais, SEO (sitemap, robots, ícone, imagem OG)
  components/
    layout/       Header (com menu mobile), Footer
    sections/     Hero, About, Collection, Values, Process, InstagramSection, FinalCta
    ui/           Photo, animações (Reveal, LineReveal, ImageReveal, Parallax), LinkButton, Wordmark...
  content/        todo o conteúdo editável
  lib/            links do WhatsApp e formatação de preço
```

As cores e a escala tipográfica ficam em `src/app/globals.css` (bloco `@theme`).
