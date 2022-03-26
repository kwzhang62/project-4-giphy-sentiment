import { Link } from 'react-router-dom';

import { useState } from 'react';


function NavBar() {

    const [hamNavbarOpen, setHamNavbarOpen] = useState(false)

    const handleToggle = () => {
        setHamNavbarOpen(!hamNavbarOpen)
    }

    return (
        <>
            <nav className='nav-bar-nav'>
                <iframe src="https://giphy.com/embed/5GoVLqeAOo6PK" width="100" height="100" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                <h1>Giphy Sentiment</h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/savedGifsDisplay">Display Saved Gifs</Link>
                    </li>
                </ul>
            </nav>
            <div className="wrapper">
                <div id="hamburger-icon">
                    <button onClick={handleToggle}><i class="fas fa-bars"></i>{hamNavbarOpen ? <div className='mobile-menu wrapper'>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/savedGifsDisplay">Display Saved Gifs</Link>
                            </li>
                        </ul>
                    </div>
                        : ""}</button>
                </div>
            </div>
        </>
    )
}

export default NavBar;