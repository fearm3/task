import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import TableContainer from "./TableContainer";
import { Spinner } from "react-bootstrap";

function App() {
  const [data, setData] = useState();
  const [capital, setCapital] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [allValue, setAllValue] = useState();
  const searchValue = useRef("");
  const searchAllValue = useRef("");

  const searchCapital = () => {
    setCapital(searchValue.current.value);
  };
  const searchAll = () => {
    setAllValue(searchAllValue.current.value);
  };

  useEffect(() => {
    searchCapital();
    getData();
  }, []);

  const url = "https://restcountries.com/v2/all";
  const getData = () => {
    axios.get(url).then((response) => {
      // console.log(response.data);
      setData(response.data);
    });
    setIsLoading(false);
  };

  //filter func. for capital city
  const filteredData = data?.filter((item) =>
    item?.capital?.toLowerCase().includes(capital)
  );
  console.log(filteredData);

  //filter func. all
  const filterAll = data?.filter((item) =>
    (item.capital || item.flag || item.name || item.region)
      .toLowerCase()
      .includes(allValue)
  );
  console.log(filterAll);
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
            ref={searchAllValue}
          />
          <button onClick={searchAll} className="mx-1 btn btn-warning">
            Search All
          </button>
          <input
            className="text-primary ms-5 mt-3 border border-warning rounded-3 "
            type="text"
            ref={searchValue}
          />
          <button onClick={searchCapital} className="mx-1 btn btn-danger">
            Search Capital
          </button>
          <TableContainer data={searchCapital ? filteredData : filterAll} />
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
