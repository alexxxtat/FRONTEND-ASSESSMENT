import React from "react";

const Button = ({ idx }) => {
  const handleButton = () => {
    const e = document.getElementsByClassName("content")[idx];
    if (e.style.display === "block") {
      e.style.display = "none";
      let e1 = document.getElementsByClassName("collapsible")[idx];
      e1.innerHTML = "+";
    } else {
      e.style.display = "block";
      let e1 = document.getElementsByClassName("collapsible")[idx];
      e1.innerHTML = "-";
    }
  };
  return (
    <div className="profile-right">
      <button type="button" className="collapsible" onClick={handleButton}>
        +
      </button>
    </div>
  );
};

export default Button;
