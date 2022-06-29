import React from "react";

const ImageSection = (props) => {
  return (
    <>
      <div className={"background-image"}>
        <div className={"title-texte"}>
          <h1>Nelly Amoretti</h1>
          <p>Psychologue Clinicienne</p>
          <button onClick={props.goToRegister}>Prendre Rendez-vous</button>
        </div>
      </div>
    </>
  );
};

export default ImageSection;
