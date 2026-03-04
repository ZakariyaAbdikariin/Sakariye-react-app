import { useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const themeStyles = {
    backgroundColor: darkMode ? "#222" : "#f5f5f5",
    color: darkMode ? "#fff" : "#000",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s ease",
  };

  return (
    <div style={themeStyles}>
      <h1>{darkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}</h1>

      <button
        onClick={() => setDarkMode((prev) => !prev)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default ThemeToggle;
