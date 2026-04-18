import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [working, setWorking] = useState("no");
  const [profession, setProfession] = useState("");
  const [hours, setHours] = useState("");

  const handleRegister = () => {
    if (!fullName || !age) {
      alert("Please fill required fields");
      return;
    }

    if (working === "yes" && (!profession || !hours)) {
      alert("Please enter profession and working hours");
      return;
    }

    const userDetails = {
      fullName,
      age,
      working,
      profession: working === "yes" ? profession : "Not Working",
      hours: working === "yes" ? hours : "0"
    };

    localStorage.setItem("userDetails", JSON.stringify(userDetails));

    alert("Registered successfully!");
    navigate("/signin");
  };

  return (
    <div className="container card">
      <h2>Register</h2>

      <input
        className="input"
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <input
        className="input"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <label>Are you working?</label>
      <select
        className="input"
        value={working}
        onChange={(e) => setWorking(e.target.value)}
      >
        <option value="no">No</option>
        <option value="yes">Yes</option>
      </select>

      {working === "yes" && (
        <>
          <input
            className="input"
            type="text"
            placeholder="Profession"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
          />

          <input
            className="input"
            type="number"
            placeholder="Working hours per day"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
          />
        </>
      )}

      <button className="signin-submit" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}

export default Register;
