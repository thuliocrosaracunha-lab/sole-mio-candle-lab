import { getImageProps } from "next/image";
import { copy } from "@/content/copy";
import { photos } from "@/content/photos";
import { whatsappLink } from "@/lib/whatsapp";
import { Accent } from "@/components/ui/Accent";
import { LinkButton } from "@/components/ui/LinkButton";
import { ImageReveal, LineReveal, Parallax, Reveal } from "@/components/ui/Motion";
import { Photo } from "@/components/ui/Photo";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Hero() {
  const { hero } = copy;

  return (
    <section id="topo" aria-labelledby="hero-title" className="relative pt-18 lg:pt-22">
      <div className="shell grid lg:min-h-[calc(100svh-5.5rem)] lg:grid-cols-12 lg:grid-rows-[1fr_auto] lg:gap-x-6">
        {/* Fotografia principal + disco ("o sol") */}
        <div className="relative order-first -mx-5 md:-mx-10 lg:order-none lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:mx-0 lg:-mr-10 lg:pt-6 xl:-mr-16">
          <div className="relative aspect-[4/5] max-h-[64svh] w-full md:aspect-[3/2] md:max-h-[60svh] lg:aspect-auto lg:h-full lg:max-h-none lg:min-h-[34rem]">
            <ImageReveal immediate delay={0.15}>
              <Parallax amount={5} disabled={!photos.heroMain.src}>
                <HeroPicture />
              </Parallax>
            </ImageReveal>
          </div>

          <Reveal
            immediate
            delay={1.05}
            y={48}
            duration={1.6}
            className="absolute bottom-0 right-6 z-10 aspect-square w-[34vw] max-w-40 translate-y-1/2 md:right-12 lg:bottom-[3%] lg:left-0 lg:right-auto lg:w-[clamp(9rem,13vw,13.5rem)] lg:max-w-none lg:-translate-x-1/3 lg:translate-y-0 xl:-translate-x-1/2"
          >
            <span aria-hidden className="absolute -inset-2.5 rounded-full border border-madeira/50 lg:-inset-3.5" />
            <span className="absolute inset-0 overflow-hidden rounded-full border-4 border-marfim">
              <Photo photo={photos.heroDetail} sizes="(min-width: 1024px) 14vw, 34vw" compact />
            </span>
          </Reveal>
        </div>

        {/* Texto */}
        <div className="relative z-10 flex flex-col justify-center pb-4 pt-16 md:pt-20 lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:py-16">
          <Reveal immediate delay={0.3}>
            <SectionLabel>{hero.eyebrow}</SectionLabel>
          </Reveal>

          <h1 id="hero-title" className="mt-7 text-display lg:mt-9">
            <LineReveal delay={0.4} lines={hero.title.map((line) => <Accent key={line} text={line} />)} />
          </h1>

          <Reveal immediate delay={0.95}>
            <p className="mt-8 max-w-[34ch] text-lede text-cafe/80 lg:mt-10">{hero.lede}</p>
          </Reveal>

          <Reveal immediate delay={1.1} className="mt-10 flex flex-col gap-3 sm:flex-row lg:mt-12">
            <LinkButton href="#colecao">{hero.primaryCta}</LinkButton>
            <LinkButton href={whatsappLink()} variant="outline" external>
              {hero.secondaryCta}
            </LinkButton>
          </Reveal>
        </div>

        {/* Faixa de fatos */}
        <Reveal immediate delay={1.3} className="lg:col-span-12 lg:row-start-2">
          <ul className="mt-12 flex items-center justify-between gap-4 border-t border-cafe/15 py-5 lg:mt-10 lg:py-6">
            {hero.facts.map((fact) => (
              <li key={fact} className="label text-cafe/75 max-sm:text-[0.625rem] max-sm:tracking-[0.14em]">
                {fact}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/**
 * Foto do hero. Se houver versão para celular (com dimensões),
 * usa <picture> para servir o enquadramento certo em cada tela.
 */
function HeroPicture() {
  const main = photos.heroMain;
  const mobile = photos.heroMobile;

  if (main.src && mobile.src && mobile.width && mobile.height) {
    const common = { alt: main.alt, sizes: "(min-width: 1024px) 50vw, 100vw", quality: 85 };
    const {
      props: { srcSet: desktopSet },
    } = getImageProps({ ...common, src: main.src, width: main.width ?? 2000, height: main.height ?? 2500 });
    const {
      props: { srcSet: mobileSet, ...rest },
    } = getImageProps({ ...common, src: mobile.src, width: mobile.width, height: mobile.height, preload: true });
    return (
      <picture>
        <source media="(min-width: 1024px)" srcSet={desktopSet} />
        <source srcSet={mobileSet} />
        {/* eslint-disable-next-line jsx-a11y/alt-text -- alt incluído em `rest` */}
        <img {...rest} className="absolute inset-0 size-full object-cover" />
      </picture>
    );
  }

  return (
    <Photo
      photo={main}
      sizes="(min-width: 1024px) 50vw, 100vw"
      preload
      captionClassName="right-[48%] bottom-10 md:right-[40%] lg:top-8 lg:bottom-auto"
    />
  );
}
