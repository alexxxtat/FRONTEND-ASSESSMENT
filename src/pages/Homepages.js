import React, { useState, useEffect } from "react";
import Profile from "../components/Profile";
import { v4 as uuidv4 } from "uuid";
import SearchByTag from "../components/Search/SearchByTag";
import SearchByName from "../components/Search/SearchByName";

function Homepages() {
  const URL = "https://api.hatchways.io/assessment/students";

  let [data, setData] = useState([]);
  let [filterData, setFilterData] = useState([]);

  let [searchTag, setSearchTag] = useState("");
  let [searchName, setSearchName] = useState("");

  //Get the data init
  const search = async () => {
    let unparsedData = await fetch(URL, {
      method: "GET",
    });
    let parsedData = await unparsedData.json();
    setData(parsedData.students);
    setFilterData(parsedData.students);
    //console.log(parsedData.students);
  };
  useEffect(() => {
    search();
  }, []);

  //handle search after searchName and searchTag updated
  useEffect(() => {
    let temp;
    if (searchTag !== "" && searchName !== "") {
      temp = data.filter((d) => {
        return (d.firstName + " " + d.lastName)
          .toLowerCase()
          .includes(searchName.toLowerCase());
      });
      let temp1 = temp.filter((d) => {
        let isIncludedTag = false;
        d.tags?.map((dataTag) => {
          if (dataTag.toLowerCase().includes(searchTag.toLowerCase())) {
            if (searchTag !== "") {
              isIncludedTag = true;
            }
          }
        });
        if (isIncludedTag) {
          return true;
        }
        return false;
      });
      setFilterData(temp1);
    } else if (searchTag === "") {
      temp = data.filter((d) => {
        return (d.firstName + " " + d.lastName)
          .toLowerCase()
          .includes(searchName.toLowerCase());
      });
      setFilterData(temp);
    } else if (searchName === "") {
      temp = data.filter((d) => {
        let isIncludedTag = false;
        d.tags?.map((dataTag) => {
          if (dataTag.toLowerCase().includes(searchTag.toLowerCase())) {
            if (searchTag !== "") {
              //console.log("testing");
              isIncludedTag = true;
            }
          }
        });
        if (isIncludedTag) {
          return true;
        }
        return false;
      });
      setFilterData(temp);
    } else {
      setFilterData(data);
    }
  }, [searchTag, searchName]);

  return (
    <div className="homepage">
      <div className="container">
        <div className="searchArea">
          <SearchByName setSearchName={setSearchName} />
          <SearchByTag setSearchTag={setSearchTag} />
        </div>
        <div className="Profiles">
          {filterData.map((d, i, arr) => {
            return (
              <Profile
                data={d}
                key={uuidv4()}
                idx={i}
                allData={data}
                setAllData={setData}
                filterData={filterData}
                setFilterData={filterData}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Homepages;
