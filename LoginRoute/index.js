import React from "react";
import "./index.css";
import { Container, Card, Button } from "react-bootstrap";

export const LoginRoute = () => {
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
            />
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
            />
          </div>
          <Card.Text style={{ textTransform: "capitalize" }}></Card.Text>
        </Card.Body>
        <Button>Login</Button>
      </Card>
    </div>
  );
};
