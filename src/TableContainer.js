import React from "react";
import { Table } from "react-bootstrap";

const TableContainer = ({ data }) => {
  console.log(data);
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
      {data?.map((item, index) => {
        const { name, capital, region, flag } = item;
        return (
          <tbody key={index}>
            <tr>
              <td>{name}</td>
              <td>{capital}</td>
              <td>{region}</td>
              <td>
                <img src={flag} alt="flag" style={{ width: "250px" }} />
              </td>
            </tr>
          </tbody>
        );
      })}
    </Table>
  );
};

export default TableContainer;
