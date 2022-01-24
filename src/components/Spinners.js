import React from "react";
import { Spinner } from "react-bootstrap";

const Spinners = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
    </div>
  );
};

export default Spinners;
