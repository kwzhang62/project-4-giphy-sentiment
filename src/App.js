import './App.css';

// 1) Top level imports - useState, useEffect, import ReactRouterDOM (also import browserRouter in index.js)
import { useState, useEffect } from 'react';

import { Link, Routes, Route, Outlet, useParams } from 'react-router-dom';

// import our components

import Search from './Search.js';

import SearchResultsDisplay from './SearchResultsDisplay';

import SavedGifsDisplay from './SavedGifsDisplay';

import NavBar from './NavBar';

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
    <div className="wrapper">
      <header>
        < NavBar />
      </header>
      <Routes>
        <Route path="/"
          element={
            <div className='home-search-results'>
              <Search userInput={userInput} searchResults={searchResults} handleUpdateSearchResults={updateSearchResults} handleUpdateUserInput={updateUserInput} />
              <SearchResultsDisplay userInput={userInput} searchResults={searchResults} />
            </div>
          }
        />
        <Route path="/savedGifsDisplay" element={<SavedGifsDisplay />} />
      </Routes>
    </div>
  );
}

export default App;
// < SavedGifsDisplay />