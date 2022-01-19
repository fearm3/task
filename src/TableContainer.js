import React from "react";
import { Table } from "react-bootstrap";

const TableContainer = ({ name, capital, region, flag }) => {
  return (
    <Table striped bordered hover size="sm">
      <thead className="text-left">
        <tr>
          <th>Name</th>
          <th>Capital</th>
          <th>Region</th>
          <th>Flag</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{name}</td>
          <td>{capital}</td>
          <td>{region}</td>
          <td>
            <img
              src={flag}
              alt="flag"
              style={{ width: "150px", height: "120px" }}
            />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TableContainer;

//  {
//    data?.map((item, index) => {
//      const { name, capital, region, flag } = item;
//      return (
//        <div key={index}>
//          <h3>{name}</h3>
//          <h3>{capital}</h3>
//          <h3>{region}</h3>
//          <img src={flag} alt="" style={{ width: "50px" }} />
//        </div>
//      );
//    });
//  }
