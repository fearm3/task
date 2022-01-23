import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import TableContainer from "./TableContainer";
import { Spinner } from "react-bootstrap";

function App() {
  const [data, setData] = useState();
  const [capital, setCapital] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const searchValue = useRef("");

  console.log(searchValue.current.value);

  const searchCapital = () => {
    setCapital(searchValue.current.value);
  };

  useEffect(() => {
    searchCapital();
    handleGetData();
  }, [searchCapital]);

  const url = "https://restcountries.com/v2/all";
  const handleGetData = () => {
    // const capitalUrl = `https://restcountries.com/v2/capital/${capital}`;

    axios.get(url).then((response) => {
      console.log(response.data);
      setData(response.data);
    });
    setIsLoading(false);
  };

  const filteredData = data?.filter((item) =>
    item?.capital?.toLowerCase().includes(capital)
  );
  console.log(filteredData);

  // const filterAll = data?.filter(item)=>(item.capital || item.flag || item.

  return (
    <div
      className="bg-success bg-opacity-50 d-flex flex-direction-column justify-content-center align-items-center "
      style={{ minHeight: "100vh" }}
    >
      {!isLoading ? (
        <div className="mt-5">
          <input
            className="text-primary ms-5 mt-3 border border-warning rounded-3 "
            type="text"
            ref={searchValue}
          />
          <button onClick={searchCapital} className="mx-1 btn btn-warning">
            Search Capital
          </button>
          <TableContainer data={filteredData ? filteredData : data} />
        </div>
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
