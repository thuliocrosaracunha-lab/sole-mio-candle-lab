"use client";

import { MotionConfig } from "motion/react";

/** Respeita a preferência do sistema por movimento reduzido. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
