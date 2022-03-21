function SavedGifsDisplay(props) {
    return (
        <ul className="savedGifsDisplay"  >

            <li key='{props.user.key}'>
                <p>User Name: {props.user.name}</p>
                <p>User's word: {props.user.word}</p>
                <div>User's gif selection: 
                    <img src={props.user.url} alt="" />
                </div> 
            </li>
        </ul>
    )
}






export default SavedGifsDisplay;