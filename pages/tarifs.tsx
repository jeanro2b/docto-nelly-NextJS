import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ImageSectionTarifs from "../components/ImageSection/ImageSectionTarifs";
import TarifsTexte from "../components/Tarifs/tarifs";

const Tarifs = () => {
  return (
    <>
      <Header />
      <ImageSectionTarifs />
      <TarifsTexte />
      <Footer />
    </>
  );
};

export default Tarifs;
