// import React, { useState, useEffect, useContext } from "react";
import AppRouter from "./routes/AppRouter";
// import { LocationsContext } from "./context/Locations";
import "./styles/App.css";
import "tachyons";

function App() {
  // const { locationInfo, dispatch } = useContext(LocationsContext);

  // const [searchField, setSearchField] = useState("");
  // const [Loading, setLoading] = useState(true);

  // const onSearchChange = (event) => {
  //   setSearchField(event.target.value.toLowerCase());
  // };

  return <AppRouter />;
}

export default App;
