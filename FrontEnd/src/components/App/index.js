// == Import npm
import React from 'react';

// == Import css
import './styles.css';

//==Import Composant Right
import HeaderRight from '../Right/Header';
import SectionDescritptionRight from '../Right/SectionDescription';
import FooterRight from '../Right/Footer';

//==Import Composant Left 
import HeaderLeft from '../Left/Header';
import SectionMenu from '../Left/SectionMenu';
import FooterLeft from '../Left/Footer';



// == Composant
const App = () => (
<div className="container">
  <div className="row ">
    <section className="col-md-6 col-12 order-1 bg-success sectionLeft">
      <HeaderLeft />
      <SectionMenu />
      <FooterLeft />
    </section>
    <section className="col-md-6 col-12 order-md-2 bg-warning sectionRight">
      <HeaderRight />
      <SectionDescritptionRight />
      <FooterRight />
    </section>
  </div>
</div>
);

// == Export
export default App;
