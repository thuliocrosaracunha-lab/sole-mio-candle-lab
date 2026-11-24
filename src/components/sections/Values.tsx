import { copy } from "@/content/copy";
import { Accent } from "@/components/ui/Accent";
import { Reveal } from "@/components/ui/Motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Values() {
  const { values } = copy;

  return (
    <section aria-labelledby="diferenciais-title" className="bg-carvao py-28 text-marfim md:py-36 lg:py-44">
      <div className="shell">
        <Reveal>
          <SectionLabel className="text-marfim/70">{values.label}</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 id="diferenciais-title" className="mt-7 max-w-[14ch] text-h2">
            <Accent text={values.title} />
          </h2>
        </Reveal>

        <ul className="mt-16 border-b border-marfim/15 lg:mt-24">
          {values.items.map((item, i) => (
            <li key={item.title} className="border-t border-marfim/15">
              <Reveal delay={i * 0.06} className="grid gap-4 py-8 md:py-10 lg:grid-cols-12 lg:gap-x-6 lg:py-12">
                <h3 className="text-h3 lg:col-span-6">{item.title}</h3>
                <p className="max-w-[46ch] leading-[1.75] text-marfim/70 lg:col-span-4 lg:col-start-8 lg:self-center">
                  {item.text}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
