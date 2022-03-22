import { useEffect, useState } from 'react';
import firebase from './firebase';
import { getDatabase, ref, push } from 'firebase/database';

function SearchResultsDisplay(props) {
    
    //initialize a state to hold the results from the search
    const [gifResults, setGifResults] = useState([]);

    //update gifResults when the searchResults change
    useEffect( () => {
        //do some data handling with props.searchResults then put it into gifResults

        const gifData = [];
        props.searchResults.forEach((result)=>{
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
        savedGifData.searchTerm = "";//props.userInput;

        //create a date object for the current date
        const saveDate = new Date();
        //create a date object within the savedGifData object to save to the database
        savedGifData.date = {};
        //save the day of the month to the date object
        savedGifData.date.day = saveDate.getDate();
        //save the month to the date object (0 - 11)
        savedGifData.date.month = saveDate.getMonth();
        //save the year to the date object
        savedGifData.date.year = saveDate.getFullYear();

        //update the database
        const database = getDatabase(firebase);
        const dbRef = ref(database, `/data`);

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