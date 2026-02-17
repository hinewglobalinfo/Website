export const themeConfig = {
  // Brand Identity
  brand: {
    name: "Hinew.global",
    subtext: "The Digital Boutique",
    logoUrl: "/logo.png", // Path to your uploaded official logo
    established: "2026",
  },

  // Official Logo Palette
  colors: {
    primary: "#08202b",    // Deep Teal Background
    secondary: "#0c2a35",  // Lighter Teal for Cards
    accent: "#3ed0e6",     // Official Luminous Cyan
    textMuted: "#8eb1b9",  // Soft Stone Blue
    white: "#ffffff",
  },

  // Contact & Studio Info
  contact: {
    email: "hinew.global@gmail.com",
    location: "Islamabad, PKT ",
    linkedin: "linkedin.com/company/hinew-global",
  },

  // Master Project Collection (Extracted from your CVs)
  portfolio: [
    {
      title: "PakBNB: Premium Rental Ecosystem",
      category: "Full-Stack Architecture",
      desc: "A high-fidelity rental listing platform engineered for seamless user discovery and secure property management[cite: 46, 47, 48].",
      tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    },
    {
      title: "AI Confidence Analyser",
      category: "Machine Intelligence",
      desc: "A sophisticated system utilizing computer vision to analyze human confidence levels through advanced ML training pipelines[cite: 53, 54, 55].",
      tech: ["Python", "OpenCV", "ML", "ImageNet"],
    },
    {
      title: "E-Commerce & Advocacy Platform",
      category: "Deployment & Server Mgmt",
      desc: "Managed end-to-end deployment cycles and server hardening, implementing custom PHP functions and automated protocols.",
      tech: ["WordPress", "cPanel", "PHP", "DNS Mgmt"],
    },
    {
      title: "Enterprise CI/CD Pipelines",
      category: "DevOps & Automation",
      desc: "Automated build, test, and deployment workflows integrated with Cypress for high-fidelity code quality[cite: 11, 12, 13].",
      tech: ["Jenkins", "Docker", "GitHub Actions"],
    },
    {
      title: "Job Fair Management System",
      category: "Systems Engineering",
      desc: "A comprehensive database-backed platform managing employer registrations, job postings, and student applications.",
      tech: ["SQL", "C#", "Database Design"],
    },
    {
      title: "Roommate Matching System",
      category: "DBMS Logic",
      desc: "A preference-based matching engine designed with a robust Oracle schema to harmonize living arrangements[cite: 50, 51, 52].",
      tech: ["PHP", "Oracle DB", "SQL"],
    }
  ]
};