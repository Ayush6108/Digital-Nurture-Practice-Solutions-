import React, { useState } from "react";
import EmployeesList from "./EmployeesList";
import ThemeContext from "./ThemeContext";

const App = () => {
  const [theme, setTheme] = useState("light");

  const employees = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", phone: "123-456-7890" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", phone: "234-567-8901" },
    { id: 3, name: "Charlie Davis", email: "charlie@example.com", phone: "345-678-9012" },
  ];

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ padding: "20px" }}>
        <label>
          SELECT A THEME{" "}
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
        <h1>Employees List</h1>
        {/* Pass employee data as props */}
        <EmployeesList employees={employees} />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
