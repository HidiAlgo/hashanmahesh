// ─────────────────────────────────────────────
//  PORTFOLIO DATA — replace with your own info
// ─────────────────────────────────────────────

export const profile = {
  name: "Hashan Mahesh",
  role: "Software Engineer",
  tagline: "Building things that matter, one line at a time.",
  bio: `Hi there! I'm Hashan — a software engineer with a passion for learning new tech things. I specialise
in full-stack development, and I like to learn AI stuff as well.

When I'm not writing code, I like to sing a song or two with my guitar, go on a trip with my friends or family, or just chill at home with a cup of coffee and a good movie.`,
  email: "mghashanmahesh@gmail.com",
  github: "https://github.com/hidialgo",
  linkedin: "https://linkedin.com/in/mghashanmahesh",
  location: "Colombo, Sri Lanka",
  avatar: require('../assets/IMG_0657.jpeg'), // set to image path e.g. require('./assets/avatar.jpg')
};

export const academics = [
  {
    degree: "BICT. (Hons) Software Systems Technology",
    institution: "University of Kelaniya",
    year: "2018 – 2022",
    gpa: "3.7 / 4.0",
    thesis: "Sinhala News Classification using Machine Learning",
    icon: "📖",
  },
];

export const certifications = [
  {
    title: " Maven Quick Dive",
    issuer: "JavaBrains",
    date: "March 2026",
    credentialId: "jdzzxjdmlg",
    type: "javabrains",
    color: "#e80909",
  },
  {
    title: "Java Generics In Depth",
    issuer: "JavaBrains",
    date: "March 2026",
    credentialId: "swgp8wdczo",
    type: "javabrains",
    color: "#e80909",
  },
  {
    title: "Java",
    issuer: "Test Dome",
    date: "Feb 2023",
    credentialId: "8a73854c60c749469e8d58e3490258eb",
    type: "testdome",
    color: "#b4f511",
  },
  {
    title: "Building Java Microservices with gRPC",
    issuer: "Linkedin Learning",
    date: "May 2021",
    credentialId: "AelcFM8AAd1BMfHoEIPutBqfKsNT",
    type: "linkedin",
    color: "#0056D2",
  },
  {
    title: "Creating Your First Spring Boot Microservice",
    issuer: "Linkedin Learning",
    date: "May 2021",
    credentialId: "AVDJQSAHvDseGHMPJmy4LElv5POR",
    type: "linkedin",
    color: "#0056D2",
  },
  {
    title: "Learning Docker",
    issuer: "Linkedin Learning",
    date: "May 2021",
    credentialId: "AfjIHEHxxwzBNVemuzgRNAaMigZQ",
    type: "linkedin",
    color: "#0056D2",
  },
  {
    title: "edX Verified Certificate for Developing Cloud Applications with Node.js and React",
    issuer: "edX",
    date: "April 2021",
    credentialId: "aa9f8718a9f64f238a63bdb7395a784e",
    type: "edX",
    color: "#A435F0",
  },
  {
    title: "The Ultimate React Native Series: Fundamentals",
    issuer: "Udemy",
    date: "Oct 2020",
    credentialId: "cert_gmdgpz6v",
    type: "udemy",
    color: "#A435F0",
  },
  {
    title: "spring Framework for Beginners with Spring Boot",
    issuer: "Udemy",
    date: "Oct 2020",
    credentialId: "UC-b14b99f8-448c-4393-94f0-d0a313550845/",
    type: "udemy",
    color: "#A435F0",
  },
  {
    title: "Go Java Full Stack with Spring Boot and React",
    issuer: "Udemy",
    date: "Jun 2020",
    credentialId: "UC-17b6ad2d-14a4-4b08-b780-df0da8642777",
    type: "udemy",
    color: "#A435F0",
  },
];

export const publications = [
  {
    title: "Segmentation Based Approach For Off-line Handwritten Sinhala Word Recognition From Touch Screen Gestures",
    journal: "Moratuwa Engineering Research Conference (MERCon)",
    year: "2022",
    authors: "Hashan Mahesh, Chathura Priyankara",
    doi: "10.1109/MERCon55799.2022.9906220",
    abstract:
      "The traditional way of using pen and paper to take notes is getting over by the touch screen devices. These devices provide more options to the users to enhance their productivity while taking notes. The ability to recognize and validate the words written on the touch screens facilitates further capabilities to the users. Hence, in this paper, we describe a segmentation-based approach combined with an n-gram model for the recognition and validation of the Sinhala words written on touch screens. We compare the results of 6 commonly used machine learning models to find the best performing classifier for recognizing individual characters of words. The classifiers are trained to identify 19 different Sinhala characters. Based on the results, Convolution Neural Network (CNN) based word classifier stands ahead of other classifiers.",
    tags: ["Handwritten Word Recognition", "Machine Learning", "N-gram Word Validation"],
  }
];

export const blogPosts = [
  {
    title: "Is REST a protocol?",
    date: "13 April 2026",
    platform: "LinkedIn",
    excerpt:
      "Now it is a very common interview question that so many developers get to explain the difference between REST vs SOAP. You see so many youtube videos as well that explains the differences. Most of those videos and content describe the differences assuming both of these are two different protocols.",
    url: "https://www.linkedin.com/pulse/rest-protocol-hashan-mahesh-lue2c/",
    readTime: "5 min read",
    tags: ["System Design", "REST", "API Desigb"],
    reactions: 24,
  }
];

export const experience = [
  {
    role: "Senior Software Engineer",
    company: "CodeGen International",
    period: "Nov 2025 – Present",
    location: "Colombo, Sri Lanka",
    type: "Full-time",
    bullets: [
      "Worked on full stack development with Java microservice tech stack deployed on docker based technologies",
      "Developed LLM based AI assistant to automate some of the internal processes and to assist employees in their day to day work",
      "Developed applications using LangChain4j tools and deployed on kubernetes"
    ],
    tags: ["Java Spring", "Java Swing", "Oracle SQL", "Angular", "React", "LLM", "AI"],
  },
  {
    role: "Software Engineer",
    company: "CodeGen International",
    period: "Nov 2023 – May 2025",
    location: "Colombo, Sri Lanka",
    type: "Full-time",
    bullets: [
      "Worked on full stack development with Java microservice tech stack deployed on docker based technologies"
    ],
    tags: ["Java Spring", "Java Swing", "Oracle SQL", "Angular"],
  },
  {
    role: "Associate Software Engineer",
    company: "CodeGen International",
    period: "April 2023 – Nov 2023",
    location: "Colombo, Sri Lanka",
    type: "Full-time",
    bullets: [
      "Worked on feature development with Java microservice tech stack deployed on docker based technologies"
    ],
    tags: ["Java Spring", "Java Swing", "Oracle SQL", "Angular"],
  },
  {
    role: "Associate Software Engineer",
    company: "Virtusa",
    period: "Jun 2023 – April 2023",
    location: "Remote",
    type: "Full-time",
    bullets: [
      "Continued Data migrations between application using different technologies, and continued integrations"
    ],
    tags: ["Azure", "PL/SQL", "Python", "Java", "OFA"],
  },
  {
    role: "Software Engineering Intern",
    company: "Virtusa",
    period: "Nov 2021 – May 2022",
    location: "Colombo, Sri Lanka",
    type: "Internship",
    bullets: [
      "Worked on Oracle Fusion application related to bank integrations using Java."
    ],
    tags: ["SQL", "Oracle Fusion Application (OFA)", "Java", "REST", "SOAP"],
  },
];
