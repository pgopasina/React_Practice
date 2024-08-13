import React, { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const { username, password } = data;

  const validate = () => {
    let tempErrors = {};
    if (!username) tempErrors.username = "Username is required.";
    if (!password) tempErrors.password = "Password is required.";
    if (password.length <= 6) tempErrors.password = "Password must be at least 6 characters.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (validate()) {
      console.log("Form Submitted", data);
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <div className="loginCard">
        <form className="card" onSubmit={submitHandler} noValidate>
          <div>
            <label>User Name:</label><br/>
            <input type="text" name="username" placeholder="User Name" value={username} onChange={changeHandler} required />
            <br />
            {errors.username && <span style={{ color: "red" }}>{errors.username}</span>}
            <br/>
          </div>
          <div>
          <label>Password:</label><br/>
            <input type="password" name="password" placeholder="Password" value={password} onChange={changeHandler} required minLength="6" />
            <br />
            {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}
            <br/>
          </div>
          <div>
            <button type="submit" name="submit" value="Login">Submit</button>
          </div>
        </form>
    </div>
  );
};

export default Login;
