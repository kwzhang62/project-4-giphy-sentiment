// import useState and useEffect
import { useState, useEffect } from 'react';
// import axios
import axios from 'axios';

function Search(props) {

    axios({
        url: 'https://api.giphy.com/v1/gifs/search',
        params: {
            api_key: 'kv1PZUje6Yh0cj4AfwHkzGUyUUbW7WI7',
            q: 'hamburgers',
            limit: 20,
        }
    }).then((apiData) => {
        console.log(apiData);

        //     const handleInputChange = (event) => {
        //         props.handleUpdateUserInput(event);
        //     }
        // }

    })

    return (
        <p> test</p >
        // insert form here
    );
}

export default Search;