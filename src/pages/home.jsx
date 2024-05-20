import React from "react";
import Header from "../components/header/header";
import ShowList from "../components/showList/showList";
import CloseBtn from "../components/closeBtn/closeBtn";

const Home = () => {
  return (
    <>
      <CloseBtn />
      <Header />
      <ShowList />
    </>
  );
};

export default Home;
