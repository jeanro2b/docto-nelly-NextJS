import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import 'animate.css';

const Description = ({ title, text }: any) => {
  const [description, setDescription] = React.useState(false);

  return (
    <div className={description ? "description-container" : "description-container"}>
      <h2>{title}</h2>
      {!description && (
        <FontAwesomeIcon
          icon={faArrowDown}
          onClick={() => setDescription(!description)}
        />
      )}
      {description && (
        <FontAwesomeIcon
          icon={faArrowUp}
          onClick={() => setDescription(!description)}
        />
      )}
      {description && (
        <div className={"description-container-texte animate__animated animate__fadeInDown"}>{text}</div>
      )}
    </div>
  );
};

export default Description;

{
  /* {!nameIsValid && <span>Vore nom doit être renseigné</span>} */
}
