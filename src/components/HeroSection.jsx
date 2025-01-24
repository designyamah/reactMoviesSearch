import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Form from "./Form";

function HeroSection({ h3, h5 }) {
  const inputField = useRef(null);
  const [inputdata, setInputdata] = useState("");
  const navigate = useNavigate();
  //search data onclick
  function searchMovie(e) {
    e.preventDefault();
    if (inputdata === "") return;
    navigate(`/searchpage/${inputdata}`);
  }
  //focus the input
  function focusInput() {
    inputField.current.focus();
  }

  //function to update the State variable for holding the user input
  function upDateinput(inputdatafrom) {
    setInputdata(inputdatafrom);
  }

  //on mount call the focusFunction
  useEffect(() => {
    focusInput();
  }, []);

  return (
    <section className="hero">
      <h3>{h3}</h3>
      <h5>{h5}</h5>
      <div className="form-container">
        {/* <form onSubmit={searchMovie}>
          <input
            type="search"
            placeholder="Search Movie"
            onChange={(e) => setInputdata(e.target.value)}
            ref={inputField}
            value={inputdata}
          />
        </form> */}
        <Form
          onsearch={searchMovie}
          inputField={inputField}
          inputdata={inputdata}
          upDateinput={upDateinput}
        />
        <div className="search" onClick={searchMovie}>
          <p>Search</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
