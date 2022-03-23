
import { useState, useEffect } from 'react'


function ErrorHandling(props) {
    console.log(props)

    // create a piece of state for the error message

    const [message, setMessage] = useState('test');

    useEffect(() => {
        if (props.source === 'userInput') {
            setMessage(props.error)
        }
    }, [props.hasError])

    return (
        <div> {
            props.hasError ? <h2> {message} </h2> : null}
        </div>
    )
}

export default ErrorHandling;