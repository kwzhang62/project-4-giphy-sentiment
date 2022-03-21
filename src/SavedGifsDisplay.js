// 1) Top level imports - useState, useEffect, import ReactRouterDOM (also import browserRouter in index.js)
import { useState, useEffect } from 'react';

import { getDatabase, ref, onValue, push, remove } from 'firebase/database';

import firebase from './firebase';


function SavedGifsDisplay(props) {

    const [savedGifs, setSavedGifs] = useState([])


    useEffect(() => {
        const database = getDatabase(firebase)
        const dbRef = ref(database)

        onValue(dbRef, (response) => {
            const newState = response.val();
            // console.log(response.val());
            setSavedGifs(newState.data);
        })
    }, [])


    return (
        <ul className="savedGifsDisplay"  >

            <li key={savedGifs.id}>
                {/* <p>{savedGifs[0].id}</p> */}
                {/* <p>User Name: {props.user.name}</p> */}
                {/* <p>User's word: {props.user.word}</p>
                <div>User's gif selection:
                    <img src={props.user.url} alt="" /> */}
                {/* </div> */}
            </li>
        </ul >
    )
}






export default SavedGifsDisplay;