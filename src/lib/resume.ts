/**
 * Single source of truth — every value here is taken directly from
 * Pulkit Sharma's resume (Pulkit_Resume-2.pdf). Nothing is invented.
 */

export const profile = {
  name: "Pulkit Sharma",
  role: "AI / ML Engineer",
  location: "Surat, India",
  initials: "PS",
  tagline: "B.Tech Artificial Intelligence @ SVNIT",
  summary:
    "Bachelor of Technology student in Artificial Intelligence at SVNIT, Surat. Experienced in Reinforcement Learning from Human Feedback (RLHF), data analysis, and web integration. Proficient in Python, C++, and implementing Machine Learning algorithms like Gradient Descent and Logistic Regression. Enthusiastic problem solver with a strong track record on LeetCode and GeeksforGeeks.",
  email: "pulkitsharma151206@gmail.com",
  phone: "+91-7073565286",
  links: {
    github: "https://github.com/pulkit1512",
    githubHandle: "pulkit1512",
    linkedin: "https://linkedin.com/in/pulkit-sharma",
    linkedinHandle: "in/pulkit-sharma",
  },
  available: true,
} as const;

export const education = {
  institute: "Sardar Vallabhbhai National Institute of Technology (SVNIT)",
  shortName: "SVNIT",
  location: "Surat, India",
  degree: "Bachelor of Technology in Artificial Intelligence",
  cgpa: "7.03",
  span: "2024 – 2028",
  highlights: [
    "JEE Main 2024: Achieved 99.31 Percentile.",
    "JEE Advanced 2024: Qualified.",
  ],
} as const;

export const skillGroups = [
  {
    key: "languages",
    title: "Languages",
    tag: "/languages",
    items: ["C", "C++", "Python", "HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    key: "frameworks",
    title: "Frameworks",
    tag: "/frameworks",
    items: ["Node.js", "React.js", "Express.js", "Next.js"],
  },
  {
    key: "ml",
    title: "Machine Learning",
    tag: "/ml",
    items: [
      "Linear Regression",
      "Logistic Regression",
      "Gradient Boosting",
      "EDA",
      "XGBoost",
      "Feature Engineering",
    ],
  },
  {
    key: "data",
    title: "Data Science",
    tag: "/data-science",
    items: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Data Analysis"],
  },
  {
    key: "tools",
    title: "Tools",
    tag: "/tools",
    items: ["Git", "GitHub", "VS Code", "MySQL Workbench", "Anaconda"],
  },
] as const;

export const positions = [
  {
    title: "Co-Head, Admin & Documentation",
    org: "Sparsh, SVNIT",
    detail:
      "Leading the administration and documentation team for the annual cultural fest, managing official records and logistics.",
  },
  {
    title: "Coordinator",
    org: "ATPAC, SVNIT",
    detail:
      "Facilitating technical activities and student engagement initiatives as part of the departmental student chapter.",
  },
  {
    title: "Coordinator",
    org: "Cultural Affairs Council, SVNIT",
    detail:
      "Managing events and coordinating logistics for institute-level cultural activities.",
  },
] as const;

export const achievements = [
  {
    label: "LeetCode",
    value: "280+",
    detail: "problems solved — strong data structures & algorithms skills.",
  },
  {
    label: "GeeksforGeeks",
    value: "100+",
    detail: "problems solved, consistently practicing competitive programming.",
  },
  {
    label: "JEE Main 2024",
    value: "99.31%",
    detail: "percentile in a national-level entrance exam.",
  },
  {
    label: "CGPA",
    value: "7.03",
    detail: "B.Tech Artificial Intelligence, SVNIT Surat.",
  },
] as const;

/**
 * Certifications — the three images live in the local `certificate/` folder
 * (copied to /public/certificates). Descriptions summarise each credential.
 * The Microsoft "Discover Data Analysis" credential is text-only on the resume.
 */
export const certifications = [
  {
    title: "LeetCode 100 Days Badge 2025",
    issuer: "LeetCode",
    year: "2025",
    image: "/certificates/leetcode-100-days.png",
    description:
      "Awarded for solving problems across 100+ distinct days in 2025 — sustained consistency in data structures & algorithms practice.",
    ratio: "portrait",
  },
  {
    title: "LeetCode 50 Days Badge 2025",
    issuer: "LeetCode",
    year: "2025",
    image: "/certificates/leetcode-50-days.png",
    description:
      "Recognises 50+ days of continued problem solving on LeetCode, building toward the 100-day milestone.",
    ratio: "portrait",
  },
  {
    title: "Certificate of Achievement — Google Winter of Code '26",
    issuer: "Google Developer Group · SVNIT Surat",
    year: "2026",
    image: "/certificates/gwoc-2026.jpeg",
    description:
      "Presented by GDG SVNIT for outstanding performance in GWOC '26, contributing to the challenging problem statement of the MindSettler project.",
    ratio: "landscape",
  },
  {
    title: "Discover Data Analysis",
    issuer: "Microsoft",
    year: "",
    image: "",
    description:
      "Microsoft credential covering foundational data analysis workflows and interpretation.",
    ratio: "text",
  },
] as const;

/**
 * Projects — taken verbatim from the resume. Bullets and stacks are exactly as
 * written; nothing is invented. Only MindSettler has a public link on the resume.
 */
export const projects = [
  {
    slug: "ai-match-predictor",
    title: "AI Match Predictor",
    tagline: "An IPL predictive-analytics engine forecasting match outcomes from live game state.",
    period: "Dec 2025 – Jan 2026",
    stack: ["Python", "Scikit-learn", "Pickle", "Pandas", "NumPy"],
    domain: "Machine Learning",
    link: "",
    repo: "",
    image: "/assets/projects/ai-match-predictor.png",
    imageAlt: "AI Match Predictor — IPL predictive analytics engine with match-setup and momentum inputs.",
    highlights: [
      "Collaborated to develop a machine learning application that predicts cricket match outcomes based on historical data.",
      "Implemented Logistic Regression and Gradient Descent optimization to enhance model prediction accuracy.",
      "Performed data cleaning and feature engineering using Pandas and NumPy to optimize dataset quality.",
    ],
  },
  {
    slug: "mindsettler",
    title: "MindSettler — Mental Health Platform",
    tagline: "A holistic mental health platform with intelligent therapy scheduling.",
    period: "Dec 2025 – Jan 2026",
    stack: ["HTML", "CSS", "JavaScript"],
    domain: "Web Platform",
    link: "https://mindsettler-taupe.vercel.app",
    repo: "",
    image: "/assets/projects/mindsettler.png",
    imageAlt: "MindSettler landing page — 'Journey to Inner Peace' hero with booking and resources navigation.",
    highlights: [
      "Contributed to the development of a holistic mental health platform focusing on user-friendly interface design.",
      "Implemented responsive frontend components using HTML, CSS, and JavaScript to ensure accessibility across devices.",
      "Assisted in integrating the intelligent therapy scheduling engine and secure user data handling protocols.",
    ],
  },
  {
    slug: "maskdetect",
    title: "MaskDetect — Face-Mask Classifier",
    tagline: "Real-time face-mask detection from a photo or webcam using a fine-tuned CNN.",
    period: "2025 – 2026",
    stack: ["Python", "TensorFlow / Keras", "Transfer Learning", "FastAPI", "JavaScript"],
    domain: "Deep Learning",
    link: "",
    repo: "",
    image: "/assets/projects/maskdetect.png",
    imageAlt: "MaskDetect app — upload or webcam interface for single-click face-mask detection.",
    highlights: [
      "Fine-tuned a convolutional neural network with transfer learning to detect whether a face is masked and report its confidence instantly.",
      "Built a web interface supporting image upload and live webcam capture, served by a prediction API with interactive docs.",
      "Added a pipeline and dashboard view with inference history to track and inspect model predictions over time.",
    ],
  },
] as const;

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Neural Studio", href: "#neural-studio" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
] as const;
