const mongoose=require("mongoose");

const careerSchema=new mongoose.Schema({
    name: String,
    skills:[String],
    interests:[String],
    exams:[String],
    salary:{
        fresher: Number,
        mid:Number,
        senior:Number
    },
    demandGrowth:Number,
    roadmap:[String],
    links:{
        official:String,
        preparation: String
    }
});
module.exports=mongoose.model("Career",careerSchema);