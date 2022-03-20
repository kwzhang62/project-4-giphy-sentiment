import { useEffect, useState } from 'react';
import firebase from './firebase';
import { getDatabase, ref, push } from 'firebase/database';

function SearchResultsDisplay(props) {
    
    //initialize a state to hold the results from the search
    const [gifResults, setGifResults] = useState([]);

    //update gifResults when the searchResults change
    useEffect( () => {

        //do some data handling with props.searchResults then put it into gifResults

    }, [props.searchResults])

    //saves the gif and date to the database when the Save Gif button is clicked
    const handleSaveGif = (event) => {
        //get data about the gif being saved
        const savedGif = '';

        //create a date object
        const saveDate = new Date();

        //create object holding both the gif data and the date data
        const savedGifData = {};

        //const to firebase
        const database = getDatabase(firebase);
        const dbRef = ref(database);

        push(dbRef, savedGifData);
    }

    return (
        <section id='searchResults'>
            <h2>{props.userInput} Gifs</h2>
            <div className="searchResultsGallery">
                <ul>
                    {
                        gifResults.map( (gif)=> {
                            return (
                                <li>
                                    <img src="" alt="" />
                                    <button onClick={handleSaveGif}>Save Gif</button>
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