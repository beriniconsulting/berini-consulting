"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Linkedin, Mail, Phone } from "lucide-react";
import { insights, logos, offers, projects, skills, stats, tools } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 34, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ duration: 0.85, delay, ease: [0.19, 1, 0.22, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Nav() {
  const items = ["Accueil", "Expertises", "Réalisations", "Approche", "Insights", "Contact"];
  const hrefs = ["#home", "#expertises", "#realisations", "#approche", "#insights", "#contact"];

  return (
    <header className="fixed left-0 right-0 top-5 z-50 px-5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 rounded-full border border-white/10 bg-[#050914]/75 px-5 py-3 shadow-[0_24px_90px_rgba(0,0,0,.45)] backdrop-blur-2xl">
        <a href="#home" className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-cyanx to-limex font-display font-bold text-[#06101d] shadow-[0_0_44px_rgba(49,229,255,.26)]">
            YB
          </div>
          <div className="leading-tight">
            <div className="text-sm font-extrabold tracking-[.18em]">YACINE BERINI</div>
            <div className="text-[10px] tracking-[.34em] text-slate-500">CONSULTING</div>
          </div>
        </a>

        <div className="hidden items-center gap-6 text-sm text-slate-400 lg:flex">
          {items.map((item, index) => (
            <a key={item} href={hrefs[index]} className="transition hover:text-white">
              {item}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full border border-cyanx/30 bg-cyanx/10 px-5 py-3 text-sm font-semibold transition hover:bg-cyanx/15 md:block"
        >
          Échanger
        </a>
      </nav>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="premium-border relative min-h-[520px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#071221]/80 shadow-premium">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(49,229,255,.22),transparent_26%),radial-gradient(circle_at_64%_47%,rgba(191,255,99,.14),transparent_32%)]" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(255,255,255,.7)_1px,transparent_1.6px)] bg-[size:34px_34px] [mask-image:radial-gradient(circle_at_62%_40%,black,transparent_60%)]" />

      <motion.div
        animate={{ y: [-12, 16, -12], scale: [1, 1.03, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[12%] top-[16%] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,.95),rgba(49,229,255,.28)_14%,rgba(141,108,255,.38)_44%,rgba(4,12,30,.22)_72%)] shadow-[0_0_80px_rgba(49,229,255,.26),inset_-35px_-45px_90px_rgba(0,0,0,.62)]"
      >
        <div className="absolute left-[-110px] right-[-110px] top-[126px] h-[42px] rotate-[-17deg] rounded-full border-2 border-cyanx/40 shadow-glow" />
        <div className="absolute left-[-110px] right-[-110px] top-[114px] h-[42px] rotate-[-13deg] rounded-full border-2 border-limex/30" />
      </motion.div>

      <div className="absolute bottom-[16%] right-[5%] flex items-end gap-3 opacity-80">
        {[140, 250, 190, 300].map((height, index) => (
          <motion.div
            key={height}
            style={{ height }}
            animate={{ scaleY: [0.7, 1, 0.7], opacity: [0.45, 0.9, 0.45] }}
            transition={{ duration: 2.6, repeat: Infinity, delay: index * 0.2, ease: "easeInOut" }}
            className="w-2.5 origin-bottom rounded-full bg-gradient-to-t from-cyanx to-transparent shadow-[0_0_18px_rgba(49,229,255,.45)]"
          />
        ))}
      </div>

      <div className="absolute bottom-8 right-8 w-[290px] rounded-3xl border border-white/15 bg-[#08172a]/80 p-6 shadow-[0_28px_80px_rgba(0,0,0,.45)] backdrop-blur-2xl">
        <div className="font-semibold">Promesse client</div>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">
          Aligner outils, métiers et utilisateurs pour créer des transformations réellement adoptées.
        </p>
      </div>
    </div>
  );
}

function SectionTitle({ label, title, text }: { label: string; title: React.ReactNode; text?: string }) {
  return (
    <div className="mb-12 grid items-end gap-10 lg:grid-cols-[.85fr_1.15fr]">
      <Reveal>
        <div className="mb-4 text-xs font-bold uppercase tracking-[.22em] text-cyanx">{label}</div>
        <h2 className="font-display text-[clamp(40px,5vw,70px)] font-semibold leading-none tracking-[-.07em]">
          {title}
        </h2>
      </Reveal>
      {text && (
        <Reveal delay={0.08}>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-300">{text}</p>
        </Reveal>
      )}
    </div>
  );
}

function StatBand() {
  return (
    <Reveal>
      <div className="grid overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#071221]/70 shadow-premium backdrop-blur-xl md:grid-cols-4">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={value} className="border-b border-white/10 p-8 text-center last:border-r-0 md:border-b-0 md:border-r">
            <Icon className="mx-auto mb-3 text-limex" />
            <div className="font-display text-4xl font-bold tracking-[-.06em]">{value}</div>
            <div className="mt-2 text-sm leading-relaxed text-slate-300">{label}</div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`premium-card premium-border rounded-3xl p-6 ${className}`}>{children}</div>;
}

export default function Landing() {
  const { scrollYProgress } = useScroll();
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <motion.div style={{ y: orbY }} className="pointer-events-none fixed right-[-150px] top-20 z-0 h-[520px] w-[520px] rounded-full bg-cyanx/15 blur-[90px]" />
      <motion.div style={{ y: orbY }} className="pointer-events-none fixed left-[-180px] top-[36%] z-0 h-[500px] w-[500px] rounded-full bg-violetx/15 blur-[100px]" />

      <Nav />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 md:px-8">
        <section id="home" className="grid min-h-[calc(100vh-8rem)] items-center gap-10 pb-12 lg:grid-cols-[1fr_.96fr]">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyanx/25 bg-cyanx/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-cyan-100">
                <span className="h-2 w-2 rounded-full bg-limex shadow-[0_0_18px_rgba(191,255,99,.8)]" />
                Consultant transformation digitale
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-8 font-display text-[clamp(56px,8vw,104px)] font-semibold leading-[.90] tracking-[-0.08em]">
                Transformer les outils
                <br />
                <span className="bg-[linear-gradient(110deg,#fff,#cfe9ff_25%,#31e5ff_48%,#bfff63_72%,#fff)] bg-[length:220%_auto] bg-clip-text text-transparent">
                  en usages réels.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-300">
                J’accompagne les organisations dans leurs transformations digitales, l’adoption des outils, l’optimisation des usages et l’intégration concrète de l’IA générative.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href="#realisations" className="rounded-full bg-gradient-to-r from-cyanx to-limex px-7 py-4 font-bold text-[#06101d] shadow-[0_24px_80px_rgba(49,229,255,.18)]">
                  Voir mes réalisations <ArrowRight size={18} className="ml-2 inline" />
                </a>
                <a href="#expertises" className="rounded-full border border-white/15 bg-white/[0.035] px-7 py-4 font-semibold text-slate-200">
                  Comprendre mon offre
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-14">
                <p className="mb-5 text-sm text-slate-500">Ils m’ont fait confiance</p>
                <div className="flex flex-wrap gap-4">
                  {logos.map((logo) => (
                    <div key={logo} className="grid h-14 min-w-[130px] place-items-center rounded-2xl border border-white/10 bg-white/[0.035] px-6 font-semibold text-slate-400 transition hover:-translate-y-1 hover:border-cyanx/30 hover:text-white">
                      {logo}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <HeroVisual />
          </Reveal>
        </section>

        <StatBand />

        <section className="py-24">
          <SectionTitle
            label="Ce que je vends"
            title="Une capacité à faire réussir vos transformations."
            text="Un recruteur ou client doit comprendre immédiatement ce que j’apporte : de la clarté, de l’adoption, du pilotage et une transformation utile sur le terrain."
          />

          <div className="grid gap-5 md:grid-cols-4">
            {offers.map((offer, index) => (
              <Reveal key={offer.title} delay={index * 0.04}>
                <Card className="min-h-[220px] transition duration-500 hover:-translate-y-2 hover:border-cyanx/30">
                  <div className="mb-6 grid h-11 w-11 place-items-center rounded-2xl border border-cyanx/25 bg-cyanx/10 font-display text-cyan-100">0{index + 1}</div>
                  <h3 className="font-display text-2xl font-semibold leading-tight tracking-[-.05em]">{offer.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-400">{offer.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="expertises" className="pb-24">
          <SectionTitle
            label="Expertises"
            title={
              <>
                Un profil hybride : <span className="text-cyanx">outils, métiers et adoption.</span>
              </>
            }
            text="Je ne fais pas que de l’IA. Mon offre couvre la transformation digitale, l’AMOA, le change management, la formation, les outils collaboratifs et l’adoption des usages."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skills.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={index * 0.04}>
                <Card className="min-h-[245px] transition duration-500 hover:-translate-y-2 hover:border-cyanx/30">
                  <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl border border-cyanx/20 bg-cyanx/10 text-cyan-200">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold tracking-[-.05em]">{title}</h3>
                  <p className="mt-4 leading-relaxed text-slate-400">{text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="realisations" className="pb-24">
          <SectionTitle
            label="Réalisations"
            title="Des missions concrètes, orientées impact."
            text="Chaque réalisation montre ce que j’ai apporté : structuration, accompagnement, pilotage, formation, adoption et amélioration des usages."
          />

          <div className="no-scrollbar flex gap-5 overflow-x-auto pb-4">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.04}>
                <article className="premium-card min-h-[430px] w-[340px] shrink-0 overflow-hidden rounded-3xl transition duration-500 hover:-translate-y-2 hover:border-cyanx/30">
                  <div className="relative h-36 bg-gradient-to-br from-cyanx/20 via-blue-500/10 to-limex/10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(49,229,255,.45),transparent_32%)]" />
                    <div className="absolute bottom-5 left-5 font-display text-3xl font-bold tracking-[-.06em]">{project.client}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-semibold leading-tight tracking-[-.05em]">{project.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-slate-400">{project.text}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300">{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="approche" className="pb-24">
          <SectionTitle label="Méthode" title="Faire adopter, pas seulement déployer." text="Une transformation réussie repose sur les usages, pas uniquement sur la technologie." />

          <div className="grid gap-4 md:grid-cols-5">
            {["Cadrer", "Structurer", "Accompagner", "Mesurer", "Ancrer"].map((step, index) => (
              <Reveal key={step} delay={index * 0.04}>
                <Card className="min-h-[190px]">
                  <div className="mb-5 grid h-10 w-10 place-items-center rounded-2xl border border-limex/25 bg-limex/10 font-bold text-limex">{index + 1}</div>
                  <h3 className="font-display text-xl font-semibold tracking-[-.04em]">{step}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {[
                      "Besoins, impacts, irritants et parties prenantes.",
                      "Supports, portail, documentation et gouvernance.",
                      "Formations, ateliers, communautés et relais terrain.",
                      "KPI d’adoption, retours utilisateurs et tableaux de bord.",
                      "Autonomie, knowledge management et transformation durable.",
                    ][index]}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="pb-24">
          <SectionTitle label="Outils" title="Un environnement orienté projet, adoption et contenus." />
          <Reveal>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span key={tool} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 transition hover:-translate-y-1 hover:border-cyanx/30 hover:text-white">
                  {tool}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        <section id="insights" className="pb-24">
          <SectionTitle label="Insights" title="Une vision terrain des transformations." text="Ces contenus servent à renforcer ton expertise et montrer que tu comprends les vrais enjeux d’adoption." />

          <div className="grid gap-5 md:grid-cols-3">
            {insights.map((insight, index) => (
              <Reveal key={insight.title} delay={index * 0.05}>
                <Card className="min-h-[290px] transition duration-500 hover:-translate-y-2 hover:border-limex/25">
                  <span className="mb-6 inline-flex rounded-full border border-cyanx/20 px-3 py-1.5 text-xs text-cyan-100">{insight.label}</span>
                  <h3 className="font-display text-2xl leading-tight tracking-[-.05em]">{insight.title}</h3>
                  <p className="mt-4 leading-relaxed text-slate-400">{insight.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className="pb-16">
          <Reveal>
            <div className="premium-border flex flex-col items-center justify-between gap-6 rounded-[2rem] border border-white/10 bg-gradient-to-r from-cyanx/10 to-limex/5 p-8 shadow-premium md:flex-row">
              <div>
                <h3 className="font-display text-3xl font-semibold tracking-[-.05em]">Discutons de votre prochaine transformation.</h3>
                <p className="mt-2 text-slate-400">Disponible pour des missions moyen et long terme en transformation digitale, AMOA, change et adoption IA.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="mailto:contact@beriniconsulting.fr" className="rounded-full bg-gradient-to-r from-cyanx to-limex px-7 py-4 font-bold text-[#06101d]">
                  Me contacter <ArrowRight size={16} className="ml-2 inline" />
                </a>
                <a href="https://www.linkedin.com" className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.04]"><Linkedin size={19} /></a>
                <a href="tel:+33000000000" className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.04]"><Phone size={19} /></a>
                <a href="mailto:contact@beriniconsulting.fr" className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.04]"><Mail size={19} /></a>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </main>
  );
}
