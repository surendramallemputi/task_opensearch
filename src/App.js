import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://employeesapp.azurewebsites.net/api/GetEmployees")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="App">
      <div class="search-box">
        <label class="search-label" for="emps">
          Search
        </label>
        <input id="emps" onChange={(e) => setSearch(e.target.value)} />
      </div>
      <table>
        <tr>
          <th>Employee Name</th>
          <th>Salary</th>
          <th>Age</th>
          <th>Job Title</th>
        </tr>
        {users.employees &&
          users.employees
            .filter((emp) => emp.employee_name.toLowerCase().includes(search))
            .map((emp) => (
              <tr>
                <td>{emp.employee_name}</td>
                <td>{emp.salary}</td>
                <td>{emp.age}</td>
                <td>{emp.job_title}</td>
              </tr>
            ))}
      </table>
    </div>
  );
}
