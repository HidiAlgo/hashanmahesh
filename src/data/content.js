// ─────────────────────────────────────────────
//  PORTFOLIO DATA — replace with your own info
// ─────────────────────────────────────────────

export const profile = {
  name: "Alex Morgan",
  role: "Software Engineer & Researcher",
  tagline: "Building things that matter, one line at a time.",
  bio: `Hi there! I'm Alex — a software engineer with a passion for solving
real-world problems through clean code and thoughtful design. I specialise
in full-stack development, machine learning, and academic research.

When I'm not writing code, you'll find me hiking in the mountains,
experimenting with sourdough, or getting lost in a good book.`,
  email: "alex.morgan@email.com",
  github: "https://github.com/alexmorgan",
  linkedin: "https://linkedin.com/in/alexmorgan",
  location: "Colombo, Sri Lanka",
  avatar: null, // set to image path e.g. require('./assets/avatar.jpg')
};

export const academics = [
  {
    degree: "M.Sc. Computer Science",
    institution: "University of Colombo",
    year: "2020 – 2022",
    gpa: "3.9 / 4.0",
    thesis: "Deep Learning Approaches for Natural Language Understanding in Low-Resource Languages",
    icon: "🎓",
  },
  {
    degree: "B.Sc. (Hons) Computer Science",
    institution: "University of Moratuwa",
    year: "2016 – 2020",
    gpa: "3.7 / 4.0",
    thesis: "Real-Time Object Detection using Lightweight CNNs on Edge Devices",
    icon: "📖",
  },
];

export const certifications = [
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera / deeplearning.ai",
    date: "Aug 2023",
    credentialId: "ABC123XYZ",
    type: "coursera",
    color: "#0056D2",
  },
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "Mar 2023",
    credentialId: "AWS-SA-0042",
    type: "aws",
    color: "#FF9900",
  },
  {
    title: "React — The Complete Guide",
    issuer: "Udemy",
    date: "Jan 2022",
    credentialId: "UC-XXXXXXXX",
    type: "udemy",
    color: "#A435F0",
  },
  {
    title: "Python for Data Science & AI",
    issuer: "IBM / Coursera",
    date: "Nov 2021",
    credentialId: "IBM-PY-9871",
    type: "ibm",
    color: "#006699",
  },
  {
    title: "Career Essentials in Data Analysis",
    issuer: "LinkedIn Learning",
    date: "Jun 2021",
    credentialId: "LI-DA-2210",
    type: "linkedin",
    color: "#0A66C2",
  },
];

export const publications = [
  {
    title: "Transformer-Based Sentiment Analysis for Sinhala Social Media Text",
    journal: "Journal of Computational Linguistics",
    year: "2023",
    authors: "Morgan, A., Perera, S., Silva, T.",
    doi: "10.1234/jcl.2023.001",
    abstract:
      "We present a fine-tuned multilingual transformer model that achieves state-of-the-art results on Sinhala sentiment classification, outperforming previous baselines by 12% F1-score.",
    tags: ["NLP", "Transformers", "Low-Resource Languages"],
  },
  {
    title: "Edge-Efficient Object Detection: A Benchmark Study",
    journal: "IEEE Transactions on Mobile Computing",
    year: "2022",
    authors: "Morgan, A., Fernando, K.",
    doi: "10.1109/tmc.2022.00XXX",
    abstract:
      "A comprehensive benchmark comparing MobileNet, EfficientDet and NanoDet variants across Raspberry Pi and Jetson Nano platforms under varying power constraints.",
    tags: ["Computer Vision", "Edge Computing", "CNN"],
  },
  {
    title: "Evaluating ChatGPT for Academic Writing Assistance: Opportunities and Pitfalls",
    journal: "arXiv Preprint",
    year: "2023",
    authors: "Morgan, A.",
    doi: "arXiv:2312.XXXXX",
    abstract:
      "An empirical study examining the reliability and accuracy of large language models in academic writing support tasks across different disciplines.",
    tags: ["LLMs", "Academic Writing", "AI Evaluation"],
  },
];

export const blogPosts = [
  {
    title: "Why I Stopped Fighting TypeScript and Started Loving It",
    date: "15 Jan 2024",
    platform: "LinkedIn",
    excerpt:
      "After years of avoiding strict typing, one production bug changed my mind forever. Here's what I learned and why you should make the switch.",
    url: "https://www.linkedin.com/pulse/YOUR-ARTICLE-SLUG",
    readTime: "5 min read",
    tags: ["TypeScript", "JavaScript", "Developer Experience"],
    reactions: 142,
  },
  {
    title: "Building Accessible UIs: More Than Just ARIA Labels",
    date: "08 Dec 2023",
    platform: "LinkedIn",
    excerpt:
      "True accessibility is a design philosophy, not a checklist. I break down the real patterns that make the difference between compliant and genuinely usable.",
    url: "https://www.linkedin.com/pulse/YOUR-ARTICLE-SLUG",
    readTime: "7 min read",
    tags: ["Accessibility", "UX", "Frontend"],
    reactions: 98,
  },
  {
    title: "From PhD Papers to Production Code: My Research to Engineering Journey",
    date: "20 Nov 2023",
    platform: "LinkedIn",
    excerpt:
      "What happens when you bring academic rigour into software engineering? Spoiler: it's mostly good, sometimes chaotic, and always interesting.",
    url: "https://www.linkedin.com/pulse/YOUR-ARTICLE-SLUG",
    readTime: "6 min read",
    tags: ["Career", "Research", "Engineering"],
    reactions: 231,
  },
  {
    title: "The Hidden Costs of Technical Debt Nobody Talks About",
    date: "03 Oct 2023",
    platform: "LinkedIn",
    excerpt:
      "Technical debt isn't just slow features and messy code. It erodes team morale, retention, and your ability to attract talent.",
    url: "https://www.linkedin.com/pulse/YOUR-ARTICLE-SLUG",
    readTime: "4 min read",
    tags: ["Engineering Culture", "Tech Debt", "Leadership"],
    reactions: 187,
  },
];
