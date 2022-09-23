import React from "react";

import { useState } from "react";
import "../../App.css";

import Emplois from "../offres/Emplois";
import EmploiForm from "./EmploiForm";

const Tabs = ({ onOpen , formActive, backToList, emplois}) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Offres emplois
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Offres stages
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Offre en formation
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          {formActive ? <EmploiForm backToList={backToList}/> : <Emplois openModal={onOpen} emplois={emplois} /> }
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Content 2</h2>
          <hr />
          <p>
          Offre pour starges
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Content 3</h2>
          <hr />
          <p>
          Offre pour starges
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
