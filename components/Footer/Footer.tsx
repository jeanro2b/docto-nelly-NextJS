import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className={"footer-container"}>
      <div>
        <h1>Psychologue Marseille</h1>
        <ul>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/psychologie">La psychologie Lacanienne</Link>
          </li>
          <li>
            <Link href="/tarifs">Tarifs</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className={"footer-section"}>
        <h1>Coordonnées</h1>
        <ul>
          <li>Avenue de JC le Gros BG</li>
          <li>06 12 12 12 12</li>
          <li>jclegrosbg@hotmail.fr</li>
          <li>Numéro Adeli : 12 12 12 12 12</li>
          <li>Numéro de Siret : 121 121 121 000 12</li>
        </ul>
      </div>
      <div>
        <h1>Me trouver</h1>
        <div>Carte</div>
      </div>
    </div>
  );
};

export default Footer;
