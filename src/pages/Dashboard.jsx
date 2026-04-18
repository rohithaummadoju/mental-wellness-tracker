import { useState, useEffect } from "react";
import MoodSelector from "../components/MoodSelector";
import MoodChart from "../components/MoodChart";
import MoodStreak from "../components/MoodStreak";
import Suggestion from "../components/Suggestion";
import StressTracker from "../components/StressTracker";
import DailyReminder from "../components/DailyReminder";
import "./Dashboard.css";

function Dashboard() {
  const [moods, setMoods] = useState([]);

  useEffect(() => {
    const loadData = () => {
      const data = JSON.parse(localStorage.getItem("moods")) || [];
      setMoods(data);
    };

    loadData();

    // listen for updates
    window.addEventListener("storage", loadData);

    return () => window.removeEventListener("storage", loadData);
  }, []);

  return (
    <div className="dashboard-container">

      {/* Daily reminder */}
      <DailyReminder />

      <h1 className="dashboard-title">🏠 Dashboard</h1>

      {/* TOP SECTION */}
      <div className="grid">
        <div className="card">
          <MoodStreak moods={moods} />
        </div>

        <div className="card">
          <Suggestion moods={moods} />
        </div>
      </div>

      {/* INPUT SECTION */}
      <div className="card">
        <h3>Track Your Mood</h3>
        <MoodSelector setMoods={setMoods} />
      </div>

      {/* ANALYTICS SECTION */}
      <div className="grid">
        <div className="card">
          <h3>📊 Mood Trend</h3>
          <MoodChart moods={moods} />
        </div>

        <div className="card">
          <h3>😰 Stress Tracker</h3>
          <StressTracker />
        </div>
      </div>

    </div>
  );
}

export default Dashboard;