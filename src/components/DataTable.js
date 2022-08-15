import React from "react";

const DataTable = ({ vrednost,netoWeek,netoMonth,tax,netoYear,netoForth,grossMonth,grossYear,grossWeek,grossForth }) => {
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
          <td>{grossWeek}</td>
          <td>{tax} %</td>
          <td>{netoWeek}</td>
        </tr>
        <tr class="text-white">Fortnightly
          <td>{grossForth}</td>
          <td>{tax} %</td>
          <td>{netoForth}</td>
        
        </tr>
        <tr class="text-white">Monthly
          <td>{grossMonth}</td>
          <td>{tax} %</td>
          <td>{netoMonth}</td>
        </tr>
        <tr class="text-white">Anually
          <td>{grossYear}</td>
          <td>{tax} %</td>
          <td>{netoYear}</td>
        </tr>
        
      </table>
    </div>
  );
};

export default DataTable;


