const Career = require("../models/Career");
exports.filterCareers=async(req,res)=>{
  try{
    const interest=req.body.interest.toLowerCase();
    const careers=await Career.find({
      interests:{$in: [interest]}
    });
    res.status(200).json(careers);
  }catch(error){
    res.status(500).json({ message: "Server Error", error });
  }
}
exports.getCareerMatch = async (req, res) => {
  try {
    const { skills = [], interests = [] } = req.body;
    const careers = await Career.find();
    const results = careers.map(career => {
      // Skill Match
      const skillMatches = career.skills.filter(skill =>
        skills.map(s => s.toLowerCase()).includes(skill.toLowerCase())
      ).length;
      const skillScore = (skillMatches / career.skills.length) * 60;
      // Interest Match
      const interestMatches = career.interests.filter(interest =>
        interests.map(i => i.toLowerCase()).includes(interest.toLowerCase())
      ).length;
      const interestScore = (interestMatches / career.interests.length) * 25;
      const demandScore=(career.demandGrowth/40)*15;
      let penalty=0;
      if(skillScore<20) penalty+=10;
      if(interestScore<10) penalty+=5;
      const totalScore = skillScore + interestScore + demandScore - penalty;
      return {
        ...career.toObject(),
        matchScore: Number(totalScore.toFixed(2))
      };
    });
    const sorted = results.sort((a, b) => b.matchScore - a.matchScore);
    res.json({
      recommendedCareer: sorted[0],
      topCareers: sorted.slice(0, 5)
    });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

exports.getCareerAnalytics = async (req, res) => {
  try {
    const { skills = [], interests = [] } = req.body;
    const careers = await Career.find();
    const scoredCareers = careers.map(career => {
      let score = 0;
      skills.forEach(skill => {
        if (career.skills.map(s => s.toLowerCase()).includes(skill.toLowerCase())) score += 3;
      });
      interests.forEach(interest => {
        if (career.interests.map(i => i.toLowerCase()).includes(interest.toLowerCase())) score += 2;
      });
      score += career.demandGrowth * 0.1;

      return {
        ...career._doc,
        matchScore: parseFloat(score.toFixed(2))
      };
    });

    scoredCareers.sort((a, b) => b.matchScore - a.matchScore);

    const topCareers = scoredCareers.slice(0, 3);

    // 🔥 GRAPH READY DATA
    const salaryGraph = topCareers.map(c => ({
      name: c.name,
      fresher: c.salary.fresher,
      mid: c.salary.mid,
      senior: c.salary.senior
    }));

    const demandGraph = topCareers.map(c => ({
      name: c.name,
      demandGrowth: c.demandGrowth
    }));

    const skillsGraph = topCareers.map(c => ({
      name: c.name,
      totalSkills: c.skills.length
    }));

   res.json({
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    recommendedCareer: topCareers[0],
  topCareers: topCareers,
  graphs: {
    salaryGraph,
    demandGraph,
    skillsGraph
  }
});
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};