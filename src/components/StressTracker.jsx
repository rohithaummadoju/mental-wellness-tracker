import React, { useState } from "react";

const StressTracker = () => {
  const [stress, setStress] = useState(5);

  const saveStress = () => {
    const data = JSON.parse(localStorage.getItem("stress")) || [];

    data.push({
      date: new Date().toLocaleDateString(),
      value: Number(stress),
    });

    localStorage.setItem("stress", JSON.stringify(data));
    alert("Stress saved!");
  };

  return (
    <div style={{ padding: "10px", border: "1px solid gray", margin: "10px" }}>
      <h3>😰 Stress Level</h3>
      
      <input
        type="range"
        min="1"
        max="10"
        value={stress}
        onChange={(e) => setStress(e.target.value)}
      />
      
      <p>Level: {stress}</p>

      <button onClick={saveStress}>Save</button>
    </div>
  );
};

export default StressTracker;