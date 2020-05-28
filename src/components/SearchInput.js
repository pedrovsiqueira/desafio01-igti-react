import React from "react";

const SearchInput = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="search" />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchInput;
