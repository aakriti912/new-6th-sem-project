// import React from "react";
import { useState } from "react";
import Dashboard from "./Dashboard";
import Container from "./Container";
// import { Container } from "postcss";

function Post() {
  const [container, setContainer] = useState(false);

  function togglefile(e) {
    setContainer(!container);
    e.target.remove();
  }

  return (
    <div>
      <div
        className="flex space-x-2 
      justify-center items-center relative top-[30px]"
      >
        <button
          type="button"
          className="inline-block px-6 py-2.5 
           bg-[#6A91A0] text-white font-medium text-xs leading-tight uppercase rounded 
           shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg 
           focus:outline-none focus:ring-0 active:bg-[#6A91A0] active:shadow-lg transition duration-150 ease-in-out"
          onClick={togglefile}
        >
          Post
        </button>

        {container && <Container />}
      </div>
    </div>
  );
}
export default Post;
