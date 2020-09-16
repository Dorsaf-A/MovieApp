import React from 'react';
import App from './modal'

function AddMovie({addNewMovie}) {
    return (
        <div>
            <App addNewMovie={addNewMovie}/>  
        </div>
    )
}

export default AddMovie
