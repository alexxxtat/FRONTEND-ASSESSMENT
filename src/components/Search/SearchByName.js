import React, { useState, useEffect } from "react";

const SearchByName = ({ setSearchName }) => {
  const handleSearchNameChange = (e) => {
    setSearchName(e.target.value);
  };
  return (
    <div>
      <input
        id="searchingName"
        className="input"
        onChange={handleSearchNameChange}
        type="text"
        placeholder="Search by name"
        required
      ></input>
    </div>
  );
};

export default SearchByName;
