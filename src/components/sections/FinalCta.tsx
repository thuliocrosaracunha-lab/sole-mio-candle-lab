import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";
import { Accent } from "@/components/ui/Accent";
import { LinkButton } from "@/components/ui/LinkButton";
import { Reveal } from "@/components/ui/Motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function FinalCta() {
  const { finalCta } = copy;

  return (
    <section id="contato" aria-labelledby="contato-title" className="relative overflow-hidden bg-musgo py-28 text-marfim md:py-36 lg:py-48">
      {/* O sol da marca, em contorno, nascendo pela borda */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-[38vw] -right-[18vw] aspect-square w-[78vw] rounded-full border border-marfim/15 lg:-bottom-[22vw] lg:-right-[8vw] lg:w-[48vw]"
      />
      <div className="shell relative grid gap-y-12 lg:grid-cols-12 lg:gap-x-6">
        <div className="lg:col-span-7">
          <Reveal>
            <SectionLabel className="text-marfim/70">{finalCta.label}</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 id="contato-title" className="mt-7 text-display">
              <Accent text={finalCta.title} />
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.2} className="lg:col-span-5 lg:col-start-8 lg:self-end">
          <p className="max-w-[38ch] leading-[1.75] text-marfim/80">{finalCta.lede}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <LinkButton href={whatsappLink()} variant="light" external>
              {finalCta.primaryCta}
            </LinkButton>
            <LinkButton href={site.linktree.url} variant="lightOutline" external>
              {finalCta.secondaryCta}
            </LinkButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
