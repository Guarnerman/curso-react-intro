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

  const completedToDos = toDos.filter(toDo => !!toDo.completed).length
  const totalToDos = toDos.length

  console.log('Se buscó:' + searchValue);
  return (
    <>

      <ToDoCounter completed={completedToDos} total={totalToDos} />
      <ToDoSearch
        searchValue = {searchValue}  
        setSearchValue = {setSearchValue}
      />
      
      <ToDoList >
        {defaultToDos.map(toDo => (
          <ToDoItem 
            keys={toDo.text} 
            text={toDo.text}
            completed={toDo.completed}
            />
        ))}
      </ToDoList>

      <CreateToDoButton />
    </ >
  );
}


export default App;
