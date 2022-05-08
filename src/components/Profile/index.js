import React, { useState, useEffect } from "react";
import Tags from "./Tags";
import Img from "./Img";
import Content from "./Content";
import Button from "./Button";
import { v4 as uuidv4 } from "uuid";

const Profile = ({
  data,
  idx,
  allData,
  setAllData,
  filterData,
  setFilterData,
}) => {
  return (
    <div className="Profile">
      <Img data={data} key={uuidv4()} />
      <Content
        data={data}
        allData={allData}
        idx={idx}
        setAllData={setAllData}
        filterData={filterData}
        setFilterData={filterData}
      />
      <Button idx={idx} key={uuidv4()} />
    </div>
  );
};

export default Profile;
