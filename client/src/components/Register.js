import { useState } from "react";
// import formInputs from "../helpers/FormInputs";

const Register = () => {
  const formInputs = (
    type = "",
    inputName = "",
    placeholder = "",
    heading = ""
  ) => {
    return (
      <div className="form-group pb-4">
        <label htmlFor={inputName}>
          <h5>{heading}</h5>
        </label>
        <input
          type={type}
          className="form-control"
          id={inputName}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </div>
    );
  };

  const data = {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const [userData, updateUserData] = useState(data);

  const handleChange = (e) => {
    updateUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitData = async () => {
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    submitData();
  };

  return (
    <div className="w-100 h-75 d-flex justify-content-center flex-column align-items-center">
      <h2 className="pb-5">Register here!</h2>
      <form action="" className="w-25">
        {formInputs(
          "text",
          "firstName",
          "First Name",
          "What is your first name?"
        )}
        {formInputs("text", "lastName", "Last Name", "What is your last name?")}
        {formInputs("email", "email", "Email", "What is your email?")}
        {formInputs("password", "password", "Password", "Password:")}
        {formInputs("text", "username", "User Name", "User Name:")}
        <input type="submit" value="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default Register;
