export const WORKSHOPS_DATA = [
  {
    title: "Backend Web Development",
    date: "2025-02-21",
    description:
      "An introduction to backend development covering core concepts and comparing popular frameworks.",
    topics: [
      "HTTP and how it works",
      "Status codes and their meanings",
      "What defines backend development",
      "REST API design principles",
      "Spring Boot overview",
      "Django framework introduction",
      "Flask for Python developers",
      "In-depth look at Node.js",
      "JavaScript runtime environments",
      "Framework comparison and selection criteria",
    ],
    resources: {
      presentation:
        "https://docs.google.com/presentation/d/1Y332xDINh95qFZEb9kciPfnxv4jgolgdgU0U_StWpUQ/edit#slide=id.g3318ae6d95c_0_30",
      recording: "https://www.youtube.com/watch?v=s-rQOghEMKg&feature=youtu.be",
      github: '',
    },
    instructors: ["Richard Lechko", "Alex Zieba"],
    instructorSocials: [
      "https://www.linkedin.com/in/richard-lechko/",
      "https://www.linkedin.com/in/alexzieba/",
    ],
    duration: "26",
    difficulty: "Intermediate",
    prerequisites: [
      "Basic programming knowledge",
      "Familiarity with web concepts",
    ],
  },
  {
    title: "Maximizing Your Tech Networking Capabilities",
    date: "2025-04-19",
    description:
      "Learn how to optimize your professional profiles and materials to stand out in the tech industry and land your dream role.",
    topics: [
      "Crafting an effective developer resume",
      "Building an impressive GitHub profile",
      "Optimizing your LinkedIn presence",
      "Creating a standout portfolio website",
      "Tailoring your materials for specific roles",
      "Networking strategies for tech professionals",
      "Leveraging online communities",
      "Preparing for technical interviews",
      "Following up after networking events",
      "Personal branding for developers",
    ],
    resources: {
      presentation: "https://docs.google.com/presentation/d/1iNkYfMejVf459HpixYXdC6jWemTOk-QeRM6rJl_ScA8/edit?usp=drive_link",
      recording: "https://youtu.be/-8jImHQl9WA?si=O9bqRLg_1lHnF35Z",
      github: '',
    },
    instructors: ["Richard Lechko"],
    instructorSocials: ["https://www.linkedin.com/in/richard-lechko/"],
    duration: "22",
    difficulty: "All Levels",
    prerequisites: [
      "Have a resume you can use to build ontop of",
      "GitHub/LinkedIn account",
    ],
  },
  {
    title: "GitHub Basics for Web Developers",
    date: "2025-05-26",
    description:
      "A beginner-friendly walkthrough of GitHub, focusing on its relevance for developers and real-world workflows.",
    topics: [
      "What is GitHub and why developers use it",
      "Cloning, committing, pushing basics",
      "Understanding branches and pull requests",
      "GitHub Desktop vs. CLI",
      "Collaboration through issues and discussions",
      "How to fork and contribute to open source",
      "README and repo structure tips",
      "Showcasing your work using GitHub Pages",
      "Security and settings overview",
      "GitHub in professional workflows",
    ],
    resources: {
      presentation: "https://docs.google.com/presentation/d/1on4ovOEGBPYNvK1QlUtXVwJ9ghYvJTx2A3unM_3p1Jg/edit?usp=sharing",
      recording: "https://youtu.be/Nmwl16cvHL8?si=Lcd5--EgKXPd9JI2",
      github: '',
    },
    instructors: ["Richard Lechko"],
    instructorSocials: ["https://www.linkedin.com/in/richard-lechko/"],
    duration: "41",
    difficulty: "Beginner",
    prerequisites: [
      "Basic understanding of web development",
      "GitHub account set up",
    ],
  },
  {
    title: "HTML, CSS, and JavaScript Fundamentals",
    date: "2025-07-11",
    description:
      "A practical introduction to the core building blocks of the web. Learn how to structure content with HTML, style it with CSS, and add interactivity with JavaScript.",
    topics: [
      "What makes up the web: HTML, CSS, and JavaScript",
      "HTML elements, attributes, and semantic structure",
      "Styling basics with CSS selectors, classes, and IDs",
      "The box model, positioning, and layouts",
      "Responsive design principles",
      "JavaScript variables, data types, and operators",
      "Functions, loops, and conditionals",
      "DOM manipulation with JavaScript",
      "Event listeners and user interaction",
      "Putting it all together: building a simple interactive webpage",
    ],
    resources: {
      presentation:
        '',
      recording: "https://youtu.be/3BWtkaghJMc?si=743DTf8ZSOCf7k_x",
      github: 'https://github.com/RichardLechko/web-dev-portfolio',
    },
    instructors: ["Richard Lechko"],
    instructorSocials: ["https://www.linkedin.com/in/richard-lechko/"],
    duration: "22",
    difficulty: "Beginner",
    prerequisites: [
      "Basic computer literacy",
      "Text editor installed (VS Code recommended)",
    ],
  },
  {
    title: "React Fundamentals & Component Architecture",
    date: "TBD",
    duration: '',
    difficulty: "Intermediate",
    description:
      "Build dynamic, interactive web apps using the most popular frontend framework. We'll cover components, state management, hooks, and create a real project you can add to your portfolio.",
    topics: [
      "React components",
      "Props & state",
      "React hooks",
      "Component architecture",
      "Project build"
    ],
    instructors: ["Richard Lechko"],
    instructorSocials: ["https://www.linkedin.com/in/richard-lechko/"],
    prerequisites: [
      "Basic HTML, CSS, and JavaScript",
      "Understanding of GitHub fundamentals"
    ],
    resources: {
      presentation: "",
      recording: "",
      github: ""
    }
  },
  {
    title: "Database Design & Integration",
    date: "TBD",
    duration: '',
    difficulty: "Intermediate",
    description:
      "Learn how to design databases and connect them to your backend APIs. We'll work with PostgreSQL/MySQL, write SQL queries, and build a full-stack app that actually persists data.",
    topics: [
      "Database design",
      "SQL queries",
      "PostgreSQL/MySQL basics",
      "Connecting backend to database",
      "Building a full-stack app"
    ],
    instructors: ["Richard Lechko"],
    instructorSocials: ["https://www.linkedin.com/in/richard-lechko/"],
    prerequisites: ["Basic backend knowledge", "Understanding of APIs"],
    resources: {
      presentation: "",
      recording: "",
      github: ""
    }
  },
  {
    title: "API Development & Testing",
    date: "TBD",
    duration: '',
    difficulty: "Intermediate",
    description:
      "Deep dive into building professional REST APIs with authentication, proper error handling, and documentation. Plus we'll cover testing with tools like Postman so you know your APIs actually work.",
    topics: [
      "REST API design",
      "Authentication",
      "Error handling",
      "API documentation",
      "Postman testing"
    ],
    instructors: ["Richard Lechko"],
    instructorSocials: ["https://www.linkedin.com/in/richard-lechko/"],
    prerequisites: ["Backend fundamentals", "GitHub basics"],
    resources: {
      presentation: "",
      recording: "",
      github: ""
    }
  },
  {
    title: "Deployment & DevOps Basics",
    date: "TBD",
    duration: '',
    difficulty: "Intermediate",
    description:
      "Finally get your projects live on the internet! We'll deploy to platforms like Vercel, Railway, and AWS, set up CI/CD with GitHub Actions, and cover environment management.",
    topics: [
      "Deployment platforms (Vercel, Railway, AWS)",
      "CI/CD with GitHub Actions",
      "Environment variables",
      "Basic DevOps workflows"
    ],
    instructors: ["Richard Lechko"],
    instructorSocials: ["https://www.linkedin.com/in/richard-lechko/"],
    prerequisites: ["Full-stack app experience helpful", "GitHub knowledge"],
    resources: {
      presentation: "",
      recording: "",
      github: ""
    }
  }

];
