// import useState and useEffect
import { useState, useEffect } from 'react';
// import axios
import axios from 'axios';

function Search(props) {

    useEffect(() => {

        axios({
            url: 'https://api.giphy.com/v1/gifs/search',
            params: {
                api_key: 'kv1PZUje6Yh0cj4AfwHkzGUyUUbW7WI7',
                q: 'hamburgers',
                limit: 20,
            }
        }).then((apiData) => {

            // Need title, id, and url data back 
            props.handleUpdateSearchResults(apiData.data.data);


            //     const handleInputChange = (event) => {
            //         props.handleUpdateUserInput(event);
            //     }
            // }

        })

    }, [])

    // console.log(props.searchResults);

    return (
        <p>  {`${props.searchResults[0]}`}</p>
        // insert form here
    );
}

export default Search;