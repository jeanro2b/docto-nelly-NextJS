const Presentation = () => {
  return (
    <div className={"presentation-container"}>
      <img src={"/images/profil_psy.jpeg"} alt={"Nelly"} />
      <div className={"presentation-texte"}>
        <h1>
          Bonjour, je suis <br />
          Nelly Amoretti
        </h1>
        <p>
          Titulaire d&#39;un master 2 en psychologie clinique et exerçant en tant
          que psychologue clinicienne, je vous accueille dans mon cabinet à
          Marseille. Ma formation, mon travail et mon écoute s&#39;orientent de la
          psychanalyse dont les courants de Freud et Lacan. Je propose de nous
          rencontrer puis, si vous le souhaitez, vous accompagner dans votre
          travail sur vous-même et vos interrogations &#40;quelles qu’elles soient :
          rupture, décès, symptômes divers et variés, dépression, angoisses…..&#41;.
          L&#39;éthique et la déontologie guident ma pratique, de même que la
          bienveillance et le non-jugement. Si vous désirez vous engager dans un
          tel travail mais ne connaissez pas bien les enjeux, n&#39;hésitez pas à vous inscrire sur ce site.
        </p>
      </div>
    </div>
  );
};

export default Presentation;
