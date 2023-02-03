import "./MovieBox.scss";
function MovieBox({ Title, Poster, Key, Year }) {
  return (
    <>
      <div className="MovieBox">
        <div className="image">
          <img src={Poster} alt="" />
        </div>
        <div className="title">
          <p>{Year}</p>
          <h3>{Title}</h3>
        </div>
      </div>
    </>
  );
}

export default MovieBox;
