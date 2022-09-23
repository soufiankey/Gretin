import React from "react";

const Navbar = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="main-nav">
            <div className="item">
              <a href="index.html" className="logo"></a>
              <span className="caption">Gretin Group</span>
            </div>

            <ul className="nav">
              <li>
                <a href="groupe.html">Groupe</a>
              </li>
              <li>
                <a href="secteur.html">Secteurs</a>
              </li>

              <li>
                <a href="engagement.html">Engagements</a>
              </li>
              <li>
                <a href="media.html">Media</a>
              </li>
              <li>
                <a href="recrutements.html">Recrutements</a>
              </li>
              <div className=""></div>
            </ul>
            <a className="menu-trigger">
              <span>Menu</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
