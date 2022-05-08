import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Tags = ({ data, allData, idx, setAllData }) => {
  let [tags, setTags] = useState([]);
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setTags([...tags, e.target.value]);
      if (data.tags) {
        allData[idx].tags = [...data.tags, e.target.value];

        data.tags = [...new Set(data.tags)];
        setAllData(allData);
      } else {
        allData[idx].tags = [e.target.value];
        setAllData(allData);
      }
      e.target.value = "";
    }
  };
  return (
    <div className="tagsContainer">
      <div className="tag">
        {data.tags?.map((d) => {
          return <p key={uuidv4()}>{d}</p>;
        })}
      </div>
      <input
        id="addTag"
        className="input"
        type="text"
        placeholder="Add a tag"
        required
        onKeyUp={handleKeyPress}
      ></input>
    </div>
  );
};

export default Tags;
