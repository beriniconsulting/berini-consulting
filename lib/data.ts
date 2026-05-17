import {
  BarChart3,
  Brain,
  Layers,
  Network,
  Rocket,
  Sparkles,
  Target,
  Timer,
  Users,
  Workflow,
} from "lucide-react";

export const logos = ["SNCF", "URSSAF", "Talan", "Association Aurore", "Microsoft 365", "SharePoint"];

export const stats = [
  { icon: Users, value: "+1400", label: "Collaborateurs accompagnés" },
  { icon: Timer, value: "+50", label: "Sessions, ateliers & webinaires" },
  { icon: Rocket, value: "32K", label: "Équipements mobiles coordonnés" },
  { icon: BarChart3, value: "30M€", label: "Budget SI suivi" },
];

export const offers = [
  {
    title: "Adoption des outils",
    text: "Faire en sorte que les collaborateurs utilisent réellement les solutions déployées.",
  },
  {
    title: "Acculturation IA",
    text: "Former les équipes à comprendre, tester et intégrer l’IA générative dans leur quotidien.",
  },
  {
    title: "AMOA & pilotage",
    text: "Cadrer les besoins, coordonner les acteurs, structurer les processus et suivre les indicateurs.",
  },
  {
    title: "Change management",
    text: "Construire des dispositifs de formation, communication, relais terrain et accompagnement.",
  },
];

export const skills = [
  {
    icon: Workflow,
    title: "Transformation digitale",
    text: "Déploiement d’outils, digital workplace, modernisation des processus et optimisation des usages.",
  },
  {
    icon: Target,
    title: "AMOA & coordination",
    text: "Recueil des besoins, cadrage fonctionnel, ateliers métiers, gouvernance et reporting.",
  },
  {
    icon: Network,
    title: "Change & adoption",
    text: "Formations, communautés, supports utilisateurs, relais terrain et communication projet.",
  },
  {
    icon: Brain,
    title: "IA générative",
    text: "Acculturation, agents IA métier, ateliers pratiques, tests utilisateurs et portail IA.",
  },
  {
    icon: Layers,
    title: "Digital workplace",
    text: "SharePoint, Teams, M365, bases de connaissances, documentation et portails internes.",
  },
  {
    icon: Sparkles,
    title: "Formation & facilitation",
    text: "Canva, Gamma, NotebookLM, tutoriels, webinaires, ateliers et animation de communautés.",
  },
];

export const projects = [
  {
    client: "URSSAF",
    title: "Adoption IA générative & ticketing",
    text: "Accompagnement de +800 collaborateurs, création d’un portail IA, dictionnaire IA, agents IA, relais terrain, formations et tests utilisateurs.",
    tags: ["+800 collaborateurs", "IA générative", "Change", "Formation"],
  },
  {
    client: "SNCF / Talan",
    title: "Pilotage transverse SI",
    text: "Coordination projet, suivi d’un budget de 30M€, reporting, tableaux de bord et optimisation des processus IT / finance.",
    tags: ["30M€", "PMO", "Reporting", "SI"],
  },
  {
    client: "Association Aurore",
    title: "CRM & modernisation collaborative",
    text: "Déploiement Microsoft 365, SharePoint et CRM, recueil des besoins métiers, documentation et base de connaissances.",
    tags: ["+300 collaborateurs", "CRM", "M365", "AMOA"],
  },
  {
    client: "SNCF Voyageurs",
    title: "Déploiement national mobile",
    text: "Coordination de 32 000 équipements mobiles, site SharePoint, animation de relais locaux et accompagnement terrain.",
    tags: ["32K équipements", "SharePoint", "Relais terrain"],
  },
];

export const tools = [
  "Microsoft 365",
  "SharePoint",
  "Teams",
  "OneDrive",
  "Power BI",
  "Excel",
  "Jira",
  "Asana",
  "Trello",
  "Canva",
  "Gamma",
  "NotebookLM",
  "IA générative",
  "Agents IA métier",
  "Knowledge management",
];

export const insights = [
  {
    label: "IA & adoption",
    title: "Pourquoi l’adoption est le vrai défi des projets IA",
    text: "Un outil IA ne crée de valeur que si les utilisateurs comprennent quand, pourquoi et comment l’utiliser.",
  },
  {
    label: "Transformation digitale",
    title: "L’outil seul ne transforme jamais une organisation",
    text: "La valeur vient de la combinaison processus, communication, formation, relais terrain et pilotage.",
  },
  {
    label: "Change management",
    title: "Accompagner les usages plutôt que déployer des outils",
    text: "La réussite repose sur l’appropriation, l’autonomie et la mesure de l’adoption réelle.",
  },
];
