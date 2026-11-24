"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { navigation, site } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";
import { Wordmark } from "@/components/ui/Wordmark";

const ease = [0.22, 1, 0.36, 1] as const;

export function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useMotionValueEvent(scrollY, "change", (y) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    // Esconde ao descer, mostra ao subir.
    setHidden(y > 480 && y > previous + 4);
    if (y < previous - 4) setHidden(false);
  });

  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500 ${
          solid ? "border-b border-cafe/10 bg-marfim/95 backdrop-blur-sm" : "border-b border-transparent"
        }`}
        animate={{ y: hidden && !open ? "-100%" : "0%" }}
        transition={{ duration: 0.6, ease }}
      >
        <div className="shell flex h-18 items-center justify-between lg:h-22">
          <a href="#topo" aria-label={`${site.name}, voltar ao início`} onClick={() => setOpen(false)}>
            <Wordmark />
          </a>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-6 xl:gap-9">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="label link-line">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="label hidden min-h-11 items-center border border-cafe/35 px-5 transition-colors duration-500 hover:border-cafe hover:bg-cafe hover:text-marfim lg:inline-flex"
          >
            <span aria-hidden className="xl:hidden">Pedir</span>
            <span aria-hidden className="hidden xl:inline">Pedir pelo WhatsApp</span>
            <span className="sr-only">Pedir pelo WhatsApp (abre em nova aba)</span>
          </a>

          <button
            ref={toggleRef}
            type="button"
            className="label -mr-3 min-h-11 px-3 lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Fechar" : "Menu"}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            className="fixed inset-0 z-40 flex flex-col bg-marfim pt-18 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease }}
          >
            <nav aria-label="Menu" className="shell flex flex-1 flex-col justify-center">
              <ul className="space-y-1">
                {navigation.map((item, i) => (
                  <li key={item.href} className="overflow-hidden">
                    <motion.a
                      ref={i === 0 ? firstLinkRef : undefined}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-1.5 font-serif text-[clamp(2.5rem,11vw,3.75rem)] leading-[1.05] tracking-[-0.02em]"
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      transition={{ duration: 0.8, delay: 0.08 + i * 0.06, ease }}
                    >
                      {item.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </nav>
            <motion.div
              className="shell flex flex-col gap-3 border-t border-cafe/15 py-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="label">
                WhatsApp · {site.whatsapp.display}
              </a>
              <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="label">
                Instagram · {site.instagram.handle}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
