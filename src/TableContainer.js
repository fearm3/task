import React from "react";
import { Table } from "react-bootstrap";

const TableContainer = ({ data }) => {
  console.log(data);
  return (
    <Table
      striped
      bordered
      hover
      size="sm"
      className="m-5 mt-3 bg-info bg-opacity-50  "
      
    >
      <thead className="text-center ">
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
              <td className="pt-4 text-white" style={{ width: "150px" }}>
                {name}
              </td>
              <td className="pt-4 text-white" style={{ width: "150px" }}>
                {capital}
              </td>
              <td className="pt-4 text-white" style={{ width: "150px" }}>
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
