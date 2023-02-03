import React, { useEffect, useState } from "react";
import MovieBox from "../moviebox/MovieBox";
import "./Home.scss";
import axios from "axios";

function Home() {
  const [myData, setmyData] = useState([]);
  const [searchData, setsearchData] = useState("");
  const apiKey = "3efbc619";

  async function fetchData(search) {
    try {
      const data = await axios.get(
        `https://www.omdbapi.com/?s=${search}&apikey=${apiKey}`
      );

      setmyData(data.data.Search);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData("avatar");
  }, []);

  return (
    <div className="Home ">
      <div className="container center">
        <div className="search">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search Movies"
              onChange={(e) => {
                setsearchData(e.target.value);
              }}
            />
            <button
              onClick={() => {
                fetchData(searchData);
              }}
            >
              Search
            </button>
          </div>
        </div>

        <div className="movies-show">
          {myData.map((item) => {
            const { Title, Poster, imdbID, Year } = item;
            return (
              <MovieBox
                Title={Title}
                Poster={Poster}
                Key={imdbID}
                Year={Year}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
