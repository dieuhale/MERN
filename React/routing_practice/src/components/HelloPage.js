import React from "react";
import { useParams } from "react-router-dom";

const HelloPage = () => {
  const { thisWord } = useParams();

  return (
    <div>
      <h1>The word is : {thisWord} </h1>
    </div>
  );
};

export default HelloPage;
