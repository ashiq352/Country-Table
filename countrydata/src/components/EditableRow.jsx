import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";

const EditableRow = ({ country, getData }) => {
  const navigate = useNavigate();
  const [editChangeForm, setEditChangeForm] = useState();

  const handleEditChangeInput = (e) => {
    e.preventDefault();
    setEditChangeForm({ ...editChangeForm, [e.target.name]: e.target.value });
  };
  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    //   console.log(editChangeForm,country.id);
    axios
      .put(`http://localhost:8080/country/${country.id}`, editChangeForm)
      .then(() => navigate("/"));
  };

  return (
    <tr>
      <td>{country.id}</td>
      <td>
        <input
          type="text"
          required="true"
          name="country_name"
          placeholder="Enter Country name"
          onChange={handleEditChangeInput}
        />
      </td>
      <td>
        <input
          type="text"
          required="true"
          name="city_name"
          placeholder="Enter City name"
          onChange={handleEditChangeInput}
        />
      </td>
      <td>
        <input
          type="text"
          required="true"
          name="population"
          placeholder="Enter Population"
          onChange={handleEditChangeInput}
        />
      </td>
      <td>
        <button className="btn btn-outline-1" onClick={handleEditFormSubmit}>
          Save
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
