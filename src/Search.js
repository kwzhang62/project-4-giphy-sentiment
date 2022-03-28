// import useState and useEffect
import { useState, useEffect } from 'react';
// import axios
import axios from 'axios';
// import error handling component 
import ErrorHandling from './ErrorHandling';

function Search(props) {
    //create state to track whether the api call has resolved
    //show a loading message when it is false and nothing when it is true
    //set as true initially so nothing shows up when the page loads
    const [searchResolved, setSearchResolved] = useState(true);

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
            //clear any previous errors
            setErrorState(
                {
                    hasError: false,
                    error: "",
                    errorSource: ""
                }
            )

            //show loading message once the input has been validate and the api call is being made
            setSearchResolved(false);
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
                //hide the loading message if the api call returns an error
                setSearchResolved(true);
                setErrorState(
                    {
                        hasError: true,
                        errorMessage: error,
                        errorSource: "api"
                    }
                )
            }
        } else {
            setErrorState(
                {
                    hasError: true,
                    errorMessage: "Please enter a single search term",
                    errorSource: "userInput"
                }
            )
        }
    }

    // hide the loading message once searchResults has been updated
    useEffect(() => {
        setSearchResolved(true);
    }, [props.searchResults])

    return (
        <section id="search">
            <div className='searchFormContainer'>
                <h2>Search for some Gifs</h2>
                <p>Find a gif that matches your mood! Enter a single search term:</p><br />
                <form className="searchForm" action="" onSubmit={(event) => {
                    searchGifQuery(event)
                }}>

                    <input type="text" placeholder="Search for your Gifs" name="search" value={props.userInput} onChange={handleChange} />
                    <button><i className="fas fa-search"></i></button>
                </form>
            </div>
            {
                searchResolved ? null : <p>"Searching for gifs, please wait a moment..."</p>
            }
            < ErrorHandling userInput={props.userInput} error={errorState.errorMessage} source={errorState.errorSource} hasError={errorState.hasError} />
        </section>

    )

}

export default Search;