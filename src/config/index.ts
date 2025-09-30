import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Haruna Jukurogi — Quant & Finance",
  author: "Haruna Jukurogi",
  description:
    "4th-year Statistics & Economics student at the University of Toronto focused on quantitative finance, data analysis, and private-market research.",
  lang: "en",
  siteLogo: "/harunajukurogi.jpeg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/haruna-jukurogi/" },
    { text: "Github", href: "https://github.com/HarunaJ0414" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://<your-domain-or-vercel-app>", // update when deployed
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Haruna Jukurogi",
    specialty: "Quantitative Finance & Data Analytics",
    summary:
      "4th-year Stats & Econ at U of T. I use Python/R/SQL and econometrics to turn noisy data into clear, decision-ready insights for equities and private markets.",
    email: "harunajukurogi04@gmail.com",
  },

  experience: [
    {
      company: "FactSet",
      position: "Client Solutions Associate Intern (Tokyo)",
      startDate: "Jun 2025",
      endDate: "Aug 2025",
      summary: [
        "Delivered onboarding training (video + live) for institutional analysts on industry-specific financial data; evaluated highly for clarity and workflow relevance (clear objectives, click-by-click workflows, concrete company examples, and Excel templates).",
        "Presented private-market workflows to senior management (screening, PE/VC, M&A, IPO monitoring); recognized for adapting to audience feedback in real time and producing consistent, high-quality slides; led interns and delegated tasks by skill to deliver on time.",
        "Authored a user manual for a private-market dashboard (IPO/M&A/PE-VC monitoring) and drafted targeted outreach emails informed by institutional workflows and current deal news, improving feature awareness and adoption.",
        "Identified data anomalies and coordinated fixes with product/engineering, improving data accuracy and demonstrating strong attention to detail.",
      ],
    },
    {
      company: "Rational Capital Investment Fund",
      position: "Analyst Trainee",
      startDate: "Sep 2025",
      endDate: "Present",
      summary: [
        "Build financial models and valuations (DCF, comparables) across multiple sectors using statements and key operating metrics; connect academic theory to real securities.",
        "Collaborate in small teams to perform due diligence, write investment notes, and defend theses; communicate insights clearly to non-technical peers.",
        "Use Python/Excel to analyze historical performance, fundamentals, and catalysts; iterate based on mentor feedback to sharpen signal vs. noise.",
      ],
    },
    {
      company: "Japanese Association at Mississauga (UTM)",
      position: "President (Sep 2024–Jun 2025), VP Finance (Sep 2023–Jun 2024)",
      startDate: "Sep 2023",
      endDate: "Jun 2025",
      summary: [
        "Managed budgets and designed pricing models to run events sustainably without university subsidies.",
        "Grew attendance to 50+ at flagship events (+150% YoY) by improving outreach and securing Fantuan sponsorship, cutting $200+ in costs.",
        "Scaled team from 7 → 25+, restructured into functional pods, and directed the membership website foundation.",
        "Co-hosted cross-campus events with Asian student groups, generating $2,000+ in revenue and 200+ attendees.",
      ],
    },
    {
      company: "株式会社Splean",
      position: "Director Intern",
      startDate: "May 2024",
      endDate: "Sep 2024",
      summary: [
        "Self-taught Figma (no formal training) and produced static UI/UX mockups (layouts, components, style specs) that aligned stakeholders and sped up dev handoffs.",
        "Conducted market research for dentist websites and built tiered pricing plans with a feature roadmap (online booking, intake forms, reminders, analytics), enabling targeted pitches to prospective clients.",
        "Built the client presentation deck for a ~¥100M healthcare DX proposal, packaging workflows, mockups, and a phased delivery plan to advance approvals.",
      ],
    },
  ],

  projects: [
    {
      name: "Tariff Shock: Short-Term Impact of Proposed 2025 U.S. Tariffs",
      summary:
        "Event-study on equity indices: targeted countries vs. U.S. using announcement-window returns, abnormal returns, and robustness checks.",
      linkPreview: "/",
      linkSource: "https://github.com/HarunaJ0414/trumptariffimpact",
      image: "/project-tariff.png",
    },
    {
      name: "Portfolio Optimizer (Python)",
      summary:
        "Mean-variance optimizer with GMVP, tangency portfolio, and constraint handling; CSV/Excel I/O and matplotlib reporting.",
      linkPreview: "/",
      linkSource: "https://github.com/HarunaJ0414",
      image: "/project-optimizer.png",
    },
    {
      name: "Huffman Compressor",
      summary:
        "Implemented encoder/decoder with tree construction and verification tests; analyzes compression ratio on sample corpora.",
      linkPreview: "/",
      linkSource: "https://github.com/HarunaJ0414",
      image: "/project-huffman.png",
    },
  ],

  about: {
    description: `
I’m a Statistics & Economics student focused on quantitative finance. Recent work spans private-market workflows (FactSet Tokyo), valuation and research (Rational Capital), and product/UX support (Splean). I enjoy building clean analyses with Python/R/SQL, econometrics, Bayesian methods, and time series—always aiming for clarity, reproducibility, and practical impact.
    `,
    image: "/harunajukurogi.jpeg",
  },
};
