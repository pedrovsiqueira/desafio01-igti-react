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

    const filteredResults = apiResults.results.filter((item) => {
      const fullName = `${item.name.first} ${item.name.last}`.toLowerCase();
      return fullName.includes(stringToFilter);
    });

    setApiResultsFiltered(filteredResults);
  };

  const handleGenderCountMale = () => {
    return apiResultsFiltered.filter((item) => item.gender === "male").length;
  };

  const handleGenderCountFemale = () => {
    return apiResultsFiltered.filter((item) => item.gender === "female").length;
  };

  const handleAgeSum = () => {
    return apiResultsFiltered.reduce((acc, val) => val.dob.age + acc, 0);
  };

  const handleAgeAverage = () => {
    return (handleAgeSum() / apiResultsFiltered.length).toFixed(2);
  };

  return (
    <>
      <SearchInput handleSubmit={handleSubmit} />
      <Boxes
        apiResults={apiResultsFiltered}
        className="boxes-container"
        qtUser={apiResultsFiltered.length}
        ageTotal={handleAgeSum}
        averageAge={handleAgeAverage}
        totalGenderMale={handleGenderCountMale}
        totalGenderFemale={handleGenderCountFemale}
      />
    </>
  );
}

export default App;
