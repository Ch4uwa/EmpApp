import placeholderImage from "./extra/placeholder-image.png";

const EmployeeInfo = ({ employee }) => {
  return (
    <div className="employee-info">
      <img src={placeholderImage} alt="" />
      <p>ID: {employee.id}</p>
      <p>Age: {employee.employee_age}</p>
      <p>Salary: {employee.employee_salary}</p>
    </div>
  );
};

export default EmployeeInfo;
