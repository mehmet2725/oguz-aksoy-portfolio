
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

// AOS init
AOS.init({
  duration: 700,
  once: true,
});

// --- prevent theme flicker: set body class before React mounts
const stored = localStorage.getItem("theme");
if (stored === "light") {
  document.body.classList.remove("dark");
  document.body.classList.add("light");
} else {
  // default dark if not set
  document.body.classList.remove("light");
  document.body.classList.add("dark");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
    <App />
 //</React.StrictMode>
);
