// 1) Top level imports - useState, useEffect, import ReactRouterDOM (also import browserRouter in index.js)
import { useState, useEffect } from 'react';

import { getDatabase, ref, onValue } from 'firebase/database';

import firebase from './firebase';


function SavedGifsDisplay(props) {

    const [savedGifsArray, setSavedGifsArray ] = useState([])
    
    useEffect(() => {
        const database = getDatabase(firebase)
        const dbRef = ref(database)

        onValue(dbRef, (response) => {
            const newState = response.val();
            const convertToArray = Object.entries(newState.data)
            setSavedGifsArray(convertToArray)
        })
       
    }, [])


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

