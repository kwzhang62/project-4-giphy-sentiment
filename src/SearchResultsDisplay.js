import { useEffect, useState } from 'react';
import firebase from './firebase';
import { getDatabase, ref, push } from 'firebase/database';
import ErrorHandling from './ErrorHandling';

function SearchResultsDisplay(props) {
    
    //initialize a state to hold the results from the search
    const [gifResults, setGifResults] = useState([]);

    //initialize a state to hold the user search query
    const [searchQuery, setSearchQuery] = useState("");

    //initialize a state to track errors
    const [errorState, setErrorState] = useState(
        {
            hasError: false,
            errorMessage: ""
        }
    );

    //update gifResults when the searchResults change
    useEffect( () => {
        //set searchQuery to the user input when they make a search
        setSearchQuery(props.userInput)

        //do some data handling with props.searchResults then put it into gifResults
        const gifData = [];
        props.searchResults.forEach((result) => {
            gifData.push(
                {
                    id: result.id,
                    altText: result.title,
                    srcUrl: result.images.original.url
                }
            );
        });

        setGifResults(gifData);
    }, [props.searchResults])

    //saves the gif and date to the database when the Save Gif button is clicked
    const handleSaveGif = (savedGif) => {
        //create object about the gif being saved
        const savedGifData = {};

        //get the data about the gif
        savedGifData.id = savedGif.id;
        savedGifData.altText = savedGif.altText;
        savedGifData.srcUrl = savedGif.srcUrl;

        //include information about the date and search term
        savedGifData.searchTerm = searchQuery;

        //create an object within the savedGifData object with information about the date when the gif is saved
        savedGifData.date = getCurrentDate();

        //update the database
        updateDatabase(savedGifData);
    }

    //returns an object with information about the current date
    const getCurrentDate = () => {
        //create an object to hold the day, month, and year for the current date
        const currentDate = {}
        //create a Date object
        const date = new Date();

        //save the day of the month to currentDate
        currentDate.day = date.getDate();
        //save the month to currentDate (0 - 11)
        currentDate.month = date.getMonth();
        //save the year to currentDate
        currentDate.year = date.getFullYear();

        return currentDate;
    }

    // connects to firebase and pushes an object containing information about the saved gif
    const updateDatabase = (data) => {
        try {
            const database = getDatabase(firebase);
            const dbRef = ref(database, `/data`);
    
            push(dbRef, data);
            
        } catch (error) {
            //update the errorState state when an error has been caught
            setErrorState(
                {
                    hasError: true,
                    errorMessage: error,
                    errorSource: "firebase"
                }
            );
        }
    }

    return (
        <section id='searchResults'>
            <h2>{searchQuery} Gifs</h2>
            {
                //send any errors that occurs to the error handling component
                errorState.hasError ? <ErrorHandling error={errorState.errorMessage}/> : null
            }
            <div className="searchResultsGallery">
                <ul>
                    {
                        gifResults.map( (gif)=> {
                            return (
                                <li key={gif.id}>
                                    <img src={`${gif.srcUrl}`} alt={`${gif.altText}`} />
                                    <button onClick={()=>{handleSaveGif(gif)}}>Save Gif</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default SearchResultsDisplay;