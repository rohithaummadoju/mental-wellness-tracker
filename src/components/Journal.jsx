import { useState } from "react";

function Journal() {
  const [text, setText] = useState(localStorage.getItem("journal") || "");

  const saveJournal = () => {
    localStorage.setItem("journal", text);
    alert("Saved!");
  };

  return (
    <div className="container card">
  <h2>Daily Journal</h2>
  <textarea
    value={text}
    onChange={e => setText(e.target.value)}
    placeholder="Write your thoughts here..."
  />
  <br />
  <button className="save-btn" onClick={saveJournal}>
    Save Entry
  </button>
</div>

  );
}

export default Journal;
