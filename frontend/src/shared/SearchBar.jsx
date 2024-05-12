import React, {  useRef } from "react";
import "./search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";

const SearchBar = () => {
  const locationRef = useRef("");
  const distantRef = useRef(0);
  const maxGroupSizeRef = useRef(0);

  const handleSearch = () => {
    const location = locationRef.current.value;
    const distance = distantRef.current.value;
    const group = maxGroupSizeRef.current.value;

    if (location === "" || distance === "" || group === "") {
      return alert("All field are required to be fill !");
    }
  };

  return (
    <Col lg="12">
      <div className="search_bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form__group form_group-fast">
            <span>
              <i class="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>Location</h6>
              <input type="text" placeholder="where you wanna go" ref={locationRef} />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form_group-fast">
            <span>
              <i class="ri-map-pin-time-line"></i>
            </span>
            <div>
              <h6>Distance</h6>
              <input type="number" placeholder="Distance K/M" ref={distantRef}/>
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form_group-fast">
            <span>
              <i class="ri-group-line"></i>
            </span>
            <div>
              <h6>Max People</h6>
              <input type="number" placeholder="0" ref={maxGroupSizeRef} />
            </div>
          </FormGroup>

          <span className="search__icon" type="submit" onClick={handleSearch}>
            <i class="ri-search-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
