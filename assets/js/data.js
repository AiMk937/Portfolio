/* All site content lives here. Edit this file to update the portfolio - no other file needs to change. */
window.DATA = {
  person: {
    name: "Aimaan Khan",
    first: "Aimaan",
    initials: "AK",
    headline: "Data & ML engineer",
    location: "San Jose, CA",
    school: "M.S. Applied Data Intelligence @ San José State University",
    email: "aimaanjkhaan@gmail.com",
    resume: "assets/docs/Resume_Aimaan_Khan.pdf",
    photo: "assets/img/profile.jpg", // optional - add this file and it replaces the initials everywhere
    intro: "Grad student at SJSU who builds machine-learning systems that actually ship - from intrusion detection models to Raspberry Pi lab machines - with two published papers and three internships behind me.",
    links: {
      github: "https://github.com/AiMk937",
      linkedin: "https://www.linkedin.com/in/aimaan-khan",
      kaggle: "https://www.kaggle.com/aimaankhan",
      leetcode: "https://leetcode.com/u/AiM937/",
      credly: "https://www.credly.com/users/aimaan-khan.d4248b5d"
    },
    /* Creator / social channels */
    creator: [
      { label: "Instagram", handle: "@__aimaan_k__", url: "https://www.instagram.com/__aimaan_k__/", icon: "instagram" },
      { label: "YouTube", handle: "@AiMadventuress", url: "https://www.youtube.com/@AiMadventuress", icon: "youtube" },
      { label: "YouTube (gaming)", handle: "@AiMaK16", url: "https://www.youtube.com/@AiMaK16", icon: "youtube" },
      { label: "Twitch", handle: "aimak16", url: "https://www.twitch.tv/aimak16", icon: "twitch" }
    ],
    languages: ["English", "Hindi"]
  },

  /* Who-is-visiting options on the landing page */
  visitors: [
    { id: "friend", label: "A friend", note: "Show me the real Aimaan", href: "friend.html", icon: "smile" },
    { id: "recruiter", label: "Recruiter / HR", note: "I'm hiring - show me the fit", href: "hire.html", icon: "briefcase" },
    { id: "professor", label: "Professor", note: "Research, coursework and publications", href: "academic.html?for=professor", icon: "cap" },
    { id: "colleague", label: "Classmate / Colleague", note: "What you work on and how to team up", href: "academic.html?for=colleague", icon: "users" },
    { id: "brand", label: "Brand / Community", note: "Ambassador and creator side", href: "role.html?r=ambassador", icon: "megaphone" },
    { id: "curious", label: "Just curious", note: "The quick tour", href: "academic.html?for=visitor", icon: "compass" }
  ],

  /* Experience (shared by every page; `roles` decides where each bullet is emphasised) */
  experience: [
    {
      id: "beamoptics",
      title: "Python Developer Intern",
      org: "BeamOptics Scientific Pvt. Ltd.",
      where: "Mumbai, India",
      dates: "Jul 2025 - Oct 2025",
      summary: "Built the full software stack for an automated milk-quality (MBRT) testing machine on Raspberry Pi 4.",
      bullets: [
        "Wrote the complete Raspberry Pi 4 stack - sensor integration, backend logic and a Kivy touch UI on a Waveshare display.",
        "Built a statistical model that estimates the MBRT result before the test completes.",
        "Automated data capture and live visualization of light-sensor readings in Python.",
        "Owned lab testing, debugging and deployment until the machine was ready to ship."
      ],
      tags: ["Python", "Raspberry Pi", "Kivy", "Sensors", "Predictive modeling"]
    },
    {
      id: "prism",
      title: "Web Developer Intern",
      org: "Prism Cybersoft Pvt. Ltd.",
      where: "Mumbai, India",
      dates: "Jun 2024 - Jul 2024",
      summary: "Built a responsive documentation website for SOHAM software.",
      bullets: [
        "Developed responsive documentation pages for SOHAM software.",
        "Restructured navigation and layouts for accessibility across devices and browsers."
      ],
      tags: ["JavaScript", "HTML/CSS", "MERN", "Responsive design"]
    },
    {
      id: "cloudyboss",
      title: "Software Developer Intern",
      org: "cloudyBoss Pty Ltd",
      where: "",
      dates: "Aug 2023 - Jun 2024",
      summary: "Worked on AI-driven endpoint detection and response (EDR) for a cybersecurity platform.",
      bullets: [
        "Trained endpoint-detection models on STIX-compliant threat signals to automate response.",
        "Designed a universal data denormalization module that turns federated data into ML-ready tables.",
        "Contributed ML components to the ANIMA AI engine; earned cBX84 accreditation in ML and solution design."
      ],
      tags: ["Machine learning", "Cybersecurity", "SQL", "Data modeling"]
    }
  ],

  /* Projects. `roles` = which role pages show it first; `metric` = headline number */
  projects: [
    {
      id: "cyber",
      name: "Cyber-Attack Detection",
      oneLiner: "Random Forest intrusion detection on 82k network flows, with a Streamlit app.",
      metric: "97.6% accuracy · 0.997 ROC-AUC",
      detail: "Found and removed label leakage that made the original model report a fake 100%. Detects attacks and names 9 attack types; ships with saved models, a CLI, a web app and tests.",
      stack: ["Python", "scikit-learn", "pandas", "Streamlit", "pytest"],
      link: "https://github.com/AiMk937/Cyber-Attack-Detection",
      roles: ["ml", "data-science", "security", "data-analyst"]
    },
    {
      id: "toxic",
      name: "Toxic Comment Detector",
      oneLiner: "Multi-label NLP classifier for six kinds of toxicity, with a Flask web app and JSON API.",
      metric: "0.978 mean ROC-AUC on 64k unseen comments",
      detail: "TF-IDF word + character n-grams with one-vs-rest Logistic Regression, trained on 159k Wikipedia comments and scored on Kaggle's official test set. Hardened the app against XSS and oversized requests.",
      stack: ["Python", "NLP", "scikit-learn", "Flask", "JavaScript"],
      link: "https://github.com/AiMk937/toxic-comment-detector",
      roles: ["ml", "data-science", "software"]
    },
    {
      id: "timetable",
      name: "AI Timetable Scheduler",
      oneLiner: "Generates clash-free timetables for a whole department and lets staff edit them in plain English.",
      metric: "Published in JETIR (first author)",
      detail: "Constraint-based scheduler with global teacher and room conflict checks, a custom spaCy NER model for commands like \"swap NLP in slot 1 with BC in slot 2\", and Excel export. Node.js + Express front end, FastAPI AI service.",
      stack: ["Node.js", "Express", "MongoDB", "FastAPI", "spaCy", "Python"],
      link: "https://github.com/AiMk937/timetable-scheduler",
      roles: ["software", "ml", "data-science"]
    },
    {
      id: "mbrt",
      name: "Automated MBRT Machine",
      oneLiner: "Industry lab machine that automates milk-quality testing end to end.",
      metric: "Industry project at BeamOptics",
      detail: "Raspberry Pi 4 with optical sensors, a Kivy touch interface and a model that predicts the test result before it finishes. Code is proprietary.",
      stack: ["Python", "Raspberry Pi", "Kivy", "Sensors"],
      link: null,
      roles: ["software", "data-science"]
    },
    {
      id: "smarttracker",
      name: "SmartTracker IoT",
      oneLiner: "ESP32 vehicle tracker with live GPS, speed and crash-style alerts in the Blynk app.",
      metric: "Published in JETIR (co-author)",
      detail: "Detects sudden braking, sudden stops and rollover-level tilt with an MPU6050, streams location from a NEO-6M GPS.",
      stack: ["ESP32", "C++", "GPS", "MPU6050", "Blynk"],
      link: "https://github.com/Mariyum008/SmartTracker-IoT",
      roles: ["security", "software"]
    },
    {
      id: "ims",
      name: "Inventory Management System",
      oneLiner: "Stock, packaging, invoices and e-commerce profit tracking for a real business (AK Global).",
      metric: "Built for a real business",
      detail: "Products with images and reorder levels, volumetric-weight packaging, PDF shipping labels, platform fees and GST on orders, and Excel profit exports.",
      stack: ["Node.js", "Express", "MongoDB", "EJS", "PDFKit", "ExcelJS"],
      link: "https://github.com/AiMk937/IMS",
      roles: ["software", "data-analyst"]
    },
    {
      id: "olist",
      name: "E-commerce Database Design (SJSU)",
      oneLiner: "Normalizing the 100k-order Olist Brazilian e-commerce dataset into a clean 3NF schema.",
      metric: "Group project - schema and subqueries are my part",
      detail: "Designed the third-normal-form schema and wrote the analytical subquery set for a DATA 201 team project.",
      stack: ["SQL", "Database design", "Normalization"],
      link: null,
      roles: ["data-analyst", "data-science"]
    },
    {
      id: "currency",
      name: "Currency Converter",
      oneLiner: "Java Swing desktop app with live exchange rates from a REST API.",
      metric: "Java · Maven",
      detail: "Real-time conversion between currencies using the Exchange Rates Data API.",
      stack: ["Java", "Swing", "Maven", "REST API"],
      link: "https://github.com/AiMk937/currency-converter",
      roles: ["software"]
    }
  ],

  publications: [
    {
      title: "AI-Powered Timetable Scheduler and Management",
      venue: "Journal of Emerging Technologies and Innovative Research (JETIR)",
      issue: "Vol. 11, Issue 10, October 2024",
      authors: "A. Khan, M. Siddique, S. Pallar, S. Pappu, A. Choudhary",
      role: "First author",
      link: "https://www.jetir.org/view?paper=JETIR2410528"
    },
    {
      title: "IoT-Based Vehicle Location and Speed Monitoring for Parental Peace of Mind",
      venue: "Journal of Emerging Technologies and Innovative Research (JETIR)",
      issue: "Vol. 11, Issue 4, April 2024",
      authors: "M. Gupta, M. Siddique, A. Khan, P. Thorat",
      role: "Co-author",
      link: "https://www.jetir.org/view?paper=JETIR2404639"
    }
  ],

  education: [
    { school: "San José State University", degree: "M.S. Applied Data Intelligence", dates: "Fall 2026 - present", note: "Coursework in Python and data structures, database technologies and data analytics." },
    { school: "University of Mumbai", degree: "B.E. Computer Engineering, Honors in Cyber Security", dates: "2021 - 2025", note: "GPA 7.79 / 10 (WES-evaluated U.S. equivalent: 3.37 / 4.0). Focus on machine learning, systems and cybersecurity." }
  ],

  certificates: [
    { title: "AWS Academy Graduate - Cloud Foundations", issuer: "Amazon Web Services", img: "aws-cloud-foundations" },
    { title: "AWS Educate - Machine Learning Foundations", issuer: "Amazon Web Services", img: null, link: "https://www.credly.com/users/aimaan-khan.d4248b5d" },
    { title: "Google AI Essentials", issuer: "Google · Coursera", img: "google-ai-essentials" },
    { title: "HTML, CSS & JavaScript for Web Developers", issuer: "Johns Hopkins University · Coursera", img: "jhu-web-dev" },
    { title: "Demystifying Networking", issuer: "NPTEL · IIT Bombay", img: "nptel-networking" },
    { title: "AI & Machine Learning Workshop", issuer: "IIT Bombay · Techobytes", img: "iitb-aiml" },
    { title: "Cyber Hygiene Practices (G20)", issuer: "C-DAC · MeitY, Govt. of India", img: "cyber-hygiene" },
    { title: "Flipkart GRiD 6.0 - Software Development", issuer: "Flipkart · Unstop", img: "flipkart-grid" }
  ],

  /* Recruiter role pages */
  roles: {
    "software": {
      resume: "assets/docs/resumes/Aimaan_Khan_Resume_Software_Developer.pdf",
      title: "Software Developer",
      pitch: "I build complete products - APIs, web apps, databases and the tests that keep them working.",
      why: [
        "Shipped full-stack apps in Node.js/Express and Python/Flask/FastAPI, from schema to UI.",
        "Writes tested code: pytest suites, input validation, and fixes for real security bugs (XSS, shell injection, leaked secrets).",
        "Comfortable across the stack, from a Raspberry Pi touch UI to a MongoDB-backed business app."
      ],
      skills: ["Python", "JavaScript", "Java", "Node.js", "Express", "Flask", "FastAPI", "MongoDB", "SQL", "REST APIs", "Git", "pytest"],
      experience: ["beamoptics", "prism", "cloudyboss"]
    },
    "data-science": {
      resume: "assets/docs/resumes/Aimaan_Khan_Resume_Data_Scientist.pdf",
      title: "Data Scientist",
      pitch: "I turn messy data into models people can trust - and I check the numbers before I celebrate them.",
      why: [
        "Caught label leakage that inflated a model to a fake 100% accuracy, then rebuilt it honestly to 97.6%.",
        "Evaluates on held-out and official test sets with ROC-AUC, precision/recall and confusion matrices.",
        "Built a predictive model in industry that estimates a lab test's result before it finishes."
      ],
      skills: ["Python", "pandas", "NumPy", "scikit-learn", "Statistics", "Feature engineering", "Model evaluation", "NLP", "SQL", "matplotlib", "Jupyter"],
      experience: ["cloudyboss", "beamoptics"]
    },
    "data-analyst": {
      resume: "assets/docs/resumes/Aimaan_Khan_Resume_Data_Analyst.pdf",
      title: "Data Analyst",
      pitch: "I ask the right questions of the data, query it properly and explain the answer clearly.",
      why: [
        "SQL from schema design (3NF normalization of the Olist dataset) to analytical subqueries.",
        "Built profit and sales reporting with Excel exports for a real small business.",
        "Clear charts and write-ups: every project README explains results in plain language."
      ],
      skills: ["SQL", "Python", "pandas", "Data cleaning", "Database design", "matplotlib", "Reporting", "Excel exports", "Git"],
      experience: ["cloudyboss", "beamoptics"]
    },
    "ml": {
      resume: "assets/docs/resumes/Aimaan_Khan_Resume_Machine_Learning_Engineer.pdf",
      title: "Machine Learning Engineer",
      pitch: "I take models from notebook to something people can use - saved pipelines, CLIs, apps and tests.",
      why: [
        "Packaged models as reusable pipelines with prediction CLIs, Streamlit and Flask apps, and test suites.",
        "Trained a custom spaCy NER model and integrated it into a production web app.",
        "Industry ML on cybersecurity threat signals at cloudyBoss."
      ],
      skills: ["Python", "scikit-learn", "spaCy", "PyTorch (basics)", "NLP", "Model deployment", "Streamlit", "Flask", "FastAPI", "pytest", "Git"],
      experience: ["cloudyboss", "beamoptics"]
    },
    "security": {
      resume: "assets/docs/resumes/Aimaan_Khan_Resume_Cybersecurity_Analyst.pdf",
      title: "Cybersecurity Analyst",
      pitch: "Engineering degree with Honors in Cyber Security, plus hands-on detection work with ML.",
      why: [
        "B.E. Computer Engineering with an Honors track in Cyber Security.",
        "Built intrusion detection on UNSW-NB15 and worked on EDR models using STIX threat signals at cloudyBoss.",
        "Audits my own code: found and removed leaked credentials, shell injection and XSS across my repos."
      ],
      skills: ["Threat detection", "Intrusion detection", "STIX", "Network traffic analysis", "Secure coding", "Python", "SQL", "Networking basics", "Linux"],
      experience: ["cloudyboss", "beamoptics"]
    },
    "ambassador": {
      resume: "assets/docs/resumes/Aimaan_Khan_Resume_Student_Brand_Ambassador.pdf",
      title: "Student / Brand Ambassador",
      pitch: "I like people, I like making content, and I can explain tech without the jargon.",
      why: [
        "Adobe Student Ambassador since September 2026 - I create content showing what Adobe Express can do.",
        "Volunteered at Mumbai Comic Con three times (2023, 2025, 2026) and at DevFest Bay Area 2026, a Google Developer Groups (GDG) event.",
        "Building my own channels: Valorant streams on Twitch and creator content on YouTube."
      ],
      skills: ["Content creation", "Adobe Express", "Photoshop", "Premiere Pro", "DaVinci Resolve", "Streaming (OBS)", "Event support", "Social media", "English & Hindi"],
      experience: [],
      extra: [
        { title: "Adobe Student Ambassador", org: "Adobe Express", dates: "Sep 2026 - present", text: "Create content and run campus outreach for Adobe Express." },
        { title: "Volunteer Event Staff", org: "Mumbai Comic Con", dates: "2023, 2025, 2026", text: "Three editions of crowd management and attendee help at one of India's largest pop-culture conventions." },
        { title: "Volunteer", org: "DevFest Bay Area 2026 · GDG", dates: "Oct 2026", text: "Volunteered at the Bay Area's Google Developer Groups DevFest, a community developer conference." }
      ]
    },
    "campus": {
      resume: "assets/docs/resumes/Aimaan_Khan_Resume_On_campus_Student_Assistant.pdf",
      title: "On-campus Student Assistant",
      pitch: "Reliable, tech-comfortable and easy to work with - I can support labs, events and offices.",
      why: [
        "Comfortable with Google Workspace, Microsoft Office and everyday tech.",
        "Front-line experience helping people at busy events - Mumbai Comic Con three times and DevFest Bay Area 2026.",
        "Strong written communication - I document everything I build."
      ],
      skills: ["Google Workspace", "Microsoft Office", "Helping people", "Documentation", "Event support", "Python", "Content creation", "English & Hindi"],
      experience: ["beamoptics", "prism"],
      extra: [
        { title: "Volunteer Event Staff", org: "Mumbai Comic Con", dates: "2023, 2025, 2026", text: "Helped attendees and managed crowds at a large convention, three years running." },
        { title: "Volunteer", org: "DevFest Bay Area 2026 · GDG", dates: "Oct 2026", text: "Supported attendees at a Google Developer Groups developer conference." }
      ]
    }
  },

  /* Skills page clusters */
  skillClusters: [
    { title: "Machine Learning & AI", icon: "brain", items: ["scikit-learn", "Random Forest", "Logistic Regression", "NLP (TF-IDF, spaCy NER)", "Model evaluation", "Feature engineering", "PyTorch (basics)", "Streamlit"] },
    { title: "Data", icon: "chart", items: ["Python", "pandas", "NumPy", "SQL", "Database design (3NF)", "MongoDB", "matplotlib", "Jupyter", "Kaggle datasets"] },
    { title: "Software Engineering", icon: "code", items: ["Python", "JavaScript", "Java", "Node.js", "Express", "Flask", "FastAPI", "REST APIs", "EJS", "pytest", "Git & GitHub"] },
    { title: "Security", icon: "shield", items: ["Intrusion detection", "EDR / threat signals (STIX)", "Secure coding", "Secrets management", "Networking basics", "Cyber hygiene"] },
    { title: "IoT & Hardware", icon: "chip", items: ["Raspberry Pi", "ESP32", "Arduino / C++", "Kivy touch UIs", "Sensors (optical, GPS, IMU)"] },
    { title: "Cloud & Tools", icon: "cloud", items: ["AWS (Cloud Foundations, ML Foundations)", "Linux", "VS Code", "GitHub Pages", "Google Workspace", "Microsoft Office"] },
    { title: "Creative", icon: "camera", items: ["Adobe Photoshop", "Adobe Premiere Pro", "DaVinci Resolve", "Adobe Express", "Photo editing", "Video editing", "Social graphics", "Brand kits", "Desktop publishing"] },
    { title: "Content & Community", icon: "megaphone", items: ["Streaming with OBS (Twitch)", "YouTube content", "Bike / moto content", "Event volunteering (Comic Con x3, DevFest Bay Area)", "Ambassador outreach"] },
    { title: "Languages", icon: "globe", items: ["English (fluent)", "Hindi (fluent)"] },
    { title: "People", icon: "users", items: ["Team lead on 2 academic projects", "Technical writing", "Explaining tech simply", "Research & publishing", "Customer-facing support"] }
  ],

  /* Friend page - informal */
  friend: {
    hello: "Oh hey, it's you.",
    sub: "Skip the LinkedIn voice. Here's what I'm actually up to.",
    stats: [
      { e: "🥤", n: "Ultra White", l: "Monster flavor of choice (Lando Norris is a close second)" },
      { e: "📄", n: "2", l: "papers published, so yes, I can be serious" },
      { e: "🏍️", n: "0", l: "bikes owned right now (tragic, saving up)" },
      { e: "🖥️", n: "1", l: "PC with an RTX 5070 Ti that I definitely use only for ML" }
    ],
    facts: [
      { e: "✈️", t: "Moved from Mumbai to San Jose", d: "Doing my Master's at SJSU. Still converting every price back to rupees." },
      { e: "🎮", t: "Plays Valorant", d: "Streaming on Twitch now. Current audience: very exclusive. 👀" },
      { e: "🏍️", t: "Bike content guy", d: "Used to make riding videos. New bike loading... please wait." },
      { e: "🛋️", t: "Desk setup enthusiast", d: "A setup I'm way too proud of. Syncing the RGB across everything is my current side quest. 🌈" },
      { e: "🎨", t: "Adobe Student Ambassador", d: "Ask me to make you a poster. Actually, don't, I'll say yes." },
      { e: "🤖", t: "Builds things that judge you", d: "One of my ML models detects toxic comments. It has opinions about the group chat. 💀" }
    ],
    projectsIntro: "Stuff I built when I should have been sleeping",
    projects: [
      { id: "cyber", joke: "🕵️ Taught a computer to spot hackers. It got 100% at first, which was a lie - I caught it cheating." },
      { id: "toxic", joke: "🧂 An AI that reads comments and decides if you're being rude. Do not feed it our group chat." },
      { id: "timetable", joke: "📅 Makes college timetables with zero clashes. Professors hate this one simple trick." },
      { id: "smarttracker", joke: "🚗 A gadget that tells parents how fast you're driving. Sorry to every teenager." },
      { id: "mbrt", joke: "🥛 A robot that tests milk. Real job, real machine, real milk." }
    ],
    outro: "Want to game 🎮, ride 🏍️, or grab a Monster 🥤? You know where to find me."
  }
};
