import React from "react";

const DataTable = ({ vrednost,netoWeek,netoMonth,tax }) => {
  return (
    <div className="table">
      {netoWeek}
      {netoMonth}
      <table class="table-auto bg-gray-900 relative bottom-48  w-11/12  object-left">
        <div class=" text-white ">
          {vrednost} your net{" "}
          <select class="bg-gray-900">
            <option value="Weekly">Weekly</option>
            <option value="Fortnightly">Fortnightly</option>
            <option value="Montly">Montly</option>
            <option value="Anually">Anually</option>
          </select>{" "}
          income
        </div>
        <tr>
          <th class="bg-red-700">Frequency </th>
          <th class="bg-red-700">Gross income</th>
          <th class="bg-red-700">Tax {tax}%</th>
          <th class="bg-red-700">Net income </th>
        </tr>
       
        <tr class="text-white">Weekly
        <td></td>
        <td>{tax} %</td>
        </tr>
        <tr class="text-white">Fortnightly
        <td></td>
        <td>{tax} %</td>
        
        </tr>
        <tr class="text-white">Monthly
        <td></td>
        <td>{tax} %</td>
        </tr>
        <tr class="text-white">Anually
        <td></td>
        <td>{tax} %</td>
        </tr>
        
      </table>
    </div>
  );
};

export default DataTable;

