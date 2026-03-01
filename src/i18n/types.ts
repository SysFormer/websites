export type Locale = 'pl' | 'en';

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface AgendaItem {
  number: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  image: string;
  title: string;
  description: string;
}

export interface AutomationArea {
  title: string;
  description: string;
  image: string;
}

export interface WhyChooseItem {
  icon: string;
  title: string;
  description: string;
  image: string;
}

export interface Problem {
  image: string;
  text: string;
}

export interface Testimonial {
  content: string;
  author: string;
  role: string;
  company?: string;
  image: string;
}

export interface SiteContent {
  CONTACT: {
    email: string;
    phone: string;
    phoneLink: string;
    emailLink: string;
    address: string;
    linkedin: string;
  };

  TRAINING_PRICE: number;

  TEAM_MEMBERS: TeamMember[];
  TRAINING_FEATURES: string[];
  AGENDA_ITEMS: AgendaItem[];
  PROCESS_STEPS: ProcessStep[];
  AUTOMATION_AREAS: AutomationArea[];
  WHY_CHOOSE_ITEMS: WhyChooseItem[];
  PROBLEMS: Problem[];
  PROBLEMS_WDROZENIA: Problem[];
  TESTIMONIALS: Testimonial[];

  HOME_PAGE: {
    HERO: {
      LABEL: string;
      TITLE: string;
      TITLE_HIGHLIGHT: string;
      SUBTITLE: string;
      BUTTON_PRIMARY: string;
      BUTTON_SECONDARY: string;
      PROOF: string;
    };
    FEATURED_CASE: {
      EMOJI: string;
      TEXT: string;
      DESCRIPTION: string;
      LINK: string;
    };
    FOR_WHO: {
      TITLE: string;
      CARDS: Array<{
        icon: string;
        title: string;
        description: string;
      }>;
    };
    WHY_US: {
      TITLE: string;
      CARDS: Array<{
        icon: string;
        title: string;
        description: string;
      }>;
    };
    CASE_STUDY: {
      BADGE: string;
      TITLE: string;
      INTRO: string;
      WHAT_WE_DID: {
        TITLE: string;
        ITEMS: string[];
      };
      RESULTS: {
        TITLE: string;
        ITEMS: Array<{
          number: string;
          label: string;
        }>;
      };
      CTA: string;
    };
    NEWSLETTER: {
      TITLE: string;
      INTRO: string;
      BENEFITS: string[];
      COMMUNITY: string;
      PLACEHOLDER: string;
      BUTTON: string;
      DISCLAIMER: string;
    };
    SOLUTIONS: {
      TITLE: string;
      DESCRIPTION: string;
      SUBHEADING: string;
      CARDS: {
        TRAINING: {
          TITLE: string;
          DESCRIPTION: string;
          LINK: string;
          URL: string;
        };
        FLOWONE: {
          TITLE: string;
          DESCRIPTION: string;
          LINK: string;
          URL: string;
        };
      };
    };
    TESTIMONIALS: {
      TITLE: string;
    };
    CONTACT: {
      TITLE: string;
      SUBTITLE: string;
      BENEFITS: string[];
    };
    CTA: {
      TITLE: string;
      DESCRIPTION: string;
      BUTTON_PRIMARY: string;
    };
  };

  NAV: {
    TRAINING: string;
    IMPLEMENTATIONS: string;
    TEAM: string;
    CONTACT: string;
    URLS: {
      TRAINING: string;
      IMPLEMENTATIONS: string;
    };
  };

  TRAINING_PAGE: {
    HERO: {
      LABEL: string;
      TITLE: string;
      SUBTITLE: string;
      BUTTON_PRIMARY: string;
      BUTTON_SECONDARY: string;
    };
    CTA: {
      TITLE: string;
      DESCRIPTION: string;
      BUTTON_PRIMARY: string;
    };
  };

  IMPLEMENTATIONS_PAGE: {
    HERO: {
      LABEL: string;
      TITLE: string;
      SUBTITLE: string;
      BUTTON_PRIMARY: string;
      BUTTON_SECONDARY: string;
    };
    CTA: {
      TITLE: string;
      DESCRIPTION: string;
      BUTTON_PRIMARY: string;
    };
  };

  PROBLEMS_COMPONENT: {
    TITLE: string;
  };

  FLOW_ONE_COMPONENT: {
    TITLE: string;
    DESCRIPTION: string;
    GOAL: {
      TITLE: string;
      DESCRIPTION: string;
      BILLING: string;
    };
    PROCESS_TITLE: string;
    AREAS: {
      TITLE: string;
      SUBTITLE: string;
    };
  };

  WHY_CHOOSE_COMPONENT: {
    TITLE: string;
    PHILOSOPHY: {
      TITLE: string;
      DESCRIPTION: string;
    };
  };

  TRAINING_COMPONENT: {
    TITLE: string;
    DESCRIPTION: string;
    FEATURES_TITLE: string;
    PRICE: {
      TITLE: string;
      VALUE: number;
      NOTE: string;
    };
    AGENDA: {
      TITLE: string;
      SUBTITLE: string;
    };
  };

  TEAM_COMPONENT: {
    TITLE: string;
    DESCRIPTION: string;
  };

  CTA_COMPONENT: {
    TITLE: string;
    DESCRIPTION: string;
    STEPS_TITLE: string;
    STEPS: Array<{
      BOLD: string;
      TEXT: string;
    }>;
    BUTTON_PRIMARY: string;
    BUTTON_SECONDARY: string;
  };

  // Keys for strings that were hardcoded in PL components
  FOOTER: {
    PRIVACY_POLICY: string | null;
    TERMS: string | null;
    PRIVACY_URL: string | null;
    TERMS_URL: string | null;
    COPYRIGHT: string;
  };

  TRUSTED_BY: {
    TITLE: string;
  };

  NEWSLETTER_STATUS: {
    LOADING: string;
    SUCCESS: string;
    ERROR: string;
  };

  MOBILE_CTA: string;
}
