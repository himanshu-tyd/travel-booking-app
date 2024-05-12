import React from "react";
import TourCard from "../../shared/TourCard";
import { Col } from "reactstrap";
import tourData from "../../assets/data/tours.js";

const FeatureTourList = () => {
  return (
    <>
      {tourData?.map((tour) => (
        <Col lg="3" key={tour.id} className="mb-4">
          <TourCard tour={tour} />
        </Col>
      ))}
    </>
  );
};

export default FeatureTourList;
