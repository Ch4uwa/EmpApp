import { useEffect, useState } from "react";
import "./App.css";
import EmployeeInfo from "./EmployeeInfo";
import Employees from "./Employees";
import Sample from "./extra/Sample.json";

function App() {
  const [showEmployeeInfo, setShowEmployeeInfo] = useState(false);
  const [employees, setEmployees] = useState(Sample["data"]);


  // Not using while testing to save on requests.
  // useEffect(() => {
  //   const getEmployees = async () => {
  //     const employeesFromApi = await fetchEmployees();
  //     setEmployees(employeesFromApi["data"]);
  //   };

  //   getEmployees();
  // }, []);

  // Fetch all Employees
  // const fetchEmployees = async () => {
  //   const res = await fetch("http://dummy.restapiexample.com/api/v1/employees");
  //   const data = await res.json();

  //   return data;
  // };

  // Fetch single Employee
  // const fetchEmployee = async ({ empId }) => {
  //   const res = await fetch(
  //     `http://dummy.restapiexample.com/api/v1/employee/${empId}`
  //   );
  //   const data = await res.json();

  //   return data;
  // };

  const toggleInfo = () => {
    setShowEmployeeInfo(!showEmployeeInfo);
  };

  return (
    <div className="container">
      <header className="App-header">
        <h1>Employees</h1>
      </header>
      <Employees
        employees={employees}
        onToggle={toggleInfo}
        showInfo={showEmployeeInfo}
      />
    </div>
  );
}

export default App;
