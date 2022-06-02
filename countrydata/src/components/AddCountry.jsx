import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCountry = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const handleChangeInput = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post(" http://localhost:8080/country", formData)
      .then(() => navigate("/"));
  };

  return (
    <>
      <form>
        <input
          type="text"
          name="country_name"
          required="required"
          placeholder="Enter a Country ..."
          onChange={handleChangeInput}
        />
        <input
          type="text"
          name="city_name"
          required="required"
          placeholder="Enter a city ..."
          onChange={handleChangeInput}
        />
        <input
          type="number"
          name="population"
          required="required"
          placeholder="Enter population ..."
          onChange={handleChangeInput}
        />
        <button
          className="btn btn-outline-primary mx-3"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AddCountry;
