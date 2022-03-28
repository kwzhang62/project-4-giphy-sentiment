import './App.css';

// 1) Top level imports - useState, useEffect, import ReactRouterDOM (also import browserRouter in index.js)
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// import our components
import Search from './Search.js';
import SearchResultsDisplay from './SearchResultsDisplay';
import SavedGifsDisplay from './SavedGifsDisplay';
import NavBar from './NavBar';

// 2) functions that will update the states in App.js
function App() {

  // 4) Create our useStates for userInput and API data and firebase data
  const [userInput, setUserInput] = useState('');

  const updateUserInput = (input) => {
    setUserInput(input.target.value)
  }

  // 5) Create a state to hold the data from the API 
  // *************this should contain the user's name, word and gif(url)****************
  const [searchResults, setSearchResults] = useState([]);

  const updateSearchResults = (results) => {
    setSearchResults(results);
  }

// 3) Return statement - which renders userInput
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

      <footer>
        <p>Created at <a href="https://junocollege.com/" target="_blank" rel='noreferrer'>Juno College of Technology</a></p>
        <p>by Daniel McIntyre, Kevin Zhang and David Benitez</p>
      </footer>
    </div>
  );
}

export default App;
