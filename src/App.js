import React, { useEffect, useState } from "react";
import axios from "axios";
import TableContainer from "./TableContainer";
import { Spinner } from "react-bootstrap";

const url = "https://restcountries.com/v2/all";

function App() {
  const [data, setData] = useState();
  const [capital, setCapital] = useState();

  useEffect(() => {
    handleGetData();
  }, []);

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
  };

  return (
    <div>
      {data ? (
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setCapital(e.target.value)} />
          <button onClick={handleGetData}>Search Capital</button>
          <TableContainer data={data} />)
        </form>
      ) : (
        <div className="d-flex justify-content-center ">
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
        </div>
      )}
    </div>
  );
}
export default App;
