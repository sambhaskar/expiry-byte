import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger, useGSAP);

// Desktop-only, motion-allowed media query used by scroll-driven pieces.
export const FULL_MOTION = '(prefers-reduced-motion: no-preference) and (min-width: 901px)';
export const ANY_MOTION = '(prefers-reduced-motion: no-preference)';

export { gsap, ScrollTrigger, useGSAP };
