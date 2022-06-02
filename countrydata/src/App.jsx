import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import AddCountry from "./components/AddCountry";
import CountryTable from "./Components/CountrtTable";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <a class="navbar-brand">Navbar</a>
          <form class="d-flex" role="search">
            <NavLink to="/">Display Country</NavLink>
            <NavLink to="/add-country">Add Country</NavLink>

            <input type="text" placeholder="Filter Country By Country" />
          </form>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<CountryTable />}></Route>
        <Route path="/add-country" element={<AddCountry />}></Route>
      </Routes>
    </>
  );
}

export default App;
