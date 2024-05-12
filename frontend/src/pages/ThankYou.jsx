import React from "react";
import "../style/thank-you.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";

const ThankYou = () => {
  return (
    <section className="thanks">
      <Container>
        <Row>
          <Col lg="12" className="pt-5 text-center">
            <div className="thank-you">
              <span>
                <i class="ri-checkbox-circle-line"></i>
              </span>
              <h1 className=" mb-3 fw-semibold ">Thank You!</h1>
              <h3 className=" mb-3 fw-semibold ">
                Your booking has been confirmed.
              </h3>
              <p>We look forward to seeing you soon.</p>

              <Link to="/home">
                <Button className="btn primary__btn w-25  ">Go To Back</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ThankYou;
