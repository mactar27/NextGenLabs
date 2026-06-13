import { Code2, Smartphone, BrainCircuit, Palette, Database, ShieldCheck } from "lucide-react"
import type { TranslationKey } from "@/lib/i18n"

export type Service = {
  slug: string
  icon: typeof Code2
  titleKey: TranslationKey
  descKey: TranslationKey
  tech: string[]
  benefits: { fr: string; en: string }[]
}

export const services: Service[] = [
  {
    slug: "web-development",
    icon: Code2,
    titleKey: "services.web.title",
    descKey: "services.web.desc",
    tech: ["Next.js", "React", "Node.js", "TypeScript", "Tailwind CSS"],
    benefits: [
      { fr: "Sites rapides et optimisés SEO", en: "Fast, SEO-optimized websites" },
      { fr: "Applications métier sur mesure", en: "Custom business applications" },
      { fr: "Plateformes web évolutives", en: "Scalable web platforms" },
    ],
  },
  {
    slug: "mobile-development",
    icon: Smartphone,
    titleKey: "services.mobile.title",
    descKey: "services.mobile.desc",
    tech: ["React Native", "Flutter", "Swift", "Kotlin"],
    benefits: [
      { fr: "Applications Android & iOS natives", en: "Native Android & iOS apps" },
      { fr: "Solutions cross-platform", en: "Cross-platform solutions" },
      { fr: "Expérience mobile fluide", en: "Smooth mobile experience" },
    ],
  },
  {
    slug: "artificial-intelligence",
    icon: BrainCircuit,
    titleKey: "services.ai.title",
    descKey: "services.ai.desc",
    tech: ["Python", "OpenAI", "TensorFlow", "LangChain", "Vector DB"],
    benefits: [
      { fr: "Automatisation intelligente", en: "Intelligent automation" },
      { fr: "Assistants conversationnels", en: "Conversational assistants" },
      { fr: "Systèmes prédictifs", en: "Predictive systems" },
    ],
  },
  {
    slug: "ui-ux-design",
    icon: Palette,
    titleKey: "services.design.title",
    descKey: "services.design.desc",
    tech: ["Figma", "Framer", "Design Systems", "Prototyping"],
    benefits: [
      { fr: "Recherche utilisateur approfondie", en: "In-depth user research" },
      { fr: "Interfaces élégantes", en: "Elegant interfaces" },
      { fr: "Expérience optimisée", en: "Optimized experience" },
    ],
  },
  {
    slug: "business-management",
    icon: Database,
    titleKey: "services.business.title",
    descKey: "services.business.desc",
    tech: ["ERP", "CRM", "PostgreSQL", "Automation"],
    benefits: [
      { fr: "Systèmes ERP & CRM", en: "ERP & CRM systems" },
      { fr: "Logiciels sur mesure", en: "Custom software" },
      { fr: "Optimisation des opérations", en: "Operations optimization" },
    ],
  },
  {
    slug: "maintenance-support",
    icon: ShieldCheck,
    titleKey: "services.support.title",
    descKey: "services.support.desc",
    tech: ["Monitoring", "Security", "DevOps", "CI/CD"],
    benefits: [
      { fr: "Surveillance proactive", en: "Proactive monitoring" },
      { fr: "Sécurité renforcée", en: "Enhanced security" },
      { fr: "Améliorations continues", en: "Continuous improvements" },
    ],
  },
]

export const testimonials = [
  {
    name: "Aminata Diallo",
    role: { fr: "Directrice, FinTech Dakar", en: "Director, FinTech Dakar" },
    quote: {
      fr: "NextGen Labs a transformé notre vision en une plateforme robuste. Une équipe à l'écoute et techniquement excellente.",
      en: "NextGen Labs turned our vision into a robust platform. A responsive and technically excellent team.",
    },
  },
  {
    name: "Moussa Sow",
    role: { fr: "CEO, AgriTech Sénégal", en: "CEO, AgriTech Senegal" },
    quote: {
      fr: "Leur expertise en IA nous a permis d'automatiser des processus clés. Résultats au-delà de nos attentes.",
      en: "Their AI expertise allowed us to automate key processes. Results beyond our expectations.",
    },
  },
  {
    name: "Fatou Ndiaye",
    role: { fr: "Fondatrice, E-commerce SN", en: "Founder, E-commerce SN" },
    quote: {
      fr: "Application mobile livrée dans les délais, design soigné et support irréprochable. Je recommande vivement.",
      en: "Mobile app delivered on time, polished design, and flawless support. Highly recommended.",
    },
  },
]

export type Project = {
  slug: string
  title: string
  category: { fr: string; en: string }
  categoryId: "web" | "mobile" | "ai" | "design"
  image: string
  tech: string[]
  result: { fr: string; en: string }
  description: { fr: string; en: string }
}

export const projects: Project[] = [
  {
    slug: "fintech-dashboard",
    title: "FinPay Dashboard",
    categoryId: "web",
    category: { fr: "Web", en: "Web" },
    image: "/projects/fintech.png",
    tech: ["Next.js", "PostgreSQL", "Stripe"],
    result: { fr: "+40% de conversions", en: "+40% conversions" },
    description: {
      fr: "Tableau de bord financier temps réel pour une fintech en pleine croissance.",
      en: "Real-time financial dashboard for a fast-growing fintech.",
    },
  },
  {
    slug: "agri-mobile",
    title: "AgriConnect Mobile",
    categoryId: "mobile",
    category: { fr: "Mobile", en: "Mobile" },
    image: "/projects/agri.png",
    tech: ["React Native", "Node.js"],
    result: { fr: "10k+ agriculteurs", en: "10k+ farmers" },
    description: {
      fr: "Application mobile connectant agriculteurs et marchés locaux.",
      en: "Mobile app connecting farmers and local markets.",
    },
  },
  {
    slug: "ai-assistant",
    title: "Sahel AI Assistant",
    categoryId: "ai",
    category: { fr: "IA", en: "AI" },
    image: "/projects/ai.png",
    tech: ["Python", "OpenAI", "LangChain"],
    result: { fr: "70% de tickets automatisés", en: "70% tickets automated" },
    description: {
      fr: "Assistant intelligent multilingue pour le support client.",
      en: "Multilingual intelligent assistant for customer support.",
    },
  },
  {
    slug: "ecommerce-platform",
    title: "Teranga Shop",
    categoryId: "web",
    category: { fr: "Web", en: "Web" },
    image: "/projects/ecommerce.png",
    tech: ["Next.js", "Shopify", "Tailwind"],
    result: { fr: "x3 chiffre d'affaires", en: "3x revenue" },
    description: {
      fr: "Plateforme e-commerce moderne pour l'artisanat sénégalais.",
      en: "Modern e-commerce platform for Senegalese craftsmanship.",
    },
  },
  {
    slug: "health-app",
    title: "MediCare UX",
    categoryId: "design",
    category: { fr: "Design", en: "Design" },
    image: "/projects/health.png",
    tech: ["Figma", "Design System"],
    result: { fr: "+55% rétention", en: "+55% retention" },
    description: {
      fr: "Refonte UX/UI complète d'une application de santé.",
      en: "Complete UX/UI redesign of a healthcare app.",
    },
  },
  {
    slug: "logistics-erp",
    title: "LogiFlow ERP",
    categoryId: "web",
    category: { fr: "Web", en: "Web" },
    image: "/projects/logistics.png",
    tech: ["ERP", "PostgreSQL", "React"],
    result: { fr: "-30% de coûts", en: "-30% costs" },
    description: {
      fr: "Système ERP de gestion logistique pour une entreprise de transport.",
      en: "Logistics management ERP for a transport company.",
    },
  },
]

export type Post = {
  slug: string
  title: { fr: string; en: string }
  excerpt: { fr: string; en: string }
  category: { fr: string; en: string }
  date: string
  image: string
  content: { fr: string; en: string }
}

export const posts: Post[] = [
  {
    slug: "ai-africa-2026",
    title: { fr: "L'IA au service de l'Afrique en 2026", en: "AI serving Africa in 2026" },
    excerpt: {
      fr: "Comment l'intelligence artificielle transforme les entreprises africaines.",
      en: "How artificial intelligence is transforming African businesses.",
    },
    category: { fr: "Intelligence Artificielle", en: "Artificial Intelligence" },
    date: "2026-05-12",
    image: "/blog/ai.png",
    content: {
      fr: "L'intelligence artificielle n'est plus une technologie du futur en Afrique, elle est une réalité tangible en 2026. Des startups de Dakar à Nairobi intègrent des solutions d'apprentissage automatique pour optimiser l'agriculture, améliorer l'accès aux soins de santé et révolutionner les services financiers.\n\nDans le secteur agricole, par exemple, des modèles prédictifs analysent les données météorologiques et satellitaires pour guider les choix des agriculteurs sénégalais en temps réel, limitant les pertes et maximisant les rendements. De même, les banques et fintechs locales déploient des agents conversationnels intelligents capables de communiquer en wolof, sérère ou d'autres langues locales, rendant les services financiers accessibles à un plus large public.\n\nL'Afrique possède un avantage unique : l'absence d'infrastructures héritées (legacy) permet de sauter des étapes technologiques entières pour adopter directement des solutions d'IA mobiles et décentralisées. Chez NextGen Labs, nous accompagnons les entreprises locales pour intégrer ces technologies de pointe de manière éthique, performante et adaptée au contexte africain.",
      en: "Artificial intelligence is no longer a technology of the future in Africa; it is a tangible reality in 2026. Startups from Dakar to Nairobi are integrating machine learning solutions to optimize agriculture, improve healthcare access, and revolutionize financial services.\n\nIn the agricultural sector, for example, predictive models analyze weather and satellite data to guide Senegalese farmers in real-time, reducing losses and maximizing yields. Similarly, local banks and fintechs are deploying intelligent conversational agents capable of communicating in Wolof, Serer, or other local languages, making financial services accessible to a broader audience.\n\nAfrica has a unique advantage: the absence of legacy infrastructure allows it to leapfrog whole technological stages to adopt mobile-first, decentralized AI solutions directly. At NextGen Labs, we support local businesses in integrating these cutting-edge technologies in an ethical, performant manner tailored to the African context.",
    },
  },
  {
    slug: "modern-web-stack",
    title: { fr: "Choisir sa stack web moderne", en: "Choosing your modern web stack" },
    excerpt: {
      fr: "Next.js, TypeScript, et les outils qui accélèrent le développement.",
      en: "Next.js, TypeScript, and the tools that accelerate development.",
    },
    category: { fr: "Développement Logiciel", en: "Software Development" },
    date: "2026-04-28",
    image: "/blog/web.png",
    content: {
      fr: "Choisir sa stack technique en 2026 est une décision cruciale pour la rapidité, la sécurité et la scalabilité de votre projet numérique. Chez NextGen Labs, nous privilégions Next.js et TypeScript pour le front-end et le back-end.\n\nNext.js, combiné à l'architecture moderne de rendu hybride, permet d'obtenir des temps de chargement ultra-rapides et un référencement naturel (SEO) optimal dès le départ. TypeScript apporte quant à lui une sécurité de typage inégalée, réduisant de plus de 30% les bugs de production.\n\nEn associant ces technologies à des outils de styling modernes comme Tailwind CSS et des frameworks d'animation fluides, nous créons des expériences utilisateurs qui captivent dès le premier coup d'œil, tout en maintenant un code propre et facilement maintenable sur le long terme.",
      en: "Choosing your technical stack in 2026 is a crucial decision for the speed, security, and scalability of your digital project. At NextGen Labs, we favor Next.js and TypeScript for both front-end and back-end development.\n\nNext.js, combined with modern hybrid rendering architecture, achieves ultra-fast load times and optimal search engine optimization (SEO) from the start. TypeScript provides unmatched type safety, reducing production bugs by over 30%.\n\nBy pairing these technologies with modern styling tools like Tailwind CSS and smooth animation frameworks, we create user experiences that captivate from the very first glance, while maintaining clean and easily maintainable code over the long term.",
    },
  },
  {
    slug: "mobile-first-senegal",
    title: { fr: "Mobile-first : un enjeu clé au Sénégal", en: "Mobile-first: a key challenge in Senegal" },
    excerpt: {
      fr: "Pourquoi concevoir d'abord pour le mobile est essentiel.",
      en: "Why designing for mobile first is essential.",
    },
    category: { fr: "Applications Mobiles", en: "Mobile Applications" },
    date: "2026-04-10",
    image: "/blog/mobile.png",
    content: {
      fr: "Avec un taux de pénétration mobile de plus de 100% et une large majorité d'internautes accédant au web uniquement via leur smartphone, le mobile-first n'est pas une option au Sénégal, c'est une nécessité absolue.\n\nCréer des designs pensés d'abord pour le mobile garantit une accessibilité optimale et une interface épurée. Cela implique également d'optimiser le poids des images, de concevoir des parcours utilisateurs fluides et de s'assurer de la compatibilité avec des réseaux mobiles fluctuants.\n\nQue ce soit pour le commerce en ligne, les solutions éducatives ou les services de santé, le mobile-first garantit que votre service touche réellement son public cible, partout au pays. Nous concevons nos applications avec cette philosophie pour maximiser l'impact de vos projets.",
      en: "With a mobile penetration rate of over 100% and a vast majority of internet users accessing the web solely via smartphone, mobile-first is not an option in Senegal; it is an absolute necessity.\n\nDesigning for mobile first guarantees optimal accessibility and a clean interface. It also means optimizing image sizes, designing smooth user flows, and ensuring compatibility with fluctuating mobile networks.\n\nWhether for e-commerce, educational solutions, or healthcare services, mobile-first ensures that your service truly reaches its target audience across the country. We design our applications with this philosophy to maximize the impact of your projects.",
    },
  },
  {
    slug: "digital-transformation",
    title: { fr: "Réussir sa transformation digitale", en: "Succeeding at digital transformation" },
    excerpt: {
      fr: "Les étapes clés pour digitaliser votre entreprise efficacement.",
      en: "The key steps to digitize your business effectively.",
    },
    category: { fr: "Transformation Digitale", en: "Digital Transformation" },
    date: "2026-03-22",
    image: "/blog/transformation.png",
    content: {
      fr: "La transformation digitale est un levier puissant pour accroître l'efficacité et la compétitivité de votre entreprise. Cependant, digitaliser pour le plaisir de digitaliser ne fonctionne pas. Il faut une stratégie claire et centrée sur l'humain.\n\nLa première étape consiste à identifier les goulots d'étranglement de vos processus actuels. Ensuite, le choix d'outils adaptés (comme des ERP ou des applications métier sur mesure) permet d'automatiser les tâches répétitives et d'optimiser le flux d'information.\n\nEnfin, l'accompagnement au changement et la formation de vos équipes sont indispensables pour garantir le succès de la transition et une adoption totale des nouveaux outils.",
      en: "Digital transformation is a powerful lever to increase your company's efficiency and competitiveness. However, digitizing just for the sake of it does not work. A clear, human-centric strategy is essential.\n\nThe first step consists of identifying bottlenecks in your current processes. Then, selecting the right tools (such as ERPs or custom business applications) allows for automating repetitive tasks and optimizing the flow of information.\n\nFinally, change management and training for your teams are indispensable to guarantee the success of the transition and full adoption of the new tools.",
    },
  },
  {
    slug: "startup-journey",
    title: { fr: "Du campus à la startup tech", en: "From campus to tech startup" },
    excerpt: {
      fr: "Le parcours entrepreneurial de jeunes diplômés de l'ISEP.",
      en: "The entrepreneurial journey of young ISEP graduates.",
    },
    category: { fr: "Entrepreneuriat", en: "Entrepreneurship" },
    date: "2026-03-05",
    image: "/blog/startup.png",
    content: {
      fr: "L'ISEP de Diamniadio est devenu un véritable vivier d'innovation entrepreneuriale au Sénégal. De nombreux jeunes diplômés choisissent de franchir le pas et de transformer leurs projets académiques en startups technologiques prometteuses.\n\nCe parcours, bien qu'excitant, est semé d'embûches : structuration de l'idée, recherche de financement, constitution de l'équipe et confrontation au marché réel. Heureusement, les incubateurs locaux et l'écosystème dynamique offrent un soutien précieux.\n\nCes jeunes entrepreneurs démontrent que la jeunesse sénégalaise est prête à relever les défis de demain en développant des solutions purement locales aux défis africains, alliant ambition technologique et impact social.",
      en: "ISEP Diamniadio has become a true breeding ground for entrepreneurial innovation in Senegal. Many young graduates choose to take the plunge and transform their academic projects into promising tech startups.\n\nThis journey, while exciting, is full of hurdles: structuring the idea, searching for funding, building the team, and facing the real market. Fortunately, local incubators and a dynamic ecosystem offer valuable support.\n\nThese young entrepreneurs show that Senegalese youth is ready to meet tomorrow's challenges by developing purely local solutions to African challenges, combining technological ambition with social impact.",
    },
  },
  {
    slug: "secure-apps",
    title: { fr: "Sécuriser ses applications web", en: "Securing your web applications" },
    excerpt: {
      fr: "Bonnes pratiques de sécurité pour protéger vos utilisateurs.",
      en: "Security best practices to protect your users.",
    },
    category: { fr: "Développement Logiciel", en: "Software Development" },
    date: "2026-02-18",
    image: "/blog/security.png",
    content: {
      fr: "La sécurité des applications web est plus importante que jamais en 2026, face à la recrudescence des cyberattaques et au renforcement des réglementations sur la protection des données.\n\nSécuriser ses applications commence par de bonnes pratiques dès la phase de conception : hachage robuste des mots de passe, validation et nettoyage stricts de toutes les entrées utilisateur pour éviter les injections SQL ou XSS, et utilisation systématique du protocole HTTPS.\n\nDe plus, des audits réguliers, le suivi des dépendances et la mise en œuvre de pare-feu applicatifs permettent de détecter et de bloquer les menaces potentielles avant qu'elles ne nuisent à vos utilisateurs. Investir dans la sécurité est le meilleur moyen de mériter la confiance de vos clients.",
      en: "Web application security is more important than ever in 2026, faced with a rise in cyberattacks and the strengthening of data protection regulations.\n\nSecuring your applications starts with good practices right from the design phase: robust password hashing, strict validation and sanitization of all user inputs to prevent SQL or XSS injections, and systematic use of HTTPS.\n\nFurthermore, regular audits, monitoring dependencies, and implementing web application firewalls help detect and block potential threats before they harm your users. Investing in security is the best way to earn your customers' trust.",
    },
  },
]

export const team = [
  { name: "Cheikh Fall", role: { fr: "CEO & Co-fondateur", en: "CEO & Co-founder" }, image: "/team/member1.png" },
  { name: "Awa Diop", role: { fr: "CTO & Co-fondatrice", en: "CTO & Co-founder" }, image: "/team/member2.png" },
  { name: "Ibrahima Ba", role: { fr: "Lead Développeur", en: "Lead Developer" }, image: "/team/member3.png" },
  { name: "Mariama Sy", role: { fr: "Designer UI/UX", en: "UI/UX Designer" }, image: "/team/member4.png" },
]
