import { Fragment } from "react";

/**
 * Converte "Texto com [destaque]" em texto com a palavra em itálico.
 * Mantém os títulos editáveis como texto simples em /content/copy.ts.
 */
export function Accent({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\])/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("[") ? (
          <em key={i} className="accent">
            {part.slice(1, -1)}
          </em>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
