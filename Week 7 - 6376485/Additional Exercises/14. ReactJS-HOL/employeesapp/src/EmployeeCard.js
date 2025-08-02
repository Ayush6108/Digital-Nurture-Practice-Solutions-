import React, { useContext, useState } from "react";
import ThemeContext from "./ThemeContext";

const EmployeeCard = ({ employee }) => {
  const [showDetails, setShowDetails] = useState(false);
  const theme = useContext(ThemeContext);

  const buttonStyle = {
    marginRight: "10px",
    padding: "5px 10px",
    backgroundColor: theme === "light" ? "#f0f0f0" : "#444",
    color: theme === "light" ? "#000" : "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
      {!showDetails ? (
        <button onClick={() => setShowDetails(true)}>View Details</button>
      ) : (
        <>
          <h3>{employee.name}</h3>
          <p>{employee.email}</p>
          <p>{employee.phone}</p>
          <button style={buttonStyle}>Edit</button>
          <button style={buttonStyle}>Delete</button>
        </>
      )}
    </div>
  );
};

export default EmployeeCard;
