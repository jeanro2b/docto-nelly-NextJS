import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselPsychologie = () => {
  const texts = [
    {
      id: 0,
      text:
        "Jamais la psychologie ne pourra dire sur la folie la vérité, puisque c'est la folie qui détient la vérité de la psychologie.",
      title: "Texte 1",
      author: "Foucault",
    },
    {
      id: 1,
      text:
        "La psychologie est la science qui vous apprend des choses que vous savez déjà en des termes que vous ne comprenez pas.",
      title: "Texte 2",
      author: "Nohain",
    },
    {
      id: 2,
      text:
        "Le dialogue paraît en lui-même constituer une renonciation à l'agressivité.",
      title: "Texte 3",
      author: "Lacan",
    },
    {
      id: 3,
      text:
        "L'inconscient, c’est le discours de l'autre.",
      title: "Texte 4",
      author: "Lacan",
    },
    {
      id: 4,
      text:
        "Un sujet normal est essentiellement quelqu'un qui se met dans la position de ne pas prendre au sérieux la plus grande part de son discours intérieur.",
      title: "Texte 5",
      author: "Lacan",
    },
  ];

  return (
    <Carousel
      infiniteLoop={true}
      autoPlay={true}
      interval={7000}
      transitionTime={500}
    >
      {texts.map((slide) => (
        <div key={slide.id}>
          <div className={"overlay"}>
            <div className={"icone-carousel"}>
              <FontAwesomeIcon icon={faComments} />
            </div>
            <p>{slide.text}</p>
            <h3>{slide.author}</h3>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselPsychologie;
