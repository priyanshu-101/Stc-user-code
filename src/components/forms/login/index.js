import { MDBInputGroup, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../features/userSlice";
import logo from "../../../asset/logo.png";
import axios from "axios";
import "./styles.scss";
import { selectUser } from "../../../features/userSlice";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const sendRequest = async (e) => {
    e.preventDefault();
    if (email === "") {
      alert("Enter KIET ID");
      return;
    } else {
      try {
        //console.log("reset ke ander" )
        await axios.get(
          `http://13.53.175.59:5000/api/requestResetPassword/${email}`
        );
        alert("Reset link share with your KIET ID");
      } catch (e) {
        //console.log(e);
        alert("Internal Server Error. Try Again later");
      }
      {
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user)
    //console.log(password, email);
    try {
      const response = await axios.post("http://13.53.175.59:5000/api/login", {
        LibraryID: email,
        Password: password,
      });
      //console.log(response.data.access_token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          access_token: response.data.access_token,
          isLoggedIn: true,
          LibraryID: email,
        })
      );
      // console.log("HI")
      // console.log(localStorage.getItem("user"))
      // console.log("me")
      nav("/dashboard");
    } catch (e) {
      //console.log(e)
      alert("Wrong Email or Password");
    }
  };

  return (
    <>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <form className="login-form">
        <MDBInputGroup className="login-form-group">
          <MDBInput
            label="KIET ID"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </MDBInputGroup>

        <MDBInputGroup className="login-form-group">
          <MDBInput
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </MDBInputGroup>

        <MDBInputGroup className="login-form-group">
          <MDBBtn
            onClick={(e) => handleSubmit(e)}
            className=" btn-block login-form-btn"
          >
            Login
          </MDBBtn>
          <div className="w-100 links">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=stc@kiet.edu"
              target="_blank"
            >
              Troubleshooting?
            </a>
            <a
              href=""
              onClick={(e) => {
                sendRequest(e);
              }}
            >
              Forget Password?
            </a>
          </div>
        </MDBInputGroup>
      </form>
    </>
  );
};

export default LoginForm;
