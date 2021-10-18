import EmployeeInfo from "./EmployeeInfo";

const Employee = ({ employee, onToggle, showInfo }) => {
  return (
    <div className="employee">
      <h3 onClick={onToggle}>{employee.employee_name}</h3>
      {showInfo && <EmployeeInfo employee={employee} />}
    </div>
  );
};

export default Employee;
