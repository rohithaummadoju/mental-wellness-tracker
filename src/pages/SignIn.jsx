import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSignIn = () => {
    if (!email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Fake login success
    const user = { email };
    localStorage.setItem("user", JSON.stringify(user));

    // Navigate to Dashboard
    navigate("/");
  };

  return (
    <div className="container card">
      <h2>Sign In</h2>

      <input
        type="email"
        placeholder="Email"
        className="input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        type="password"
        placeholder="Confirm Password"
        className="input"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button className="signin-submit" onClick={handleSignIn}>
        Sign In
      </button>
      <p style={{ textAlign: "center", margin: "15px 0" }}>
  Are you new?{" "}
  <span
    style={{
      color: "#6a5acd",
      textDecoration: "underline",
      cursor: "pointer"
    }}
    onClick={() => navigate("/register")}
  >
    Register
  </span>
</p>

    </div>
  );
}

export default SignIn;
