import React from "react";

const DataTable = ({ vrednost }) => {
  return (
    <div className="table">
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
          <th class="bg-red-700">Tax</th>
          <th class="bg-red-700">Net income </th>
        </tr>
        
        <tr class="text-white">Weekly</tr>
        <tr class="text-white">Fortnightly</tr>
        <tr class="text-white">Monthly</tr>
        <tr class="text-white">Anually</tr>
      </table>
    </div>
  );
};

export default DataTable;
