
import React from "react";
import {
  ArrowRight,
  Check,
  CirclePlay,
  FileCheck2,
  Globe,
} from "lucide-react";
import HomeCTA from "../../mainhome/HomeCTA";

const priorities = [
  "Programme and channel monitoring",
  "Redistribution investigation",
  "Evidence and complaint tracking",
];

const solutions = [
  {
    icon: CirclePlay,
    title: "Live Streaming Protection",
    description:
      "A focused monitoring and enforcement workflow for unauthorized live streams during sports, concerts and other high-value broadcasts.",
    href: "/solutions/live-streaming-protection",
  },
  {
    icon: Globe,
    title: "Website & App Monitoring",
    description:
      "Investigate websites, applications and digital properties suspected of distributing protected content without authorization.",
    href: "/solutions/web-app-monitoring",
  },{
    icon: FileCheck2,
    title: "Copyright Enforcement",
    description:
      "Manage authorized copyright complaints and follow each case through submission, review, escalation and outcome verification.",
    href: "/solutions/copyright-enforcement",
  },
];

const particles = Array.from({ length: 220 }, (_, i) => {
  const random = (n) => {
    const x = Math.sin((i + 1) * n * 78.233) * 43758.5453;
    return x - Math.floor(x);
  };

  return {
    id: i,
    left: `${random(1) * 100}%`,
    top: `${random(2) * 100}%`,
    size: `${1 + random(3) * 1.5}px`,
    delay: `${random(4) * -10}s`,
    duration: `${5 + random(5) * 8}s`,
  };
});

function ParticleField() {
  return (
    <div
      className="film-particle-mask pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="film-particle absolute block rounded-full bg-lime-600"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  );
}

function FilmHero() {
  return (
    <section
     className="w-full bg-[#EAF3F9] px-1 pt-26 pb-7 font-['Roboto',sans-serif] sm:px-1 sm:pt-25 sm:pb-9 lg:px-1 lg:pt-25 lg:pb-8"
    >
      <div className="mx-auto w-full max-w-[1350px]">
        <div className="relative isolate flex min-h-[300px] w-full items-center overflow-hidden rounded-[14px] border border-[#8BB630]/30 bg-[#D5DDDA] sm:min-h-[400px] sm:rounded-[17px] lg:min-h-[410px] xl:min-h-[440px]">
  
  <div
            aria-hidden="true"
            className="absolute inset-0 z-[-2] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/globe.png')",
            }}
          />

          {/* Light blue overlay */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[-1] bg-gradient-to-r from-[#DCEAF4]/95 via-[#DCEAF4]/85 to-[#DCEAF4]/45"
          />

          {/* Soft blue atmospheric glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 top-1/2 z-[-1] h-64 w-64 -translate-y-1/2 rounded-full bg-[#8BBCE0]/30 blur-3xl sm:h-80 sm:w-80 lg:h-[450px] lg:w-[450px]"
          />

          {/* Main content */}
          <div className="relative z-10 w-full px-5 py-9 sm:px-8 sm:py-11 md:px-10 lg:px-[58px] lg:py-[62px] xl:px-[68px]">
            <div className="max-w-[1000px]">
            
  
  
  <span className="mb-5 inline-flex items-center gap-2.5 text-[10px] font-extrabold uppercase tracking-[1.8px] text-[#648A13] sm:mb-6 sm:text-[11px] lg:mb-7 lg:text-[12px]">
                 Industries
        </span>

         <h1 className="m-0 max-w-[900px] text-[34px] font-bold leading-[1.12] tracking-[-1.3px] text-[#15334E] min-[400px]:text-[39px] sm:text-[48px] sm:leading-[1.1] sm:tracking-[-1.8px] md:text-[58px] lg:text-[68px] lg:leading-[1.06] lg:tracking-[-2.4px] xl:text-[76px]">
                 Television &amp; Broadcasting
        </h1>

         <p className="mt-5 max-w-[650px] text-[14px] font-normal leading-[1.75] text-[#526B86] sm:mt-6 sm:text-[15px] sm:leading-[1.8] lg:mt-7 lg:text-[17px] lg:leading-[1.8]">
                Track suspected redistribution of broadcast content and coordinate appropriately authorized complaints.
        </p>
      </div>
      </div>
      </div>
      </div>
    </section>
  );
}

function ProtectionPriorities() {
  return (
    <section className="mt-5 grid grid-cols-1 items-center gap-7 rounded-2xl border border-[#c6d5d1]/70 bg-[#dce5e1] p-5 shadow-sm sm:mt-7 sm:gap-8 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:p-12">
      <div>
        <span className="mb-3 block text-[10px] font-extrabold uppercase tracking-[1.5px] text-[#658816] lg:hidden">
          Our approach
        </span>

        <h2 className="max-w-lg text-[29px] font-bold leading-tight tracking-[-1.3px] text-[#18324b] sm:text-3xl lg:text-[38px] lg:tracking-[-1.6px]">
          Protection around your priorities.
        </h2>

        <p className="mt-4 max-w-lg text-sm leading-7 text-[#587087] sm:text-base">
          Build a scope around your assets, rights, distribution windows and
          reporting requirements.
        </p>

        <a
          href="/contact"
          className="mt-6 inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#658c13] px-5 py-3 text-xs font-extrabold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#52750b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-600"
        >
          Plan your protection
          <ArrowRight size={16} />
        </a>
      </div>

      <div className="rounded-2xl border border-[#c8d6d2] bg-[#edf3ef]/70 p-5 sm:p-7 lg:p-8">
        <h3 className="text-lg font-bold tracking-tight text-[#18324b] sm:text-xl">
          Typical priorities
        </h3>

        <ul className="mt-5 space-y-4">
          {priorities.map((priority) => (
            <li
              key={priority}
              className="grid grid-cols-[17px_minmax(0,1fr)] items-start gap-3 text-sm leading-6 text-[#4f6a80] sm:text-[15px]"
            >
              <Check
                size={17}
                className="mt-1 shrink-0 text-[#719b16]"
                aria-hidden="true"
              />
              <span>{priority}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function RelevantSolutions() {
  return (
    <section
      id="film-solutions"
      className="relative overflow-hidden  px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-[1180px]">
        <span className="text-[10px] font-extrabold uppercase tracking-[1.8px] text-[#5c8214] sm:text-[11px]">
          Relevant solutions
        </span>

        <h2 className="mt-5 max-w-4xl text-[32px] font-bold leading-tight tracking-[-1.5px] text-[#18324b] sm:text-4xl md:text-5xl lg:text-[52px] lg:tracking-[-2.2px]">
          Build the right protection scope.
        </h2>

        <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-9 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <article
                key={solution.title}
                className="group flex min-w-0 flex-col rounded-2xl border border-[#c8d7d3] bg-[#e4ebe7]/90 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#a9c48b] hover:bg-[#f0f5f1] hover:shadow-xl hover:shadow-[#284149]/5 sm:p-6 lg:min-h-[278px] lg:p-7"
              >
                <div className="mb-5 flex h-8 w-8 items-center text-[#219fbc]">
                  <Icon size={23} strokeWidth={1.6} aria-hidden="true" />
                </div>

                <h3 className="text-lg font-bold leading-snug tracking-[-0.5px] text-[#19354d] sm:text-xl">
                  {solution.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#597184] sm:leading-[1.7]">
                  {solution.description}
                </p>

                <a
                  href={solution.href}
                  className="mt-6 inline-flex w-fit items-center gap-2 border-b border-[#658c13]/40 pb-1 text-[13px] font-medium text-[#638916] transition hover:border-[#4d700d] hover:text-[#45680c] sm:mt-auto sm:pt-5 sm:text-sm"
                >
                  Explore this solution
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function FilmEntertainment() {
  return (
    <main className="w-full overflow-hidden bg-[#eaf2f5] font-[Roboto,Arial,sans-serif] text-[#18324b]">
      <style>{`
        .film-particle-mask {
          -webkit-mask-image: radial-gradient(ellipse at 76% 55%, #000 0%, rgba(0,0,0,.9) 35%, transparent 73%);
          mask-image: radial-gradient(ellipse at 76% 55%, #000 0%, rgba(0,0,0,.9) 35%, transparent 73%);
        }
        .film-particle {
          opacity: .65;
          box-shadow: 0 0 5px rgba(139,182,48,.3);
          animation: film-particle-float 7s ease-in-out infinite;
          will-change: transform, opacity;
        }
        .film-hero-enter {
          animation: film-hero-enter .85s ease-out both;
        }
        @keyframes film-particle-float {
          0%, 100% { transform: translate3d(0,0,0) scale(.8); opacity: .25; }
          25% { transform: translate3d(5px,-12px,0) scale(1.1); opacity: .9; }
          55% { transform: translate3d(-4px,-23px,0) scale(.9); opacity: .55; }
          80% { transform: translate3d(7px,-9px,0) scale(1.15); opacity: .8; }
        }
        @keyframes film-hero-enter {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 640px) {
          .film-particle-mask {
            -webkit-mask-image: radial-gradient(ellipse at 76% 78%, #000 0%, rgba(0,0,0,.85) 25%, transparent 67%);
            mask-image: radial-gradient(ellipse at 76% 78%, #000 0%, rgba(0,0,0,.85) 25%, transparent 67%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .film-particle, .film-hero-enter {
            animation: none !important;
          }
        }
      `}</style>

      <div className="mx-auto w-[calc(100%-24px)] max-w-[1350px] pt-1.5 sm:w-[calc(100%-40px)] lg:w-[calc(100%-80px)]">
        <FilmHero />
        <ProtectionPriorities />
        <RelevantSolutions />

      </div>

      <HomeCTA />
    </main>
  );
}
