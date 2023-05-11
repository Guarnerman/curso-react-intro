import React from "react"

function useLocalStorage(itemName,initialValue) {
  const [item, setItem] = React.useState(initialValue)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  
  React.useEffect(() => {
    setTimeout(() => {
        const localStorageItem = localStorage.getItem(itemName)
      
        let parsedItem
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
          setItem(parsedItem)
        }
        setLoading(false)
    
    }, 2000);
    } )

    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem)
    }
  
    return {
      item, 
      saveItem, 
      loading, 
      error,
    }
}
/* localStorage.removeItem('ToDos_V1') */
/* const defaultToDos = [
  { text: 'Tomar café', completed: true},
  { text: 'Tomar curso de react', completed: false},
  { text: 'Terminar curso', completed: false},
  { text: 'Doblar ropa', completed: false},
  { text: 'Usar estados derivados', completed: true},
] 

localStorage.setItem('ToDos_V1', JSON.stringify(defaultToDos)) */

export { useLocalStorage }