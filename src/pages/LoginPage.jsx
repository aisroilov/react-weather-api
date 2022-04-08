import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const login = "ipgautomotive";
const password = "carmaker";

const LoginPage = ({ getUser }) => {
  const [enteredLogin, setEnteredLogin] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isCorrect, setCorrect] = useState(false);
  const [showFailMessage, setShowFailMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [userName, setUserName] = useState("");
  let navigate = useNavigate();

  const getLogin = (login) => {
    setEnteredLogin(login);
    // console.log(enteredLogin);
  };

  const getPassword = (password) => {
    setEnteredPassword(password);
    // console.log(enteredPassword);
  };

  const authentication = () => {
    if (enteredLogin === login && enteredPassword === password) {
      console.log("authentification succesfull!");
      setCorrect(true);
      setShowSuccessMessage(true);
      setShowFailMessage(false);
      getUser(enteredLogin);
      navigate("/");
    } else {
      console.log("Login or Password not correct!");
      setCorrect(false);
      setShowFailMessage(true);
      setShowSuccessMessage(false);
    }
    console.log("button clicked");
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="header">
              <h2>Welcome to weather app!</h2>
              <h3>Please login.</h3>
            </div>
            {showFailMessage && !isCorrect ? (
              <div className="form-message-fail">
                <span>Login or Password not correct!</span>
              </div>
            ) : (
              ""
            )}

            {showSuccessMessage && isCorrect ? (
              <div className="form-message-success">
                <span>Authentification succesfull!</span>
              </div>
            ) : (
              ""
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="form-container">
              <div className="form">
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Login"
                    onChange={(e) => {
                      getLogin(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => {
                      getPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="btn-container">
                  <Button
                    type="submit"
                    className="btn btn-primary"
                    onClick={authentication}
                  >
                    Login
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
