import { Link } from 'react-router-dom';


function NavBar() {
    return (
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
    )
}

export default NavBar;