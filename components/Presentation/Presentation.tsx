const Presentation = () => {
  return (
    <div className={"presentation-container"}>
      <img src={"/images/nelly.jpeg"} alt={"Nelly"} />
      <div className={"presentation-texte"}>
        <h1>
          Bonjour, je suis <br />
          Nelly Amoretti
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          qui laborum, enim aliquam nisi officiis ut officia rem cupiditate
          possimus magnam autem dolores? Corporis quaerat explicabo consectetur
          fugit beatae dolorum!
        </p>
      </div>
    </div>
  );
};

export default Presentation;
