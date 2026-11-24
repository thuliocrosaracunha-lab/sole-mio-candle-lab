import Image from "next/image";
import type { Photo as PhotoData } from "@/content/types";

type PhotoProps = {
  photo: PhotoData;
  sizes: string;
  preload?: boolean;
  className?: string;
  /** Cor da moldura provisória: "creme" sobre fundo marfim, "marfim" sobre fundo creme. */
  tone?: "creme" | "marfim";
  /** Moldura provisória sem textos longos (para espaços pequenos ou circulares). */
  compact?: boolean;
  /** Classes extras para a legenda da moldura provisória. */
  captionClassName?: string;
};

/**
 * Fotografia que preenche o contêiner pai (que deve ser `relative`
 * e ter proporção ou altura definida). Sem `src`, exibe a moldura
 * provisória com a especificação da foto esperada.
 */
export function Photo({ photo, sizes, preload, className = "", tone = "creme", compact, captionClassName = "" }: PhotoProps) {
  if (!photo.src) {
    return (
      <PhotoSlot photo={photo} tone={tone} compact={compact} className={className} captionClassName={captionClassName} />
    );
  }
  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      fill
      sizes={sizes}
      preload={preload}
      quality={85}
      className={`object-cover ${className}`}
      style={photo.position ? { objectPosition: photo.position } : undefined}
    />
  );
}

function PhotoSlot({
  photo,
  tone,
  compact,
  className,
  captionClassName,
}: {
  photo: PhotoData;
  tone: "creme" | "marfim";
  compact?: boolean;
  className: string;
  captionClassName: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Espaço reservado para fotografia: ${photo.slot}`}
      className={`@container absolute inset-0 ${tone === "creme" ? "bg-creme" : "bg-marfim"} ${className}`}
    >
      {!compact && <div className="absolute inset-3 border border-linho @md:inset-4" />}
      <div className="absolute left-1/2 top-[44%] aspect-square w-[22%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linho/60" />
      {compact ? (
        <p className="label absolute inset-x-[18%] bottom-[14%] text-center text-[0.58rem] text-cafe/55">
          Foto a fornecer
        </p>
      ) : (
        <div className={`absolute inset-x-6 bottom-6 @md:inset-x-8 @md:bottom-8 ${captionClassName}`}>
          <p className="label text-cafe/55">Fotografia a fornecer</p>
          <p className="mt-1.5 hidden font-serif text-base leading-snug text-cafe @[12rem]:block">
            {photo.slot}
          </p>
          <p className="label mt-1 hidden text-[0.6rem] text-cafe/50 @[16rem]:block">{photo.spec}</p>
        </div>
      )}
    </div>
  );
}
