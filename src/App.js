import React, { useEffect, useState } from "react";
import axios from "axios";
import TableContainer from "./TableContainer";
import { Spinner } from "react-bootstrap";

const url = "https://restcountries.com/v2/all";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("Turkey");

  const handleGetData = () => {
    const searchUrl = `https://restcountries.com/v3.1/name/${search}`; //!name=>capital
    search
      ? axios.get(searchUrl).then((response) => {
          console.log(response.data);
          setData(response.data);
        })
      : axios.get(url).then((response) => {
          console.log(response.data);
          setData(response.data);
        });
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return data ? (
    <div>
      <input type="text" onChange={(e) => setData(e.target.value)} />
      <button onClick={handleGetData}>Search</button>
      {data?.map((item, index) => (
        <TableContainer {...item} key={index} />
      ))}
    </div>
  ) : (
    <div className="App">
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
    </div>
  );
}
export default App;
