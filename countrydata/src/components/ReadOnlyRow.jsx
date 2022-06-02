import axios from "axios";
import React from "react";

const ReadOnlyRow = ({ country, handleEditClick }) => {
  const handleDeleteCountry = () => {
    axios.delete(`http://localhost:8080/country/${country.id}`);
  };
  return (
    <>
      <tr>
        <th scope="row">{country.id}</th>
        <td>{country.country_name}</td>
        <td>{country.city_name}</td>
        <td>{country.population}</td>
        <td>
          <button
            className="btn btn-outline"
            onClick={() => handleEditClick(country)}
          >
            Edit
          </button>
        </td>
        <td>
          <button className="btn btn-outline" onClick={handleDeleteCountry}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default ReadOnlyRow;
