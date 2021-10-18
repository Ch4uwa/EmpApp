import Employee from "./Employee";

const Employees = ({ employees, onToggle, showInfo }) => {
  return (
    <>
      {employees.map((employee) => (
        <Employee
          key={employee.id}
          employee={employee}
          onToggle={onToggle}
          showInfo={showInfo}
        />
      ))}
    </>
  );
};

export default Employees;
