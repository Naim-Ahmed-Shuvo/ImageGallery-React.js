import React, { useState } from "react";
import { useStateValue } from "../store/StateProvider";

const ImageSearch = () => {
  const [{ },dispatch] = useStateValue();
  const [text, setText] = useState("");

  //
  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(text);
    dispatch({
      type: "SET_TERM",
      term: text,
    });
  };

  //
  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="flex items-center  border-b-2 border-teal-500 py-2">
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            className="appearence-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            placeholder="Search images..."
          />
          <button className="flex-shrink-0 bg-green-400 hover:bg-green-500 border-green-400 hover:border-green-500 text-sm border-4 text-white py-1 px-2 rounded">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
