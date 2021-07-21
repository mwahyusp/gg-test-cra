import React from "react";

function index({handleClick}) {
  return (
    <form className="search" onSubmit={handleClick}>
      <input type="text" name="query" />
      <input type="submit" value="search" />
    </form>
  );
}

export default index;