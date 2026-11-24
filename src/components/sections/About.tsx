import { copy } from "@/content/copy";
import { photos } from "@/content/photos";
import { site } from "@/content/site";
import { Accent } from "@/components/ui/Accent";
import { ImageReveal, Parallax, Reveal } from "@/components/ui/Motion";
import { Photo } from "@/components/ui/Photo";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function About() {
  const { about } = copy;
  const paragraphs = site.story ? [...about.paragraphs, site.story] : about.paragraphs;

  return (
    <section id="marca" aria-labelledby="marca-title" className="shell py-28 md:py-36 lg:py-48">
      <div className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-0">
        <div className="order-1 lg:order-none lg:col-span-6 lg:col-start-7 lg:row-start-1">
          <Reveal>
            <SectionLabel>{about.label}</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 id="marca-title" className="mt-7 text-[clamp(2.125rem,1.25rem+3.4vw,4.375rem)] leading-[1.02] tracking-[-0.02em]">
              <Accent text={about.title} />
            </h2>
          </Reveal>
        </div>

        <div className="relative order-2 -mx-5 aspect-[4/5] md:mx-0 md:w-4/5 lg:order-none lg:col-span-5 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:w-auto lg:self-start">
          <ImageReveal>
            <Parallax amount={6} disabled={!photos.aboutMain.src}>
              <Photo photo={photos.aboutMain} sizes="(min-width: 1024px) 40vw, (min-width: 768px) 80vw, 100vw" />
            </Parallax>
          </ImageReveal>
        </div>

        <div className="order-3 grid gap-6 md:grid-cols-2 md:gap-10 lg:order-none lg:col-span-5 lg:col-start-7 lg:row-start-2 lg:mt-14">
          {paragraphs.map((text, i) => (
            <Reveal key={i} delay={0.1 * i}>
              <p className="leading-[1.75] text-cafe/80">{text}</p>
            </Reveal>
          ))}
        </div>

        <div className="relative order-4 ml-auto aspect-square w-3/5 md:w-2/5 lg:order-none lg:col-span-3 lg:col-start-10 lg:row-start-3 lg:ml-0 lg:mt-20 lg:w-full">
          <ImageReveal delay={0.15}>
            <Photo photo={photos.aboutDetail} sizes="(min-width: 1024px) 22vw, 60vw" />
          </ImageReveal>
        </div>
      </div>
    </section>
  );
}
