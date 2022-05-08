import React, { useState } from "react";

const SearchByTag = ({ setSearchTag }) => {
  const handleSearchTagChange = (e) => {
    setSearchTag(e.target.value);
  };

  return (
    <div>
      <input
        id="searchingTag"
        className="input"
        onChange={handleSearchTagChange}
        type="text"
        placeholder="Search by tag"
        required
      ></input>
    </div>
  );
};

export default SearchByTag;
