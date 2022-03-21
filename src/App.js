import './App.css';

// 1) Top level imports - useState, useEffect, import ReactRouterDOM (also import browserRouter in index.js)
import { useState, useEffect } from 'react';

import { Link, Routes, Route, Outlet, useParams } from 'react-router-dom';

// import our components

import Search from './Search.js';

import SearchResultsDisplay from './SearchResultsDisplay';

import SavedGifsDisplay from './SavedGifsDisplay'

import { getDatabase, ref, onValue, push, remove } from 'firebase/database';
import firebase from './firebase';

// 2) functions that will update the states in App.js

// 3) Return statement - which renders userInput

function App() {

  // 4) Create out useStates for userInput and API data and firebase data
 // *************this should contain the user's name, word and gif(url)****************
  const [userInput, setUserInput] = useState('');

  const updateUserInput = (input) => {
    setUserInput(input.target.value)
  }

  // 5) Create a state to hold the data from the API 

  const [searchResults, setSearchResults] = useState({});

  const updateSearchResults = (results) => {
    console.log(results)
  }

  // saved-gifs-display **********************************************************************************
  // userRecord will be a string contains the user's name, word and gif(url) 
  const [ userRecord, setUserRecord ] = useState('')
  

  useEffect( () => {
    const database = getDatabase(firebase)
    const dbRef = ref(database)

    onValue(dbRef, (response) => {
      const newState = [];
      const data = response.val();
        for(let key in data) {
          newState.push({key: key, name: data[key]});
        }
    })
    setUserRecord(newState)
  })

  const handleSubmit = (event) => {
    event.preventDefault();

    const database = getDatabase(firebase);
    const dbRef = ref(database);
    push(dbRef, userInput); 
    // this should contain the user's name, word and gif(url) 
    setUserInput('');
  }

  const handleRemoval = (userRecordId) => {
  const database = getDatabase(firebase);
  const dbRef = ref(database, `/${userRecordId}`);
  remove(dbRef)
}
  // **********************************************************************************

  return (
    <div className="App">
      <header>
        <h1>Giphy App</h1>
        < Search userInput={userInput} searchResults={searchResults} updateSearchResults={updateSearchResults} handleUpdateUserInput={updateUserInput} />
        < SearchResultsDisplay searchResults={searchResults} />


        <Routes>
          <Route path="/:userRecord" element={ <SavedGifsDisplay user={userRecord}/> } />
        </Routes>
      </header>
    </div>
  );
}

export default App;
