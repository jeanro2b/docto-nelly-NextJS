import React from "react";

const Register = () => {
  const nameInputRef = React.useRef<HTMLInputElement>();
  const middleNameInputRef = React.useRef<HTMLInputElement>();
  const emailInputRef = React.useRef<HTMLInputElement>();
  const phoneInputRef = React.useRef<HTMLInputElement>();

  const [nameIsValid, setNameIsValid] = React.useState(true);
  const [middleNameIsValid, setMiddleNameIsValid] = React.useState(true);
  const [mailIsValid, setMailIsValid] = React.useState(true);
  const [phoneIsValid, setPhoneIsValid] = React.useState(true);
  const [formIsValid, setFormIsValid] = React.useState(true);

  const formSubmissionHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredName = nameInputRef.current!.value;
    const enteredMiddleName = middleNameInputRef.current!.value;
    const enteredMail = emailInputRef.current!.value;
    const enteredPhone = phoneInputRef.current!.value;

    if (enteredName.trim() === "") {
      setNameIsValid(false);
    } else {
      setNameIsValid(true);
    }
    if (enteredMiddleName.trim() === "") {
      setMiddleNameIsValid(false);
    } else {
      setMiddleNameIsValid(true);
    }
    if (enteredMail.trim() === "" || !enteredMail.trim().includes("@")) {
      setMailIsValid(false);
    } else {
      setMailIsValid(true);
    }
    if (enteredPhone.trim() === "") {
      setPhoneIsValid(false);
    } else {
      setPhoneIsValid(true);
    }

    if (!enteredMail || !enteredName || !enteredMiddleName || !enteredPhone) {
      setFormIsValid(false);
    } else {
      setFormIsValid(true);
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
            type="text"
            placeholder="Téléphone"
            id="phone"
            ref={phoneInputRef}
          ></input>
          {!phoneIsValid && <span>Votre téléphone doit être renseigné</span>}
        </div>
        <div className={"actions"}>
          <button>ENVOYER</button>
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
