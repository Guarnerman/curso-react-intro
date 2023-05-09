import { FaThumbtack } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";
import'./ToDoIcon.css'

const iconTypes = {
    "check": (color) => <FaThumbtack className="Icon-svg" fill={color}/>,
    "delete": (color) => <FaMinusSquare className="Icon-svg" fill={color}/>,
}

function ToDoIcon({ type, color, onClick }) {
    return (
        <span 
            className={`Icon-container Icon-container-${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}

export { ToDoIcon }