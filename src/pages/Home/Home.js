import React from "react";
import Header from "../../components1/Header/Header";
import Footer from "../../components1/Footer/Footer";
import Banner from "../../components1/Banner/Banner";
import { Rowlist } from "../../components1/Row/RowList/Rowlist";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Rowlist/>
      <Footer />
    </>
  );
};

export default Home;
