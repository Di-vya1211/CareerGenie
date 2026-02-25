const mongoose = require("mongoose");
const Career = require("./models/Career");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);
``
const careers = [
    {
    name: "Data Scientist",
    interests: ["technology", "research"],
    skills: ["Python", "Statistics", "Machine Learning", "Data Analysis"],
    exams: [],
    salary: { fresher: 6, mid: 18, senior: 35 },
    demandGrowth: 22,
    roadmap: ["Learn Python", "Learn Statistics", "Learn ML", "Projects", "Internships"],
    links: { 
        official: "[Kaggle Official](https://www.kaggle.com)", 
        preparation: "[Scikit-Learn](https://scikit-learn.org)" 
    }
  },
  {
    name: "IAS Officer",
    interests: ["public service", "governance", "administrative leadership"],
    skills: ["Policy Making", "Decision Making", "Ethics", "Leadership"],
    exams: ["UPSC CSE"],
    salary: { fresher: 7, mid: 15, senior: 30 },
    demandGrowth: 5,
    roadmap: ["Degree", "UPSC Prelims", "UPSC Mains", "Interview", "Training"],
    links: { 
        official: "[UPSC Gov](https://www.upsc.gov.in)", 
        preparation: "[Drishti IAS](https://www.drishtiias.com)" 
    }
  },
  {
    name: "Judge",
    interests: ["legal interpretation", "fair justice delivery"],
    skills: ["Legal Knowledge", "Critical Thinking", "Integrity"],
    exams: ["Judicial Services Exam"],
    salary: { fresher: 9, mid: 20, senior: 40 },
    demandGrowth: 8,
    roadmap: ["LLB Degree", "Judicial Exam", "Civil Judge", "High Court"],
    links: { 
        official: "[Supreme Court](https://main.sci.gov.in)", 
        preparation: "[Lawctopus](https://www.lawctopus.com)" 
    }
  },
  {
    name: "Lawyer",
    interests: ["advocacy", "debate", "defending legal rights"],
    skills: ["Legal Research", "Drafting", "Communication"],
    exams: ["AIBE"],
    salary: { fresher: 4, mid: 12, senior: 35 },
    demandGrowth: 10,
    roadmap: ["LLB", "Bar Enrollment", "AIBE Exam", "Court Practice"],
    links: { 
        official: "[Bar Council](https://www.barcouncilofindia.org)", 
        preparation: "[LiveLaw](https://www.livelaw.in)" 
    }
  },
  {
    name: "Doctor",
    interests: ["human biology", "medicine", "saving lives"],
    skills: ["Biology", "Diagnosis", "Patient Care"],
    exams: ["NEET"],
    salary: { fresher: 6, mid: 12, senior: 25 },
    demandGrowth: 12,
    roadmap: ["NEET", "MBBS", "Internship", "MD/MS Specialization"],
    links: { 
        official: "[NTA NEET](https://neet.nta.nic.in)", 
        preparation: "[Aakash](https://www.aakash.ac.in)" 
    }
  },
  {
    name: "AI/ML Engineer",
    interests: ["building intelligent machines", "automation"],
    skills: ["PyTorch", "NLP", "Math", "Model Deployment"],
    exams: [],
    salary: { fresher: 8, mid: 24, senior: 50 },
    demandGrowth: 35,
    roadmap: ["Advanced Math", "Deep Learning", "MLOps", "Kaggle Competitions"],
    links: { 
        official: "[OpenAI](https://openai.com)", 
        preparation: "[DeepLearning.ai](https://www.deeplearning.ai)" 
    }
  },
  {
    name: "Full Stack Developer",
    interests: ["building entire web apps from front to back"],
    skills: ["JavaScript", "React", "Node.js", "SQL"],
    exams: [],
    salary: { fresher: 5, mid: 16, senior: 32 },
    demandGrowth: 18,
    roadmap: ["HTML/CSS/JS", "Frameworks", "Backend", "Portfolio"],
    links: { 
        official: "[MDN Web](https://developer.mozilla.org)", 
        preparation: "[freeCodeCamp](https://www.freecodecamp.org)" 
    }
  },
  {
    name: "Cyber Security Analyst",
    interests: ["protecting systems", "outsmarting hackers"],
    skills: ["Networking", "Linux", "Ethical Hacking"],
    exams: ["CEH"],
    salary: { fresher: 5, mid: 14, senior: 28 },
    demandGrowth: 20,
    roadmap: ["Networking", "Security Certs", "Lab Practice", "Penetration Testing"],
    links: { 
        official: "[EC-Council](https://www.eccouncil.org)", 
        preparation: "[TryHackMe](https://tryhackme.com)" 
    }
  },
  {
    name: "Cloud Architect",
    interests: ["designing secure and scalable digital infrastructure"],
    skills: ["AWS", "Azure", "Kubernetes", "DevOps"],
    exams: ["AWS SAA", "AZ-305"],
    salary: { fresher: 7, mid: 22, senior: 45 },
    demandGrowth: 25,
    roadmap: ["Networking", "Cloud Training", "Automation", "Architecture Design"],
    links: { 
        official: "[AWS Training](https://aws.amazon.com)", 
        preparation: "[Cloud Academy](https://cloudacademy.com)" 
    }
  },
  {
    name: "UI/UX Designer",
    interests: ["app visual design", "user psychology"],
    skills: ["Figma", "Design Thinking", "User Research"],
    exams: [],
    salary: { fresher: 4, mid: 12, senior: 22 },
    demandGrowth: 15,
    roadmap: ["Design Theory", "Figma Mastery", "Case Studies", "Portfolio"],
    links: { 
        official: "[Interaction Design](https://www.interaction-design.org)", 
        preparation: "[Coursera UX](https://www.coursera.org)" 
    }
  },
  {
    name: "Blockchain Developer",
    interests: ["decentralized finance", "secure web3 apps"],
    skills: ["Solidity", "Smart Contracts", "Cryptography"],
    exams: [],
    salary: { fresher: 8, mid: 20, senior: 42 },
    demandGrowth: 30,
    roadmap: ["Blockchain Basics", "Solidity", "DApps", "Smart Contract Audit"],
    links: { 
        official: "[Ethereum Org](https://ethereum.org)", 
        preparation: "[CryptoZombies](https://cryptozombies.io)" 
    }
  },
  {
    name: "Chartered Accountant",
    interests: ["auditing", "finance", "managing company taxes"],
    skills: ["Accounting", "Taxation", "Finance"],
    exams: ["CA Foundation", "CA Final"],
    salary: { fresher: 7, mid: 15, senior: 30 },
    demandGrowth: 9,
    roadmap: ["CA Foundation", "Inter", "Articleship", "Final Exam"],
    links: { 
        official: "[ICAI](https://www.icai.org)", 
        preparation: "[Unacademy](https://www.unacademy.com)" 
    }
  },
  {
    name: "Digital Marketer",
    interests: ["social media trends", "online brand growth"],
    skills: ["SEO", "Content Marketing", "PPC Ads"],
    exams: ["Google Ads"],
    salary: { fresher: 3, mid: 10, senior: 22 },
    demandGrowth: 11,
    roadmap: ["SEO", "Social Media", "Paid Ads", "Analytics"],
    links: { 
        official: "[Google Marketing](https://marketingplatform.google.com)", 
        preparation: "[HubSpot](https://academy.hubspot.com)" 
    }
  },
  {
    name: "Investment Banker",
    interests: ["stock markets", "mergers", "large-scale finance"],
    skills: ["Financial Modeling", "Valuation", "M&A"],
    exams: ["CFA"],
    salary: { fresher: 10, mid: 25, senior: 65 },
    demandGrowth: 7,
    roadmap: ["Finance Degree", "Modeling", "Internship", "CFA Certs"],
    links: { 
        official: "[CFA Institute](https://www.cfainstitute.org)", 
        preparation: "[WallStreetPrep](https://www.wallstreetprep.com)" 
    }
  },
  {
    name: "Management Consultant",
    interests: ["solving business problems", "growth strategy"],
    skills: ["Problem Solving", "Strategy", "Communication"],
    exams: ["CAT/GMAT"],
    salary: { fresher: 12, mid: 28, senior: 60 },
    demandGrowth: 10,
    roadmap: ["MBA/B-School", "Case Interviews", "Networking", "Internship"],
    links: { 
        official: "[McKinsey](https://www.mckinsey.com)", 
        preparation: "[CaseInterview](https://www.caseinterview.com)" 
    }
  },
  {
    name: "Ethical Hacker",
    interests: ["testing security by safely breaching systems"],
    skills: ["PenTesting", "Metasploit", "Python"],
    exams: ["OSCP"],
    salary: { fresher: 6, mid: 18, senior: 42 },
    demandGrowth: 32,
    roadmap: ["Network Security", "Hacking Tools", "OSCP Exam", "Bounty Hunting"],
    links: { 
        official: "[OffSec](https://www.offensive-security.com)", 
        preparation: "[HackTheBox](https://www.hackthebox.com)" 
    }
  },
  {
    name: "Mobile App Developer",
    interests: ["building apps for iOS and Android"],
    skills: ["Swift", "Kotlin", "React Native"],
    exams: [],
    salary: { fresher: 5, mid: 15, senior: 32 },
    demandGrowth: 19,
    roadmap: ["Swift/Kotlin", "Mobile UI", "App State", "App Store Launch"],
    links: { 
        official: "[Apple Dev](https://developer.apple.com)", 
        preparation: "[Udacity](https://www.udacity.com)" 
    }
  },
  {
    name: "Software Architect",
    interests: ["high-level system design", "technical blueprints"],
    skills: ["System Design", "Scalability", "Microservices"],
    exams: [],
    salary: { fresher: 12, mid: 30, senior: 65 },
    demandGrowth: 24,
    roadmap: ["Senior Dev Roles", "System Design", "Cloud Architecture", "Leadership"],
    links: { 
        official: "[IEEE](https://www.ieee.org)", 
        preparation: "[Educative](https://www.educative.io)" 
    }
  },
  {
    name: "Data Engineer",
    interests: ["building pipelines to process massive datasets"],
    skills: ["SQL", "ETL", "Spark", "Warehousing"],
    exams: ["Databricks Cert"],
    salary: { fresher: 6, mid: 18, senior: 35 },
    demandGrowth: 21,
    roadmap: ["SQL", "Big Data", "ETL Pipelines", "Cloud Warehouse"],
    links: { 
        official: "[Databricks](https://www.databricks.com)", 
        preparation: "[DataEngWiki](https://dataengineering.wiki)" 
    }
  },
  {
    name: "Product Manager",
    interests: ["leading the vision and market success of products"],
    skills: ["Agile", "Strategy", "User Research"],
    exams: [],
    salary: { fresher: 8, mid: 20, senior: 45 },
    demandGrowth: 14,
    roadmap: ["Agile", "Product Lifecycle", "Data Analytics", "Roadmapping"],
    links: { 
        official: "[Product School](https://www.productschool.com)", 
        preparation: "[MindTheProduct](https://www.mindtheproduct.com)" 
    }
  },
  {
    name: "Content Creator / Influencer",
    interests: ["storytelling", "video production", "building online communities"],
    skills: ["Video Editing", "Public Speaking", "Social Media Analytics", "Copywriting"],
    exams: [],
    salary: { fresher: 3, mid: 15, senior: 50 },
    demandGrowth: 35,
    roadmap: ["Define Niche", "Content Consistency", "Platform Mastery", "Brand Collaboration"],
    links: { 
        official: "https://creators.youtube.com", 
        preparation: "https://www.skillshare.com" 
    }
  },
  {
    name: "Psychologist",
    interests: ["understanding human behavior", "providing mental health support"],
    skills: ["Empathy", "Active Listening", "Research", "Diagnosis"],
    exams: ["GRE Psychology", "License Exams"],
    salary: { fresher: 4, mid: 10, senior: 25 },
    demandGrowth: 14,
    roadmap: ["Bachelor's in Psychology", "Master's Degree", "Supervised Internship", "Ph.D./License"],
    links: { 
        official: "https://www.apa.org", 
        preparation: "https://www.psychologytoday.com" 
    }
  },
  {
    name: "Commercial Pilot",
    interests: ["aviation", "traveling", "high-responsibility operations"],
    skills: ["Situational Awareness", "Quick Decision Making", "Navigation", "Communication"],
    exams: ["DGCA Exams", "Class 1 Medical"],
    salary: { fresher: 15, mid: 40, senior: 80 },
    demandGrowth: 13,
    roadmap: ["Flight School (CPL)", "Flight Hours Logging", "Type Rating", "Airline Selection"],
    links: { 
        official: "https://www.dgca.gov.in", 
        preparation: "https://www.pilot18.com" 
    }
  },
  {
    name: "Fashion Designer",
    interests: ["aesthetics", "textile arts", "trend-setting"],
    skills: ["Sketching", "Garment Construction", "Fabric Knowledge", "Adobe Illustrator"],
    exams: ["NIFT", "NID"],
    salary: { fresher: 3.5, mid: 9, senior: 25 },
    demandGrowth: 11,
    roadmap: ["Design Portfolio", "Degree in Fashion", "Internship with Brands", "Launch Label"],
    links: { 
        official: "https://www.nift.ac.in", 
        preparation: "https://www.businessoffashion.com" 
    }
  },
  {
    name: "Supply Chain Manager",
    interests: ["logistics", "global trade", "efficiency optimization"],
    skills: ["Inventory Management", "Negotiation", "Data Forecasting", "ERP Systems"],
    exams: ["CSCP", "CPIM"],
    salary: { fresher: 6, mid: 14, senior: 30 },
    demandGrowth: 18,
    roadmap: ["Business Degree", "Supply Chain Certification", "Logistics Internship", "Strategic Planning"],
    links: { 
        official: "https://www.ascm.org", 
        preparation: "https://www.edx.org/learn/supply-chain-management" 
    }
  },
  {
    name: "Architect",
    interests: ["building design", "urban planning", "structural aesthetics"],
    skills: ["AutoCAD", "SketchUp", "Mathematics", "Design Thinking"],
    exams: ["NATA", "JEE Paper 2"],
    salary: { fresher: 4, mid: 12, senior: 28 },
    demandGrowth: 8,
    roadmap: ["B.Arch Degree", "COA Registration", "Junior Architect Role", "Private Practice"],
    links: { 
        official: "https://www.coa.gov.in", 
        preparation: "https://www.archdaily.com" 
    }
  },
    {
    name: "Research Scientist",
    interests: ["Investigating phenomena to create new knowledge or theories"],
    skills: ["Data Analysis", "Critical Thinking", "Technical Writing", "Python/R"],
    exams: ["GATE", "UGC NET", "CSIR NET"],
    salary: { fresher: 7, mid: 16, senior: 35 },
    demandGrowth: 15,
    roadmap: ["Bachelor's Degree", "Master's/PhD", "Research Assistantship", "Post-Doc", "Principal Investigator"],
    links: { 
        official: "[SERB India](https://serb.gov.in)", 
        preparation: "[NPTEL Online](https://nptel.ac.in)" 
    }
  },
  {
    name: "Professional Artist",
    interests: ["Visual storytelling and creative expression through various media"],
    skills: ["Visual Theory", "Creative Software (Adobe/Figma)", "Curating", "Marketing"],
    exams: ["NID DAT", "UCEED"],
    salary: { fresher: 4, mid: 11, senior: 28 },
    demandGrowth: 12,
    roadmap: ["Fine Arts Degree", "Portfolio Development", "Exhibitions", "Gallery Representation", "Master Artist"],
    links: { 
        official: "[Lalit Kala Akademi](https://lalitkala.gov.in)", 
        preparation: "[Behance Portfolio](https://www.behance.net)" 
    }
  },
  {
    name: "Space Scientist",
    interests: ["Exploring celestial bodies and developing aerospace technology"],
    skills: ["Astrophysics", "Mathematical Modeling", "Simulation Tools", "Robotics"],
    exams: ["ICRB (ISRO)", "GATE"],
    salary: { fresher: 9, mid: 22, senior: 48 },
    demandGrowth: 28,
    roadmap: ["B.Tech/B.Sc", "Specialization in Aerospace/Physics", "ISRO/DRDO Entrance", "Mission Research", "Project Lead"],
    links: { 
        official: "[ISRO Careers](https://www.isro.gov.in/careers)", 
        preparation: "[NASA STEM](https://www.nasa.gov/learning-resources)" 
    }
  }
];

const seedDB = async () => {
  try {
    for (let career of careers) {
      await Career.updateOne(
        { name: career.name},
        { $set: career },       
        { upsert: true }        
      );
    }
    console.log("Database Seeded Safely ✅");
    mongoose.connection.close();
  } catch (error) {
    console.error(error);
  }
};

seedDB(); 