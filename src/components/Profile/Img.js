import React from "react";

const Img = ({ data }) => {
  return (
    <div className="profile-left">
      <img src={data.pic}></img>
    </div>
  );
};

export default Img;
