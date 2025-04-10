import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import T1 from "./T1.jsx";
import T2 from "./T2.jsx";
import T3 from "./T3.jsx";
import T4 from "./T4.jsx";
import T5 from "./T5.jsx";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-lg w-full space-y-6 bg-gray-800 p-6 rounded-lg shadow-lg">
        <T1 />
        <T2 />
        <T3 name="John Doe" email="john@example.com" />
        <T4 />
        <T5 />
      </div>
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);