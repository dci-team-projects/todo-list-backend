import React from "react";

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
        ></input>
      </div>
    );
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
      </form>
    </div>
  );
};

export default Register;
