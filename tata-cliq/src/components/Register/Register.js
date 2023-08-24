import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
// import "./Register.css";

const Register = (props) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Buyer",
  });

  const handleChangeValues = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    if (
      userData.name &&
      userData.email &&
      userData.password &&
      userData.confirmPassword &&
      userData.role
    ) {
      if (userData.password == userData.confirmPassword) {
        const response = await axios.post("http://localhost:8002/register", {
          userData,
        });

        if (response.data.success) {
          setUserData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            role: "Buyer",
          });
          toast.success(response.data.message);
          props.setIsShowLoginPopup(true);
          props.setIsShowRegisterPopup(false);
        } else {
          toast.error(response.data.message);
        }
      } else {
        toast.error("Password and ConfirmPassword does not match!");
      }
    } else {
      toast.error("please fill all the details");
    }
  };

  return (
    <>
      {props.isShowRegisterPopup && (
        <div id="register">
          <div className="close">
            <i
              class="fa-solid fa-xmark fa-xl"
              onClick={props.closeScreenPopup}
            ></i>
          </div>
          <div className="header">
            <h1>Welcome To Tata CLiQ</h1>
          </div>
          <form onSubmit={handleRegisterSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={userData.name}
              onChange={handleChangeValues}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={userData.email}
              onChange={handleChangeValues}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={userData.password}
              onChange={handleChangeValues}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Enter Confirm Password"
              value={userData.confirmPassword}
              onChange={handleChangeValues}
            />
            <select
              name="role"
              onChange={handleChangeValues}
              value={userData.role}
            >
              <option>Buyer</option>
              <option>Seller</option>
            </select>
            <button type="submit">Register</button>
          </form>
          <p>
            Already have an account?
            <span onClick={props.showLoginPopup}> Login here</span>
          </p>
          <div className="policies">
            <span>
              By continuing, you agree to our <b>Terms of Use</b> and{" "}
              <b>Privacy Policy</b>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
