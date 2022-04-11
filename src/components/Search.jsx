import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Search = ({ setCity }) => {
  let query = "";

  const getInput = (q) => {
    query = q;
  };

  const getCity = () => {
    setCity(query);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Search"
                onChange={(e) => {
                  getInput(e.target.value);
                }}
                onKeyPress={getCity}
              ></input>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Search;
