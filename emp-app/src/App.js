import { useEffect, useState } from "react";
import EmployeeInfo from "./EmployeeInfo";
import Employees from "./Employees";

function App() {
  const [showEmployeeInfo, setShowEmployeeInfo] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [emp, setEmp] = useState([]);

  useEffect(() => {
    const getEmployees = async () => {
      const employeesFromApi = await fetchEmployees();
      setEmployees(employeesFromApi["data"]);
    };

    getEmployees();
  }, []);

  // Fetch all Employees
  const fetchEmployees = async () => {
    const res = await fetch("http://dummy.restapiexample.com/api/v1/employees");
    const data = await res.json();

    console.log("fetchEmployees ran");
    return data;
  };

  // Fetch single Employee
  const fetchEmployee = async (id) => {
    const res = await fetch(
      `http://dummy.restapiexample.com/api/v1/employee/${id}`
    );
    const data = await res.json();

    console.log("fetchEmployee ran");
    return data;
  };

  const showEmpInfo = async (id) => {
    const employeeToShow = await fetchEmployee(id);
    employeeToShow.status === "success" && setShowEmployeeInfo(true);

    setEmp(employeeToShow["data"]);
  };

  const hideEmpInfo = () => {
    setShowEmployeeInfo(false);
  };

  return (
    <div className="container">
      <header className="App-header">
        <h1>Employees</h1>
      </header>
      {showEmployeeInfo ? (
        <EmployeeInfo
          employee={emp}
          showEmployeeInfo={hideEmpInfo}
        />
      ) : (
        <Employees employees={employees} onToggle={showEmpInfo} />
      )}
    </div>
  );
}

export default App;
