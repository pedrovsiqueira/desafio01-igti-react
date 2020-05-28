import React, { useState, useEffect } from "react";
import "./App.css";
import SearchInput from "./components/SearchInput";
import Boxes from "./components/Boxes";
import axios from "axios";

function App() {
  const [apiResults, setApiResults] = useState([]);
  const [apiResultsFiltered, setApiResultsFiltered] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        "https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo"
      );

      setApiResults(result.data);
      setApiResultsFiltered(apiResults);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const stringToFilter = e.target[0].value.toLowerCase();
    console.log(stringToFilter);

    const filteredResults = apiResults.results.filter((item) => {
      const fullName = `${item.name.first} ${item.name.last}`.toLowerCase();
      console.log(fullName);
      let bool = true;

      console.log(fullName.every(stringToFilter));
      // if (fullName.every(stringToFilter)) {
        
      //   bool = true;
      // }

      return bool;
    });

    setApiResultsFiltered(filteredResults);
  };

  return (
    <>
      <SearchInput handleSubmit={handleSubmit} />
      <Boxes
        apiResults={apiResultsFiltered}
        className="boxes-container"
        qtUser={1}
      />
    </>
  );
}

export default App;
