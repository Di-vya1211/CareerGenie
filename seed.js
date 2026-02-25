const mongoose = require("mongoose");
const Career = require("./models/Career");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);

const careers = [
    {
    name: "Data Scientist",
    skills: ["Python", "Statistics", "Machine Learning", "Data Analysis"],
    exams: [],
    salary: { fresher: 6, mid: 18, senior: 35 },
    demandGrowth: 22,
    roadmap: [
        "Learn Python",
        "Learn Statistics",
        "Learn ML",
        "Build Data Projects",
        "Apply for Internships"
    ],
    links: {
        official: "https://www.kaggle.com",
        preparation: "https://scikit-learn.org"
    }
    },
    {
    name: "Doctor",
    skills: ["Biology", "Patience", "Communication"],
    exams: ["NEET"],
    salary: { fresher: 6, mid: 12, senior: 25 },
    demandGrowth: 12,
    roadmap: [
        "Clear NEET",
        "Complete MBBS",
        "Do Internship",
        "Specialization (MD/MS)"
    ],
    links: {
        official: "https://neet.nta.nic.in",
        preparation: "https://www.aakash.ac.in"
    }
    },
    {
    name: "Chartered Accountant",
    skills: ["Accounting", "Finance", "Analytical Thinking"],
    exams: ["CA Foundation", "CA Inter", "CA Final"],
    salary: { fresher: 7, mid: 15, senior: 30 },
    demandGrowth: 9,
    roadmap: [
        "Register for CA Foundation",
        "Clear Inter",
        "Articleship",
        "Clear Final"
    ],
    links: {
        official: "https://www.icai.org",
        preparation: "https://www.unacademy.com"
        }
        },
    {
    name: "UI/UX Designer",
    skills: ["Creativity", "Figma", "User Research"],
    exams: [],
    salary: { fresher: 4, mid: 12, senior: 22 },
    demandGrowth: 15,
    roadmap: [
        "Learn Design Principles",
        "Master Figma",
        "Build Portfolio",
        "Apply for Design Jobs"
    ],
    links: {
        official: "https://www.interaction-design.org",
        preparation: "https://www.coursera.org"
    }
    },
    {
    name: "Cyber Security Analyst",
    skills: ["Networking", "Linux", "Security Tools"],
    exams: ["CEH"],
    salary: { fresher: 5, mid: 14, senior: 28 },
    demandGrowth: 20,
    roadmap: [
        "Learn Networking",
        "Learn Linux",
        "Security Certifications",
        "Hands-on Practice"
    ],
    links: {
        official: "https://www.eccouncil.org",
        preparation: "https://tryhackme.com"
        }
    }
];

Career.insertMany(careers)
.then(() => {
  console.log("Data Inserted");
  mongoose.connection.close();
});