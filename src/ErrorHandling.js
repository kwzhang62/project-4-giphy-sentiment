import { useState, useEffect } from 'react'

function ErrorHandling(props) {
    // create a piece of state for the error message
    const [message, setMessage] = useState('test');

    //check where the error comes from and display a message whenever props.hasError is updated
    useEffect(() => {
        console.log("error handling useEffect is executing")
        if (props.source === 'userInput') {
            setMessage(props.error)
        } else if (props.source === 'firebase') {
            setMessage("There is an issue connecting to Firebase, please try again later.")
        } else if (props.source === 'api') {
            setMessage("There is an issue connecting to the Giphy API, please try again later.")
        }
        console.log(`props.error is: ${props.error}`);
        console.log(`props.hasError is: ${props.hasError}`);
        /*TODO: more robust error handling to account for different API errors and network errors using prop.error*/
    }, [props.hasError])

    return (
        <div className='errorMessage'> {
            props.hasError ? <p> {message} </p> : null}
        </div>
    )
}

export default ErrorHandling;