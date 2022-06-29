import React from "react";
import Link from "next/link";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

const ContactSection = () => {


  return (
    <div className={"contact-section"}>
      <div className={"contact-data"}>
        <div className={"contact-div"}>
          <div className={"contact-icone"}><Link href="/"><FontAwesomeIcon icon={faHouseUser} /></Link></div>
          <div className={"contact-text"}>
            <h1>Nelly Amoretti</h1>
            <ul>
              <li>Psychologue Clinicienne - Marseille</li>
              <li>Adulte - Adolescent - Sénior - Famille</li>
              <li>Master blablabla</li>
              <li>Spécialisée en blablabla</li>
            </ul>
          </div>
        </div>
        <div className={"contact-div"}>
          <div className={"contact-icone"}><FontAwesomeIcon icon={faPhone} /></div>
          <div className={"contact-text"}>
            <h1>Me contacter</h1>
            <ul>
              <li>Tel : 06 06 06 06 06</li>
              <li>Mail : jclegrosbg@hotmail.fr</li>
              <li>12 avenue de JC le gros BG</li>
              <li>Centre paramédical de mon zbi</li>
            </ul>
          </div>
        </div>
        <div className={"contact-div"}>
          <div className={"contact-icone"}><Link href="/"><FontAwesomeIcon icon={faCalendarCheck} /></Link></div>
          <div className={"contact-text"}>
            <h1>Horaires</h1>
            <ul>
              <li>Du Lundi au Vendredi de 9h à 17h sur rendez-vous</li>
              <li><Link href="/"><button>Prendre Rendez-Vous</button></Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={"google-map"}>La carte google map</div>
    </div>
  );
};

export default ContactSection;
