// == Import npm
import React from 'react';

//= =import composant

import ItemMenuPromo from './ItemMenuPromo';

// == Import

import './styles.css';

// == Composant
const SectionDescriptionRight = () => (
  <div className="row justify-content-center">
    <div className="col-12 text-center text-white ">
      <p className="">lorem ipsum dolor sit amet!</p>
    </div>
    <ItemMenuPromo />
    <ItemMenuPromo />
    <p className="text-white">LUNDI-SAMEDI 17H - 22H</p>
    <div className="img-thumbnail align-text-bottom col-11 " />
  </div>
);

// == Export
export default SectionDescriptionRight;
