import React, { useState } from 'react';
import { getCareerMatch, getCareerAnalytics } from './api';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import './App.css';

function App() {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [careerData, setCareerData] = useState(null);
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(false);

  const interestOptions = [
    "Technology", "Research", "Public Service", "Governance", 
    "Legal Interpretation", "Advocacy", "Medicine", "Automation","Debate","Defending Legal Rights",
    "Human Biology", "Saving Lives",
    "Finance", "Aviation", "Adminnistrative Leadership", "Fair Justice Delivery",
    "Building Intelligent Machines", "Building entire web apps from front to back","Protecting Systems", "Outsmarting Hackers",
    "Designing secure and scalable digital infrastructure","App visual design", "User psychology","Decentralized finance", "Secure web3 apps",
    "Auditing", "Managing company taxes","Social media trends", "Online brand growth","Stock markets", "Mergers", "Large-scale finance",
    "Solving business problems", "Growth strategy","Testing security by safely breaching systems","Building apps for iOS and Android",
    "High-level system design", "Technical blueprints","Building pipelines to process massive datasets","leading the vision and market success of products",
    "Storytelling", "Video production", "Building online communities","Understanding human behavior", "Providing mental health support",
    "Aviation", "Traveling", "High-responsibility operations","Aesthetics", "Textile arts", "Trend-setting","Logistics", "Global trade", "Efficiency optimization",
    "Building design", "Urban planning", "Structural aesthetics","Investigating phenomena to create new knowledge or theories","Visual storytelling and creative expression through various media",
    "Exploring celestial bodies and developing aerospace technology"
  ];

  const handleInterestChange = (e) => {
    const value = e.target.value;
    if (value && !selectedInterests.includes(value.toLowerCase())) {
      setSelectedInterests([...selectedInterests, value.toLowerCase()]);
    }
  };

  const removeInterest = (interest) => {
    setSelectedInterests(selectedInterests.filter(i => i !== interest));
  };

  const handleFindCareer = async () => {
    if (selectedInterests.length === 0) return alert("Select interests first!");
    setLoading(true);
    try {
      const matchRes = await getCareerMatch({ interests: selectedInterests });
      setCareerData(matchRes.data.recommendedCareer);

      const analyticsRes = await getCareerAnalytics({ interests: selectedInterests });
      setAnalytics(analyticsRes.data.graphs);
    } catch (err) {
      alert("Backend connection failed!");
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <header className="header"><h1>CareerGenie 🚀</h1><h5>Find Your Perfect Career Path</h5></header>

      
      <div className="selection-area">
        <select onChange={handleInterestChange} className="dropdown">
          <option value="">-- Select Interests --</option>
          {interestOptions.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
        </select>

        <div className="tags-container" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', margin: '15px 0', justifyContent: 'center' }}>
          {selectedInterests.map((interest, index) => (
            <span key={index} className="badge" style={{ background: '#e0e0e0', color: '#333', padding: '5px 15px', borderRadius: '20px', display: 'flex', alignItems: 'center' }}>
              {interest} 
              <button onClick={() => removeInterest(interest)} style={{ marginLeft: '8px', border: 'none', cursor: 'pointer', background: 'transparent', color: 'red', fontWeight: 'bold' }}>x</button>
            </span>
          ))}
        </div>

        <button className="main-btn" onClick={handleFindCareer}>{loading ? "Analyzing..." : "Find My Path"}</button>
      </div>

      {careerData ? (
        <div className="main-container">
          <div className="details-card">
            <h2>{careerData.name} <span className="badge-match">{careerData.matchScore}% Match</span></h2>
            
            <div className="info-grid">
              <div>
                <h4>📚 Entrance Exams:</h4>
                <p>{careerData.exams.length > 0 ? careerData.exams.join(", ") : "Direct Entry"}</p>
              </div>
              <div>
                <h4>🔗 Important Links:</h4>
                <p>
                  <a href={careerData.links.official} target="_blank" rel="noreferrer">Official Website</a> | 
                  <a href={careerData.links.preparation} target="_blank" rel="noreferrer"> Preparation</a>
                </p>
              </div>
            </div>

            <h4>🛠️ Required Skills:</h4>
            <p>{careerData.skills.join(", ")}</p>

            <h4>🛤️ Roadmap:</h4>
            <ul className="roadmap-list">
              {careerData.roadmap.map((step, i) => <li key={i}>{step}</li>)}
            </ul>
          </div>

          <div className="graph-card">
            <h3>💰 Salary Comparison (LPA)</h3>
            {analytics ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={analytics.salaryGraph}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="fresher" fill="#4caf50" name="Fresher" />
                  <Bar dataKey="mid" fill="#2196f3" name="Mid" />
                  <Bar dataKey="senior" fill="#f44336" name="Senior" />
                </BarChart>
              </ResponsiveContainer>
            ) : <p>No graph data available.</p>}
          </div>
        </div>
      ) : selectedInterests.length > 0 && !loading && <p>No career matches your selected interests yet.</p>}
    </div>
  );
}

export default App;