// import useState and useEffect
import { useState, useEffect } from 'react';
// import axios
import axios from 'axios';

function Search(props) {

    // 1) initialize state to track the changing value of the user input on the search form //

    const [searchValue, setSearchValue] = useState('');

    // 2) Track the change event on the search form element 

    const handleChange = function (event) {

        // 3) take the value of the user’s search query and save it in state //

        setSearchValue(event.target.value);

    }

    // 4) make a axios call to retrive API data to take in user search query //

    useEffect(() => {

        axios({
            url: 'https://api.giphy.com/v1/gifs/search',
            params: {
                api_key: 'kv1PZUje6Yh0cj4AfwHkzGUyUUbW7WI7',
                q: searchValue,
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

    const searchGifQuery = function (event) {

        // 10)  Prevent the default on the form AKA tell is to prevent its default behavior (refreshing the page once the user submits the form - or selects videos to search)
        event.preventDefault();

    }

    return (

        <form action="" onSubmit={(event) => {
            searchGifQuery(event, searchValue)
        }} value={searchValue}>

            <input type="text" placeholder="   Search for your Gifs here..." name="search" />

            <button>Search</button>

        </form>

    )

    // console.log(props.searchResults);

    // return (
    //     <p>  {`${props.searchResults[0]}`}</p>
    //     // insert form here
    // );
}

export default Search;