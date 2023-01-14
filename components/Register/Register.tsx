import React from "react";
import { useAuth } from '../../hooks/auth'

const Register = () => {
  const nameInputRef = React.useRef<HTMLInputElement>();
  const middleNameInputRef = React.useRef<HTMLInputElement>();
  const emailInputRef = React.useRef<HTMLInputElement>();
  const phoneInputRef = React.useRef<HTMLInputElement>();
  const passwordInputRef = React.useRef<HTMLInputElement>();

  const [nameIsValid, setNameIsValid] = React.useState(true);
  const [middleNameIsValid, setMiddleNameIsValid] = React.useState(true);
  const [mailIsValid, setMailIsValid] = React.useState(true);
  const [passwordIsValid, setPasswordIsValid] = React.useState(true);
  const [phoneIsValid, setPhoneIsValid] = React.useState(true);
  const [formIsValid, setFormIsValid] = React.useState(true);

  const [errors, setErrors] = React.useState([])
  const [status, setStatus] = React.useState(null)

  const { register } = useAuth();

  const formSubmissionHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const name = nameInputRef.current!.value;
    const middleName = middleNameInputRef.current!.value;
    const mail = emailInputRef.current!.value;
    const phone = phoneInputRef.current!.value;
    const password = passwordInputRef.current!.value;

    if (name.trim() === "") {
      setNameIsValid(false);
    } else {
      setNameIsValid(true);
    }
    if (middleName.trim() === "") {
      setMiddleNameIsValid(false);
    } else {
      setMiddleNameIsValid(true);
    }
    if (mail.trim() === "" || !mail.trim().includes("@")) {
      setMailIsValid(false);
    } else {
      setMailIsValid(true);
    }
    if (password.trim() === "" || password.length < 8) {
      setPasswordIsValid(false);
    } else {
      setPasswordIsValid(true);
    }
    if (phone.trim() === "") {
      setPhoneIsValid(false);
    } else {
      setPhoneIsValid(true);
    }

    if (!mail || !name || !middleName || !phone || !password) {
      setFormIsValid(false);
    } else {
      setFormIsValid(true);

      register({
        name,
        middleName,
        mail,
        password,
        password_confirmation: password,
        phone,
        setErrors,
    })
    }
  };

  return (
    <div className="form-container">
      <form className={"form"} onSubmit={formSubmissionHandler}>
        <div className={"control"}>
          <input
            type="text"
            placeholder="Nom"
            id="nom"
            ref={nameInputRef}
          ></input>
          {!nameIsValid && <span>Vore nom doit être renseigné</span>}
        </div>
        <div className={"control"}>
          <input
            type="text"
            placeholder="Prénom"
            id="middleName"
            ref={middleNameInputRef}
          ></input>
          {!middleNameIsValid && <span>Votre prénom doit être renseigné</span>}
        </div>
        <div className={"control"}>
          <input
            type="email"
            placeholder="Mail"
            id="email"
            ref={emailInputRef}
          ></input>
          {!mailIsValid && <span>Un email valide doit être renseigné</span>}
        </div>
        <div className={"control"}>
          <input
            type="password"
            placeholder="Mot de passe"
            id="password"
            ref={passwordInputRef}
          ></input>
          {!passwordIsValid && <span>Un mot de passe valide de 8 caractères mini doit être renseigné</span>}
        </div>
        <div className={"control"}>
          <input
            type="text"
            placeholder="Téléphone"
            id="phone"
            ref={phoneInputRef}
          ></input>
          {!phoneIsValid && <span>Votre téléphone doit être renseigné</span>}
        </div>
        <div className={"actions"}>
          <button>INSCRIPTION RAPIDE</button>
        </div>
      </form>
      {!formIsValid && (
        <div className={"error-form"}>
          <p>
            Un ou plusieurs champs comportent une erreur. Veuilliez réessayer.
          </p>
        </div>
      )}
    </div>
  );
};

export default Register;
