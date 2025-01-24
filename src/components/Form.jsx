import React from "react";

function Form({ onsearch, inputField, inputdata, upDateinput }) {
  return (
    <form onSubmit={(e) => onsearch(e)} autoComplete="true">
      <input
        type="search"
        placeholder="Search Movie"
        onChange={(e) => upDateinput(e.target.value)}
        ref={inputField}
        value={inputdata}
        required
      />
    </form>
  );
}

export default Form;
