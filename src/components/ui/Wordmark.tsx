/**
 * Assinatura tipográfica provisória da marca.
 * Substitua pelo logotipo em SVG quando ele for fornecido.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline gap-2.5 whitespace-nowrap ${className}`}>
      <span className="font-serif text-[1.375rem] leading-none tracking-[-0.01em] md:text-[1.5rem]">Sole Mio</span>
      <span aria-hidden className="size-[0.4rem] -translate-y-[0.15rem] rounded-full bg-madeira" />
      <span className="label text-[0.58rem] opacity-80">Candle Lab</span>
    </span>
  );
}
