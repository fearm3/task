import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import TableContainer from "./TableContainer";

import Spinners from "./components/Spinners";

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
  const filteredData = data?.filter((item) => {
    if (!!capital) {
      return item;
    } else {
      return item?.capital?.toLowerCase().includes(capital.toLowerCase());
    }
  });
  console.log(filteredData);

  //filter func. all
  const filterAll = data?.filter((item) => {
    if (!!searchAllValue) {
      return item;
    } else {
      return Array.from(item)?.includes(allValue);
      // return item.includes(allValue);
    }
  });
  console.log(filterAll);
  return (
    <div className="bg-success min-vh-100 bg-opacity-50 d-flex flex-direction-column justify-content-center align-items-center ">
      {!isLoading ? (
        <div className="mt-5">
          <div>
            <input
              className="text-primary ms-5 mt-3 border border-warning rounded-3 "
              type="text"
              ref={searchAllValue}
            />
            <button onClick={searchAll} className="mx-1 btn btn-warning">
              Search All
            </button>
          </div>
          <div>
            <input
              className="text-primary ms-5 mt-3 border border-warning rounded-3 "
              type="text"
              ref={searchValue}
            />
            <button onClick={searchCapital} className="mx-1 btn btn-danger">
              Search Capital
            </button>
          </div>

          <TableContainer data={searchCapital ? filteredData : filterAll} />
        </div>
      ) : (
        <Spinners />
      )}
    </div>
  );
}
export default App;
