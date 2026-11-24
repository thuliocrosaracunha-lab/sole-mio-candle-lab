import type { InstagramPost } from "./types";

/**
 * Seleção manual de posts do Instagram (sem integração automática).
 *
 * Os links abaixo são posts reais do perfil @solemio.candlelab.
 * Para exibir as imagens, salve cada foto em /public/images/instagram/
 * e preencha `src`. O primeiro post aparece em destaque (maior).
 */
const spec = "Quadrada · mín. 1080 px";

export const instagramPosts: InstagramPost[] = [
  {
    href: "https://www.instagram.com/p/Df4oJ_0DgvZ/",
    photo: { src: "", alt: "Post da Sole Mio no Instagram", slot: "Post em destaque", spec },
  },
  {
    href: "https://www.instagram.com/reel/Dfkj4zBuu1a/",
    photo: { src: "", alt: "Post da Sole Mio no Instagram", slot: "Post 2", spec },
  },
  {
    href: "https://www.instagram.com/p/DfXney5jtLj/",
    photo: { src: "", alt: "Post da Sole Mio no Instagram", slot: "Post 3", spec },
  },
  {
    href: "https://www.instagram.com/reel/De1gabNMuAG/",
    photo: { src: "", alt: "Post da Sole Mio no Instagram", slot: "Post 4", spec },
  },
  {
    href: "https://www.instagram.com/p/Ded3uscjnJW/",
    photo: { src: "", alt: "Post da Sole Mio no Instagram", slot: "Post 5", spec },
  },
  {
    href: "https://www.instagram.com/reel/Dc1dN1cy6Cc/",
    photo: { src: "", alt: "Post da Sole Mio no Instagram", slot: "Post 6", spec },
  },
];
