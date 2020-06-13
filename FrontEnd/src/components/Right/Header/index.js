// == Import npm
import React from 'react';

// == Import

import './styles.css';

// == Composant
const HeaderRight = () => (
  <header className="row justify-content-center">
    <div className="col-12 text-center text-white ">
      <h1 className=" mt-4 mb-n2 display-2"><span className="HeaderRight_title_span ">FAST</span>FOOD</h1>
      <p className=" col-12 h2">RESTAURANT</p>
    </div>
    <div className="col-12 text-center text-white my-3">
      <span className=" h2 ">*</span>
      <p className="text-danger font-italic h3">MENU HUMBERGER</p>
      <p className="text-white">Humberger et boisson</p>
    </div>
  </header>
);

// == Export
export default HeaderRight;
