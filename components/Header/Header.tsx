import React from "react";
import ReactDOM from "react-dom";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../hooks/auth";
import LOGO from "../../public/images/LOGO.png";

const Header = () => {
  const { user, logout } = useAuth();
  const id = user?.id;
  console.log(id);

  const [showMenu, setShowMenu] = React.useState(false);
  const [navbar, setNavbar] = React.useState(false);

  let menu = "menu-mobile hidden";
  if (showMenu) {
    menu = "menu-mobile";
  }

  let nav = "navbar-desktop";
  if (navbar) {
    nav = "navbar-desktop scroll";
  } else {
    nav = "navbar-desktop";
  }

  const changeNavbar = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", changeNavbar);
  }, []);

  return (
    <>
      <div className={"heeader"}>
        <div className={"navbar-mobile"}>
          <div
            className={"button-menu-mobile"}
            onClick={() => setShowMenu(!showMenu)}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className={"logo"}>
            <Link href="/">
              <img src={"/images/LOGO.png"} />
            </Link>
          </div>
          <div className={"button-profile"}>
            {!id &&
              <Link  href="/login">
                <FontAwesomeIcon icon={faUser} />
              </Link>
            }
          </div>
        </div>
        <div className={menu}>
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
            {id && (
              <li>
                <Link href="/slot-success">Reservations</Link>
              </li>
            )}
            {id && (
              <li>
                <button onClick={logout}>Déconnexion</button>
              </li>
            )}
            {!id && (
              <li>
                <Link href="/login">Connexion</Link>
              </li>
            )}
          </ul>
        </div>
        <div className={nav}>
          <div className={"logo"}>
            <Link href="/">
              <img src={"/images/LOGO.png"}></img>
            </Link>
          </div>
          <ul>
            <li>
              <Link href="/">ACCUEIL</Link>
            </li>
            <li>
              <Link href="/psychologie">LA PSYCHOLOGIE LACANIENNE</Link>
            </li>
            <li>
              <Link href="/tarifs">TARIFS</Link>
            </li>
            <li>
              <Link href="/contact">CONTACT</Link>
            </li>
            {id && (
              <li>
                <Link href="/slot-success">RESERVATIONS</Link>
              </li>
            )}
            {id && (
              <li>
                <button onClick={logout}>DÉCONNEXION</button>
              </li>
            )}
            {!id && (
              <li>
                <Link href="/login">CONNEXION</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
