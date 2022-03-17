// import useState and useEffect
import { useState, useEffect } from 'react';
// import axios
import axios from 'axios';

function Search(props) {

    const handleInputChange = (event) => {
        props.handleUpdateUserInput(event);
    }

    return (
        <p>test</p>
        // insert form here
    )
}

export default Search;