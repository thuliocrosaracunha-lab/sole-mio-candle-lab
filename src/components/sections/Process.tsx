"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { copy } from "@/content/copy";
import { processSteps } from "@/content/process";
import type { ProcessStep } from "@/content/types";
import { Accent } from "@/components/ui/Accent";
import { Reveal } from "@/components/ui/Motion";
import { Photo } from "@/components/ui/Photo";
import { SectionLabel } from "@/components/ui/SectionLabel";

const pad = (n: number) => String(n).padStart(2, "0");

export function Process() {
  const { process } = copy;
  const [active, setActive] = useState(0);

  return (
    <section id="processo" aria-labelledby="processo-title" className="py-28 md:py-36 lg:py-44">
      <div className="shell">
        <div className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel>{process.label}</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 id="processo-title" className="mt-7 text-h2">
                <Accent text={process.title} />
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="lg:col-span-4 lg:col-start-9 lg:self-end">
            <p className="max-w-[36ch] leading-[1.75] text-cafe/80">{process.lede}</p>
          </Reveal>
        </div>

        <div className="mt-16 lg:mt-24 lg:grid lg:grid-cols-12 lg:gap-x-6">
          {/* Desktop: foto fixa que acompanha a etapa ativa */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] overflow-hidden">
                {processSteps.map((step, i) => (
                  <div
                    key={step.title}
                    aria-hidden={i !== active}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-soft ${
                      i === active ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Photo photo={step.photo} sizes="40vw" />
                  </div>
                ))}
              </div>
              <p className="label mt-5 flex justify-between text-cafe/60" aria-live="polite">
                <span>{processSteps[active]?.title}</span>
                <span>
                  Etapa {pad(active + 1)} de {pad(processSteps.length)}
                </span>
              </p>
            </div>
          </div>

          <ol className="border-b border-cafe/15 lg:col-span-6 lg:col-start-7">
            {processSteps.map((step, i) => (
              <Step key={step.title} step={step} index={i} onActive={setActive} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Step({
  step,
  index,
  onActive,
}: {
  step: ProcessStep;
  index: number;
  onActive: (index: number) => void;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);

  return (
    <li ref={ref} className="border-t border-cafe/15 py-10 md:py-14 lg:flex lg:min-h-[62svh] lg:flex-col lg:justify-center lg:py-20">
      <div className="relative mb-8 aspect-[4/5] md:w-3/4 lg:hidden">
        <Photo photo={step.photo} sizes="(min-width: 768px) 75vw, 100vw" />
      </div>
      <Reveal>
        <p className="font-serif text-[clamp(3rem,2rem+3vw,5rem)] leading-none text-madeira accent">{pad(index + 1)}</p>
        <h3 className="mt-6 text-h3">{step.title}</h3>
        <p className="mt-4 max-w-[40ch] leading-[1.75] text-cafe/80">{step.text}</p>
      </Reveal>
    </li>
  );
}
