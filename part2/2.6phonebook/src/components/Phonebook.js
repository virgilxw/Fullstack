const Phonebook = ({ personsToShow }) => {
    const Out = personsToShow.map(entry => <li key={entry.id}>{entry.name} {entry.number}</li>)
    return (Out)
}

export default Phonebook