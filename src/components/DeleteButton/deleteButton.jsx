import React from 'react';
import '../DeleteButton/deleteButton.css'

const DeleteButton = (props) => {

    return(
        <button onClick={props.deleteSong}>Delete </button>
    )
}
 
export default DeleteButton;