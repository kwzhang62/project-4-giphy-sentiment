import './App.css';

// 1) Top level imports - useState, useEffect, import ReactRouterDOM (also import browserRouter in index.js)
import { useState, useEffect } from 'react';
import { Link, Routes, Route, Outlet, useParams } from 'react-router-dom';

// import our components
import Search from './Search.js';
import SearchResultsDisplay from './SearchResultsDisplay';
import SavedGifsDisplay from './SavedGifsDisplay'

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
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/savedGifsDisplay">Display Saved Gifs</Link>
            </li>
          </ul>
        </nav>
        <h1>Giphy Sentiment</h1> 
      </header>
      <Routes> 
          <Route path="/" 
            element={
              <div>
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