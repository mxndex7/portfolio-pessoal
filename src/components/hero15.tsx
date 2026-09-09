'use client';

import { ArrowRight } from 'lucide-react';
import { motion, type Variants } from 'motion/react';
import {
  SiPython,
  SiJavascript,
  SiNodedotjs,
  SiMinio,
  SiDocker,
  SiClaude,
  SiTypescript,
  SiNpm,
  SiVite,
  SiPostgresql,
  SiGit,
} from 'react-icons/si';

function seededRandom(seed: number) {
  let x = Math.imul(seed ^ 0x9e3779b9, 0x85ebca6b);
  x ^= x >>> 13;
  x = Math.imul(x, 0xc2b2ae35);
  x ^= x >>> 16;
  return (x >>> 0) / 4294967296;
}

const stars = Array.from({ length: 60 }).map((_, i) => {
  const r1 = seededRandom(i * 4 + 1);
  const r2 = seededRandom(i * 4 + 2);
  const r3 = seededRandom(i * 4 + 3);
  const r4 = seededRandom(i * 4 + 4);
  const size = Number((1 + r3 * 1.6).toFixed(2));
  const warm = r1 > 0.82;
  return {
    left: Number((r1 * 100).toFixed(2)),
    top: Number((r2 * 62).toFixed(2)),
    size,
    duration: Number((2.4 + r4 * 2.8).toFixed(2)),
    delay: Number(((r1 * 0.6 + r2 * 0.4) * 6).toFixed(2)),
    color: warm ? "200, 220, 255" : "255, 255, 255",
  };
});

const techIcons = [
  { Icon: SiPython, label: 'Python' },
  { Icon: SiJavascript, label: 'JavaScript' },
  { Icon: SiNodedotjs, label: 'Node.js' },
  { Icon: SiMinio, label: 'MinIO' },
  { Icon: SiDocker, label: 'Docker' },
  { Icon: SiClaude, label: 'Claude' },
  { Icon: SiTypescript, label: 'TypeScript' },
  { Icon: SiNpm, label: 'npm' },
  { Icon: SiVite, label: 'Vite' },
  { Icon: SiPostgresql, label: 'PostgreSQL' },
  { Icon: SiGit, label: 'Git' },
];

interface NavLink {
  label: string;
  href: string;
}

interface Hero15Props {
  navLinks?: NavLink[];
  headingLine1?: string;
  headingLine2?: string;
  description?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

const navLinksDefault: NavLink[] = [
  { label: 'Contact', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Features', href: '#' },
  { label: 'Resources', href: '#' },
];

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const softReveal: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.985, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { type: 'spring', mass: 1.2, stiffness: 40, damping: 15 },
  },
};

const navReveal: Variants = {
  hidden: { opacity: 0, y: -12, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', mass: 1, stiffness: 50, damping: 12 },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 1.05, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { type: 'spring', mass: 1.5, stiffness: 30, damping: 20 },
  },
};

export default function Hero15({
  navLinks = navLinksDefault,
  headingLine1 = 'Where Color Meet',
  headingLine2 = 'Powerful Concepts',
  description = 'Transforming ideas into visually striking designs that communicate, inspire, and stand out.',
  primaryCtaLabel = 'Explore More',
  primaryCtaHref = '#',
  secondaryCtaLabel = 'Start Journey',
  secondaryCtaHref = '#',
}: Hero15Props) {
  return (
    <section className="relative isolate flex min-h-[80vh] w-full overflow-hidden bg-neutral-950 px-1.5 py-1.5 text-white antialiased">
      <motion.div
        className="relative flex min-h-[80vh] w-full flex-col overflow-hidden bg-neutral-950 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <motion.img
          variants={imageVariants}
          src="/hero-bg.svg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-bottom"
        />
        <div className="pointer-events-none absolute inset-0 z-[1]">
          {stars.map((star, i) => (
            <span
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                width: star.size,
                height: star.size,
                backgroundColor: `rgb(${star.color})`,
                boxShadow: `0 0 ${(star.size * 2.2).toFixed(1)}px rgba(${star.color}, 0.65)`,
                opacity: 0.08,
                animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite backwards`,
              }}
            />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-16 bg-gradient-to-b from-transparent to-background sm:h-24" />

        <motion.nav
          variants={navReveal}
          className="max-w-8xl relative z-10 mx-auto flex min-h-12 w-full items-center justify-center px-8 py-3 sm:px-12 lg:px-24"
        >
          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex min-h-10 items-center text-sm font-normal text-white/84 transition-[color,transform] duration-200 ease-out hover:text-white active:scale-[0.96]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.nav>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center px-6 pt-10 pb-8 text-center sm:px-12 sm:pt-12 lg:px-24">
          <motion.div
            variants={softReveal}
            className="mx-auto max-w-4xl 2xl:max-w-7xl"
          >
            <h1 className="text-[clamp(2.9rem,6.1vw,6.55rem)] leading-[0.98] font-light tracking-normal text-balance text-white/95">
              <span className="block">{headingLine1}</span>
              <span className="mt-1 block font-serif text-[1.06em] leading-[0.92] font-normal text-white">
                {headingLine2}
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={softReveal}
            className="mt-5 max-w-lg text-sm leading-7 font-normal text-pretty text-white/70 sm:text-sm 2xl:text-lg"
          >
            {description}
          </motion.p>

          <motion.div
            variants={softReveal}
            className="mt-6 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href={primaryCtaHref}
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/15 bg-white/[0.03] px-6 text-sm font-normal text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] backdrop-blur-xl transition-all duration-200 ease-out hover:border-white/25 hover:bg-white/10 active:scale-[0.96]"
            >
              {primaryCtaLabel}
            </a>
            <a
              href={secondaryCtaHref}
              className="group/secondary inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/15 bg-white/[0.03] px-5 text-sm font-light text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] backdrop-blur-xl transition-all duration-200 ease-out hover:border-white/25 hover:bg-white/10 active:scale-[0.96]"
            >
              {secondaryCtaLabel}
              <ArrowRight className="size-3.5 transition-transform duration-200 ease-out group-hover/secondary:translate-x-0.5" />
            </a>
          </motion.div>

          <motion.div
            variants={softReveal}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
          >
            {techIcons.map(({ Icon, label }) => (
              <Icon
                key={label}
                aria-label={label}
                className="size-7 text-white/40 transition-colors duration-200 hover:text-white/80 sm:size-8"
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
