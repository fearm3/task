import React from "react";
import { Table } from "react-bootstrap";

const TableContainer = ({ data }) => {
  console.log("tableContainer=>", data);
  return (
    <Table
      striped
      bordered
      hover
      size="sm"
      className="m-5 bg-info bg-opacity-50 w-50"
      variant="dark"
    >
      <thead className="text-center">
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
          <tbody key={index} className="text-center">
            <tr>
              <td className="w-25 py-4 text-white ">{name}</td>
              <td className="w-25 py-4 text-white">{capital}</td>
              <td className="w-25 py-4 text-white">{region}</td>
              <td className="w-25">
                <img src={flag} alt="flag" className="w-50 py-1" />
              </td>
            </tr>
          </tbody>
        );
      })}
    </Table>
  );
};

export default TableContainer;
