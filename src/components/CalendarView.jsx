import React from "react";
import "./CalendarView.css";

const CalendarView = () => {
  const moods = JSON.parse(localStorage.getItem("moods")) || [];
  const stress = JSON.parse(localStorage.getItem("stress")) || [];

  // Get today's month
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  // Get number of days in month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Helper: get color for each day
  const getDayColor = (dateStr) => {
    const moodEntry = moods.find((m) => m.date === dateStr);
    const stressEntry = stress.find((s) => s.date === dateStr);

    // Priority: stress first
    if (stressEntry && stressEntry.value >= 7) {
      return "high-stress";
    }

    if (moodEntry) {
      if (moodEntry.mood?.includes("Happy")) return "happy";
      if (moodEntry.mood?.includes("Sad")) return "sad";
    }

    return "";
  };

  // Generate days
  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    const dateObj = new Date(year, month, i);
    const dateStr = dateObj.toLocaleDateString();

    const colorClass = getDayColor(dateStr);

    days.push(
      <div key={i} className={`day ${colorClass}`}>
        {i}
      </div>
    );
  }

  return (
    <div className="calendar-container">
      <h2>📅 Monthly Mood Map</h2>
      <div className="calendar-grid">{days}</div>

      {/* Legend */}
      <div className="legend">
        <span className="box happy"></span> Happy
        <span className="box sad"></span> Sad
        <span className="box high-stress"></span> High Stress
      </div>
    </div>
  );
};

export default CalendarView;