// == Import npm
import React from 'react';


// == Import

import './styles.css';

// == Composant
const Inscription = () => (

<div className='row justify-content-center'>
    <form className='row m-2'>
        <div className='col-4  '>
            <label form="fname">Nom :</label><br />
            <label form="lname">Prenom :</label><br />
            <label form="lname">Email :</label><br />
            <label form="lname">Telephone :</label><br />
            <label form="lname">Mots de passe  :</label><br />
            <label form="lname">confirmer :</label>

        </div>
        <div className='col-7 '>
            <input type="text" id="fname" name="fname " />
            <input type="text" id="lname" name="lname " /><br />
            <input type="text" id="fname" name="fname " />
            <input type="text" id="lname" name="lname " /><br />
            <input type="text" id="lname" name="lname " />
            <input type="text" id="lname" name="lname " />
        </div>     
    </form>
    <input type="submit" value="Inscription" />
</div>

);

// == Export
export default Inscription;