import React, { useState } from "react";
import "./Login.css";
import Button from "@mui/material/Button";
import LoginImage from "../../assets/Images/login.png";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Login = () => {
  const [OpenPassword, setOpenPassword] = useState(false);
  const [ConformPassword, setConformPassword] = useState(false);

  return (
    <div className="MainFirstBox">
      <div className="container">
        <div className="container-fluid d-flex justify-content-center">
          <div className="w-75 border MainBox mt-5 mb-5">
            <div className="row">
              <div className="col-md-6 text-center firstCol">
                <div className="textcontainer">
                  <img src={LoginImage} alt="" />
                  <h1 className="mt-5 ">Hello, Friend!</h1>
                  <p className="fs-5 mb-5">
                    To keep connected with us please login with your personal
                    info
                  </p>
                  <Button className="ps-4 pe-4 pt-2 pb-2 LogInButton ">
                    Sign Up
                  </Button>
                </div>
              </div>
              {/* <div className="col-md-6 p-5 colSecond">
                <div className="text-center p-5">
                  <h1 className="fs-1 fw-5">
                    <u>Sign In Account</u>
                  </h1>
                </div>
                <div className="mt-3">
                  <label htmlFor="html">User Email*</label>
                  <div>
                    {" "}
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Please enter user email"
                      name="StreetNo"
                      id=""
                    />
                  </div>{" "}
                </div>
                <div className="mt-4">
                  <label htmlFor="html">Password</label>
                  <div className="d-flex">
                    {" "}
                    <input
                      type={OpenPassword == true ? "text" : "password"}
                      className="form-control"
                      placeholder="Please enter user email"
                      name="StreetNo"
                      id=""
                    />
                    <div
                      className="mt-1 "
                      onClick={() => setOpenPassword(!OpenPassword)}
                    >
                      {OpenPassword == true ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </div>
                  </div>{" "}
                </div>
                <p className="mt-2 mb-2 TextAccountLine">
                  Don't have an account?{" "}
                  <span className="AccountCreate">Create here</span>{" "}
                </p>
                <div className="text-center mt-5 ">
                  <Button className="LogInButton SignButton">Sign In</Button>
                </div>
              </div> */}
              {/* Create shopping Account */}
              <div className="col-md-6  p-5 colSecond">
                <div className="text-center">
                  <h1 className="fs-1 fw-5">
                    <u className="fw-bold">Create Account</u>
                  </h1>
                </div>
                <div className="mt-2">
                  <label htmlFor="html">Username*</label>
                  <div>
                    {" "}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Please enter username"
                      name="StreetNo"
                      id=""
                    />
                  </div>{" "}
                </div>
                <div className="mt-2">
                  <label htmlFor="html">Email *</label>
                  <div className="">
                    {" "}
                    <input
                      type="email "
                      className="form-control"
                      placeholder="Please enter valid user email"
                      name="StreetNo"
                      id=""
                    />
                  </div>
                </div>{" "}
                <div className="mt-2">
                  <label htmlFor="html">Password *</label>
                  <div className="d-flex">
                    {" "}
                    <input
                      type={OpenPassword == true ? "text" : "password"}
                      className="form-control"
                      placeholder="Please enter create password"
                      name="StreetNo"
                      id=""
                    />
                    <div
                      className="mt-1 "
                      onClick={() => setOpenPassword(!OpenPassword)}
                    >
                      {OpenPassword == true ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </div>
                  </div>{" "}
                </div>
                <div className="mt-2">
                  <label htmlFor="html">Conform Password *</label>
                  <div className="d-flex">
                    {" "}
                    <input
                      type={ConformPassword == true ? "text" : "password"}
                      className="form-control"
                      placeholder="Please enter conform password"
                      name="StreetNo"
                      id=""
                    />
                    <div
                      className="mt-1 "
                      onClick={() => setConformPassword(!ConformPassword)}
                    >
                      {ConformPassword == true ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </div>
                  </div>{" "}
                  {/* Security code */}
                  <div className="mt-3">
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="text"
                          placeholder="Security code *"
                          className="form-control"
                          name=""
                          id=""
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          value={4522}
                          className="form-control"
                          name=""
                          id=""
                        />
                      </div>
                    </div>
                    {/* Select Account */}
                    <div className="mt-3">
                      <div>
                        <label htmlFor="html">Select Account</label>
                      </div>
                      <div>
                        <input type="radio" name="Account" id="" />
                        <span> I am a customer</span>
                      </div>
                      <div>
                        <input type="radio" name="Account" id="" />
                        <span> I am a vendor</span>
                      </div>
                    </div>
                    {/* Agree to terms & Policy  */}
                    <div className="d-flex justify-content-between">
                      <div>
                        {" "}
                        <input type="checkbox" name="" id="" />
                        <span> I agree to terms & Policy.</span>
                      </div>
                      <div>
                        <span>Lean more</span>
                      </div>
                    </div>
                    <div className="text-center mt-3 ">
                      <Button className="LogInButton SignButton">
                        Submit & Register
                      </Button>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
