import {
  BarChart3,
  Brain,
  Layers,
  ChartLine,
  Network,
  Rocket,
  Sparkles,
  Target,
  Timer,
  Users,
} from "lucide-react";

export const navigation = [
  { label: "Accueil", href: "#home" },
  { label: "Expertises", href: "#expertises" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Approche", href: "#approche" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export const logos = ["SNCF", "URSSAF", "Talan", "Aurore", "Microsoft 365", "SharePoint"];

export const stats = [
  { icon: Users, value: "+1400", label: "Collaborateurs accompagnés" },
  { icon: Timer, value: "+50", label: "Sessions, ateliers & webinaires" },
  { icon: Rocket, value: "+32K", label: "Équipements mobiles coordonnés" },
  { icon: BarChart3, value: "30M€", label: "Budget SI suivi" },
  { icon: Target, value: "Impact", label: "Usages durables et mesurables" },
];

export const valueBlocks = [
  {
    title: "Adoption des outils",
    text: "Transformer des déploiements techniques en usages concrets, compris et adoptés par les équipes.",
  },
  {
    title: "Acculturation IA",
    text: "Former les collaborateurs à comprendre, tester et intégrer l’IA générative dans leur quotidien professionnel.",
  },
  {
    title: "AMOA & pilotage",
    text: "Cadrer les besoins, coordonner les acteurs, structurer les processus et sécuriser la trajectoire projet.",
  },
  {
    title: "Change management",
    text: "Concevoir les dispositifs de communication, formation, animation et accompagnement terrain.",
  },
];

export const skills = [
  {
    icon: Brain,
    title: "Stratégie & Transformation",
    text: "Vision, roadmap, conduite du changement, AMOA, alignement métiers & IT.",
  },
  {
    icon: Layers,
    title: "Outils & Plateformes",
    text: "Microsoft 365, SharePoint, CRM, ticketing, IA générative, automatisation.",
  },
  {
    icon: Network,
    title: "Adoption & Accompagnement",
    text: "Formations, communautés, communication, supports utilisateurs, relais terrain.",
  },
  {
    icon: ChartLine,
    title: "Data & Pilotage",
    text: "Suivi de l’adoption, reporting, indicateurs, mesure d’impact, Power BI, Excel.",
  },
  {
    icon: Sparkles,
    title: "Leadership & Collaboration",
    text: "Coordination d’équipes, facilitation, influence transverse et animation terrain.",
  },
];

export const projects = [
  {
    logo: "URSSAF",
    title: "Adoption IA générative & Ticketing",
    org: "Secteur public",
    challenge:
      "Accompagner l’adoption d’une IA générative interne et d’un outil de ticketing auprès de plus de 800 collaborateurs.",
    actions: [
      "Création d’un portail IA interne : accueil, dictionnaire IA, agents IA, relais terrain et organigramme projet.",
      "Animation de formations, ateliers, portes ouvertes et sessions d’acculturation IA générative.",
      "Mise en place de phases de test utilisateur pour adapter les outils aux besoins métiers.",
    ],
    tags: ["+800 utilisateurs", "IA", "Change", "Formation"],
  },
  {
    logo: "SNCF",
    title: "Pilotage transverse SI",
    org: "Transport",
    challenge:
      "Sécuriser le pilotage financier et la visibilité projet sur un programme SI stratégique.",
    actions: [
      "Suivi et pilotage d’un budget de 30M€.",
      "Reportings, tableaux de bord, suivi des écarts et fiabilisation des données.",
      "Optimisation des processus de coordination IT / direction financière.",
    ],
    tags: ["30M€", "PMO", "SI", "Reporting"],
  },
  {
    logo: "Aurore",
    title: "CRM & modernisation collaborative",
    org: "Association",
    challenge:
      "Moderniser les outils collaboratifs et structurer les usages autour d’un CRM et de Microsoft 365.",
    actions: [
      "Déploiement Microsoft 365, SharePoint et CRM interne.",
      "Recueil des besoins métiers autour des processus et de la gestion locative.",
      "Structuration de procédures, bases de connaissances et supports utilisateurs.",
    ],
    tags: ["+300 utilisateurs", "CRM", "M365", "AMOA"],
  },
  {
    logo: "SNCF",
    title: "Déploiement national mobile",
    org: "Mobilité terrain",
    challenge:
      "Coordonner un renouvellement national d’équipements mobiles et accompagner les relais locaux.",
    actions: [
      "Coordination du renouvellement de 32 000 équipements mobiles.",
      "Création d’un site SharePoint centralisant ressources, processus et supports.",
      "Animation du réseau de relais locaux et accompagnement des usages.",
    ],
    tags: ["32K devices", "SharePoint", "Relais terrain"],
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
  "Portails collaboratifs",
  "Knowledge management",
];

export const insights = [
  {
    label: "IA & adoption",
    title: "Pourquoi l’adoption est le vrai défi des projets IA",
    text:
      "Un outil IA ne crée de valeur que si les utilisateurs savent quand, pourquoi et comment l’utiliser. L’enjeu est moins technique qu’organisationnel.",
  },
  {
    label: "Digital workplace",
    title: "L’outil seul ne transforme jamais une organisation",
    text:
      "La valeur vient de la combinaison processus, formation, communication, relais terrain et pilotage de l’adoption réelle.",
  },
  {
    label: "Change management",
    title: "Accompagner les usages plutôt que déployer des outils",
    text:
      "La réussite repose sur l’appropriation, l’autonomie, l’écoute terrain et la capacité à mesurer ce qui change réellement.",
  },
];
