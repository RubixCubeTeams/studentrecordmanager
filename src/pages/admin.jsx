import React, { useState, useCallback } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import img1 from '../assets/img1.webp'; // Import the background image
function App() {
  const [action, setAction] = useState("");

  // Use useCallback to memoize handlers to prevent unnecessary re-renders
  const handleAction = useCallback((actionType) => {
    setAction(actionType);
    console.log(actionType);
    if (actionType === "Exiting Page") {
      window.location.href = "/";
    }
  }, []);

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${img1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <header className="App-header">
        <h1 className="app-title" style={{ color: "Black" }}>Admin Dashboard</h1>

        <div
          className="button-container"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          {[
            { label: "View Details", actionType: "Viewing Student Details" },
            { label: "Add Student", actionType: "Adding a New Student" },
            { label: "Update Student", actionType: "Updating Student Details" },
            { label: "Delete Student", actionType: "Deleting Student" },
            { label: "Generate Report", actionType: "Generating Report" },
            { label: "Add Admin", actionType: "Adding a New Admin" },
            { label: "Exit", actionType: "Exiting Page" },
          ].map(({ label, actionType }) => (
            <button
              key={actionType}
              onClick={() => handleAction(actionType)}
              className="action-button"
            >
              {label}
            </button>
          ))}
        </div>

        <div>
          <h3
            className="current-action"
            style={{
              color: "Black",
              backgroundColor: "rgba(171, 190, 180, 0.5)",
              padding: "10px",
              borderRadius: "50px",
            }}
          >
            Current Action: {action || "None"}
          </h3>
        </div>
      </header>
    </div>
  );
}

export default App;
