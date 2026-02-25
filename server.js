const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGO_URI).then(()=>console.log("MongoDB Connected")).catch(err=>console.log(err));
app.get("/",(req,res)=>{
    res.send("CareerGenie API running");
});
const Career = require("./models/Career");
app.get("/api/careers",async(req,res)=>{
    const careers=await Career.find();
    res.json(careers);
})
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});
app.post("/api/recommend", async (req, res) => {
  try {
    const { skills = [], interests = [], sortBy = "match" } = req.body;

    if (!skills.length && !interests.length) {
      return res.status(400).json({
        message: "Please provide skills or interests"
      });
    }

    const careers = await Career.find();

    const scoredCareers = careers.map(career => {

      const skillMatch = career.skills.filter(skill =>
        skills.includes(skill)
      ).length;

      const interestMatch = career.interests.filter(interest =>
        interests.includes(interest)
      ).length;

      const totalScore = skillMatch * 2 + interestMatch; 

      return {
        name: career.name,
        skills: career.skills,
        interests: career.interests,
        exams: career.exams,
        salary: career.salary,
        demandGrowth: career.demandGrowth,
        roadmap: career.roadmap,
        links: career.links,
        matchScore: totalScore
      };
    });

    let filtered = scoredCareers.filter(c => c.matchScore > 0);

    if (sortBy === "salary") {
      filtered.sort((a, b) => b.salary.senior - a.salary.senior);
    } else if (sortBy === "growth") {
      filtered.sort((a, b) => b.demandGrowth - a.demandGrowth);
    } else {
      filtered.sort((a, b) => b.matchScore - a.matchScore);
    }

    res.json(filtered);

  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message
    });
  }
});