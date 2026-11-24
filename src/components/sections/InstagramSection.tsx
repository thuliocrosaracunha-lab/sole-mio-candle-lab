import { copy } from "@/content/copy";
import { instagramPosts } from "@/content/instagram";
import { site } from "@/content/site";
import { LinkButton } from "@/components/ui/LinkButton";
import { Reveal } from "@/components/ui/Motion";
import { Photo } from "@/components/ui/Photo";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function InstagramSection() {
  const { instagram } = copy;
  const [user, rest] = site.instagram.handle.replace("@", "").split(".");

  return (
    <section id="instagram" aria-labelledby="instagram-title" className="bg-creme py-28 md:py-36 lg:py-44">
      <div className="shell grid gap-y-14 lg:grid-cols-12 lg:gap-x-6">
        <div className="lg:col-span-4 lg:self-center">
          <Reveal>
            <SectionLabel>{instagram.label}</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 id="instagram-title" className="mt-7 text-[clamp(2.25rem,1.4rem+3.2vw,4.25rem)] leading-[1.02] tracking-[-0.02em]">
              <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="transition-colors duration-500 hover:text-musgo">
                <span className="text-madeira">@</span>
                {user}.<wbr />
                <em className="accent">{rest}</em>
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-[34ch] leading-[1.75] text-cafe/80">{instagram.lede}</p>
            <LinkButton href={site.instagram.url} variant="outline" external className="mt-9">
              {instagram.cta}
            </LinkButton>
          </Reveal>
        </div>

        <ul className="grid grid-cols-3 gap-2 md:gap-3 lg:col-span-7 lg:col-start-6">
          {instagramPosts.map((post, i) => (
            <li key={post.href} className={i === 0 ? "col-span-2 row-span-2" : ""}>
              <Reveal delay={0.05 * i} y={16} className="h-full">
                <a
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-square h-full overflow-hidden"
                >
                  <span className="absolute inset-0 transition-transform duration-[1400ms] ease-soft group-hover:scale-[1.05]">
                    <Photo
                      photo={post.photo}
                      tone="marfim"
                      compact={i !== 0}
                      sizes={i === 0 ? "(min-width: 1024px) 38vw, 66vw" : "(min-width: 1024px) 19vw, 33vw"}
                    />
                  </span>
                  <span className="absolute inset-0 bg-carvao/0 transition-colors duration-700 group-hover:bg-carvao/30" />
                  <span className="label absolute bottom-3 left-3 text-marfim opacity-0 transition-opacity duration-700 group-hover:opacity-100 md:bottom-4 md:left-4">
                    {instagram.viewPost}
                  </span>
                  <span className="sr-only">Post {i + 1} da Sole Mio no Instagram (abre em nova aba)</span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
