// == Import npm
import React from 'react';

//= = import componant
import ItemMenuLeft from './ItemMenuLeft';

// == Import

import './styles.css';

// == Composant
const SectionMenu = () => (
  <div className="row justify-content-center">
    <ItemMenuLeft />
    <ItemMenuLeft />
    <ItemMenuLeft />
    <ItemMenuLeft />
    <ItemMenuLeft />
    <ItemMenuLeft />
    <ItemMenuLeft />
    <ItemMenuLeft />

    <div className=" text-center col-6 mt-3 img-thumbnail">
      promddd
    </div>
    <div className=" text-center col-6 mt-3 img-thumbnail">
      promo
    </div>
  </div>


);

// == Export
export default SectionMenu;
