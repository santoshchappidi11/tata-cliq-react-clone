import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContexts } from "../Context/AuthContext";
import axios from "axios";

const Login = (props) => {
  const { Login } = useContext(AuthContexts);
  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleChangeValues = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (userData.email && userData.password) {
      const response = await axios.post("http://localhost:8002/login", {
        userData,
      });

      if (response.data.success) {
        Login(response.data);
        setUserData({ email: "", password: "" });
        props.setIsShowScreen(false);
        props.setIsShowLoginPopup(false);
        props.setIsShowRegisterPopup(false);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } else {
      toast.error("Please fill all the details!");
    }
  };

  return (
    <>
      {props.isShowLoginPopup && (
        <div id="login">
          <div className="close">
            <i
              class="fa-solid fa-xmark fa-xl"
              onClick={props.closeScreenPopup}
            ></i>
          </div>
          <div className="header">
            <h1>Welcome To Tata CLiQ</h1>
          </div>
          <form onSubmit={handleLoginSubmit}>
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
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account?
            <span onClick={props.showRegisterPopup}> Register here</span>
          </p>
          <div className="policies">
            <span>
              By continuing, you agree to our <b>Terms of Use</b> and
              <b> Privacy Policy</b>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
