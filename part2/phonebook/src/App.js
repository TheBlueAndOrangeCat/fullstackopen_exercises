import { useState } from 'react'

const Names = ({ entrys }) => {
  return(
				<ul>{entrys.map((entry) => <Name entry={entry} key={entry.name} />)}</ul>
  )
}

const Name = ({entry}) => {
				return(
				<li>{entry.name}: {entry.number}</li>
				)
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
		{ name: 'samuel', number: '123-789'}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
	const [filtered, setFiltered] = useState(persons)
	const [newSearch, setNewSearch] = useState('')

  const addName = (event) =>{
    event.preventDefault()
    if(persons.findIndex( element => element.name === newName) !== -1){
      alert(`${newName} is alrady added to phonebook`)
			return 0
		}     
    const nameObject = {
      name: newName,
			number: newNumber
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
		setNewNumber('')
    setFiltered(persons.concat(nameObject))
		setNewSearch('')
  }
  
  const handleNameChange = (event) =>{
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) =>{
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) =>{
    setNewSearch(event.target.value)

		if(!event.target.value){
      setFiltered(persons)
			return 0
		}
    setFiltered(persons.filter((person) => person.name.toLowerCase().includes(newSearch.toLowerCase())))

	}


  return (
    <div>
      <h2>Phonebook</h2>
			<input value={newSearch} onChange={handleSearchChange} />
			<h2>add a new entry</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
				<div>
				  number: <input value={newNumber} onChange={handleNumberChange} />
				</div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
     <Names entrys={filtered} /> 
    </div>
  )
}

export default App
