import Movieimg from "../assets/movie.jpeg";
import Placeholderimg from "../assets/placeholder-image.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { MdKeyboardBackspace } from "react-icons/md";
import { timeconvert } from "../helpfunction/timeconvert";

function Singlemovie() {
  const { movid } = useParams();
  const { apiUrl, apiKey } = newFunction(); // Replace with the API URL
  const navigate = useNavigate();

  const { data, isLoading, error, isFetching, isRefetching } = useQuery({
    queryKey: ["dmovies"],
    queryFn: () =>
      axios
        .get(apiUrl, {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        })
        .then((res) => res.data),
    // staleTime: 10 * 1000, //10s
  });
  const customStyle = {
    opacity: "0.6",
    fontSize: "18px",
    display: "inline-block",
  };

  if (isLoading || error || isFetching)
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  return (
    <>
      <div className="goback" onClick={() => navigate(-1)}>
        <MdKeyboardBackspace className="goback-icon" /> <p>Go Back</p>
      </div>
      <div
        className="grid-singlemovie"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(https://image.tmdb.org/t/p/w500${data?.backdrop_path})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="grid-itemresult single">
          <div className="movie-image">
            <img
              src={
                data?.poster_path
                  ? `https://image.tmdb.org/t/p/w500${data?.poster_path}`
                  : Placeholderimg
              }
              alt="movie poster"
            />
          </div>
          <div className="movie-content-overlay">
            <h4 className="movie-title"></h4>
            <div className="movie-sect">
              <p className="movie-genre"></p>
              {/* <p className="movie-length">1hr 52m</p> */}
            </div>
            <p className="movie-readmore"></p>
          </div>
        </div>
        <div className="movie-details">
          <h1>{data?.title}</h1>
          <h3>Storyline</h3>
          <p style={{ opacity: "0.6", fontSize: "18px" }}>{data?.overview}</p>
          <h3 style={{ marginTop: "20px" }}>Genres</h3>
          <div className="genre" style={{ marginBottom: "20px" }}>
            {data?.genres.map((g) => (
              <p key={g.id} style={customStyle}>
                {g.name}
              </p>
            ))}
            {/* <p>action</p>
          <p>action</p> */}
          </div>
          <div className="release">
            <div>
              <h3>Release Year</h3>
              <p style={customStyle} className="year">
                {data?.release_date.split("-")[0]}
              </p>
            </div>

            <div>
              <h3>Status</h3>
              <p style={customStyle} className="year">
                {data?.status}
              </p>
            </div>

            <div>
              <h3>Runtime</h3>
              <p style={customStyle} className="year">
                {timeconvert(data?.runtime)}
              </p>
            </div>
          </div>
        </div>
      </div>

      <script></script>
    </>
  );

  function newFunction() {
    const apiKey =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTljMmJiNTczZWIxZmU5NDA0MDQxNTI4ZmU3YWUyMCIsInN1YiI6IjY1NDA0OTFlZWVjNWI1MDEwMTQzZmY3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DhgJjO4abOuk2IWlfxUo9NsenV7bjdP_Rw0RG9PJRMs"; // Replace with your actual API key
    const apiUrl = `https://api.themoviedb.org/3/movie/${movid}?language=en-US`; // Replace with the API URL
    return { apiUrl, apiKey };
  }
}

export default Singlemovie;
