
function ErrorHandling(props) {
    console.log(props)
    return (
        <div>
            {props.userInput === null ?
                <h2>Please enter a gify search</h2>
                : props.searchResults}
        </div>
    )
}

export default ErrorHandling;