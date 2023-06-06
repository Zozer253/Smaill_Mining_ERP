import React from "react";
import "./Tableau.css";

const Tableau = ({ fields, data, action }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {fields.map((field, index) => (
              <th key={index}>{field.label}</th>
            ))}
            {action && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {fields.map((field, fieldIndex) => (
                <td key={fieldIndex}>{row[field.field]}</td>
              ))}
              {action}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tableau;
