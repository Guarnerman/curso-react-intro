import './CreateToDoButton.css'

function CreateToDoButton() {
    return (
        <button 
            className="CreateToDoButton" 
            onClick={
                (event) => {console.log('diste click')
                console.log(event)
                console.log(event.target)
            }}
        >+</button>
    );
}

export {CreateToDoButton}