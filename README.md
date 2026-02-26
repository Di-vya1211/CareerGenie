**🚀 CareerGenie – AI-Based Career Recommendation System**
📌 **Overview**
CareerGenie is a data-driven career recommendation platform that helps students discover the most suitable career path based on their skills, interests, salary expectations, and market demand trends.
Many students feel confused after school or college about which career to choose. CareerGenie solves this problem using intelligent scoring logic and analytics-based recommendations.

**🧠 Problem Statement**
Choosing the right career is one of the most confusing decisions for students.
Most students:
Follow trends instead of data
Ignore market demand
Don’t analyze salary growth
Lack structured roadmaps
There is no intelligent system that combines: ✔ Skills
✔ Interests
✔ Market Demand
✔ Salary Growth
✔ Structured Career Path
CareerGenie solves this problem.

**💡 Our Solution**
CareerGenie is an AI-based career recommendation system that:
Matches user skills with career requirements
Analyzes interest compatibility
Adds market demand growth factor
Applies penalty for weak matches
Generates smart career ranking
Displays salary & demand analytics
The system calculates a Dynamic Match Score:
Copy code

Total Score = Skill Score + Interest Score + Demand Score - Penalty
Then recommends:
🥇 Best Career Match
🏆 Top 5 Career Options
📊 Salary Growth Graph
📈 Demand Growth Graph
🗺 Structured Roadmap
🏗 System Architecture
Copy code

Frontend (React)
        ↓
Axios API Calls
        ↓
Backend (Node + Express)
        ↓
Scoring Algorithm
        ↓
MongoDB Database
        ↓
Processed Result + Graph Data
🛠 Tech Stack
🔹 Frontend
React.js
Axios
Chart.js
React-Chartjs-2
🔹 Backend
Node.js
Express.js
MongoDB
Mongoose
🔹 Development Tools
Git & GitHub
VS Code
Postman
Thunder Client
📂 Project Structure
Backend
Copy code

CAREERGENIE/
│
├── controllers/
│   └── careerController.js
│
├── models/
│   └── Career.js
│
├── routes/
│   └── careerRoutes.js
│
├── seed.js
├── server.js
Frontend
Copy code

career-genie-frontend/
│
├── src/
│   ├── components/
│   ├── services/
│   ├── App.js
│   └── index.js

**⚙️ Core Features**
🎯 Intelligent Career Matching
Skill-based scoring
Interest-based filtering
Market demand scoring
Penalty logic for low compatibility
📊 Analytics Dashboard
Salary growth visualization (Fresher → Senior)
Demand growth comparison
Skills distribution analysis

**🗺 Career Roadmap**
Step-by-step learning path
Required exams
Official & preparation links
🔍 API Endpoints
Method
Endpoint
Description
POST
/api/careers/match
Get best career recommendation
POST
/api/careers/filter
Filter by interest
POST
/api/careers/analytics
Get graph analytics data

**🚀 Installation Guide**
1️⃣ Clone Repository
Copy code

git clone https://github.com/your-username/CAREERGENIE.git
2️⃣ Backend Setup
Copy code

cd CAREERGENIE
npm install
npm start
Server runs at:
Copy code

http://localhost:5000
3️⃣ Frontend Setup
Copy code

cd career-genie-frontend
npm install
npm start
Frontend runs at:
Copy code

http://localhost:3000
📊 Example Output
✔ Recommended Career
✔ Top 5 Ranked Careers
✔ Salary Growth Graph
✔ Demand Growth Graph
✔ Structured Learning Roadmap
🧠 Why This Project is Different
Unlike basic career quizzes:
It uses data-driven scoring
It considers real market demand
It includes salary progression
It ranks careers dynamically
It is scalable & backend-optimized
This makes CareerGenie closer to a real EdTech product.
🔮 Future Enhancements
🔐 User Authentication
📜 Career history tracking
👨‍💼 Admin Dashboard
🤖 ML-based predictive scoring
🌍 Real-time job market API integration
📄 Resume analysis system
📊 Personalized AI reports
