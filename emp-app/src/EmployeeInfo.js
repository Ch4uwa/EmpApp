import placeholderImage from "./extra/placeholder-image.png";

const EmployeeInfo = ({ employee, showEmployeeInfo }) => {
  // Test if profile img exists... simple version. else use placeholder.
  const profile_img =
    employee.profile_image !== null && employee.profile_image !== ""
      ? employee.profile_image
      : placeholderImage;

  return (
    <div className="employee-info" onClick={showEmployeeInfo}>
      <h3>{employee.employee_name}</h3>
      <img src={profile_img} alt="" />
      <p>ID: {employee.id}</p>
      <p>Age: {employee.employee_age}</p>
      <p>Salary: {employee.employee_salary}</p>
    </div>
  );
};

export default EmployeeInfo;
