import React from "react";
import "../style/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg2 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experince from "../assets/images/experience.png";
import SubTittle from "../shared/SubTittle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../Services/ServiceList";
import FeatureTourList from "../components/feature-tour/FeatureTourList";
import MasnoryImageGallery from "../components/image-gallery/MasnoryImageGallery";
import Testimonials from "../components/testimonial/Testimonials";
import NewsLetter from "../shared/NewsLetter";

const Home = () => {
  return (
    <>
      {/* // =================hero section start============= */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <SubTittle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Traveling opens the doors to creating{" "}
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  Aliqua elit veniam magna ipsum irure exercitation voluptate
                  reprehenderit ipsum. Sit exercitation proident reprehenderit
                  ea id adipisicing consequat reprehenderit non. Occaecat
                  eiusmod in culpa occaecat do proident. Enim ullamco laboris
                  culpa adipisicing laborum incididunt ullamco elit esse id
                  culpa aliqua.
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img_box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img_box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img_box mt-5">
                <img src={heroImg2} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>

      {/* // =================hero section end============= */}

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="service__subtitle">What we server</h5>
              <h2 className="services__title">We offer out best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* ===================feature tour section start=========== */}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <SubTittle subtitle={"Exploar world"} />
              <h2 className="feature__tours-title">Our featured tours</h2>
            </Col>
            <FeatureTourList />
          </Row>
        </Container>
      </section>

      {/* ===================feature tour section end=========== */}

      {/* ===================expericence section start=========== */}

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experince__content">
                <SubTittle subtitle={"Experince"} />
                <h2>
                  With our all expericence
                  <br />
                  We will serve you
                </h2>
                <p>
                  Do ad ipsum laborum nulla consequat sit minim occaecat eiusmod
                  dolore consequat.
                  <br />
                  Est elit cupidatat aliquip enim velit et adipisicing sit
                  nulla.
                </p>
              </div>

              <div className="couter__wrapper d-flex align-items-center gap-5">
                <div className="couter__box">
                  <span>12+</span>
                  <h6>Successful trip</h6>
                </div>
                <div className="couter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="couter__box">
                  <span>15</span>
                  <h6>Year expericence</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experince_img">
                <img src={experince} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===================expericence section end=========== */}

      {/* ===================gallery section end=========== */}

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <SubTittle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our customer tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasnoryImageGallery />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===================gallery section end=========== */}

      {/* ===================testimonial section start=========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <SubTittle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">What our fans say</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===================testimonial section end=========== */}

      <NewsLetter />
    </>
  );
};

export default Home;
