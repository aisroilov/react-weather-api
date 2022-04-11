import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Weather = ({ weather, isLoading }) => {
  return (
    <div>
      {!isLoading ? (
        <Container className="weather">
          <Row>
            <Col>
              <div className="name">
                <h1>{weather.location.name}</h1>
              </div>
              <div className="country">
                <h4>{weather.location.country}</h4>
              </div>
              <div className="text">
                <h3>{weather.current.condition.text}</h3>
              </div>
              <div className="img">
                <img src={weather.current.condition.icon} />
              </div>
              <div className="temp">
                <span>
                  {weather.current.temp_c} <span>&#8451;</span>
                </span>
              </div>
              <div className="hum">
                <p>Humidity: {weather.current.humidity} </p>
              </div>
              <div className="precip">
                <p>Precipitation: {weather.current.precip_mm}</p>
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        ""
      )}
    </div>
  );
};

export default Weather;
