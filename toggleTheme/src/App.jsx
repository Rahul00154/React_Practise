import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

const lightTheme = {
  backgroundColor: "#fff",
  color: "#333",
};

const darkTheme = {
  backgroundColor: "#333",
  color: "#fff",
};

function App() {
  const [theme, setTheme] = useState(lightTheme);

  //to check the user prefernce on Initial load

  useEffect(() => {
    const userPreference =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme:dark)").matches;
    setTheme(userPreference ? darkTheme : lightTheme);
  }, []);

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      Object.keys(theme).forEach((key) => {
        body.style.setProperty(`--${key}`, theme[key]);
      });
    }
  }, [theme]);
  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };
  return (
    <div>
      <section
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: theme.backgroundColor,
          color: theme.color,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h1 style={{ color: theme.color }}>ToggleTheme</h1>
        <button onClick={toggleTheme}>ToggleTheme</button>
      </section>
    </div>
  );
}

export default App;
