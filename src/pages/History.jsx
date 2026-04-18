import { useEffect, useState } from "react";

function History() {
  const [moods, setMoods] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("moods")) || [];
    setMoods(data);
  }, []);

  return (
    <div className="container card">
      <h2>Mood History</h2>

      {moods.length === 0 ? (
        <p>No mood history available.</p>
      ) : (
        moods.map((m) => (
          <div className="history-item" key={m.id}>
            <div>
              <strong>{m.mood}</strong>
            </div>
            <div>
              {m.date}
              <br />
              <small>{m.time}</small>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default History;
