import React from "react";
import CarouselPsychologie from "../components/CarouselPsychologie/CarouselPsychologie";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ImageSectionPsychologie from "../components/ImageSection/ImageSectionPsychologie";

const Psychologie = () => {
  return (
    <>
      <Header />
      <ImageSectionPsychologie />
      <CarouselPsychologie />
      <Footer />
    </>
  );
};

export default Psychologie;
