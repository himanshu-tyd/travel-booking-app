import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";
import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customization from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Mountain Trekking Adventure",
    desc: "Embark on an unforgettable journey through breathtaking mountain trails.",
  },
  {
    imgUrl: guideImg,
    title: "Beach Paradise Getaway",
    desc: "Relax and rejuvenate on pristine sandy beaches with crystal-clear waters.",
  },
  {
    imgUrl: customization,
    title: "City Explorer Tour",
    desc: "Discover the vibrant culture and rich history of bustling city streets.",
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
