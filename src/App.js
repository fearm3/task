import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import TableContainer from "./TableContainer";
import { Spinner } from "react-bootstrap";

const url = "https://restcountries.com/v2/all";

function App() {
  const [data, setData] = useState();
  const [capital, setCapital] = useState();
  const searchValue = useRef();

  useEffect(() => {
    // searchValue.current.focus();
    handleGetData();
  }, []);

  // useEffect(() => {
  //   searchValue.current.focus();
  // }, []);

  const handleGetData = () => {
    const capitalUrl = `https://restcountries.com/v2/capital/${capital}`;

    capital
      ? axios.get(capitalUrl).then((response) => {
          // console.log(response.data);
          setData(response.data);
        })
      : axios.get(url).then((response) => {
          // console.log(response.data);
          setData(response.data);
        });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData("");
  };

  return (
    <div
      className="bg-success bg-opacity-50 d-flex flex-direction-column justify-content-center align-items-center "
      style={{ minHeight: "100vh" }}
    >
      {data ? (
        <form onSubmit={handleSubmit} className="mt-5">
          <input
            className="text-primary ms-5 mt-3 border border-warning rounded-3 "
            type="text"
            ref={searchValue}
            onChange={() => setCapital(searchValue.current.value)}
          />
          <button onClick={handleGetData} className="mx-1 btn btn-warning">
            Search Capital
          </button>
          <TableContainer data={data} />
        </form>
      ) : (
        <div className="container d-flex justify-content-center align-items-center">
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
        </div>
      )}
    </div>
  );
}
export default App;
