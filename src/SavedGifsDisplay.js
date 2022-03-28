// 1) Top level imports - useState, useEffect, import ReactRouterDOM (also import browserRouter in index.js)
import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import firebase from './firebase';

function SavedGifsDisplay(props) {
    // initialize a state to store the gifs held in database
    const [savedGifsArray, setSavedGifsArray ] = useState([])
    
    // As database changes update display 
    useEffect(() => {
        // create a variable to hold db values
        const database = getDatabase(firebase)
        // create a variable to hold a reference to the database
        const dbRef = ref(database)

        onValue(dbRef, (response) => {
            // create a variable to hold database response
            const newState = response.val();
            // use entries to convert object into an array
            const convertToArray = Object.entries(newState.data)
            // update state
            setSavedGifsArray(convertToArray)
        })
       
    }, [])

    // loop through savedGifsArray and display date, search term and gif.
    return (
        <ul className="savedGifsDisplay"  >         
            {
                savedGifsArray.map((entry) => {
                    return (
                        <li className="userEntry" key={entry[1].id}> 
                            <div className="dateAndTerm">                    
                                <p>{entry[1].date.day}/{entry[1].date.month}/{entry[1].date.year}</p>   
                                <p><span>Search Term:</span> {entry[1].searchTerm}</p>
                            </div>  
                            <div className="savedGifDisplayImg">
                                <img src={entry[1].srcUrl} alt={entry[1].altText} />                           
                            </div>  
                        </li>
                    )
                })
            }
        </ul>
            
        
    )
}

export default SavedGifsDisplay;

