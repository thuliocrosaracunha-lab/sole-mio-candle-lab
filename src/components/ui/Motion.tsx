"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  /** Anima ao carregar a página, em vez de ao entrar na tela. */
  immediate?: boolean;
};

/** Entrada suave: opacidade + leve deslocamento vertical. */
export function Reveal({ children, className, delay = 0, y = 24, duration = 0.9, immediate }: RevealProps) {
  const target = { opacity: 1, y: 0 };
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      {...(immediate
        ? { animate: target }
        : { whileInView: target, viewport: { once: true, margin: "0px 0px -12% 0px" } })}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Linhas de título que surgem de trás de uma máscara. */
export function LineReveal({
  lines,
  delay = 0,
  stagger = 0.12,
}: {
  lines: React.ReactNode[];
  delay?: number;
  stagger?: number;
}) {
  return (
    <>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
          <motion.span
            className="block"
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.15, delay: delay + i * stagger, ease }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </>
  );
}

/**
 * Revelação de fotografia: recorte de baixo para cima e leve zoom.
 * O contêiner pai define o tamanho; este componente o preenche.
 */
export function ImageReveal({
  children,
  className = "",
  delay = 0,
  immediate,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  immediate?: boolean;
}) {
  const reduce = useReducedMotion();
  const shown = { clipPath: "inset(0% 0% 0% 0%)" };
  const trigger = immediate
    ? { animate: shown }
    : { whileInView: shown, viewport: { once: true, margin: "0px 0px -10% 0px" } };

  return (
    <motion.div
      className={`absolute inset-0 overflow-hidden ${className}`}
      initial={reduce ? false : { clipPath: "inset(100% 0% 0% 0%)" }}
      {...trigger}
      transition={{ duration: 1.4, delay, ease }}
    >
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1.12 }}
        {...(immediate
          ? { animate: { scale: 1 } }
          : { whileInView: { scale: 1 }, viewport: { once: true, margin: "0px 0px -10% 0px" } })}
        transition={{ duration: 2.2, delay, ease }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/** Parallax discreto: a imagem se desloca alguns pontos percentuais durante a rolagem. */
export function Parallax({
  children,
  amount = 7,
  disabled,
}: {
  children: React.ReactNode;
  amount?: number;
  /** Desliga o efeito (ex.: enquanto a foto ainda é provisória). */
  disabled?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion() || disabled;
  const offset = reduce ? 0 : amount;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-x-0"
        style={{ top: `-${offset}%`, bottom: `-${offset}%`, y: reduce ? 0 : y }}
      >
        {children}
      </motion.div>
    </div>
  );
}
