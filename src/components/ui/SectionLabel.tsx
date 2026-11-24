/** Legenda de seção, marcada pelo pequeno disco — o "sol" da marca. */
export function SectionLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`label flex items-center gap-3 ${className}`}>
      <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-madeira" />
      {children}
    </p>
  );
}
