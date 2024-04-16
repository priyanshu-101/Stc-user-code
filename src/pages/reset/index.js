import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTypography,
  MDBListGroup,
  MDBListGroupItem,
  MDBInputGroup,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import LoginForm from "../../components/forms/login";
import stcLogo from "../../asset/stc-logo.png";
import kietLogo from "../../asset/kiet-logo.png";
import axios from "axios";

import "./styles.scss";
import { useState } from "react";

const Reset = () => {
  const nav = useNavigate();
  const { token } = useParams();
  const [toggle, settoggle] = useState(true);
  const [password, setpassword] = useState("");
  const passwordChange = async (e) => {
    e.preventDefault();
    if (password === "") {
      alert("Enter the password");
      return;
    }
    try {
      //console.log("HIIH")
      await axios.post("https://free.yashv.xyz/api/resetPassword", {
        token,
        password,
      });
      alert("Passowrd Change Successfully");
      setTimeout(() => {
        nav("/");
      }, 2000);
    } catch (err) {
      // console.log(err)
      alert("Token Expired");
      setTimeout(() => {
        nav("/");
      }, 2000);
    }
  };
  return (
    <div className="primary-bg  form-container">
      <img className="stclogo" src={stcLogo} />

      <div className="primary-bg  m-auto">
        <form className="login-form">
          <MDBInputGroup className="login-form-group">
            <MDBInput
              label="New Password"
              type="password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              value={password}
            />
          </MDBInputGroup>

          <MDBInputGroup className="login-form-group">
            <MDBBtn
              onClick={(e) => passwordChange(e)}
              className=" btn-block login-form-btn"
            >
              Change Password
            </MDBBtn>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=stc@kiet.edu"
              target="_blank"
            >
              Troubleshooting?
            </a>
          </MDBInputGroup>
        </form>
      </div>
      <img className="stclogo" src={kietLogo} />
    </div>
  );
};

export default Reset;
