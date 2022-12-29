import React from "react";
import CarouselPsychologie from "../components/CarouselPsychologie/CarouselPsychologie";
import DefinitionsContainer from "../components/Definitions/DefinitionsContainer";
import Description from "../components/Definitions/Description";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ImageSectionPsychologie from "../components/ImageSection/ImageSectionPsychologie";

const Psychologie = () => {
  return (
    <>
      <Header />
      <ImageSectionPsychologie />
      <CarouselPsychologie />
      <DefinitionsContainer>
        <Description title={"Qu'est ce que la psychologie Lacanienne ?"} text= {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, similique soluta. Doloremque vero id dolorem magnam, voluptas natus odio obcaecati quos laboriosam saepe, modi illo cupiditate accusantium tempore fugiat error."}/>
        <Description title={"Pourquoi ai-je choisi cette approche ?"} text= {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, similique soluta. Doloremque vero id dolorem magnam, voluptas natus odio obcaecati quos laboriosam saepe, modi illo cupiditate accusantium tempore fugiat error."}/>
        <Description title={"Qui peut en bénéficier"} text= {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, similique soluta. Doloremque vero id dolorem magnam, voluptas natus odio obcaecati quos laboriosam saepe, modi illo cupiditate accusantium tempore fugiat error."}/>
      </DefinitionsContainer>
      <Footer />
    </>
  );
};

export default Psychologie;
