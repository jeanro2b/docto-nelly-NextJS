import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselPsychologie = () => {
  const texts = [
    {
      id: 0,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, similique soluta. Doloremque vero id dolorem magnam, voluptas natus odio obcaecati quos laboriosam saepe, modi illo cupiditate accusantium tempore fugiat error. Mais 1",
      title: "Texte 1",
    },
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, similique soluta. Doloremque vero id dolorem magnam, voluptas natus odio obcaecati quos laboriosam saepe, modi illo cupiditate accusantium tempore fugiat error.Mais 2",
      title: "Texte 2",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, similique soluta. Doloremque vero id dolorem magnam, voluptas natus odio obcaecati quos laboriosam saepe, modi illo cupiditate accusantium tempore fugiat error.Mais 3",
      title: "Texte 3",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, similique soluta. Doloremque vero id dolorem magnam, voluptas natus odio obcaecati quos laboriosam saepe, modi illo cupiditate accusantium tempore fugiat error.Mais 4",
      title: "Texte 4",
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, similique soluta. Doloremque vero id dolorem magnam, voluptas natus odio obcaecati quos laboriosam saepe, modi illo cupiditate accusantium tempore fugiat error.Mais 5",
      title: "Texte 5",
    },
  ];

  return (
    <Carousel infiniteLoop={true} autoPlay={true} interval={7000} transitionTime={500}>
      {texts.map((slide) => (
        <div key={slide.id}>
          <div className={"overlay"}>
            <div className={"icone-carousel"}><FontAwesomeIcon icon={faComments} /></div>
            <p>{slide.text}</p>
            <h3>Lacan ce gros bg</h3>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselPsychologie;
