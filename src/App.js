import './App.css';

// 1) Top level imports - useState, useEffect, import ReactRouterDOM (also import browserRouter in index.js)
import { useState, useEffect } from 'react';

import { Link, Routes, Route, Outlet, useParams } from 'react-router-dom';

// import our components

import Search from './Search.js';

import SearchResultsDisplay from './SearchResultsDisplay';

// 2) functions that will update the states in App.js

// 3) Return statement - which renders userInput

function App() {

  // 4) Create out useStates for userInput and API data and firebase data

  const [userInput, setUserInput] = useState('');

  const updateUserInput = (input) => {
    setUserInput(input.target.value)
  }

  // 5) Create a state to hold the data from the API 

  const [searchResults, setSearchResults] = useState({});

  const updateSearchResults = (results) => {
    console.log(results)
  }

  return (
    <div className="App">
      <header>
        <h1>Giphy App</h1>
        < Search userInput={userInput} searchResults={searchResults} updateSearchResults={updateSearchResults} handleUpdateUserInput={updateUserInput} />
        < SearchResultsDisplay searchResults={searchResults} />
      </header>
    </div>
  );
}

export default App;
