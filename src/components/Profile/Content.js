import React from "react";
import Tags from "./Tags";
import { v4 as uuidv4 } from "uuid";

const Content = ({
  data,
  allData,
  idx,
  setAllData,
  filterData,
  setFilterData,
}) => {
  const average = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += Number(arr[i]);
    }
    let avg = total / arr.length;
    return avg;
  };
  return (
    <div className="profile-middle">
      <p className="Name">{data.firstName + " " + data.lastName}</p>
      <p>Email:{data.email}</p>
      <p>Company:{data.company}</p>
      <p>Skill:{data.skill}</p>
      <p>Grades:{average(data.grades)}%</p>
      <div className="content">
        {data.grades.map((d, i) => {
          return (
            <p key={uuidv4()}>
              Test {i + 1}: &nbsp; {d}
            </p>
          );
        })}
      </div>
      <Tags
        key={uuidv4()}
        data={data}
        allData={allData}
        idx={idx}
        setAllData={setAllData}
      />
    </div>
  );
};

export default Content;
