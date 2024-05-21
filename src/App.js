import { Helmet } from "react-helmet-async";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Show from "./pages/show/show";

const App = () => {
  return (
    <>
      <Helmet>
        <title>MKP_APPv1.0</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Jura:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show/:showId" element={<Show />} />
      </Routes>
    </>

    /* <Device id="1" nr="1" name="test1" />
      <Device id="2" nr="2" name="test2" />
      <Device id="3" nr="3" name="test3" />
      <Device id="4" nr="4" name="test4" />
      <Device id="5" nr="5" name="test5" />
      <Device id="6" nr="6" name="test6" />
      <Device id="7" nr="7" name="test7" />
      <Device id="8" nr="8" name="test8" />
      <Device id="9" nr="9" name="test9" />
      <Device id="0" nr="0" name="test0" />
      <Device id="0a" nr="0a" name="test0" /> */
    /* <Device id="0d" nr="0d" name="test0" /> */
  );
};

export default App;
