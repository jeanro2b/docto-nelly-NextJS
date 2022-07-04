import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className={"footer-container"}>
      <div className={"footer-section-lr"}>
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
      <div className={"footer-section-lr"}>
        <h1>Me trouver</h1>
        <div className={"google-map-desktop"}>
        <iframe
          src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2984.877303186882!2d5.398113314863838!3d43.30890782028002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9bf7b4f133565%3A0x931e8b13b60e0eb1!2s155%20Av.%20des%20Chartreux%2C%2013004%20Marseille!5e0!3m2!1sfr!2sfr!4v1656668456083!5m2!1sfr!2sfr"}
          width={"350"}
          height={"280"}
          loading={"lazy"}
        ></iframe>
      </div>
      <div className={"google-map-mobile"}>
        <iframe
          src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2984.877303186882!2d5.398113314863838!3d43.30890782028002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9bf7b4f133565%3A0x931e8b13b60e0eb1!2s155%20Av.%20des%20Chartreux%2C%2013004%20Marseille!5e0!3m2!1sfr!2sfr!4v1656668456083!5m2!1sfr!2sfr"}
          width={"300"}
          height={"300"}
          loading={"lazy"}
        ></iframe>
      </div>
      </div>
    </div>
  );
};

export default Footer;
