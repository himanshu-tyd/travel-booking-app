import React from "react";
import "./news-latter.css";
import { Col, Container, Row } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";

const NewsLetter = () => {
  return (
    <>
      <section className="newslatter">
        <Container>
          <Row>
            <Col lg="6">
              <div className="newslatter__content">
                <h2>Subscribe now to get useful traveling information</h2>
                <div className="newslatter__input">
                  <input type="email" placeholder="Enter your email" />
                  <button className="btn newslatter__btn">Submit</button>
                </div>
                <p>
                  Ex magna exercitation nisi excepteur aute esse reprehenderit
                  aute ex eu magna consectetur.
                </p>
              </div>
            </Col>
            <Col lg='6'>
                <div className="newslatter__img">
                    <img src={maleTourist} alt="" />
                </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default NewsLetter;
