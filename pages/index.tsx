import React from "react";
import ImageSection from "../components/ImageSection/ImageSection";
import Definitions from "../components/Definitions/Definitions";
import DefinitionsContainer from "../components/Definitions/DefinitionsContainer";
import Header from "../components/Header/Header";
import Presentation from "../components/Presentation/Presentation";
import Register from "../components/Register/Register";
import CalendarSection from "../components/CalendarSection/CalendarSection";
import Footer from "../components/Footer/Footer";


const Home = () => {


  const scrollRef = React.useRef<any>();

  const scrollToRegister = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <React.Fragment>
      <Header />
      <ImageSection goToRegister={scrollToRegister} />
      <Presentation />
      <Register />
      <DefinitionsContainer>
        <Definitions
          image={"/images/img-pres-1.jpeg"}
          title={"POURQUOI CONSULTER ?"}
          text={
            "Consulter une psychologue peut vous aider à changer votre vie, reprendre confiance en vous."
          }
        />
        <Definitions
          image={"/images/img-pres-2.jpeg"}
          title={"QUELS OUTILS POUR M’AIDER ?"}
          text={
            "Voyons ensemble ce qui sera le plus adapté pour vous. Une rencontre ponctuelle ou amorcer un travail plus en profondeur lors d’une psychothérapie…"
          }
        />
        <Definitions
          image={"/images/img-pres-3.jpeg"}
          title={"INFORMATIONS PRATIQUES"}
          text={
            "Vous recherchez une psychologue à Marseille ? Rencontrons-nous pour en discuter."
          }
        />
      </DefinitionsContainer>
      <div ref={scrollRef}></div>
      <CalendarSection />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
