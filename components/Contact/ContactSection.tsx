import React from "react";
import Link from "next/link";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const ContactSection = () => {
  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  return (
    <div className={"contact-section"}>
      <div className={"contact-data"}>
        <div className={"contact-div"}>
          <div className={"contact-icone"}>
            <Link href="/">
              <FontAwesomeIcon icon={faHouseUser} />
            </Link>
          </div>
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
          <div className={"contact-icone"}>
            <FontAwesomeIcon icon={faPhone} />
          </div>
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
          <div className={"contact-icone"}>
            <Link href="/">
              <FontAwesomeIcon icon={faCalendarCheck} />
            </Link>
          </div>
          <div className={"contact-text"}>
            <h1>Horaires</h1>
            <ul>
              <li>Du Lundi au Vendredi de 9h à 17h sur rendez-vous</li>
              <li>
                <Link href="/">
                  <button>Prendre Rendez-Vous</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={"google-map-desktop"}>
        <iframe
          src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2984.877303186882!2d5.398113314863838!3d43.30890782028002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9bf7b4f133565%3A0x931e8b13b60e0eb1!2s155%20Av.%20des%20Chartreux%2C%2013004%20Marseille!5e0!3m2!1sfr!2sfr!4v1656668456083!5m2!1sfr!2sfr"}
          width={"600"}
          height={"670"}
          allowfullscreen={"yes"}
          loading={"lazy"}
          referrerpolicy={"no-referrer-when-downgrade"}
        ></iframe>
      </div>
      <div className={"google-map-mobile"}>
        <iframe
          src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2984.877303186882!2d5.398113314863838!3d43.30890782028002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9bf7b4f133565%3A0x931e8b13b60e0eb1!2s155%20Av.%20des%20Chartreux%2C%2013004%20Marseille!5e0!3m2!1sfr!2sfr!4v1656668456083!5m2!1sfr!2sfr"}
          width={"390"}
          height={"500"}
          allowfullscreen={"yes"}
          loading={"lazy"}
          referrerpolicy={"no-referrer-when-downgrade"}
        ></iframe>
      </div>
    </div>
  );
};

export default ContactSection;
