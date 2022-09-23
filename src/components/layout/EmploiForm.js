import React, { useRef } from "react";
import emailjs from '@emailjs/browser';


import { FaArrowCircleLeft } from "react-icons/fa";

const EmploiForm = ({ backToList }) => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sgwmm09', 'template_3ne3loe', form.current, 'brcLdOI_A0XWhA9ai')
      .then((result) => {
        console.log(result.text);
        console.log('messege sent')
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
      <FaArrowCircleLeft
        className="ml-auto"
        role="button"
        onClick={backToList}
      />
      <form className="w-75 mx-auto" ref={form} onSubmit={sendEmail}>
        <div className="form-row d-flex justify-content-around my-5">
          <div className="form-group col-4 ">
            <label htmlFor="nom">Nom</label>
            <input
              name="user_firstName"
              type="text"
              className="form-control"
              id="nom"
              placeholder="Entrer votre nom"
            />
          </div>
          <div className="form-group col-4 ">
            <label htmlFor="cv">C.V</label>
            <input
              name="user_cv"
              type="file"
              className="form-control"
              id="cv"
              placeholder="joindre un fichier"
             
            />
          </div>
        </div>
        <div className="form-row d-flex justify-content-around my-5">
          <div className="form-group col-4 ">
            <label htmlFor="prenom">Prenom</label>
            <input
              name="user_lastName}"
              type="text"
              className="form-control"
              id="prenom"
              placeholder="Entrer votre prenom"
            />
          </div>
          <div className="form-group col-4 ">
            <label htmlFor="lettre-motivation">Lettre de motivation</label>
            <input
              name="user_lettreDeMotivation"
              type="file"
              className="form-control"
              id="lettre-motivation"
              placeholder="joindre un fichier"
            />
          </div>
        </div>
        <div className="form-row d-flex justify-content-around my-5">
          <div className="form-group col-4 ">
            <label htmlFor="email">Adresse mail</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Entrer votre Email"
              name="user_email"
            />
          </div>
          <div className="form-group col-4 ">
            <input
              value="Envoyer"
              type="submit"
              className="btn btn-primary form-control "
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default EmploiForm;
