export type Lang = "fr" | "en"

const fr = {
  // Nav
  "nav.home": "Accueil",
  "nav.about": "À propos",
  "nav.services": "Services",
  "nav.portfolio": "Réalisations",
  "nav.blog": "Blog",
  "nav.contact": "Contact",
  "nav.cta": "Démarrer un projet",

  // Hero
  "hero.badge": "Agence Digitale",
  "hero.title": "Transformer les idées en solutions digitales",
  "hero.subtitle":
    "NextGen Labs accompagne les entreprises dans leur transformation digitale à travers le développement web, les applications mobiles, l'intelligence artificielle et des solutions logicielles innovantes.",
  "hero.cta1": "Démarrer votre projet",
  "hero.cta2": "Découvrir nos services",

  // Stats
  "stats.projects": "Projets réalisés",
  "stats.tech": "Technologies maîtrisées",
  "stats.satisfaction": "Satisfaction client",
  "stats.years": "Années d'expérience",

  // Overview
  "overview.kicker": "Qui sommes-nous",
  "overview.title": "Une équipe passionnée par l'innovation",
  "overview.desc":
    "Nous concevons des solutions digitales sur mesure qui aident les entreprises à croître, automatiser et innover.",
  "overview.mission.title": "Notre mission",
  "overview.mission.desc":
    "Concevoir et développer des solutions digitales innovantes qui aident les entreprises à se développer et à optimiser leurs opérations.",
  "overview.vision.title": "Notre vision",
  "overview.vision.desc":
    "Devenir une entreprise leader en technologie et innovation au Sénégal et en Afrique.",

  // Services
  "services.kicker": "Nos services",
  "services.title": "Des solutions complètes pour votre croissance",
  "services.subtitle": "De la conception au déploiement, nous couvrons l'ensemble de votre chaîne de valeur digitale.",
  "services.web.title": "Développement Web",
  "services.web.desc": "Sites vitrines, applications métier et plateformes web performantes.",
  "services.mobile.title": "Développement Mobile",
  "services.mobile.desc": "Applications Android, iOS et solutions cross-platform.",
  "services.ai.title": "Intelligence Artificielle",
  "services.ai.desc": "Intégration IA, automatisation, assistants intelligents et systèmes prédictifs.",
  "services.design.title": "UI/UX Design",
  "services.design.desc": "Recherche utilisateur, design d'interface et optimisation de l'expérience.",
  "services.business.title": "Solutions de gestion",
  "services.business.desc": "Systèmes ERP, CRM et logiciels sur mesure.",
  "services.support.title": "Maintenance & Support",
  "services.support.desc": "Surveillance, sécurité et améliorations continues.",
  "services.learnmore": "En savoir plus",

  // Testimonials
  "testimonials.kicker": "Témoignages",
  "testimonials.title": "Ils nous font confiance",

  // CTA
  "cta.title": "Construisons l'avenir ensemble",
  "cta.subtitle": "Parlons de votre prochain projet et donnons vie à vos idées.",
  "cta.button": "Démarrer votre projet",

  // About
  "about.kicker": "À propos de NextGen Labs",
  "about.title": "Notre histoire",
  "about.story":
    "NextGen Labs est une startup technologique fondée par de jeunes diplômés de l'ISEP Diamniadio et encadrée par des professionnels expérimentés, passionnés par l'innovation et la transformation digitale.",
  "about.values.title": "Nos valeurs",
  "about.value.innovation": "Innovation",
  "about.value.excellence": "Excellence",
  "about.value.collaboration": "Collaboration",
  "about.value.transparency": "Transparence",
  "about.value.commitment": "Engagement",
  "about.value.satisfaction": "Satisfaction client",
  "about.team.title": "Notre équipe",
  "about.team.subtitle": "Des talents engagés au service de votre réussite.",
  "about.timeline.title": "Notre parcours",

  // Portfolio
  "portfolio.kicker": "Réalisations",
  "portfolio.title": "Des projets qui ont de l'impact",
  "portfolio.subtitle": "Découvrez quelques-unes de nos réalisations à travers différents secteurs.",
  "portfolio.all": "Tous",
  "portfolio.results": "Résultats",
  "portfolio.tech": "Technologies",

  // Blog
  "blog.kicker": "Blog",
  "blog.title": "Idées & perspectives technologiques",
  "blog.subtitle": "Articles sur l'IA, le développement, le mobile et la transformation digitale.",
  "blog.read": "Lire l'article",

  // Contact
  "contact.kicker": "Contact",
  "contact.title": "Parlons de votre projet",
  "contact.subtitle": "Remplissez le formulaire et notre équipe vous répondra dans les plus brefs délais.",
  "contact.form.name": "Nom complet",
  "contact.form.company": "Entreprise",
  "contact.form.email": "Email",
  "contact.form.phone": "Téléphone",
  "contact.form.service": "Service souhaité",
  "contact.form.message": "Description du projet",
  "contact.form.submit": "Envoyer le message",
  "contact.form.success": "Message envoyé ! Nous vous recontacterons bientôt.",
  "contact.card.title": "Connectez-vous avec NextGen Labs",
  "contact.card.subtitle": "Scannez le QR code pour enregistrer notre carte de visite digitale.",
  "contact.card.call": "Appeler",
  "contact.card.email": "Envoyer un email",
  "contact.card.whatsapp": "WhatsApp",
  "contact.card.vcard": "Télécharger vCard",

  // Footer
  "footer.tagline": "Transformer les idées en solutions digitales.",
  "footer.nav": "Navigation",
  "footer.contact": "Contact",
  "footer.social": "Réseaux sociaux",
  "footer.newsletter": "Newsletter",
  "footer.newsletter.desc": "Recevez nos dernières actualités et articles.",
  "footer.newsletter.placeholder": "Votre email",
  "footer.newsletter.button": "S'abonner",
  "footer.rights": "© 2026 NextGen Labs. Tous droits réservés.",

  // Splash & onboarding
  "splash.tagline": "Transformer les idées en solutions digitales",
  "onboard.skip": "Passer",
  "onboard.next": "Suivant",
  "onboard.start": "Commencer",
  "onboard.slide1.title": "Bienvenue chez NextGen Labs",
  "onboard.slide1.desc":
    "Nous accompagnons les entreprises dans leur transformation digitale.",
  "onboard.slide2.title": "Des solutions sur mesure",
  "onboard.slide2.desc":
    "Développement web, applications mobiles, intelligence artificielle et design UI/UX adaptés à vos besoins.",
  "onboard.slide3.title": "Prêt à innover ?",
  "onboard.slide3.desc":
    "Découvrez nos services, parcourez nos réalisations et démarrez votre prochain projet avec nous.",
}

const en: Record<keyof typeof fr, string> = {
  "nav.home": "Home",
  "nav.about": "About",
  "nav.services": "Services",
  "nav.portfolio": "Portfolio",
  "nav.blog": "Blog",
  "nav.contact": "Contact",
  "nav.cta": "Start a project",

  "hero.badge": "Digital Agency",
  "hero.title": "Transforming ideas into digital solutions",
  "hero.subtitle":
    "NextGen Labs helps businesses accelerate their digital transformation through web development, mobile applications, artificial intelligence, and innovative software solutions.",
  "hero.cta1": "Start your project",
  "hero.cta2": "Discover our services",

  "stats.projects": "Projects completed",
  "stats.tech": "Technologies mastered",
  "stats.satisfaction": "Client satisfaction",
  "stats.years": "Years of experience",

  "overview.kicker": "Who we are",
  "overview.title": "A team passionate about innovation",
  "overview.desc":
    "We build tailored digital solutions that help businesses grow, automate, and innovate.",
  "overview.mission.title": "Our mission",
  "overview.mission.desc":
    "Design and develop innovative digital solutions that help businesses grow and optimize their operations.",
  "overview.vision.title": "Our vision",
  "overview.vision.desc":
    "Become a leading technology and innovation company in Senegal and Africa.",

  "services.kicker": "Our services",
  "services.title": "Complete solutions for your growth",
  "services.subtitle": "From concept to deployment, we cover your entire digital value chain.",
  "services.web.title": "Web Development",
  "services.web.desc": "Corporate websites, business applications, and high-performance web platforms.",
  "services.mobile.title": "Mobile Development",
  "services.mobile.desc": "Android, iOS, and cross-platform solutions.",
  "services.ai.title": "Artificial Intelligence",
  "services.ai.desc": "AI integration, automation, intelligent assistants, and predictive systems.",
  "services.design.title": "UI/UX Design",
  "services.design.desc": "User research, interface design, and experience optimization.",
  "services.business.title": "Business Management",
  "services.business.desc": "ERP systems, CRM systems, and custom software.",
  "services.support.title": "Maintenance & Support",
  "services.support.desc": "Monitoring, security, and continuous improvements.",
  "services.learnmore": "Learn more",

  "testimonials.kicker": "Testimonials",
  "testimonials.title": "Trusted by our clients",

  "cta.title": "Let's build the future together",
  "cta.subtitle": "Let's talk about your next project and bring your ideas to life.",
  "cta.button": "Start your project",

  "about.kicker": "About NextGen Labs",
  "about.title": "Our story",
  "about.story":
    "NextGen Labs is a technology startup founded by young graduates from ISEP Diamniadio and guided by experienced professionals passionate about innovation and digital transformation.",
  "about.values.title": "Our values",
  "about.value.innovation": "Innovation",
  "about.value.excellence": "Excellence",
  "about.value.collaboration": "Collaboration",
  "about.value.transparency": "Transparency",
  "about.value.commitment": "Commitment",
  "about.value.satisfaction": "Customer satisfaction",
  "about.team.title": "Our team",
  "about.team.subtitle": "Dedicated talent committed to your success.",
  "about.timeline.title": "Our journey",

  "portfolio.kicker": "Portfolio",
  "portfolio.title": "Projects that make an impact",
  "portfolio.subtitle": "Explore some of our work across different industries.",
  "portfolio.all": "All",
  "portfolio.results": "Results",
  "portfolio.tech": "Technologies",

  "blog.kicker": "Blog",
  "blog.title": "Technology ideas & insights",
  "blog.subtitle": "Articles on AI, development, mobile, and digital transformation.",
  "blog.read": "Read article",

  "contact.kicker": "Contact",
  "contact.title": "Let's talk about your project",
  "contact.subtitle": "Fill out the form and our team will get back to you shortly.",
  "contact.form.name": "Full name",
  "contact.form.company": "Company",
  "contact.form.email": "Email",
  "contact.form.phone": "Phone",
  "contact.form.service": "Service needed",
  "contact.form.message": "Project description",
  "contact.form.submit": "Send message",
  "contact.form.success": "Message sent! We'll get back to you soon.",
  "contact.card.title": "Connect with NextGen Labs",
  "contact.card.subtitle": "Scan the QR code to save our digital business card.",
  "contact.card.call": "Call",
  "contact.card.email": "Send email",
  "contact.card.whatsapp": "WhatsApp",
  "contact.card.vcard": "Download vCard",

  "footer.tagline": "Transforming ideas into digital solutions.",
  "footer.nav": "Navigation",
  "footer.contact": "Contact",
  "footer.social": "Social networks",
  "footer.newsletter": "Newsletter",
  "footer.newsletter.desc": "Get our latest news and articles.",
  "footer.newsletter.placeholder": "Your email",
  "footer.newsletter.button": "Subscribe",
  "footer.rights": "© 2026 NextGen Labs. All Rights Reserved.",

  "splash.tagline": "Transforming ideas into digital solutions",
  "onboard.skip": "Skip",
  "onboard.next": "Next",
  "onboard.start": "Get started",
  "onboard.slide1.title": "Welcome to NextGen Labs",
  "onboard.slide1.desc":
    "Helping businesses accelerate their digital transformation.",
  "onboard.slide2.title": "Tailored solutions",
  "onboard.slide2.desc":
    "Web development, mobile apps, artificial intelligence, and UI/UX design built for your needs.",
  "onboard.slide3.title": "Ready to innovate?",
  "onboard.slide3.desc":
    "Explore our services, browse our portfolio, and start your next project with us.",
}

export const translations = { fr, en }
export type TranslationKey = keyof typeof fr
