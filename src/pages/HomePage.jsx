import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Navigate } from "react-router";

const HomePage = ({ user, logOut }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const userLogOut = () => {
    logOut(null);
  };

  return (
    <div>
      HomePage Welcome {user.name}
      <Button onClick={userLogOut}> Log out</Button>
    </div>
  );
};

export default HomePage;
