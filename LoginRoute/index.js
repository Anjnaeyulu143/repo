import React, { useState } from "react";
import "./index.css";
import { Card, Button } from "react-bootstrap";

export const LoginRoute = () => {
  const [usererr, setUsererr] = useState("");
  const [pass, setPass] = useState("");

  const blurEventUser = (e) => {
    e.target.value === "" ? setUsererr("Required*") : setUsererr("");
  };

  const blurEventPass = (e) => {
    e.target.value === "" ? setPass("Required*") : setPass("");
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center p-4 bg-dark"
      style={{ minHeight: "100vh" }}
    >
      <Card style={{ width: "22rem" }} className="p-3 bg-dark shadow-lg">
        <Card.Body>
          <div className="text-center">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png "
              className="p-3"
              alt=""
            />
          </div>
          <div className="w-100 mb-3">
            <label
              htmlFor="userName"
              style={{
                fontSize: "0.9rem",
                color: "white",
                textTransform: "capitalize",
              }}
            >
              USERNAME
            </label>
            <input
              type="text"
              className="w-100 form-control bg-dark"
              placeholder="Username"
              id="userName"
              onBlur={blurEventUser}
            />
            <p className="text-danger">{usererr}</p>
          </div>
          <div className="w-100 mb-3">
            <label
              htmlFor="userPassword"
              style={{
                fontSize: "0.9rem",
                color: "white",
                textTransform: "capitalize",
              }}
            >
              PASSWORD
            </label>
            <input
              type="text"
              className="w-100 form-control bg-dark"
              placeholder="Password"
              id="userPassword"
              onBlur={blurEventPass}
            />
            <p className="text-danger">{pass}</p>
          </div>
          <Card.Text style={{ textTransform: "capitalize" }}></Card.Text>
        </Card.Body>
        <Button>Login</Button>
      </Card>
    </div>
  );
};
