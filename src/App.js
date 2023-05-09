import React from 'react';
import { ToDoCounter  } from './ToDoCounter';
import { ToDoSearch } from "./ToDoSearch";
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton'

const defaultToDos = [
  { text: 'Tomar café', completed: true},
  { text: 'Tomar curso de react', completed: false},
  { text: 'Terminar curso', completed: false},
  { text: 'Doblar ropa', completed: false},
  { text: 'Usar estados derivados', completed: true},
]

function App() {
  const [toDos, setToDos] = React.useState(defaultToDos)
  const [searchValue, setSearchValue] = React.useState('')

  const completedToDos = toDos.filter(
    toDo => !!toDo.completed).length
  const totalToDos = toDos.length

  const searchedToDos = toDos.filter(
    (toDo) => {
      const toDoText = toDo.text.toLowerCase()
      const searchText = searchValue.toLocaleLowerCase()
      return toDoText.includes(searchText)})

  const completeToDo = (text) => {
    const newToDos = [...toDos]
    const toDoIndex = newToDos.findIndex(          
      (toDo) => toDo.text === text
    )
    newToDos[toDoIndex].completed = true
    setToDos(newToDos)
  }
  const deleteToDo = (text) => {
    const newToDos = [...toDos]
    const toDoIndex = newToDos.findIndex(          
      (toDo) => toDo.text === text
    )
    newToDos.splice(toDoIndex,1)
    setToDos(newToDos)
  }

  return (
    <>

      <ToDoCounter completed={completedToDos} total={totalToDos} />
      <ToDoSearch
        searchValue = {searchValue}  
        setSearchValue = {setSearchValue}
      />
      
      <ToDoList >
        {searchedToDos.map(toDo => (
          <ToDoItem 
            key={toDo.text} 
            text={toDo.text}
            completed={toDo.completed}
            onComplete={() => completeToDo(toDo.text)}
            onDelete={() => deleteToDo(toDo.text)}
            />
        ))}
      </ToDoList>

      <CreateToDoButton />
    </ >
  );
}


export default App;
