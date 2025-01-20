import React from "react";
import "./Nav.css";

import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import GridViewIcon from "@mui/icons-material/GridView";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav d-flex  align-items-center">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-sm-3 part1 d-flex justify-content-center   ">
            <Button className="bg-success text-white catTab">
              <GridViewIcon /> &nbsp; Browse All Categories &nbsp;
              <KeyboardArrowRightIcon />
            </Button>
          </div>
          <div className="col-sm-7 part2 d-flex justify-content-evenly">
            <nav>
              <ul className="list list-inline mb-0">
                <li className="list-inline-item">
                  {" "}
                  <Button>
                    Home &nbsp; <KeyboardArrowRightIcon />{" "}
                  </Button>{" "}
                </li>
                <li className="list-inline-item">
                  <Button>About</Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    Shop &nbsp; <KeyboardArrowRightIcon />{" "}
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    Vendors &nbsp; <KeyboardArrowRightIcon />
                  </Button>
                </li>
                <li className="list-inline-item ">
                  <Button>
                    Mega menu &nbsp; <KeyboardArrowRightIcon />
                  </Button>
                  <div className=" ">
                    <div className="MegaMenu">
                      <div className="row  ">
                        <div className="col-sm-3">
                          <h4 className="">Fruit & Vegetables</h4>
                          <ul>
                            <li>Meat & Poultry</li>
                            <li>Fresh Vegetables</li>
                            <li>Herbs & Seasonings</li>
                            <li>Cuts & Sprouts</li>
                            <li>Exotic Fruits & Veggies</li>
                            <li>Packaged Produce</li>
                          </ul>
                        </div>
                        <div className="col-sm-3">
                          {" "}
                          <h4 className="">Breakfast & Dairy</h4>
                          <ul>
                            <li>Milk & Flavoured Milk</li>
                            <li>Butter and Margarine</li>
                            <li>Eggs Substitutes </li>
                            <li>Marmalades</li>
                            <li>Sour Cream</li>
                            <li>Cheese</li>
                          </ul>
                        </div>
                        <div className="col-sm-3">
                          {" "}
                          <h4 className="">Meat & Seafood</h4>
                          <ul>
                            <li>Breakfast Sausage </li>
                            <li>Dinner Sausage</li>
                            <li>Chicken </li>
                            <li>Sliced Dell Meat</li>
                            <li>Wild Caught Fillets</li>
                            <li>Carb and Shellfish</li>
                          </ul>
                        </div>
                        <div className="col-sm-3 bannerImage">
                          <img
                            src="https://images.pexels.com/photos/235294/pexels-photo-235294.jpeg?cs=srgb&dl=pexels-wdnet-235294.jpg&fm=jpg"
                            alt=" fruits Image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Button>
                    Blog &nbsp; <KeyboardArrowRightIcon />
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    Pages &nbsp; <KeyboardArrowRightIcon />
                  </Button>

                  <div className="dropdownMenu">
                    <ul className="list list-inline mb-0">
                      <li className="list-inline-item">
                        <Button>Home</Button>
                      </li>
                      <li className="list-inline-item">
                        <Button>About Us</Button>
                      </li>
                      <li className="list-inline-item ">
                        <Button>Contact</Button>
                      </li>
                      <li className="list-inline-item">
                        <Button>My Account</Button>
                      </li>
                      <li className="list-inline-item">
                        <Button>Login</Button>
                      </li>
                      <li className="list-inline-item">
                        <Button>Register</Button>
                      </li>
                      <li className="list-inline-item">
                        <Button>Forget password</Button>
                      </li>
                      <li className="list-inline-item">
                        <Button>Forget password</Button>
                      </li>
                      <li className="list-inline-item">
                        <Button>Reset password</Button>
                      </li>
                      <li className="list-inline-item">
                        <Button>Purchase Guide</Button>
                      </li>
                      <li className="list-inline-item">
                        <Button>Privacy Policy</Button>
                      </li>
                      <li className="list-inline-item">
                        <Button>Terms of Service</Button>
                      </li>
                      <li className="list-inline-item">
                        <Button>404 Page</Button>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Button>Contact</Button>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-sm-2 part3 d-flex align-items-center   ">
            <div className="phNo d-flex align-items-center ">
              <HeadsetMicIcon className="" />
              <span className="text-center phNoText">
                <h4 className="text-g mb-0">+91-9827805086</h4>
                <p className="">24/7 Support Center</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
