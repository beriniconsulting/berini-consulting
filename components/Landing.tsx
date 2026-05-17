"use client";

import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Mail, Phone } from "lucide-react";
import { insights, logos, navigation, projects, skills, stats, tools, valueBlocks } from "@/lib/data";

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
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Nav() {
  return (
    <header className="sticky top-5 z-50 px-5 pt-5">
      <nav className="mx-auto flex min-h-[74px] max-w-7xl items-center justify-between gap-5 rounded-full border border-white/10 bg-[#030814]/75 px-4 py-3 shadow-[0_24px_90px_rgba(0,0,0,.45)] backdrop-blur-2xl md:px-6">
        <a href="#home" className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-violetx to-cyanx font-display text-xl font-bold text-[#06101d] shadow-[0_0_44px_rgba(53,228,255,.28)]">
            YB
          </div>
          <div className="leading-tight">
            <div className="text-sm font-extrabold tracking-[.18em]">YACINE BERINI</div>
            <div className="text-[10px] tracking-[.34em] text-slate-500">CONSULTING</div>
          </div>
        </a>
        <div className="hidden items-center gap-7 text-sm text-slate-400 lg:flex">
          {navigation.map((item, index) => (
            <a key={item.href} href={item.href} className={index === 0 ? "text-white" : "transition hover:text-white"}>
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden items-center gap-3 rounded-full border border-violet-300/40 bg-violet-500/10 px-6 py-3 text-sm font-semibold transition hover:bg-violet-500/20 md:flex"
        >
          Discutons <ArrowRight size={16} />
        </a>
      </nav>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="luxury-border relative min-h-[560px] overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#071221]/75 shadow-[0_44px_140px_rgba(0,0,0,.55)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(157,101,255,.42),transparent_24%),radial-gradient(circle_at_66%_46%,rgba(53,228,255,.26),transparent_31%)]" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(255,255,255,.8)_1px,transparent_1.7px)] bg-[size:34px_34px] [mask-image:radial-gradient(circle_at_60%_40%,black,transparent_58%)]" />
      <motion.div
        animate={{ y: [-8, 18, -8], scale: [1, 1.03, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[12%] top-[15%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle_at_32%_28%,rgba(255,255,255,.95),rgba(53,228,255,.32)_14%,rgba(157,101,255,.52)_42%,rgba(6,12,28,.20)_70%)] shadow-[0_0_90px_rgba(53,228,255,.28),inset_-35px_-45px_90px_rgba(0,0,0,.62)]"
      >
        <div className="absolute left-[-115px] right-[-115px] top-[140px] h-[46px] rotate-[-17deg] rounded-full border-2 border-cyanx/45 shadow-[0_0_25px_rgba(53,228,255,.20)]" />
        <div className="absolute left-[-115px] right-[-115px] top-[126px] h-[46px] rotate-[-13deg] rounded-full border-2 border-violetx/55" />
      </motion.div>
      <div className="absolute bottom-[16%] right-[4%] flex items-end gap-3 opacity-80">
        {[150, 260, 210, 310].map((height, index) => (
          <motion.div
            key={height}
            style={{ height }}
            animate={{ scaleY: [1, 0.68, 1] }}
            transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.25, ease: "easeInOut" }}
            className="w-2.5 origin-bottom rounded-full bg-gradient-to-t from-cyanx to-transparent shadow-[0_0_18px_rgba(53,228,255,.45)]"
          />
        ))}
      </div>
      <div className="absolute bottom-9 right-9 w-[290px] rounded-3xl border border-white/15 bg-[#08172a]/80 p-6 shadow-[0_28px_80px_rgba(0,0,0,.45)] backdrop-blur-2xl">
        <div className="font-semibold">Mon rôle</div>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">
          Aligner les besoins métiers, les outils et les personnes pour des transformations utiles, adoptées et mesurables.
        </p>
      </div>
    </div>
  );
}

function LogoStrip() {
  return (
    <div className="mt-14">
      <p className="mb-5 text-sm text-slate-500">Ils m’ont fait confiance</p>
      <div className="flex flex-wrap gap-5">
        {logos.map((logo) => (
          <div
            key={logo}
            className="grid h-14 min-w-[138px] place-items-center rounded-2xl border border-white/10 bg-white/[0.035] px-7 font-semibold tracking-wide text-slate-400 transition hover:-translate-y-1 hover:border-cyanx/30 hover:text-white"
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
}

function StatBand() {
  return (
    <Reveal className="mt-6 grid overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#071221]/70 shadow-[0_30px_110px_rgba(0,0,0,.4)] backdrop-blur-xl md:grid-cols-5">
      {stats.map(({ icon: Icon, value, label }) => (
        <div key={value} className="border-b border-white/10 p-8 text-center last:border-r-0 md:border-b-0 md:border-r">
          <Icon className="mx-auto mb-3 text-violet-300" />
          <div className="font-display text-3xl font-bold tracking-[-.05em]">{value}</div>
          <div className="mt-2 text-sm leading-relaxed text-slate-300">{label}</div>
        </div>
      ))}
    </Reveal>
  );
}

function SectionTitle({
  label,
  title,
  text,
}: {
  label: string;
  title: React.ReactNode;
  text?: string;
}) {
  return (
    <div className="mb-12 grid items-end gap-10 lg:grid-cols-[.8fr_1.2fr]">
      <Reveal>
        <div className="mb-4 text-xs font-bold uppercase tracking-[.22em] text-cyan-200">{label}</div>
        <h2 className="font-display text-[clamp(40px,5vw,68px)] font-medium leading-none tracking-[-.065em]">
          {title}
        </h2>
      </Reveal>
      {text && (
        <Reveal delay={0.08}>
          <p className="max-w-2xl leading-relaxed text-slate-300">{text}</p>
        </Reveal>
      )}
    </div>
  );
}

function ValueCard({ title, text, index }: { title: string; text: string; index: number }) {
  return (
    <Reveal delay={index * 0.04}>
      <div className="premium-card luxury-border min-h-[210px] rounded-3xl p-6 transition duration-500 hover:-translate-y-2 hover:border-cyanx/35">
        <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl border border-cyanx/25 bg-cyanx/10 font-display text-cyan-100">
          0{index + 1}
        </div>
        <h3 className="font-display text-2xl font-semibold leading-tight tracking-[-.05em]">{title}</h3>
        <p className="mt-4 text-sm leading-relaxed text-slate-400">{text}</p>
      </div>
    </Reveal>
  );
}

function SkillCard({ icon: Icon, title, text, index }: any) {
  return (
    <Reveal delay={index * 0.04}>
      <div className="premium-card group min-h-[230px] rounded-3xl p-6 transition duration-500 hover:-translate-y-2 hover:border-cyanx/35">
        <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl border border-cyanx/20 bg-cyanx/10 text-cyan-200 transition group-hover:scale-110">
          <Icon size={22} />
        </div>
        <h3 className="font-display text-lg font-semibold leading-tight tracking-[-0.04em]">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">{text}</p>
      </div>
    </Reveal>
  );
}

function ProjectCard({ project, index }: any) {
  return (
    <Reveal delay={index * 0.05}>
      <article className="min-w-[330px] max-w-[360px] overflow-hidden rounded-3xl border border-white/10 bg-[#081322]/80 shadow-[0_24px_70px_rgba(0,0,0,.35)] transition duration-500 hover:-translate-y-2 hover:border-cyanx/30">
        <div className="relative h-40 overflow-hidden bg-gradient-to-br from-violetx/40 via-blue-500/20 to-cyanx/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,rgba(53,228,255,.55),transparent_30%)]" />
          <div className="absolute inset-0 animate-pulse bg-[linear-gradient(115deg,transparent_0_42%,rgba(255,255,255,.18)_50%,transparent_58%)] opacity-30" />
          <div className="absolute bottom-5 left-5 font-display text-3xl font-bold tracking-[-0.06em]">{project.logo}</div>
        </div>
        <div className="p-5">
          <p className="text-sm text-cyan-100/60">{project.org}</p>
          <h3 className="mt-1 font-display text-xl font-semibold leading-tight tracking-[-0.05em]">{project.title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">{project.challenge}</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {project.actions.slice(0, 2).map((action: string) => (
              <li key={action} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyanx" />
                <span>{action}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function SoftSkillsRadar() {
  return (
    <Reveal className="relative flex min-h-[320px] items-center justify-center rounded-3xl border border-white/10 bg-[#071221]/70 p-6">
      <h3 className="absolute left-6 top-6 font-semibold">Soft skills clés</h3>
      <div className="flex h-[260px] w-[260px] items-center justify-center rounded-full border border-white/10 bg-[radial-gradient(circle,rgba(53,228,255,.16),transparent_60%)]">
        <motion.div
          animate={{ rotate: [45, 405] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          className="h-[190px] w-[190px] rotate-45 border-2 border-cyanx/50 bg-cyanx/10 shadow-[0_0_50px_rgba(53,228,255,.12)]"
        />
      </div>
      <div className="absolute left-1/2 top-16 -translate-x-1/2 text-xs text-slate-300">Communication</div>
      <div className="absolute right-6 top-1/2 text-xs text-slate-300">Leadership</div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs text-slate-300">Adaptabilité</div>
      <div className="absolute left-6 top-1/2 text-xs text-slate-300">Analyse</div>
    </Reveal>
  );
}

function ToolsSection() {
  return (
    <section className="pb-24">
      <SectionTitle label="Outils & technologies" title="Les bons outils pour les bons usages." />
      <Reveal>
        <div className="no-scrollbar flex gap-4 overflow-x-auto pb-3">
          {tools.map((tool) => (
            <div
              key={tool}
              className="grid h-[92px] min-w-[150px] place-items-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-center text-sm font-semibold text-slate-300 transition hover:-translate-y-1 hover:border-cyanx/30 hover:text-white"
            >
              {tool}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default function Landing() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-night text-white">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_80%_7%,rgba(95,156,255,.25),transparent_34%),radial-gradient(circle_at_7%_18%,rgba(157,101,255,.20),transparent_31%),radial-gradient(circle_at_55%_92%,rgba(53,228,255,.11),transparent_36%)]" />
      <div className="pointer-events-none fixed right-[-130px] top-16 z-0 h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-[90px]" />
      <div className="pointer-events-none fixed left-[-160px] top-[38%] z-0 h-[480px] w-[480px] rounded-full bg-violet-500/20 blur-[100px]" />

      <Nav />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        <section id="home" className="grid items-center gap-10 pb-10 pt-24 lg:grid-cols-[1fr_.98fr]">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyanx/25 bg-cyanx/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[.18em] text-cyan-100">
                <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_18px_rgba(167,139,250,.9)]" />
                Consultant transformation digitale
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-8 font-display text-[clamp(58px,7vw,96px)] font-medium leading-[.96] tracking-[-0.075em]">
                Transformer aujourd’hui.
                <br />
                <span className="bg-[linear-gradient(110deg,#fff,#b9c9ff_28%,#9d65ff_45%,#35e4ff_68%,#fff)] bg-[length:220%_auto] bg-clip-text text-transparent">
                  Performer demain.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-300">
                J’accompagne les organisations dans leurs transformations digitales, l’adoption des outils, l’optimisation des usages et l’intégration de l’IA générative pour créer des impacts durables.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href="#realisations" className="flex items-center gap-3 rounded-full bg-gradient-to-r from-violetx to-cyanx px-7 py-4 font-semibold shadow-[0_24px_80px_rgba(53,228,255,.18)]">
                  Voir mes réalisations <ArrowRight size={18} />
                </a>
                <a href="#expertises" className="rounded-full border border-white/15 bg-white/[0.035] px-7 py-4 font-semibold text-slate-200">
                  Comprendre mon approche
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <LogoStrip />
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <HeroVisual />
          </Reveal>
        </section>

        <StatBand />

        <section className="py-24">
          <SectionTitle
            label="Ce que je peux apporter"
            title={
              <>
                Je ne vends pas un profil. Je vends une capacité à faire réussir vos transformations.
              </>
            }
            text="Le site doit convaincre rapidement un recruteur ou un client : mon intervention crée de la clarté, de l’adoption et de la valeur opérationnelle."
          />
          <div className="grid gap-5 md:grid-cols-4">
            {valueBlocks.map((block, index) => (
              <ValueCard key={block.title} {...block} index={index} />
            ))}
          </div>
        </section>

        <section id="expertises" className="pb-24">
          <SectionTitle
            label="Mes compétences"
            title={
              <>
                Un équilibre entre <span className="text-cyan-200">stratégie, outils et humain.</span>
              </>
            }
            text="Une approche complète qui couvre la vision stratégique, l’exécution opérationnelle, l’adoption par les équipes et la mesure d’impact."
          />

          <div className="grid gap-6 lg:grid-cols-[1.35fr_.65fr]">
            <div className="grid gap-4 md:grid-cols-5">
              {skills.map((skill, index) => (
                <SkillCard key={skill.title} {...skill} index={index} />
              ))}
            </div>
            <SoftSkillsRadar />
          </div>
        </section>

        <section id="realisations" className="pb-24">
          <SectionTitle
            label="Réalisations phares"
            title={
              <>
                Des projets concrets, des <span className="text-violet-300">impacts réels.</span>
              </>
            }
            text="Un aperçu des environnements où j’ai accompagné des transformations, structuré les usages et sécurisé l’adoption."
          />

          <div className="no-scrollbar flex snap-x gap-5 overflow-x-auto pb-5">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>

        <section id="approche" className="pb-24">
          <SectionTitle
            label="Approche"
            title="Faire adopter, pas seulement déployer."
            text="Je structure les transformations autour de l’usage réel : comprendre, tester, former, mesurer et améliorer."
          />

          <div className="grid gap-4 md:grid-cols-5">
            {["Cadrer", "Structurer", "Accompagner", "Mesurer", "Ancrer"].map((step, index) => (
              <Reveal key={step} delay={index * 0.04}>
                <div className="premium-card min-h-[180px] rounded-3xl p-6">
                  <div className="mb-5 grid h-10 w-10 place-items-center rounded-2xl border border-cyanx/20 bg-cyanx/10 font-bold text-cyan-200">
                    {index + 1}
                  </div>
                  <h3 className="font-display text-xl font-semibold tracking-[-.04em]">{step}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {
                      [
                        "Besoins, impacts, processus et parties prenantes.",
                        "Supports, portail, documentation, gouvernance et communication.",
                        "Formations, ateliers, communautés et relais terrain.",
                        "KPI d’adoption, retours utilisateurs et tableaux de bord.",
                        "Autonomie, knowledge management et transformation durable.",
                      ][index]
                    }
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <ToolsSection />

        <section id="insights" className="pb-24">
          <SectionTitle
            label="Insights"
            title="Une vision terrain des transformations."
            text="Des angles de réflexion courts pour montrer la maturité, la vision et l’expérience opérationnelle."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {insights.map((insight, index) => (
              <Reveal key={insight.title} delay={index * 0.05}>
                <div className="min-h-[290px] rounded-3xl border border-white/10 bg-[#071221]/70 p-7 transition hover:-translate-y-2 hover:border-violet-300/30">
                  <span className="mb-6 inline-flex rounded-full border border-cyanx/20 px-3 py-1.5 text-xs text-cyan-100">
                    {insight.label}
                  </span>
                  <h3 className="font-display text-2xl leading-tight tracking-[-.05em]">{insight.title}</h3>
                  <p className="mt-4 leading-relaxed text-slate-400">{insight.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className="pb-16">
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-6 rounded-[2rem] border border-white/10 bg-gradient-to-r from-violetx/15 to-cyanx/10 p-8 shadow-[0_30px_110px_rgba(0,0,0,.4)] md:flex-row">
              <div className="flex items-center gap-5">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-violetx to-cyanx font-bold text-[#07101d]">
                  YB
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-[-.04em]">
                    Discutons de votre prochaine transformation.
                  </h3>
                  <p className="mt-1 text-slate-400">Disponible pour de nouvelles missions et collaborations.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <a href="mailto:contact@beriniconsulting.fr" className="rounded-full bg-gradient-to-r from-violetx to-cyanx px-7 py-4 font-semibold">
                  Me contacter <ArrowRight size={16} className="ml-2 inline" />
                </a>
                <a href="https://www.linkedin.com" className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.04]">
                  <Linkedin size={19} />
                </a>
                <a href="tel:+33000000000" className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.04]">
                  <Phone size={19} />
                </a>
                <a href="mailto:contact@beriniconsulting.fr" className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.04]">
                  <Mail size={19} />
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </main>
  );
}
