import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Filterer from "./components/Filterer"
import Form from "./components/Form"
import Phonebook from "./components/Phonebook"
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [filterString, setFilter] = useState('')
  const personsToShow = persons.filter(entry => entry.name.toLowerCase().includes(filterString.toLowerCase()))

  const hook = () => {
    console.log('effect')
    axios
        .get('http://localhost:3001/persons')
        .then(response => {
            console.log('promise fulfilled')
            setPersons(response.data)
        })
}

useEffect(hook, [])

  const addEntry = (event) => {

   event.preventDefault()   

    const buffer = {
      id: persons.length + 1,
      name: newName,
      number: newNum
    }

    const nameEmpty = buffer.name.length === 0
    const numEmpty = buffer.number.length === 0

    const nameMatch = (persons.filter(e => e.name === buffer.name)).length !== 0
    const numMatch = (persons.filter(e => e.number === buffer.number)).length !== 0

    if (nameEmpty || numEmpty) {
      const alertString = ((nameEmpty) ? "name" : "").concat((numEmpty) ? " ".concat("phone number") : "")
      alert(`${alertString} is/are missing`)
      return 0
    }
    else if (nameMatch || numMatch) {
      const alertString = ((nameMatch) ? buffer.name : "").concat((numMatch) ? " ".concat(buffer.number) : "")
      alert(`${alertString} is already added to the phonebook`)
      return 0
    } else {
      setPersons(persons.concat(buffer))
      setNewName('')
      return 0
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filterer filterString={filterString} setFilter={setFilter} />
      <h2>add a new</h2>
      <Form addEntry={addEntry} newName={newName} setNewName={setNewName} newNum={newNum} setNewNum={setNewNum}/>
      <h2>Numbers</h2>
      <Phonebook personsToShow={personsToShow} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)