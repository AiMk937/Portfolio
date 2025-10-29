/* ==========================================================
   EDIT ME ONLY — Easy Content for Everyone
   If you can read, you can update this site. No code skills needed.

   HOW TO CHANGE:
   - Text between quotes "like this".
   - Lists are [like, this].
   - Don't delete commas or braces.
   ========================================================== */

const SITE = {
  // Basic
  name: "Aimaan Khan",
  role: "AI Engineer • Full-Stack Developer • Product Innovator",
  tagline: "Building intelligent systems that combine AI, data, and design to solve real-world problems.",
  location: "Mumbai, India",
  email: "aimaanjkhaan@gmail.com",
  ctaPrimary: { text: "Download Resume", link: "assets/Resume_Aimaan_Khan_J.pdf" },
  ctaSecondary: { text: "Get in touch", link: "#contact" },

  // Top navigation (in order)
  nav: [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "tech", label: "Tech Stack" },
    { id: "education", label: "Education" },
    { id: "pubs", label: "Publications" },
    { id: "contact", label: "Contact" }
  ],

  // Hero badges (short words)
  badges: ["AI", "Machine Learning", "Full-Stack", "IoT", "Cybersecurity"],

  // About
  about: {
    title: "About",
    intro: "I'm a passionate AI and software engineer who loves building impactful products that merge research, data, and user experience. My work spans AI modeling, full-stack development, IoT systems, and applied machine learning.",
    bullets: [
      "Hands-on experience with AI, data analysis, and IoT integrations",
      "End-to-end product development — from backend to predictive modeling",
      "Published research in AI and IoT applications",
      "A lifelong learner, driven by curiosity and innovation"
    ]
  },

  // Experience (latest first)
  experience: [
    {
      title: "Intern - Python Developer",
      org: "BeamOptics Scientific Pvt. Ltd.",
      period: "Jul 2025 — Oct 2025",
      points: [
        "Developed an automated MBRT (milk quality test) machine software using Python and Raspberry Pi 4.",
        "Built UI/UX for Waveshare display and integrated light sensors for real-time data visualization.",
        "Implemented predictive modeling to estimate MBRT time, improving testing efficiency and accuracy."
      ],
      tags: ["Python", "IoT", "Data Analysis", "Raspberry Pi", "Kivy"]
    },
    {
      title: "Web Developer Intern",
      org: "Prism Cybersoft Pvt. Ltd.",
      period: "Jun 2024 — Jul 2024",
      points: [
        "Developed a responsive website for SOHAM software documentation using the MERN stack.",
        "Optimized structure and navigation for improved cross-device accessibility."
      ],
      tags: ["MERN", "UI/UX", "Responsive Design", "Web Development"]
    },
    {
      title: "Software Developer Intern",
      org: "cloudyBoss Pty Ltd",
      period: "Aug 2023 — Jun 2024",
      points: [
        "Worked on AI-driven cybersecurity models for endpoint detection and automated response.",
        "Designed a universal data denormalization module for AI-ready federated datasets.",
        "Contributed to the ANIMA AI engine and earned cBX84 accreditation in ML and solution design."
      ],
      tags: ["AI", "Cybersecurity", "Machine Learning", "Data Modeling"]
    }
  ],

  // Projects
  projects: [
    {
      name: "Automated MBRT Machine",
      blurb: "Python-based MBRT analyzer for milk quality testing with real-time sensor data visualization and predictive modeling.",
      link: "https://github.com/AiMk937",
      tags: ["Python", "IoT", "Data Analysis", "Kivy", "Raspberry Pi"]
    },
    {
      name: "AI Timetable Scheduler",
      blurb: "Node.js + MongoDB scheduling engine with NLP-based natural language timetable editing and conflict-free allocation.",
      link: "https://github.com/AiMk937/timetable-scheduler",
      tags: ["Node.js", "MongoDB", "Express", "AI", "NLP"]
    },
    {
      name: "Cyber-Attack Detection Model",
      blurb: "Random Forest classifier for detecting malicious traffic in real-time cybersecurity environments.",
      link: "https://github.com/AiMk937",
      tags: ["Python", "Machine Learning", "Cybersecurity", "scikit-learn"]
    },
    {
      name: "Toxic Comment Detector",
      blurb: "Flask-based web app that classifies online comments into toxicity levels using TF-IDF and Logistic Regression.",
      link: "https://github.com/AiMk937/toxic-comment-detector",
      tags: ["Python", "Flask", "NLP", "Logistic Regression"]
    },
    {
      name: "IoT Vehicle Tracker",
      blurb: "GPS-based IoT dashboard for monitoring vehicle speed and location in real time.",
      link: "https://github.com/Mariyum008/SmartTracker-IoT",
      tags: ["IoT", "GPS", "Embedded Systems", "Python"]
    }
  ],

  // Tech stack (group by category)
  tech: [
    { group: "Languages", items: ["Python", "JavaScript", "Java", "SQL"] },
    { group: "Frontend", items: ["HTML", "CSS", "React", "Bootstrap", "Kivy"] },
    { group: "Backend", items: ["Node.js", "Express", "Flask", "FastAPI"] },
    { group: "Data/ML", items: ["scikit-learn", "PyTorch", "Pandas", "NumPy"] },
    { group: "DB/Infra", items: ["MongoDB", "PostgreSQL", "AWS", "Docker"] }
  ],

  // Education
  education: [
    {
      school: "University of Mumbai — B.E. Computer Engineering (Honors in Cyber Security)",
      period: "2021 — 2025",
      detail: "Graduated with a GPA of 7.79; specialized in ML, Systems, and Cybersecurity."
    },
    { school: "RIMS International Junior College", period: "2020", detail: "Higher Secondary (HSC)" },
    { school: "St. Mary's High School", period: "2017", detail: "Secondary School (SSC)" }
  ],

  // ================= Certificates =================
    certs: [
      {
        title: "Advanced Diploma in Desktop Publishing",
        by: "GlobeNet Computer Education",
        link: "assets/certificates/GlobeNet ADVANCE DIPLOMA IN DESKTOP PUBLISHING.jpg"
      },
      {
        title: "Cyber Hygiene Practices – Stay Safe Online (G20)",
        by: "C-DAC & Ministry of Electronics and IT, Govt. of India",
        link: "assets/certificates/SSO_Certificate.jpg"
      },
      {
        title: "Code Debugging – Dept. of AI & Data Science",
        by: "Rizvi College of Engineering",
        link: "assets/certificates/Code Debugging.jpg"
      },
      {
        title: "Artificial Intelligence & Machine Learning Workshop",
        by: "IIT Bombay & Techobytes Technologies",
        link: "assets/certificates/AIML.jpg"
      },
      {
        title: "AWS Academy Graduate – Cloud Foundations",
        by: "Amazon Web Services",
        link: "assets/certificates/AWS CF.jpg"
      },
      {
        title: "Volunteer – Mumbai Comic Con 2023",
        by: "Comic Con India",
        link: "assets/certificates/MCC23.jpg"
      },
      {
        title: "Google AI Essentials",
        by: "Google | Coursera",
        link: "assets/certificates/Google AI essentials.jpg"
      },
      {
        title: "HTML, CSS & JavaScript for Web Developers",
        by: "Johns Hopkins University | Coursera",
        link: "assets/certificates/WEB-DEV.jpg"
      },
      {
        title: "Demystifying Networking",
        by: "NPTEL | IIT Bombay",
        link: "assets/certificates/NPTEL.jpg"
      },
      {
        title: "Flipkart GRiD 6.0 – Software Development Track",
        by: "Flipkart | Unstop",
        link: "assets/certificates/Flipkart GRiD 6 participation.jpg"
      }
    ],

  // Publications
  pubs: [
    {
      title: "AI-Powered Timetable Scheduler and Management",
      outlet: "JETIR2410528, Journal of Emerging Technologies and Innovative Research",
      link: "https://www.jetir.org/view?paper=JETIR2410528"
    },
    {
      title: "IoT-Based Vehicle Location and Speed Monitoring for Parental Peace of Mind",
      outlet: "JETIR2404639, Journal of Emerging Technologies and Innovative Research",
      link: "https://www.jetir.org/view?paper=JETIR2404639"
    }
  ],

  // Contact
  contact: {
    blurb: "Let's collaborate to create meaningful, AI-powered products that make a difference.",
    links: [
      { label: "Email", href: "mailto:aimaanjkhaan@gmail.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/aimaan-khan" },
      { label: "GitHub", href: "https://github.com/AiMk937" }
    ]
  }
};

// Export to window for app.js
window.SITE = SITE;