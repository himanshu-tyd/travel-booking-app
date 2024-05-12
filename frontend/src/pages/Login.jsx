import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import login from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";
import { Link } from "react-router-dom";
import '../style/login.css'

const Login = () => {
  const [credentials, setCredenstials] = useState({
    email: undefined,
    password: undefined,
  });

  const handleChange = (e) => {
    const { email, value } = e.target;
    setCredenstials((prev) => ({ ...prev, [email]: value }));
    console.log(value)
  };

  const handleSubmit=(e)=>{
    e.preventDefault()

  }
  
 
  return (
    <section >
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img ">
                <img src={login} alt=""  />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Login</h2>

                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      required
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      id="password"
                      placeholder="password"
                      required
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button
                    className="btn secondary__btn auth__btn auth__btn"
                    type="submit"
                  >
                    Login
                  </Button>
                </Form>

                <p>
                  I don't have an account? <Link to="/register">Create</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
