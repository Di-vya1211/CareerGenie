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
})

