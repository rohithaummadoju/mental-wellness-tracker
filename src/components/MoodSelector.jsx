import { v4 as uuid } from "uuid";

function MoodSelector({ setMoods }) {
  const moods = ["😊 Happy", "😐 Neutral", "😔 Sad", "😡 Angry"];

  const addMood = (mood) => {
    const now = new Date();

const entry = {
  id: uuid(),
  mood,
  date: now.toLocaleDateString(),
  time: now.toLocaleTimeString()
};


    setMoods(prev => {
      const updated = [...prev, entry];
      localStorage.setItem("moods", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <div className="card">
  <h3>How are you feeling today?</h3>
  <div className="mood-buttons">
    {moods.map(m => (
      <button key={m} onClick={() => addMood(m)}>{m}</button>
    ))}
  </div>
</div>

  );
}

export default MoodSelector;
