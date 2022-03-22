// 1) Top level imports - useState, useEffect, import ReactRouterDOM (also import browserRouter in index.js)
import { useState, useEffect } from 'react';

import { getDatabase, ref, onValue, push, remove } from 'firebase/database';

import firebase from './firebase';


function SavedGifsDisplay(props) {

    const [savedGifsObject, setSavedGifsObject ] = useState( {} )
    
    useEffect(() => {
        const database = getDatabase(firebase)
        const dbRef = ref(database)

        onValue(dbRef, (response) => {
            const newState = response.val();

            setSavedGifsObject(newState)

        })
       
    }, [])
  
  

    return (
        <ul className="savedGifsDisplay"  >         
            {
  
         }
          
           
        
           
        </ul>
            
        
    )
}


export default SavedGifsDisplay;

//   <li>data array: {savedGifsObject.data}</li>
// <li>id: {savedGifsObject.id}</li>
// <li>url: {savedGifsObject.url}</li>  