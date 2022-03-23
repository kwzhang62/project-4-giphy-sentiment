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

  // 4) Create our useStates for userInput and API data and firebase data
  // *************this should contain the user's name, word and gif(url)****************
  const [userInput, setUserInput] = useState('');

  const updateUserInput = (input) => {
    setUserInput(input.target.value)
  }

  // 5) Create a state to hold the data from the API 

  const [searchResults, setSearchResults] = useState([]);

  const updateSearchResults = (results) => {
    // console.log(results);
    setSearchResults(results);
    // console.log(searchResults);
  }

 


  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/savedGifsDisplay">Display Saved Gifs</Link>
            </li>
          </ul>
        </nav>
        <h1>Giphy App</h1> 
        <Routes> 
          <Route path="/home" 
            element={
              <div>
                <Search userInput={userInput} searchResults={searchResults} handleUpdateSearchResults={updateSearchResults} handleUpdateUserInput={updateUserInput} /> 
                <SearchResultsDisplay userInput={userInput} searchResults={searchResults} /> 
              </div>
            } 
          />
          <Route path="/savedGifsDisplay" element={<SavedGifsDisplay />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
// < SavedGifsDisplay />