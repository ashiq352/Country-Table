import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import EditableRow from "./EditableRow";
import ReadOnlyRow from "./ReadOnlyRow";

const CountryTable = () => {
  const [countryData, setCountryData] = useState([]);
  const [editCountryId, setEditCountryId] = useState(null);
  useEffect(() => {
     getData();
  }, []);
  const getData = () => {
    axios
      .get("http://localhost:8080/country")
      .then((res) => setCountryData(res.data));
  };
  const handleEditClick = (country) => {
    setEditCountryId(country.id);
  };

  return (
    <>
      <form>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Country</th>
              <th scope="col">City</th>
              <th scope="col">Population</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {countryData.map((country) => (
              <Fragment>
                {editCountryId == country.id ? (
                  <EditableRow country={country} getData ={getData} />
                ) : (
                  <ReadOnlyRow
                    country={country}
                    handleEditClick={handleEditClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </>
  );
};

export default CountryTable;