import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const dark = localStorage.getItem("darkMode");
    if (dark === "true") {
      document.body.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
      "darkMode",
      document.body.classList.contains("dark")
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/signin");
  };

  return (
    <nav className="nav">
      <h2>Mental Wellness Tracker</h2>

      <div>
        <Link to="/">Dashboard</Link>
        <Link to="/history">History</Link>
        <Link to="/journal">Journal</Link>
        <Link to="/calendar">Calendar</Link>
        {user ? (
            <>
            <Link to="/profile" className="signin-btn">Profile</Link>
            <button onClick={handleLogout} className="logout-nav-btn">
                Logout
                </button>
                </>
                ) : (
                <Link to="/signin" className="signin-btn">Sign In</Link>
                )}


        <button onClick={toggleDarkMode} className="dark-btn">
          🌙
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
