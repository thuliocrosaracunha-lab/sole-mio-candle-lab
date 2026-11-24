type Variant = "solid" | "outline" | "light" | "lightOutline";

const variants: Record<Variant, string> = {
  solid: "bg-cafe text-marfim hover:bg-musgo",
  outline: "border border-cafe/35 text-cafe hover:border-cafe hover:bg-cafe hover:text-marfim",
  light: "bg-marfim text-cafe hover:bg-creme",
  lightOutline: "border border-marfim/40 text-marfim hover:border-marfim hover:bg-marfim hover:text-musgo",
};

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
};

export function LinkButton({ href, children, variant = "solid", external, className = "" }: LinkButtonProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`label inline-flex min-h-13 whitespace-nowrap items-center justify-center gap-3 px-7 text-center transition-colors duration-500 ease-soft ${variants[variant]} ${className}`}
    >
      {children}
      {external && <span className="sr-only">(abre em nova aba)</span>}
    </a>
  );
}
