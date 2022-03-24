// import useState and useEffect
import { useState, useEffect } from 'react';
// import axios
import axios from 'axios';
// import error handling component 
import ErrorHandling from './ErrorHandling';

function Search(props) {
    // 1) create states for error handling 
    const [errorState, setErrorState] = useState(
        {
            hasError: false,
            errorMessage: "",
            errorSource: ""
        }
    );

    // check if the user input is empty or has multiple words
    const validateInput = (input) => {
        if (input === "" || input.includes(" ")) {
            return false;
        } else {
            return true;
        }
    }

    // 2) Track the change event on the search form element 
    const handleChange = function (event) {
        // 3) take the value of the user’s search query and save it in state //
        props.handleUpdateUserInput(event);
    }

    // 4) make a axios call to retrive API data to take in user search query //
    const searchGifQuery = function (event) {
        // 10)  Prevent the default on the form AKA tell is to prevent its default behavior (refreshing the page once the user submits the form - or selects gifs to search)
        event.preventDefault();

        // validate the user input, then try to make an api call while catching any errors
        if (validateInput(props.userInput)) {
            try {
                axios({
                    url: 'https://api.giphy.com/v1/gifs/search',
                    params: {
                        api_key: 'kv1PZUje6Yh0cj4AfwHkzGUyUUbW7WI7',
                        q: `${props.userInput}`,
                        limit: 20,
                    }
                }).then((apiData) => {
                    // Need title, id, and url data back
                    props.handleUpdateSearchResults(apiData.data.data);
                });
            } catch (error) {
                setErrorState(
                    {
                        hasError: true,
                        errorMessage: error,
                        errorSource: "api"
                    }
                )
            }
        }
    }

    return (
        <section id="search">
            <div className='searchFormContainer'>
                <form className="searchForm" action="" onSubmit={(event) => {
                    searchGifQuery(event)
                }}>

                    <input type="text" placeholder="   Search for your Gifs here..." name="search" value={props.userInput} onChange={handleChange} />
                    <button>Search</button>

                </form>
            </div>
            < ErrorHandling userInput={props.userInput} error={errorState.errorMessage} source={errorState.errorSource} hasError={errorState.hasError} />
        </section>

    )

}

export default Search;