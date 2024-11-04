import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Abdullah Ahmed",
  initials: "AA",
  url: "https://abdullahahmed.me",
  location: "Lahore, Pakistan",
  locationLink: "https://www.google.com/maps/place/lahore",
  description:
    "Medical Student and Researcher. I love building things and helping people",
  summary:
    "I'm a fresh medical graduate from Allama Iqbal Medical College, and I've got to say—the human eye absolutely fascinates me. There's something magical about how this tiny organ lets us see the whole world, which is why I've set my heart on becoming an ophthalmologist. Right now, I'm in the thick of USMLE prep (coffee has become my best friend!), chasing my dream of landing an Ophthalmology residency in the US. When I'm not buried in books, you'll find me diving into eye-related research.\n\nI believe every pair of eyes tells a unique story, and I can't wait to be part of the journey in helping people maintain and restore their vision. Whether it's through clinical work or research breakthroughs, I'm determined to make my mark in this field. Always up for connecting with fellow enthusiasts, especially if you share my passion for eye care. Let's chat about medicine, research, or even exchange USMLE study tips!",
  avatarUrl: "/me.jpg",
  skills: [
    "Clinical Research",
    "R-Programming",
    "SPSS",
    "Office Suite",
    "Python",
    "Latex",
    "PUML",
    "Cochrane Revman",
    "Social Media",
    "Web Development with Next JS",
    "Video Editing",
    "Data Science",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "DHQ Teaching Hospital Sahiwal",
      href: "",
      badges: [],
      location: "Sahiwal, Pakistan",
      title: "House Officer (Ophthalmology Dept)",
      logoUrl: "/dhq-logo.webp",
      start: "June 2024",
      end: "Sep 2024",
      description:
        "Did a 3 months rotation as a clinical house officer in DHQ Teaching Hosp, Sahiwal which is affiliated with Sahiwal Medical College. ",
    },
    {
      company: "AIMC/JHL Research Society (AJRS)",
      href: "",
      badges: [],
      location: "Lahore, Pakistan",
      title: "Vice-President",
      logoUrl: "/ajrs-logo.webp",
      start: "2023",
      end: "2024",
      description:
        "Organised and managed several online workshops regarding basics of research. Served as a trainer in online workshops conducted by AJRS and guided junior researchers.",
    },
    {
      company: "IFMSA Pakistan – AIMC Local Chapter",
      href: "",
      badges: [],
      location: "Lahore, Pakistan",
      title: "Local Exchange Officer",
      logoUrl: "/ifmsa-logo.webp",
      start: "2020",
      end: "2023",
      description:
        "Organized a comprehensive 2-day Basic Life Saving Training Program, providing essential life-saving skills. Facilitated a successful Cervical Cancer Awareness Webinar, educating students on preventive measures and early detection methods. Led the planning and execution of an Online Workshop, 'Brainiac Camp,' focusing on teaching students the fundamentals of research. Coordinated logistics, secured speakers, and managed promotional activities for IFMSA events, ensuring high attendance and engagement.",
    },
  ],

  education: [
    {
      school: "Allama Iqbal Medical College",
      href: "https://aimc.edu.pk",
      degree: "MBBS - Bachelor of Medicine & Surgery",
      logoUrl: "/aimc-logo.webp",
      start: "2018",
      end: "2024",
      description: "Currently completing medical education with a focus on clinical rotations and research in ophthalmology. Dean's List 2023. Published multiple research articles in ophthalmology and medical education.",
    },
    {
      school: "University of Health Sciences",
      href: "https://uhs.edu.pk",
      degree: "MCAT",
      logoUrl: "/uhs-logo.webp",
      start: "2018",
      end: "2018",
      description: "Achieved ranking in Top 500 out of 80,000 examinees.",
    },
    {
      school: "DPS & Inter College",
      href: "https://dpssahiwal.edu.pk",
      degree: "FSc - Higher Secondary School Certificate",
      logoUrl: "/dps-logo.webp",
      start: "2016",
      end: "2017",
      description: "Completed pre-medical studies with distinction. Scored 91.7% in FSc",
    },
    {
      school: "Divisional Public School (DPS)",
      href: "https://dpssahiwal.edu.pk",
      degree: "Matric - Secondary School Certificate",
      logoUrl: "/dps-logo.webp",
      start: "2014",
      end: "2015",
      description: "Completed secondary education with excellence. Scored 95.3% in Matric",
    },
  ],
  // projects: [
  //   {
  //     title: "Chat Collect",
  //     href: "https://chatcollect.com",
  //     dates: "Jan 2024 - Feb 2024",
  //     active: true,
  //     description:
  //       "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
  //     technologies: [
  //       "Next.js",
  //       "Typescript",
  //       "PostgreSQL",
  //       "Prisma",
  //       "TailwindCSS",
  //       "Stripe",
  //       "Shadcn UI",
  //       "Magic UI",
  //     ],
  //     links: [
  //       {
  //         type: "Website",
  //         href: "https://chatcollect.com",
  //         icon: <Icons.globe className="size-3" />,
  //       },
  //     ],
  //     image: "",
  //     video:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
  //   },
  //   {
  //     title: "Magic UI",
  //     href: "https://magicui.design",
  //     dates: "June 2023 - Present",
  //     active: true,
  //     description:
  //       "Designed, developed and sold animated UI components for developers.",
  //     technologies: [
  //       "Next.js",
  //       "Typescript",
  //       "PostgreSQL",
  //       "Prisma",
  //       "TailwindCSS",
  //       "Stripe",
  //       "Shadcn UI",
  //       "Magic UI",
  //     ],
  //     links: [
  //       {
  //         type: "Website",
  //         href: "https://magicui.design",
  //         icon: <Icons.globe className="size-3" />,
  //       },
  //       {
  //         type: "Source",
  //         href: "https://github.com/magicuidesign/magicui",
  //         icon: <Icons.github className="size-3" />,
  //       },
  //     ],
  //     image: "",
  //     video: "https://cdn.magicui.design/bento-grid.mp4",
  //   },
  //   {
  //     title: "llm.report",
  //     href: "https://llm.report",
  //     dates: "April 2023 - September 2023",
  //     active: true,
  //     description:
  //       "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
  //     technologies: [
  //       "Next.js",
  //       "Typescript",
  //       "PostgreSQL",
  //       "Prisma",
  //       "TailwindCSS",
  //       "Shadcn UI",
  //       "Magic UI",
  //       "Stripe",
  //       "Cloudflare Workers",
  //     ],
  //     links: [
  //       {
  //         type: "Website",
  //         href: "https://llm.report",
  //         icon: <Icons.globe className="size-3" />,
  //       },
  //       {
  //         type: "Source",
  //         href: "https://github.com/dillionverma/llm.report",
  //         icon: <Icons.github className="size-3" />,
  //       },
  //     ],
  //     image: "",
  //     video: "https://cdn.llm.report/openai-demo.mp4",
  //   },
  //   {
  //     title: "Automatic Chat",
  //     href: "https://automatic.chat",
  //     dates: "April 2023 - March 2024",
  //     active: true,
  //     description:
  //       "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
  //     technologies: [
  //       "Next.js",
  //       "Typescript",
  //       "PostgreSQL",
  //       "Prisma",
  //       "TailwindCSS",
  //       "Shadcn UI",
  //       "Magic UI",
  //       "Stripe",
  //       "Cloudflare Workers",
  //     ],
  //     links: [
  //       {
  //         type: "Website",
  //         href: "https://automatic.chat",
  //         icon: <Icons.globe className="size-3" />,
  //       },
  //     ],
  //     image: "",
  //     video:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
  //   },
  // ],
  hackathons: [
    // Meta Analyses
    {
      title: "Macular Buckling for Myopic Traction Maculopathy: A Comprehensive Systematic Review and Meta-Analysis",
      dates: "Systematic Review and Meta Analysis",
      location: "American Journal of Ophthalmology",
      image: "https://pbs.twimg.com/profile_images/875384749874970625/g6re2pLJ_400x400.jpg",
      links: [
        {
          title: "DOI",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://doi.org/10.1016/j.ajo.2024.10.008",
          target: "_blank",
        },
      ],
    },
    {
      title: "Efficacy and Safety of Lotilaner Ophthalmic Solution (0.25%) for the Treatment of Demodex Blepharitis",
      dates: "Systematic Review and Meta-Analysis",
      location: "American Journal of Ophthalmology",
      image: "https://pbs.twimg.com/profile_images/875384749874970625/g6re2pLJ_400x400.jpg",
      links: [
        {
          title: "DOI",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://doi.org/10.1016/j.ajo.2024.03.019",
          target: "_blank",
        },
      ],
    },
    {
      title: "Efficacy of Gabapentinoids in Pain Resolution After Photorefractive Keratectomy: A Systematic Review and Meta-Analysis",
      dates: "Systematic Review and Meta-Analysis",
      location: "AJO International",
      image: "https://pbs.twimg.com/profile_images/875384749874970625/g6re2pLJ_400x400.jpg",
      links: [
        {
          title: "DOI",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://doi.org/10.1016/j.ajoint.2024.100039",
          target: "_blank",
        },
      ],
    },
    {
      title: "Comparative Efficacy of Direct Oral Anticoagulants and Low-Molecular-Weight Heparin in Cancer-Associated Thromboembolism",
      dates: "Systematic Review and Meta-Analysis",
      location: "Cureus",
      image: "https://d13i5xhouzkrd.cloudfront.net/assets/publisher-colored-logos/logo-innovative-cureus.png",
      links: [
        {
          title: "DOI",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://doi.org/10.7759/cureus.41071",
          target: "_blank",
        },
      ],
    },

    // Case Reports
    {
      title: "Nodular Posterior Scleritis with Associated Choroiditis Masquerading as a Choroidal Tumor",
      dates: "Case Report",
      location: "Journal of the Pakistan Medical Association",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-2rHfraEgLBcCQZORHEwsUs28t53vVI5mIQ&s",
      links: [
        {
          title: "DOI",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://doi.org/10.47391/JPMA.7895",
          target: "_blank",
        },
      ],
    },
    {
      title: "Abdominal Distention, Immunopositivity, and Aggressive Nature: A Rare Ewing's Sarcoma of the Adrenal Gland",
      dates: "Case Report",
      location: "Radiology Case Reports",
      image: "/RCR.webp",
      links: [
        {
          title: "DOI",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://doi.org/10.1016/j.radcr.2024.02.024",
          target: "_blank",
        },
      ],
    },
    {
      title: "Concurrent Acute Pancreatitis, Pneumoperitoneum, Pneumoretroperitoneum, and Pneumomediastinum Following ERCP-Related Perforation: A Rare and Insightful Case Study",
      dates: "Case Report",
      location: "Radiology Case Reports",
      image: "/RCR.webp",
      links: [
        {
          title: "DOI",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://doi.org/10.1016/j.radcr.2023.12.064",
          target: "_blank",
        },
      ],
    },

    // Letters to the Editor
    {
      title: "Variability in Serum Creatinine is Associated with Waitlist and Post-Liver Transplant Mortality in Patients with Cirrhosis",
      dates: "Letter to the Editor",
      location: "Hepatology",
      image: "https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/348222333_231844899565918_3978845154563614908_n.png?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=hjKAM4HxOs0Q7kNvgGFQ23m&_nc_zt=23&_nc_ht=scontent-sin6-4.xx&_nc_gid=AmzKTO21ZlUHPf-fZ5nZ8cp&oh=00_AYApij2i94XvKZBbh33hnCdvc96aWNQ5LLMrQRIpOHLRUg&oe=672D2C54",
      links: [
        {
          title: "DOI",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://doi.org/10.1097/HEP.0000000000000429",
          target: "_blank",
        },
      ],
    },
    {
      title: "Long-Term Surgical Results of Anomalous Origin of the Left Coronary Artery from the Pulmonary Artery Repair in Infants and Older Patients",
      dates: "Letter to the Editor",
      location: "Journal of Cardiac Surgery",
      image: "https://www.wiley.com/medias/Wiley-Logo-White.png?context=bWFzdGVyfGltYWdlc3w3NDUzfGltYWdlL3BuZ3xzeXMtbWFzdGVyL2ltYWdlcy9oMTYvaDUwLzg4ODM2Nzk3MjM1NTAvV2lsZXkgTG9nbyBXaGl0ZS5wbmd8Y2IxYmY3M2IyNzE0NTk3NzM1ZjEzYTk5YTQ5YjUzNzE0ZTMzYTcxYmViMjBmMGUwNGU4YjEwZTYwMTYwOGU0Zg",
      links: [
        {
          title: "DOI",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://doi.org/10.1111/jocs.17030",
          target: "_blank",
        },
      ],
    },
    {
      title: "Outcomes of Surgical Mitral Valve Replacement: A Benchmark to Assess Transcatheter Technologies",
      dates: "Letter to the Editor",
      location: "Journal of Cardiac Surgery",
      image: "https://www.wiley.com/medias/Wiley-Logo-White.png?context=bWFzdGVyfGltYWdlc3w3NDUzfGltYWdlL3BuZ3xzeXMtbWFzdGVyL2ltYWdlcy9oMTYvaDUwLzg4ODM2Nzk3MjM1NTAvV2lsZXkgTG9nbyBXaGl0ZS5wbmd8Y2IxYmY3M2IyNzE0NTk3NzM1ZjEzYTk5YTQ5YjUzNzE0ZTMzYTcxYmViMjBmMGUwNGU4YjEwZTYwMTYwOGU0Zg",
      links: [
        {
          title: "DOI",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://doi.org/10.1111/jocs.16836",
          target: "_blank",
        },
      ],
    },
    {
      title: "Intraoperative Renal Hypoxia and Risk of Cardiac Surgery-Associated Acute Kidney Injury",
      dates: "Letter to the Editor",
      location: "Journal of Cardiac Surgery",
      image: "https://www.wiley.com/medias/Wiley-Logo-White.png?context=bWFzdGVyfGltYWdlc3w3NDUzfGltYWdlL3BuZ3xzeXMtbWFzdGVyL2ltYWdlcy9oMTYvaDUwLzg4ODM2Nzk3MjM1NTAvV2lsZXkgTG9nbyBXaGl0ZS5wbmd8Y2IxYmY3M2IyNzE0NTk3NzM1ZjEzYTk5YTQ5YjUzNzE0ZTMzYTcxYmViMjBmMGUwNGU4YjEwZTYwMTYwOGU0Zg",
      links: [
        {
          title: "DOI",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://doi.org/10.1111/jocs.16893",
          target: "_blank",
        },
      ],
    },
    {
      title: "Plasma Biomarkers and Delirium in Critically Ill Patients After Cardiac Surgery: A Prospective Observational Cohort Study",
      dates: "Letter to the Editor",
      location: "Current Problems in Cardiology",
      image: "https://images.ctfassets.net/zlnfaxb2lcqx/72P01CCLp50WUFMHAOKoYU/ab29c1aa5d27748a2e6f5f09d002e70a/elsevier_logo_wide.png",
      links: [
        {
          title: "DOI",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://doi.org/10.1016/j.cpcardiol.2023.101951",
          target: "_blank",
        },
      ],
    },
    {
      title: "Total Arch Replacement in Patients with Chronic Kidney Disease",
      dates: "Letter to the Editor",
      location: "Journal of Cardiac Surgery",
      image: "https://www.wiley.com/medias/Wiley-Logo-White.png?context=bWFzdGVyfGltYWdlc3w3NDUzfGltYWdlL3BuZ3xzeXMtbWFzdGVyL2ltYWdlcy9oMTYvaDUwLzg4ODM2Nzk3MjM1NTAvV2lsZXkgTG9nbyBXaGl0ZS5wbmd8Y2IxYmY3M2IyNzE0NTk3NzM1ZjEzYTk5YTQ5YjUzNzE0ZTMzYTcxYmViMjBmMGUwNGU4YjEwZTYwMTYwOGU0Zg",
      links: [
        {
          title: "DOI",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://doi.org/10.1111/jocs.17011",
          target: "_blank",
        },
      ],
    },
    {
      title: "Association Between Admission Serum Phosphate and Risk of Acute Kidney Injury in Critically Ill Patients with Rhabdomyolysis: A Retrospective Study Based on MIMIC-III",
      dates: "Letter to the Editor",
      location: "Injury",
      image: "https://images.ctfassets.net/zlnfaxb2lcqx/72P01CCLp50WUFMHAOKoYU/ab29c1aa5d27748a2e6f5f09d002e70a/elsevier_logo_wide.png",
      links: [
        {
          title: "DOI",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://doi.org/10.1016/j.injury.2023.111090",
          target: "_blank",
        },
      ],
    },
    {
      title: "Long-Term Effectiveness and Safety of Anti-TNF in Pediatric-Onset Inflammatory Bowel Diseases: A Population-Based Study",
      dates: "Letter to the Editor",
      location: "Digestive and Liver Disease",
      image: "https://images.ctfassets.net/zlnfaxb2lcqx/72P01CCLp50WUFMHAOKoYU/ab29c1aa5d27748a2e6f5f09d002e70a/elsevier_logo_wide.png",
      links: [
        {
          title: "DOI",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://doi.org/10.1016/j.dld.2024.04.030",
          target: "_blank",
        },
      ],
    },
  ],
} as const;

