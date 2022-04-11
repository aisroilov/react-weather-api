import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Favourite = ({ favourites }) => {
  console.log(favourites);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            {/* {favourites.map((city) => {
              return city;
            })} */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Favourite;
