import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  //initializing data for form storage
  const data = {
    username: "",
    id: "",
    password: "",
  };

  //initializing state

  const [singleUserData, updateData] = useState(data);
  const [allUserData, updateAllUsers] = useState([]);
  const [id, updateId] = useState({});
  //handlechange function to store data in singleuserdata state

  const handleChange = (e) => {
    updateData({
      ...singleUserData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(singleUserData);

  //store all data in all userdata state

  useEffect(() => {
    const submitData = async () => {
      const response = await fetch("http://localhost:5000/users");
      const data = await response.json();
      updateAllUsers(data);
      console.log(data);
    };
    submitData();
  }, []);

  //create find function and store id in singleuserdataobject

  // const handleSubmit = () => {
  //   const findUserId = allUserData.find(
  //     ({ username }) => username === singleUserData.username
  //   );
  //   updateId(findUserId);
  //   console.log(id);
  // };

  return (
    <div>
      <div className="w-100 h-75 d-flex justify-content-center flex-column align-items-center">
        <h2 className="pb-5">Sign in!</h2>
        <form className="w-25">
          <div className="form-group pb-4">
            <label htmlFor="username">
              <h5>User Name</h5>
            </label>
            <input
              type="username"
              className="form-control"
              name="username"
              placeholder="User Name"
              onChange={handleChange}
            />
          </div>

          <div className="form-group pb-4">
            <label htmlFor="password">
              <h5>Password</h5>
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-primary">Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
