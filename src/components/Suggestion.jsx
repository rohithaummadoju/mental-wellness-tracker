import React from "react";

const Suggestion = () => {
  const moods = JSON.parse(localStorage.getItem("moods")) || [];
  const last = moods[moods.length - 1];

  const getTip = () => {
    if (!last) return "Track your mood to get suggestions.";

    if (last.value >= 4) return "You're doing great! 😊 Keep it up!";
    if (last.value >= 2) return "Take a short break 🌿 or listen to music.";
    return "Talk to someone you trust 💛 or write your feelings.";
  };

  return (
    <div style={{ padding: "10px", border: "1px solid gray", margin: "10px" }}>
      <h3>💡 Suggestion</h3>
      <p>{getTip()}</p>
    </div>
  );
};

export default Suggestion;