import React, { useEffect } from "react";
import Movieimg from "../assets/movie.jpeg";
import { checktextLength } from "../helpfunction/checktextLength";
import Movieui from "../components/Movieui";
import axios from "axios";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Loading from "../components/Loading";

function SearchPage() {
  const { mov } = useParams();
  const [searchmovie, setSearchmovie] = useState(mov);
  const [resultsFound, setResultsFound] = useState(false); // State to track search results
  const navigate = useNavigate();

  const searchinputvalue = useRef();
  function searchMovie(e) {
    e.preventDefault();
    let userSearch = searchinputvalue.current.value;
    if (userSearch === "") return;
    setSearchmovie(userSearch);
    // Automatically scroll to the top of the page with smooth scrolling
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    //change the url link
    navigate(`/searchpage/${userSearch}`);
  }

  const { apiUrl, apiKey } = newFunction(); // Replace with the API URL

  // function to fetch the data
  const {
    data,
    isLoading,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["smovies", searchmovie],
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get(apiUrl, {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
          params: {
            page: pageParam,
            query: searchmovie || mov,
          },
        })
        .then((res) => res.data),
    staleTime: 10 * 1000, //10s
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return null;
    },
  });

  //focus the input
  // function focusInput() {
  //   inputField.current.focus();
  // }

  // When search results are fetched, check if any results were found
  useEffect(() => {
    if (data?.pages[0].results.length > 0) {
      setResultsFound(true);
    } else {
      setResultsFound(false);
    }
  }, [data]);
  return (
    <>
      {console.log(data)}
      <div className="search-container">
        <h2 className="search-title">
          <span style={{ opacity: "0.6" }}>Search result for</span> :{" "}
          {checktextLength(searchmovie)}
        </h2>
        <div className="form-container">
          <form onSubmit={searchMovie}>
            <input
              type="search"
              placeholder="Search Movie"
              // defaultValue={searchmovie}
              ref={searchinputvalue}
              required
            />
            {/* //if there is an input data */}
          </form>
          <div className="search" onClick={searchMovie}>
            <p>Search</p>
          </div>
        </div>
      </div>
      {data?.pages[0].results.length === 0 && (
        <h1 style={{ textAlign: "center", marginTop: "50px" }}>
          No Result Found, Search again
        </h1>
      )}
      <div className="grid-container">
        {isLoading || error
          ? new Array(6).fill(0).map((_, index) => <Loading key={index} />)
          : data?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page.results.map((singlemovie) => (
                  <Movieui key={singlemovie.id} singlemovie={singlemovie} />
                ))}
              </React.Fragment>
            ))}

        {/* {isLoading || error
          ? new Array(6).fill(0).map((_, index) => <Loading key={index} />)
          : data?.results.map((singlemovie) => (
              <Movieui key={singlemovie.id} singlemovie={singlemovie} />
            ))} */}
        {/* <Movieui />
        <Movieui />
        <Movieui />
        <Movieui />
        <Movieui /> */}
      </div>
      {resultsFound && hasNextPage && (
        <button onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </button>
      )}
    </>
  );

  function newFunction() {
    const apiKey =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTljMmJiNTczZWIxZmU5NDA0MDQxNTI4ZmU3YWUyMCIsInN1YiI6IjY1NDA0OTFlZWVjNWI1MDEwMTQzZmY3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DhgJjO4abOuk2IWlfxUo9NsenV7bjdP_Rw0RG9PJRMs"; // Replace with your actual API key
    const apiUrl = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US`; // Replace with the API URL

    return { apiUrl, apiKey };
  }

  //method 2
  // function newFunction() {
  //   const apiKey =
  //     "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTljMmJiNTczZWIxZmU5NDA0MDQxNTI4ZmU3YWUyMCIsInN1YiI6IjY1NDA0OTFlZWVjNWI1MDEwMTQzZmY3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DhgJjO4abOuk2IWlfxUo9NsenV7bjdP_Rw0RG9PJRMs"; // Replace with your actual API key
  //   const apiUrl = `https://api.themoviedb.org/3/search/movie?query=${
  //     searchmovie || mov
  //   }&include_adult=false&language=en-US&page=1`; // Replace with the API URL

  //   return { apiUrl, apiKey };
  // }
}

export default SearchPage;
