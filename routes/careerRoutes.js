const express = require("express");
const router = express.Router();
const Career = require("../models/Career"); 
const careerController = require("../controllers/careerController");
router.post("/filter", careerController.filterCareers);
router.post("/match", careerController.getCareerMatch);
router.post("/analytics", careerController.getCareerAnalytics);
module.exports = router;