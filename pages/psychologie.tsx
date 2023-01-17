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
        <Description title={"Qu'est ce que la psychologie Lacanienne ?"} text= {"La psychanalyse est la science de l’inconscient. En fait, les objectifs de la psychanalyse lacanienne sont identiques à ceux de la psychanalyse freudienne : il s’agit de réduire la souffrance, de dénouer les conflits psychiques, par la parole et l’analyse des lapsus et des rêves. C’est, en effet, dans nos mots et nos songes que l’inconscient s’exprime."}/>
        <Description title={"Pourquoi ai-je choisi cette approche ?"} text= {"Je crois qu’une relation thérapeutique (particulièrement en psychothérapie) se choisit avec beaucoup de soin car c’est aussi une aventure humaine basée autant sur la confiance que sur les compétences et l’expérience du psychothérapeute. La psychologie Lacanienne est pour moi la plus difficile mais celle qui offre le plus de résultats durables et un travail en profondeur."}/>
        <Description title={"Qui peut en bénéficier ?"} text= {"Tout le monde peut en bénéficier. Adultes, enfants, adolescents. En effet, pour exhumer nos névroses, une seule solution, parler. Car les mots ressuscitent les images, réveillent la mémoire et, progressivement, attirent vers la conscience les fantasmes et les scènes du passé qui ont déterminé nos destins."}/>
      </DefinitionsContainer>
      <Footer />
    </>
  );
};

export default Psychologie;
