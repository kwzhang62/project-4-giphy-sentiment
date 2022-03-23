
function ErrorHandling(props) {
    console.log(props)
    return (
        <div>
            {
                 props.userInput === null ?
                props
                :  <h2>Please enter a gify search</h2>
            }    
        </div>
    )
}

export default ErrorHandling;