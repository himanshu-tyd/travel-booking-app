import React, { useEffect, useRef } from "react";
import { Container, Row, Button, Col } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./header.css";

const nav__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  const stickyHeaderFun = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFun();

    return window.removeEventListener("scroll", stickyHeaderFun);
  });

  return (
    <header className="header " ref={headerRef}>
      <Container>
        <Row>
          <Col lg='12'>
            <div className="nav_wrapper d-flex align-items-center justify-content-between">
              {/* ============logo start============ */}
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              {/* ============logo end============ */}

              {/* ============menu start============ */}
              <div className="navigation d-flex align-items-center">
                <ul className="menu d-flex align-items-center gap-5">
                  {nav__links.map((item, index) => (
                    <li className="nav__item" key={index}>
                      <NavLink
                        to={item.path}
                        className={(navClass) =>
                          navClass.isActive ? "active__link" : " "
                        }
                      >
                        {item.display}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              {/* ============menu end============ */}

              <div className="nav__btn d-flex align-items-center gap-5 ">
                <Button className="btn secondary__btn">
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="btn primary__btn">
                  <Link to="/register">Register</Link>
                </Button>
              </div>

              <span className="mobile__menu">
                <i class="ri-menu-line"></i>
              </span>

            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
