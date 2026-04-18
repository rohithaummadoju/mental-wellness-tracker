import { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import "chart.js/auto";
import "./Profile.css";
import AppLayout from "../components/AppLayout";

/* ===== Helpers ===== */

function getWeeklyMoodCount(moods) {
  const count = { Happy: 0, Neutral: 0, Sad: 0, Angry: 0 };

  moods.forEach((m) => {
    const mood = m.mood || "";
    if (mood.includes("Happy")) count.Happy++;
    if (mood.includes("Neutral")) count.Neutral++;
    if (mood.includes("Sad")) count.Sad++;
    if (mood.includes("Angry")) count.Angry++;
  });

  return count;
}

function moodToValue(mood) {
  if (!mood) return 0;
  if (mood.includes("Happy")) return 5;
  if (mood.includes("Neutral")) return 3;
  if (mood.includes("Sad")) return 1;
  if (mood.includes("Angry")) return 2;
  return 0;
}

/* ===== Component ===== */

function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const [weeklyMoods, setWeeklyMoods] = useState([]);
  const [weeklyStress, setWeeklyStress] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userDetails"));
    const moods = JSON.parse(localStorage.getItem("moods")) || [];
    const stress = JSON.parse(localStorage.getItem("stress")) || [];

    setUserDetails(user);

    const last7Days = new Date();
    last7Days.setDate(last7Days.getDate() - 7);

    setWeeklyMoods(
      moods.filter((m) => new Date(m.date) >= last7Days)
    );

    setWeeklyStress(
      stress.filter((s) => new Date(s.date) >= last7Days)
    );
  }, []);

  if (!userDetails) {
    return <AppLayout><div className="card">No data</div></AppLayout>;
  }

  const moodCount = getWeeklyMoodCount(weeklyMoods);

  const combinedData = {
    labels: weeklyMoods.map((m) => m.date),
    datasets: [
      {
        label: "Mood",
        data: weeklyMoods.map((m) => moodToValue(m.mood)),
        borderColor: "#4f46e5",
        tension: 0.3,
      },
      {
        label: "Stress",
        data: weeklyMoods.map((m) => {
          const s = weeklyStress.find((x) => x.date === m.date);
          return s ? s.value : null;
        }),
        borderColor: "#ef4444",
        tension: 0.3,
      },
    ],
  };

  return (
    <AppLayout>
      <div className="container">

        <h2 className="section-title">Overview</h2>
        <div className="grid">
          <div className="card">
            <h3>Profile</h3>
            <p><b>Name:</b> {userDetails.fullName}</p>
            <p><b>Age:</b> {userDetails.age}</p>
          </div>

          <div className="card">
            <h3>Mood Summary</h3>
            <Bar
              data={{
                labels: Object.keys(moodCount),
                datasets: [{
                  data: Object.values(moodCount),
                  backgroundColor: ["#4caf50","#2196f3","#f44336","#ff9800"]
                }]
              }}
            />
          </div>
        </div>

        <h2 className="section-title">Analytics</h2>
        <div className="grid">
          <div className="card">
            <h3>Stress Analysis</h3>
            <Bar
              data={{
                labels: weeklyStress.map((s) => s.date),
                datasets: [{
                  data: weeklyStress.map((s) => s.value),
                  backgroundColor: "#ff7043"
                }]
              }}
            />
          </div>

          <div className="card">
            <h3>Combined Trend</h3>
            <Line data={combinedData} />
          </div>
        </div>

        <h2 className="section-title">Insights</h2>
        <div className="card">
          <p className="info">
            Track your mood and stress regularly to maintain better mental health.
          </p>
        </div>

      </div>
    </AppLayout>
  );
}

export default Profile;