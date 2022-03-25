import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <nav>
            <nav className='nav-bar-nav'>
                <iframe src="https://giphy.com/embed/5GoVLqeAOo6PK" width="100" height="100" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/excited-screaming-jonah-hill-5GoVLqeAOo6PK"></a></p>
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
        </nav>
    )
}

export default NavBar;