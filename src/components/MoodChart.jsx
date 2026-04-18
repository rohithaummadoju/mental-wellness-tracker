import { Bar } from "react-chartjs-2";
import "chart.js/auto";

function MoodChart({ moods }) {
  const moodCount = {
    Happy: 0,
    Neutral: 0,
    Sad: 0,
    Angry: 0
  };

  moods.forEach(m => {
    if (m.mood.includes("Happy")) moodCount.Happy++;
    if (m.mood.includes("Neutral")) moodCount.Neutral++;
    if (m.mood.includes("Sad")) moodCount.Sad++;
    if (m.mood.includes("Angry")) moodCount.Angry++;
  });

  const data = {
    labels: Object.keys(moodCount),
    datasets: [
      {
        label: "Mood Frequency",
        data: Object.values(moodCount)
      }
    ]
  };

  return <Bar data={data} />;
}

export default MoodChart;
