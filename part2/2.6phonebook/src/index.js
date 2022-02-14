import { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const [newNum, setNewNum] = useState('')
  const handleNumChange = (event) => {
    setNewNum(event.target.value)
  }

  const [filterString, setFilter] = useState('')
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }
  const personsToShow = persons.filter(entry => entry.name.toLowerCase().includes(filterString.toLowerCase()))

  const addEntry = (event) => {
    event.preventDefault()

    const buffer = {
      id: persons.length + 1,
      name: newName,
      number: newNum
    }

    const nameMatch = (persons.filter(e => e.name === buffer.name)).length !== 0
    const numMatch = (persons.filter(e => e.number === buffer.number)).length !== 0

    if (nameMatch || numMatch) {

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
      <form>
        filter shown with <input value={filterString} onChange={handleFilterChange}></input>
      </form>
      <h2>add a new</h2>
      <form onSubmit={addEntry}>
        <div>
          name: <input value={newName}
            onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNum}
            onChange={handleNumChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personsToShow.map(entry => <li key={entry.id}>{entry.name} {entry.number}</li>)}
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)