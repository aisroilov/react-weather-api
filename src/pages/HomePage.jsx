import React, { useEffect, useState } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { Navigate } from "react-router";
import axios from "axios";
import Weather from "../components/Weather";
import Search from "../components/Search";
import Favourite from "../components/Favourite";

const HomePage = ({ user, logOut }) => {
  const [weather, setWeather] = useState();
  const [isLoading, setLoading] = useState(true);
  const [query, setQuery] = useState("Karlsruhe");

  let favourites = ["Karlsruhe", "Stuttgart", "Berlin", "Hamburg", "Tashkent"];

  useEffect(() => {
    const url = `http://api.weatherapi.com/v1/current.json?key=bf66e74570fe4e22bd8134327220804 &q=${query}`;

    const fetch = async () => {
      await axios
        .get(url)
        .then((res) => {
          console.log(res.data);
          setWeather(res.data);
        })
        .catch(console.error());
      setLoading(false);
    };

    fetch();
  }, [query]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const userLogOut = () => {
    logOut(null);
  };

  const setCity = (q) => {
    setQuery(q);
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Weather App</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>Welcome {user.name}</Navbar.Text>
            <Button className="ml-5" onClick={userLogOut}>
              Log out
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="cover">
        <Search setCity={setCity} />
        <Weather weather={weather} isLoading={isLoading} />
        <Favourite favourites={favourites} />
      </div>
    </div>
  );
};

export default HomePage;
