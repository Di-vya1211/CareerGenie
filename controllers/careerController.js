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
    const { interests = [] } = req.body;
    const careers = await Career.find();

    const results = careers.map(career => {
      const interestMatches = career.interests.filter(i =>
        interests.includes(i.toLowerCase())
      ).length;

      // Score calculation based on interest percentage
      const totalScore = interestMatches > 0 ? (interestMatches / career.interests.length) * 100 : 0;

      return { ...career.toObject(), matchScore: Number(totalScore.toFixed(2)) };
    });

    const sorted = results.filter(c => c.matchScore > 0).sort((a, b) => b.matchScore - a.matchScore);

    res.json({ recommendedCareer: sorted[0] || null });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};
exports.getCareerAnalytics = async (req, res) => {
  try {
    const { interests = [] } = req.body;
    const careers = await Career.find();

    const scoredCareers = careers.map(career => {
      let score = 0;
      interests.forEach(interest => {
        if (career.interests.map(i => i.toLowerCase()).includes(interest.toLowerCase())) {
          score += 10; 
        }
      });

      return { ...career._doc, matchScore: score };
    });

    const matchedCareers = scoredCareers.filter(c => c.matchScore > 0);
    matchedCareers.sort((a, b) => b.matchScore - a.matchScore);

    const topCareers = matchedCareers.slice(0, 3);

    if (topCareers.length === 0) {
      return res.json({ graphs: null, message: "No matches found" });
    }

    const salaryGraph = topCareers.map(c => ({
      name: c.name,
      fresher: c.salary.fresher,
      mid: c.salary.mid,
      senior: c.salary.senior
    }));

    res.json({
      recommendedCareer: topCareers[0],
      graphs: { salaryGraph }
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};