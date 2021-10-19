const Employee = ({ employee, onToggle }) => {
  return (
    <div className="employee">
      <h3 onClick={() => onToggle(employee.id)}>{employee.employee_name}</h3>
    </div>
  );
};

export default Employee;
