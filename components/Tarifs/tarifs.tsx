import React from "react";

const TarifsTexte = () => {
  return (
    <div className={"tarifs-container"}>
      <h2>Mon choix sur les tarifs d&#39;une séance</h2>
      <p>
        A l&#39;instar de mon orientation, les tarifs des séances se pensent au cas
        par cas et ensemble, entre le practicien et le patient.
        <br />
        La 1ère séance n&#39;est pas facturée dans la mesure où je travaille à
        partir de l&#39;alliance thérapeutique et a fortiori du transfert.
        <br />
        <br />
        Si à l&#39;issue de cette séance le sujet ne se sent pas à même de continuer
        avec moi, il serait à mon sens inopportun de facturer un travail qui
        n&#39;aura pas lieu.
        <br />
        Les prix des séances suivantes seront pensées avec le patient en
        fonction des paramètres suivants : les <strong>ressources personnelles</strong> du
        patient et le <strong>coût psychique</strong>. En effet, ce travail doit coûter assez
        pour s&#39;y engager mais pas trop pour ne pas l&#39;entraver.
      </p>
    </div>
  );
};

export default TarifsTexte;
