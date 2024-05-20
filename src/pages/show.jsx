import React from "react";
import { useParams } from "react-router-dom";
import CloseBtn from "../components/closeBtn/closeBtn";

const Show = () => {
  const { showId } = useParams();
  return (
    <>
      <CloseBtn />
      Show id: {showId}
    </>
  );
};

export default Show;
