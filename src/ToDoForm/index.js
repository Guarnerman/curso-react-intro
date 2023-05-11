import React from "react";
import { ToDoContext } from "../ToDoContext";
import './ToDoForm.css'

function ToDoForm() {
    const {
        setOpenModal,
        addToDo,
    } = React.useContext(ToDoContext)

    const [nuevoTexto, setNuevoTexto] = React.useState('')

    const onSubmit = (event) => {
        event.preventDefault()
        addToDo(nuevoTexto)
        setOpenModal(false)
    }
    const onCancel = () => {
        setOpenModal(false)
    }
    const onChange = (event) => {
        setNuevoTexto(event.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo ToDo </label>
            <textarea 
            placeholder="Ingresar tarea"
            value={nuevoTexto}
            onChange={onChange}
            />
            <div className="ToDoForm-buttonContainer">
            <button 
             type="button"
             className="ToDoForm-button ToDoForm-button--cancel"
             onClick={onCancel}
             >
                Cancelar
            </button>
            <button 
             type="submit"
             className="ToDoForm-button ToDoForm-button--add">
                Añadir
            </button>
            </div>
        </form>
    )

}

export { ToDoForm }