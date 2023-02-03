import React, { useEffect, useState } from "react";
import MovieBox from "../moviebox/MovieBox";
import "./Home.scss";
import axios from "axios";

function Home() {
  const [myData, setmyData] = useState([]);
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
    fetchData("avengers");
  }, []);

  console.log(myData);

  return (
    <div className="Home ">
      <div className="container center">
        <div className="search">
          <div className="search-box">
            <input type="text" placeholder="Search Movies" />
            <button>Search</button>
          </div>
        </div>

        <div className="movies-show">
          {myData.map((item) => {
            const { Title, Poster, imdbID } = item;
            return <MovieBox Title={Title} key={imdbID} Poster={Poster} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
