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
      className="m-5 bg-info bg-opacity-50"
      responsive
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
          <tbody key={index} className="text-center ">
            <tr>
              <td className="py-4 text-white " style={{ width: "150px" }}>
                {name}
              </td>
              <td className="py-4 text-white" style={{ width: "150px" }}>
                {capital}
              </td>
              <td className="py-4 text-white" style={{ width: "150px" }}>
                {region}
              </td>
              <td className="p-2" style={{ width: "100px" }}>
                <img src={flag} alt="flag" style={{ width: "120px" }} />
              </td>
            </tr>
          </tbody>
        );
      })}
    </Table>
  );
};

export default TableContainer;
