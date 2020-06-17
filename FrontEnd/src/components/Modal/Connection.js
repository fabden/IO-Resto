// == Import npm
import React from 'react';


// == Import

import './styles.css';

// == Composant
const Connection = () => (

<div className='row justify-content-center'>
    <form className='row m-2'>
        <div className='col-4  '>
            <label for="fname">Login:</label><br />
            <label for="lname">Mots de passe:</label>
        </div>
        <div className='col-7 '>
            <input type="text" id="fname" name="fname" />
            <input type="text" id="lname" name="lname" />
        </div>     
    </form>
    <input type="submit" value="Connection" />
</div>

);  

// == Export
export default Connection;