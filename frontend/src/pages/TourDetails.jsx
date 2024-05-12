import React, { useRef, useState } from "react";
import "../style/tour-details.css";
import { Col, Row, Container, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import tourData from "../assets/data/tours";
import calculateAvgRating from "../utils/avgRating";
import avtar from "../assets/images/avatar.jpg";
import Booking from "../components/booking/Booking";
import NewsLetter from "../shared/NewsLetter";

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);

  const tour = tourData.find((tour) => tour.id === id);

  const {
    title,
    desc,
    price,
    photo,
    reviews,
    city,
    distance,
    maxGroupSize,
    address,
  } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  //format date
  const options = { day: "numeric", month: "long", year: "numeric" };

  // submit request to the server
  const submitHandler = (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    // alert(`${reviewText} , ${tourRating}`)

    //later wi will call out api
  };

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour__content">
                <img src={photo} alt="" />
              </div>
              <div className="tour__info mt-5">
                <h2>{title}</h2>
                <div className="d-flex align-items-center gap-5 ">
                  <span className="tour__rating d-flex align-items-center gap-1">
                    <i
                      class="ri-star-fill"
                      style={{ color: "var(--secondary-color)" }}
                    ></i>
                    {avgRating === 0 ? null : avgRating}
                    {totalRating === 0 ? (
                      "Not rated"
                    ) : (
                      <span>({reviews?.length})</span>
                    )}
                  </span>
                  <span>
                    <i class="ri-map-pin-fill"></i>
                    {address}
                  </span>
                </div>
                <div className="tour__extra_details">
                  <span>
                    <i class="ri-map-pin-line"></i>
                    {city}
                  </span>
                  <span>
                    <i class="ri-money-dollar-circle-line"></i> ${price} /Per
                    persion
                  </span>
                  <span>
                    <i class="ri-pin-distance-line"></i>
                    {distance} k/m
                  </span>
                  <span>
                    <i class="ri-group-line"></i>
                    {maxGroupSize} People
                  </span>
                </div>
                <h5>Description</h5>
                <p>{desc}</p>
              </div>

              {/* ==================toru raviews section start========== */}
              <div className="tour__reviews mt-4">
                <h4>Reviews ({reviews?.length} reviews) </h4>

                <Form onSubmit={submitHandler}>
                  <div className="d-flex align-items-center gap-3 mb-4 rating__group ">
                    <span onClick={() => setTourRating(1)}>
                      1 <i class="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setTourRating(2)}>
                      2 <i class="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setTourRating(3)}>
                      3 <i class="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setTourRating(4)}>
                      4 <i class="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setTourRating(5)}>
                      5 <i class="ri-star-s-fill"></i>
                    </span>
                  </div>

                  <div className="review__input">
                    <input
                      type="text"
                      ref={reviewMsgRef}
                      placeholder="Share your thoughts"
                    />
                    <button
                      className="btn primary__btn text-white"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </Form>

                <ListGroup className="user__reviews">
                  {reviews?.map((review) => (
                    <div className="review__item ">
                      <img src={avtar} alt="" />

                      <div className="w-100">
                        <div className="d-flex align-item-center justify-content-between ">
                          <div>
                            <h5>Himanshu</h5>
                            <p>
                              {new Date("01-12-2024").toLocaleDateString(
                                "en-US",
                                options
                              )}
                            </p>
                          </div>
                          <span className="d-flex align-items-center ">
                            5 <i class="ri-star-s-fill"></i>
                          </span>
                        </div>
                        <h6>Amazing tour</h6>
                      </div>
                    </div>
                  ))}
                </ListGroup>
              </div>

              {/* ==================toru raviews section end========== */}
            </Col>

            <Col lg="4">
              <Booking tour={tour} avgRating={avgRating} />
            </Col>
          </Row>
        </Container>
      </section>
      <NewsLetter/>
    </>
  );
};

export default TourDetails;
