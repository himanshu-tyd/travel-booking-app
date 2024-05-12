import React, { useState } from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Booking = ({ tour, avgRating }) => {
  const { price, reviews, id } = tour;
  const navigate = useNavigate();

  const [credentials, setCredenstials] = useState({
    userId: id, //later i will be diynamic
    userEmail: "example@gmail.com",
    fname: "",
    lname: "",
    phone: "",
    guestsize: "",
    bookAt: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredenstials((prev) => ({ ...prev, [id]: value }));
  };

  const serviceFee = 10;
  const totalAmount =
    Number(price) * Number(credentials.guestsize) + Number(serviceFee);

  //send data to server

  const handSubmit = (e) => {
    e.preventDefault();

    navigate("/thank-you");
  };

  return (
    <div className="booking mt-5">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          ${price}
          <span>/per persion</span>
        </h3>
        <span className="tour__rating d-flex align-items-center ">
          <i class="ri-star-fill"></i>
          {avgRating === 0 ? null : avgRating}({reviews?.length})
        </span>
      </div>

      {/* ==============booking form start ============== */}

      <div className="bookin__form">
        <h5>Information</h5>
        <Form className="booking__info_form" onSubmit={handSubmit}>
          <FormGroup>
            <ListGroup className="d-flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                id="fname"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                id="lname"
                onChange={handleChange}
                required
              />
            </ListGroup>
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input type="date" id="bookAt" onChange={handleChange} required />
            <input
              type="number"
              placeholder="Guest"
              id="guestsize"
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Form>
      </div>

      {/* ==============booking form end ============== */}

      {/* ==============booking bottom ============== */}

      <div className="booking__botton">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1 ">
              ${price}
              <i class="ri-close-line"></i>1 persion
            </h5>

            <span>${price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Service charge</h5>

            <span>${serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>

            <span>${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>
        <Button className="btn primary__btn w-100 mt-4  " onClick={handSubmit}>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Booking;
