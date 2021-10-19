import Employee from "./Employee";

const Employees = ({ employees, onToggle }) => {
  return (
    <>
      {employees.map((employee) => (
        <Employee
          key={employee.id}
          employee={employee}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Employees;
