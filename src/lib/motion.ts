// Single source of truth for motion. Import from here, never hard-code easings.
export const ease = {
  outExpo: [0.16, 1, 0.3, 1] as [number, number, number, number],
  inOut: [0.65, 0, 0.35, 1] as [number, number, number, number],
};

export const duration = { fast: 0.25, base: 0.6, slow: 1.0 };

export const spring = { type: "spring" as const, stiffness: 120, damping: 20 };

export const revealDistance = 40;

export const staggerWord = 0.08;
