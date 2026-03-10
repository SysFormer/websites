import type { SiteContent } from '../i18n/types';

const en: SiteContent = {
  CONTACT: {
    email: "contact@sysformer.com",
    phone: "+48 692 311 723",
    phoneLink: "tel:+48692311723",
    emailLink: "mailto:contact@sysformer.com",
    address: "Warsaw, Poland",
    linkedin: "https://www.linkedin.com/company/sysflow-one",
  },

  TRAINING_PRICE: 12000,

  TEAM_MEMBERS: [
    {
      name: "Michał Kurdziel",
      role: "CEO & Founder",
      image: `${import.meta.env.BASE_URL}image/kurdziel.jpg`,
    },
    {
      name: "Ricardo Ribeiro",
      role: "Automation Manager",
      image: `${import.meta.env.BASE_URL}image/ribeiro.jpg`,
    },
  ],

  TRAINING_FEATURES: [
    "Practical approach – minimum theory",
    "Post-training support – access to the team for two weeks after completion",
    "2 Case study consultations – 1.5h dedicated to your company's specific challenges",
    "Group chat – ongoing answers to questions during the program",
    "Self-study materials",
  ],

  AGENDA_ITEMS: [
    {
      number: "01",
      title: "Introduction to AI World",
      description:
        "Understanding current capabilities of Artificial Intelligence and its application in business – from LLMs to image generation.",
    },
    {
      number: "02",
      title: "Workspace Organization",
      description:
        "Ergonomics, digital minimalism, and folder structures – the foundation of efficiency.",
    },
    {
      number: "03",
      title: "Efficiency Tools",
      description:
        "Methods supporting deep work and attention management in a world of distractions.",
    },
    {
      number: "04",
      title: "Global Keyboard Shortcuts",
      description:
        "Configuration and practical applications that save hours weekly.",
    },
    {
      number: "05",
      title: "Recommended Tool Stack",
      description:
        "A set of applications we use daily and that have proven themselves in practice.",
    },
    {
      number: "06",
      title: "Automations",
      description:
        "Make, Zapier, and other no-code platforms to automate repetitive tasks.",
    },
    {
      number: "07",
      title: "Databases",
      description:
        "Practical work with Airtable, Notion, and other information management systems.",
    },
    {
      number: "08",
      title: "Privacy and Security",
      description:
        "Company data protection, online anonymity, and safeguards against threats.",
    },
    {
      number: "09",
      title: "Case Study Consultations",
      description:
        "Dedicated 1.5h to solving specific challenges in your organization.",
    },
  ],

  PROCESS_STEPS: [
    {
      image: `${import.meta.env.BASE_URL}image/banner-audit.png`,
      title: "Audit and Analysis",
      description:
        "We diagnose current systems, identify processes for automation, and prioritize based on best ROI.",
    },
    {
      image: `${import.meta.env.BASE_URL}image/banner-migration.png`,
      title: "Data Migration",
      description:
        "Data transfer from existing systems to a unified platform - creating a single source of truth for your company data.",
    },
    {
      image: `${import.meta.env.BASE_URL}image/banner-automation.png`,
      title: "Process Automation",
      description:
        "Implementation of automation according to priorities – starting with actions bringing the most value added.",
    },
    {
      image: `${import.meta.env.BASE_URL}image/banner-improvement.png`,
      title: "Iterative Improvement",
      description:
        "Continuous system refinement based on feedback until it reaches full functionality meeting company needs.",
    },
    {
      image: `${import.meta.env.BASE_URL}image/banner-knowledge.png`,
      title: "Knowledge Transfer",
      description:
        "We train the team, explain operating mechanisms – you gain autonomy in system development.",
    },
  ],

  AUTOMATION_AREAS: [
    {
      title: "Finance and Accounting",
      description:
        "Automatic tracking of costs and revenues from crypto wallets, fintechs (Revolut, Wise, Zen). Real-time asset value monitoring. Generating financial reports without manual work.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    },
    {
      title: "HR Management",
      description:
        "Central employee database, automation of onboarding processes, leave and time tracking. All HR information in one place.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
    },
    {
      title: "Document Workflow",
      description:
        "Automatic document circulation, electronic approval flows, intelligent archiving. No more lost documents or unclear status.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
    },
    {
      title: "Reporting and Analytics",
      description:
        "Visualization of key business metrics, automated dashboards, alerts on significant events. Make decisions based on current data.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    },
    {
      title: "Sales and Marketing Processes",
      description:
        "Automation of sales activities, CRM integration with other systems, tracking leads and conversions. Maximize sales team efficiency.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    },
    {
      title: "Custom Integrations",
      description:
        "Every company is different – we can automate practically any repetitive process in your organization. Ask about possibilities!",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    },
  ],

  WHY_CHOOSE_ITEMS: [
    {
      icon: "💼",
      title: "Practical Experience",
      description: "we implement working systems that make life easier",
      image: `${import.meta.env.BASE_URL}image/banner-experience.png`,
    },
    {
      icon: "🎓",
      title: "Education",
      description: "we don't just implement, we teach",
      image: `${import.meta.env.BASE_URL}image/banner-education.png`,
    },
    {
      icon: "🚀",
      title: "Latest Technologies",
      description: "AI, Low-Code/No-Code",
      image: `${import.meta.env.BASE_URL}image/banner-automation.png`,
    },
    {
      icon: "🔄",
      title: "Iterative Approach",
      description: "system grows with the company",
      image: `${import.meta.env.BASE_URL}image/banner-improvement.png`,
    },
  ],

  PROBLEMS: [
    {
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      text: "Hunting for documents scattered across chats, emails, and multiple apps?",
    },
    {
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
      text: "Modern tools that sit underutilized because no one knows how to unlock their full potential?",
    },
    {
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      text: "Making AI work effectively for your team instead of just adding to the noise?",
    },
    {
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      text: "A fragmented tech stack where every department operates in its own silo?",
    },
  ],

  PROBLEMS_WDROZENIA: [
    {
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      text: "Your team loses hours manually rewriting data between systems?",
    },
    {
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      text: "Reports and summaries require tedious work in Excel every week?",
    },
    {
      image:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
      text: "Lacking a single source of truth for company data?",
    },
    {
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
      text: "Business processes are too slow and prone to human errors?",
    },
  ],

  TESTIMONIALS: [
    {
      content: "I highly recommend working with Sysformer. Work with the team proceeds in a very good, partnership atmosphere, while maintaining a high level of professionalism. Major value lies in their approach focused on real organizational needs, focusing on organizing and simplifying processes rather than imposing a single 'ready-made' solution. Thanks to implemented automations and AI-based solutions, we managed to improve many key operational, financial, and business areas at Cookie3.",
      author: "Wojtek Mrówka",
      role: "Chief Operating Officer",
      company: "Cookie3",
      image: `${import.meta.env.BASE_URL}image/goryla-wojtek-mrowka.jpeg`,
    },
    {
      content: "I would like to thank you for the opportunity to work with you. You have tremendous knowledge, which I deeply admire. The way you handle everything and automate it is just amazing! I really appreciate that you had the patience and explained everything so we could understand as much as possible ourselves and develop these systems independently, which got me a bit hooked on automations. I hope we will have the opportunity to work together again in the future!",
      author: "Krystian Czarnecki",
      role: "FP&A Analyst",
      image: `${import.meta.env.BASE_URL}image/krystian-czarnecki-photo.jpeg`,
    },
  ],

  HOME_PAGE: {
    HERO: {
      LABEL: "sysformer.com",
      TITLE: "Your team loses hours on repetitive tasks.",
      TITLE_HIGHLIGHT: "We automate that in weeks, not months.",
      SUBTITLE: "We help companies of 10-3000 people automate documentation, customer service, and back-office processes. Scalable approach — from a quick MVP in a few weeks to comprehensive enterprise implementations.",
      BUTTON_PRIMARY: "Free 30-min consultation",
      BUTTON_SECONDARY: "AI for Business Newsletter →",
      PROOF: "✓ No obligations · ✓ Walk away with a concrete plan · ✓ 100% free",
    },
    FEATURED_CASE: {
      EMOJI: "🚀",
      TEXT: "Cookie3 case study:",
      DESCRIPTION: "We automated finance and BD processes — from 5 systems down to 2, saving hundreds of hours annually.",
      LINK: "See details →",
    },
    FOR_WHO: {
      TITLE: "Who is AI automation for?",
      CARDS: [
        {
          icon: "👨‍💼",
          title: "For executives looking to cut costs",
          description: "Your team is growing but the budget isn't? Automation lets you scale operations without proportional cost increases. Instead of hiring — automate.",
        },
        {
          icon: "👨‍💻",
          title: "For technical leaders",
          description: "You have ideas for automation but lack the hands to implement them? We join your team, transfer knowledge, and leave a solution you can maintain on your own.",
        },
        {
          icon: "🏢",
          title: "For companies of 10-3000 people",
          description: "Too big for manual processes, too small for your own AI team? We're an agile partner — no corporate overhead, with startup speed and enterprise experience.",
        },
      ],
    },
    WHY_US: {
      TITLE: "Why sysformer.com?",
      CARDS: [
        {
          icon: "⚡",
          title: "Startup speed, enterprise experience",
          description: "Small, agile team = no corporate bureaucracy. From first meeting to working MVP in 6 weeks, not 6 months.",
        },
        {
          icon: "💰",
          title: "Competitive pricing",
          description: "We don't have a 200-person overhead to cover. You pay for value, not office buildings and middle management.",
        },
        {
          icon: "🔧",
          title: "Tech-agnostic",
          description: "GPT-4, Claude, Llama, custom models — we match technology to the problem, not the other way around. No vendor lock-in.",
        },
        {
          icon: "🤝",
          title: "Partner, not vendor",
          description: "We transfer knowledge, document everything, train your team. After implementation, you're independent.",
        },
      ],
    },
    CASE_STUDY: {
      BADGE: "Case Study",
      TITLE: "Cookie3 — automating finance and BD in Web3",
      INTRO: "Cookie3 is a Web3 analytics platform helping blockchain projects understand their users. Rapid growth meant chaos in processes — growing documentation, scattered systems, manual tasks eating up team time.",
      WHAT_WE_DID: {
        TITLE: "What we did:",
        ITEMS: [
          "🔄 Automated financial processes — from invoicing to reporting",
          "📊 Streamlined Business Development workflow",
          "📁 Organized documentation and information flow",
          "🔗 Integrated systems: from 5 tools down to 2",
        ],
      },
      RESULTS: {
        TITLE: "Results:",
        ITEMS: [
          { number: "5 → 2", label: "systems" },
          { number: "100+", label: "hours saved / month" },
          { number: "1", label: "single source of truth" },
        ],
      },
      CTA: "Want similar results? Let's talk",
    },
    NEWSLETTER: {
      TITLE: "🤖 AI for Business — weekly",
      INTRO: "A practical newsletter without buzzwords. Every week:",
      BENEFITS: [
        "✓ AI tools worth knowing (we test them so you don't have to)",
        "✓ Real-world case studies",
        "✓ Actionable tips to implement starting Monday",
      ],
      COMMUNITY: "Join the community of AI leaders.",
      PLACEHOLDER: "Your business email",
      BUTTON: "Subscribe for free",
      DISCLAIMER: "Zero spam. Unsubscribe in one click.",
    },
    SOLUTIONS: {
      TITLE: "Our Solutions",
      DESCRIPTION: "We've been there too — and we found the answer in technology and smart automation. We dedicated time to analyzing tools, tested them in practice, and kept only those that genuinely simplify work. We organize processes, connect systems, introduce AI where it makes sense — effectively building a coherent, functioning work ecosystem. The result? Less chaos, faster decisions, and more time for key tasks.",
      SUBHEADING: "How can we help?",
      CARDS: {
        TRAINING: {
          TITLE: "Training",
          DESCRIPTION: "Comprehensive educational program on work optimization, automation, security & privacy, and AI",
          LINK: "Learn more",
          URL: "/training",
        },
        FLOWONE: {
          TITLE: "FlowOne SYSTEM",
          DESCRIPTION: "Implementation of an advanced system for data management and business process automation using low-code tools.",
          LINK: "Learn more",
          URL: "/implementations",
        },
      },
    },
    TESTIMONIALS: {
      TITLE: "What our clients say",
    },
    CONTACT: {
      TITLE: "Book a free consultation",
      SUBTITLE: "30 minutes, zero obligations. You'll walk away with:",
      BENEFITS: [
        "✓ An assessment of automation potential in your company",
        "✓ 2-3 concrete ideas for implementation",
        "✓ An estimated timeline for execution",
      ],
    },
    CTA: {
      TITLE: "Contact Us",
      DESCRIPTION: "Schedule a free consultation and find out how we can help your company.",
      BUTTON_PRIMARY: "Book a Meeting",
    },
  },

  NAV: {
    TRAINING: "Training",
    IMPLEMENTATIONS: "Implementations",
    TEAM: "Team",
    CONTACT: "Contact",
    URLS: {
      TRAINING: "training",
      IMPLEMENTATIONS: "implementations",
    },
  },

  TRAINING_PAGE: {
    HERO: {
      LABEL: "Sysformer / Training",
      TITLE: "Transform the Way Your Team Works",
      SUBTITLE: "Comprehensive training program: 8 meetings that will equip your team with practical knowledge and tools for immediate application.",
      BUTTON_PRIMARY: "Book a Meeting",
      BUTTON_SECONDARY: "Training",
    },
    CTA: {
      TITLE: "Book training for your team",
      DESCRIPTION: "Contact us to discuss the details of the program and tailor it to your company's needs.",
      BUTTON_PRIMARY: "Book a Meeting",
    },
  },

  IMPLEMENTATIONS_PAGE: {
    HERO: {
      LABEL: "Sysformer / FlowOne",
      TITLE: "Automation and Data Management Systems",
      SUBTITLE: "Comprehensive implementation of automation systems. From audit, through data migration, to full automation of processes in your company.",
      BUTTON_PRIMARY: "Book a Meeting",
      BUTTON_SECONDARY: "See Process",
    },
    CTA: {
      TITLE: "Start transforming your company",
      DESCRIPTION: "Schedule a free consultation and find out how we can automate processes in your organization.",
      BUTTON_PRIMARY: "Book a Meeting",
    },
  },

  PROBLEMS_COMPONENT: {
    TITLE: "Does your company struggle with...",
  },

  FLOW_ONE_COMPONENT: {
    TITLE: "FlowOne SYSTEM: Intelligent Data Center",
    DESCRIPTION: "FlowOne SYSTEM is a comprehensive solution that centralizes data from all company systems and automates key processes. We use AI technologies and Low-Code/No-Code platforms to deliver a system perfectly tailored to your company.",
    GOAL: {
      TITLE: "Implementation Goal",
      DESCRIPTION: "Streamlining work by automating repetitive tasks and centralizing data in one intuitive system. No more jumping between dozens of applications – everything in one place.",
      BILLING: "Billing model: FTE/success fee",
    },
    PROCESS_TITLE: "FlowOne SYSTEM Implementation Process",
    AREAS: {
      TITLE: "Sample Automation Areas",
      SUBTITLE: "FlowOne SYSTEM can be adapted to almost any business process. Here are the most frequently automated areas:",
    },
  },

  WHY_CHOOSE_COMPONENT: {
    TITLE: "Why Choose Us?",
    PHILOSOPHY: {
      TITLE: "Our Philosophy",
      DESCRIPTION: "We believe technology should serve people, not the other way around. That's why we design intuitive systems that genuinely save time and reduce frustration.",
    },
  },

  TRAINING_COMPONENT: {
    TITLE: "Training: Transform How Your Team Works",
    DESCRIPTION: "Our comprehensive training consists of 8 meetings that will equip your team with practical knowledge and tools for immediate application. Each meeting lasts 60 minutes and ends with concrete implementation tips. The goal is a significant effect after each meeting.",
    FEATURES_TITLE: "What distinguishes our training?",
    PRICE: {
      TITLE: "Cost",
      VALUE: 12000,
      NOTE: "Some presented applications are paid – the decision to purchase them belongs to the participants.",
    },
    AGENDA: {
      TITLE: "Training Agenda",
      SUBTITLE: "We adapt the program to the specifics of your company, but the standard agenda covers the following modules:",
    },
  },

  TEAM_COMPONENT: {
    TITLE: "Sysformer Team",
    DESCRIPTION: "Behind the company's success are experienced specialists with a passion for optimization and automation.",
  },

  CTA_COMPONENT: {
    TITLE: "Start Your Transformation Today",
    DESCRIPTION: "Is your company ready for the next level of efficiency? Whether you are interested in comprehensive team training or implementing an advanced automation system – we are here to help.",
    STEPS_TITLE: "Next Steps:",
    STEPS: [
      { BOLD: "Book a free consultation", TEXT: "let's talk about your needs" },
      { BOLD: "Receive a personalized proposal", TEXT: "tailored to your company" },
      { BOLD: "Start the transformation", TEXT: "start saving time now" },
    ],
    BUTTON_PRIMARY: "Book a Meeting",
    BUTTON_SECONDARY: "Call Us",
  },

  FOOTER: {
    PRIVACY_POLICY: null,
    TERMS: null,
    PRIVACY_URL: null,
    TERMS_URL: null,
    COPYRIGHT: "All rights reserved.",
  },

  TRUSTED_BY: {
    TITLE: "Trusted By",
  },

  NEWSLETTER_STATUS: {
    LOADING: "Subscribing...",
    SUCCESS: "✓ Subscribed!",
    ERROR: "Error — please try again",
  },

  MOBILE_CTA: "Free consultation →",
};

export default en;
