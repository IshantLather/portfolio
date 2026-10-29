/**
 * ==============================================================================
 * PORTFOLIO CONFIGURATION - ISHANT LATHER
 * ==============================================================================
 * Single central configuration file for your entire portfolio.
 * You can edit your personal details, links, interests, projects, and timeline
 * right here without touching any HTML or CSS files!
 * ==============================================================================
 */

export const portfolioConfig = {
  // ============================================================================
  // 1. PERSONAL INFORMATION & SOCIAL LINKS (EDITABLE PLACEHOLDERS)
  // ============================================================================
  personal: {
    name: "Ishant Lather",
    greeting: "Hey, I'm Ishant.",
    subtitle: "Exploring technology. Building ideas. Creating my own path.",
    
    // Animated text rotating phrases in the Hero section
    rotatingRoles: [
      "Cybersecurity",
      "AI & Machine Learning",
      "Creative Development"
    ],

    // Short introduction for the Hero section
    shortIntro: "Undergraduate student in Artificial Intelligence & Machine Learning at Rishihood University, Newton School of Technology. Exploring cybersecurity, hands-on authorized labs, and the craft of purposeful technology.",

    // Academic details
    education: "B.Tech in Artificial Intelligence & Machine Learning",
    institution: "Rishihood University, Newton School of Technology",
    location: "India",
    availability: "Open to Collaborations & Learning Opportunities",

    // Optional Profile Photo URL:
    // Put your photo in `assets/profile.jpg` or provide an external URL.
    // If left as null or file not found, a beautiful artistic avatar is used automatically.
    profilePhoto: "assets/profile.jpg",

    // --------------------------------------------------------------------------
    // EDITABLE SOCIAL & CONTACT PLACEHOLDERS
    // Update these fields with your real details!
    // --------------------------------------------------------------------------
    githubUsername: "ishantlather", // e.g. "ishantlather"
    githubUrl: "https://github.com/ishantlather",
    linkedinUrl: "https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME",
    email: "your.email@example.com",

    // Editorial quote in the About section
    quote: "I believe in learning by building, experimenting, and improving. Technology should be understood deeply and used responsibly to make the digital world safer."
  },

  // ============================================================================
  // 2. ABOUT ME (Editorial Narrative)
  // ============================================================================
  about: {
    tag: "The Journey",
    title: "Curiosity, code, and a passion for digital security.",
    paragraphs: [
      "I am a B.Tech student majoring in Artificial Intelligence and Machine Learning at Rishihood University, Newton School of Technology. My interest in technology began with a simple curiosity: understanding how computers communicate, how software behaves beneath the surface, and how digital defenses protect the modern world.",
      "Today, my technical exploration spans two interconnected disciplines: the analytical power of Artificial Intelligence and the rigorous foundations of Cybersecurity. In cybersecurity, I focus on hands-on practice in authorized labs, exploring Linux environments, networking protocols, and ethical hacking methodologies in safe, controlled sandboxes.",
      "My goal is not simply to collect technical jargon, but to develop real, practical problem-solving skills—learning by building projects, experimenting thoughtfully, and growing into a capable security and AI professional."
    ],
    highlights: [
      { label: "Institution", value: "Rishihood University" },
      { label: "Program", value: "B.Tech in AI & ML" },
      { label: "Primary Focus", value: "Cybersecurity & Intelligent Systems" },
      { label: "Lab Practice", value: "Authorized Cyber Sandboxes" }
    ]
  },

  // ============================================================================
  // 3. WHAT I'M INTO (Aesthetic Cards with Sage & Lavender Accents)
  // ============================================================================
  interests: [
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      accent: "sage",
      badge: "Core Interest",
      description: "Understanding digital defenses, threat modeling, the CIA triad, and foundational security hygiene to safeguard digital infrastructure.",
      icon: "shield"
    },
    {
      id: "ethical-hacking",
      title: "Ethical Hacking Labs",
      accent: "lavender",
      badge: "Hands-on Practice",
      description: "Practicing vulnerability analysis, port scanning, and security exercises strictly within authorized, legal cyber ranges and sandbox platforms.",
      icon: "lock"
    },
    {
      id: "ai",
      title: "Artificial Intelligence",
      accent: "sage",
      badge: "Academic Study",
      description: "Exploring algorithmic problem-solving, intelligent agents, search algorithms, and the theoretical foundations of modern AI.",
      icon: "sparkles"
    },
    {
      id: "machine-learning",
      title: "Machine Learning",
      accent: "lavender",
      badge: "Academic Study",
      description: "Studying supervised and unsupervised learning, model training workflows, feature preparation, and evaluation metrics.",
      icon: "brain"
    },
    {
      id: "linux",
      title: "Linux & Kali Linux",
      accent: "sage",
      badge: "System Environment",
      description: "Terminal navigation, shell commands, file hierarchy, user permissions, process management, and configuring security-oriented distributions.",
      icon: "terminal"
    },
    {
      id: "networking",
      title: "Networking",
      accent: "lavender",
      badge: "Fundamentals",
      description: "Deconstructing the OSI 7-layer model, TCP/IP stack, DNS resolution, routing, packet introspection, and network topologies.",
      icon: "network"
    },
    {
      id: "programming",
      title: "Programming",
      accent: "sage",
      badge: "Building Block",
      description: "Writing clean, functional code with Python, exploring data structures, automation scripts, and foundational web technologies.",
      icon: "code"
    }
  ],

  // ============================================================================
  // 4. SELECTED WORK (Asymmetrical Editorial Project Gallery)
  // ============================================================================
  projects: [
    {
      id: "personal-portfolio",
      title: "Creative Personal Portfolio",
      category: "Web & Design",
      featured: true, // Displays with larger visual layout
      status: "Live Project",
      accent: "sage",
      description: "An editorial portfolio combining warm cream aesthetics, minimalist typography, dark mode transitions, and live GitHub API streaming. Built with zero dependencies for lightning-fast delivery.",
      tags: ["HTML5", "Modern CSS", "JavaScript", "GitHub API", "Design"],
      githubUrl: "https://github.com/ishantlather/portfolio",
      demoUrl: "#home",
      isPlaceholder: false
    },
    {
      id: "linux-terminal-practice",
      title: "Linux & Terminal Practice",
      category: "Systems & Security",
      featured: false,
      status: "In Progress / Lab Study",
      accent: "lavender",
      description: "Hands-on lab repository documenting terminal navigation, Bash shell scripting, automated directory management, and user permissions across Linux distributions.",
      tags: ["Linux", "Bash Scripting", "Kali Linux", "CLI"],
      githubUrl: "https://github.com/ishantlather/linux-terminal-practice",
      demoUrl: null,
      isPlaceholder: true
    },
    {
      id: "cybersecurity-labs",
      title: "Cybersecurity Lab Exercises",
      category: "Cybersecurity",
      featured: false,
      status: "In Progress / Authorized Labs",
      accent: "sage",
      description: "Documentation and step-by-step walkthroughs of basic vulnerability discovery and port scanning exercises conducted in authorized virtual lab environments.",
      tags: ["Virtual Labs", "Port Scanning", "Network Protocols", "Security"],
      githubUrl: "https://github.com/ishantlather/cybersecurity-lab-exercises",
      demoUrl: null,
      isPlaceholder: true
    },
    {
      id: "osint-research",
      title: "Passive Reconnaissance Research",
      category: "OSINT & Ethics",
      featured: false,
      status: "Exploratory Study",
      accent: "lavender",
      description: "An educational inquiry into Open Source Intelligence (OSINT) principles, public footprint identification, and the ethical boundaries of information gathering.",
      tags: ["OSINT", "Information Gathering", "Security Ethics"],
      githubUrl: "https://github.com/ishantlather/osint-recon-research",
      demoUrl: null,
      isPlaceholder: true
    },
    {
      id: "ai-ml-coursework",
      title: "AI / ML Foundations Projects",
      category: "Machine Learning",
      featured: true,
      status: "Academic Coursework",
      accent: "sage",
      description: "Practical implementations of core Machine Learning models, dataset preprocessing pipelines, and exploratory data analysis using Python and standard libraries.",
      tags: ["Python", "Machine Learning", "Data Analysis", "Algorithms"],
      githubUrl: "https://github.com/ishantlather/ai-ml-projects",
      demoUrl: null,
      isPlaceholder: true
    }
  ],

  // ============================================================================
  // 5. MY LEARNING JOURNEY (Minimalist Timeline)
  // ============================================================================
  timeline: [
    {
      period: "Milestone 01",
      title: "Academic Enrollment & Foundations",
      institution: "Rishihood University, Newton School of Technology",
      status: "Active Foundation",
      description: "Beginning undergraduate studies in AI & Machine Learning, establishing strong mathematical foundations, computer science principles, and programming basics."
    },
    {
      period: "Milestone 02",
      title: "Linux & Operating System Architecture",
      institution: "Independent Practice",
      status: "Active Practice",
      description: "Transitioning to terminal-first workflows, learning filesystem hierarchies, command-line automation, and working inside Kali Linux sandboxes."
    },
    {
      period: "Milestone 03",
      title: "Networking & Protocol Analysis",
      institution: "Lab Exploration",
      status: "Active Learning",
      description: "Studying network transmission, the TCP/IP stack, packet headers, DNS, subnetting, and inspecting traffic in controlled environments."
    },
    {
      period: "Milestone 04",
      title: "Cybersecurity & Authorized Labs",
      institution: "Authorized Cyber Ranges",
      status: "Ongoing Exploration",
      description: "Practicing vulnerability identification, defensive concepts, and ethical hacking methodology inside legally approved platforms."
    },
    {
      period: "Milestone 05",
      title: "AI/ML Modeling & Real-World Projects",
      institution: "Future Horizon",
      status: "Next Target",
      description: "Deepening practical machine learning knowledge, training models on real datasets, and developing tools that bridge artificial intelligence and digital security."
    }
  ],

  // ============================================================================
  // 6. GITHUB SECTION CONFIGURATION & FALLBACK
  // ============================================================================
  githubConfig: {
    repoCount: 6,
    sort: "updated",
    fallbackRepos: [
      {
        name: "linux-terminal-practice",
        description: "Hands-on Linux command line practice repository covering shell scripts, system management, and permissions.",
        language: "Shell",
        languageColor: "#7E9A86",
        stargazers_count: 0,
        forks_count: 0,
        html_url: "https://github.com/ishantlather/linux-terminal-practice"
      },
      {
        name: "cybersecurity-lab-notes",
        description: "Study notes and exercises exploring network protocols and basic vulnerability discovery in authorized labs.",
        language: "Markdown",
        languageColor: "#8A75A0",
        stargazers_count: 0,
        forks_count: 0,
        html_url: "https://github.com/ishantlather/cybersecurity-lab-notes"
      },
      {
        name: "osint-recon-notes",
        description: "Educational research notes on open-source intelligence gathering and passive reconnaissance methodology.",
        language: "Python",
        languageColor: "#5D7A68",
        stargazers_count: 0,
        forks_count: 0,
        html_url: "https://github.com/ishantlather/osint-recon-notes"
      },
      {
        name: "ai-ml-coursework",
        description: "Python notebooks exploring fundamental machine learning algorithms and dataset preprocessing.",
        language: "Jupyter Notebook",
        languageColor: "#B5A5C7",
        stargazers_count: 0,
        forks_count: 0,
        html_url: "https://github.com/ishantlather/ai-ml-coursework"
      },
      {
        name: "portfolio",
        description: "Aesthetic personal portfolio website crafted with warm cream palettes, editorial typography, and smooth interactions.",
        language: "JavaScript",
        languageColor: "#7E9A86",
        stargazers_count: 0,
        forks_count: 0,
        html_url: "https://github.com/ishantlather/portfolio"
      }
    ]
  }
};
