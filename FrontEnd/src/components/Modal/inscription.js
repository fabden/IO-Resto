// == Import npm
import React from 'react';


// == Import

import './styles.css';

// == Composant
const Inscription = () => (

<div className='row justify-content-center'>
    <form className='row m-2 justify-content-center'>
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
        <input type="submit" value="Inscription" />   
    </form>
    
</div>

);

// == Export
export default Inscription;