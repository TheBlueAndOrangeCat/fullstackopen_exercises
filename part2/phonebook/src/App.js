import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './compoments/Search.js'
import Form from './compoments/Form.js'
import Names from './compoments/Names.js'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
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
  }
  
  const handleNameChange = (event) =>{
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) =>{
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) =>{
    setNewSearch(event.target.value)
	}

	useEffect(() => {
	console.log('effect')
	axios
	  .get('http://localhost:3001/persons')
	  .then(response => {
		console.log('promise fulfilled')
		setPersons(response.data)
		})
	}, [])

  return (
    <div>
      <h2>Phonebook</h2>
			<Search search={newSearch} handler={handleSearchChange} />
			<h2>add a new entry</h2>
			<Form submitHandler={addName} nameState={newName} nameHandler={handleNameChange} numberState={newNumber} numberHandler={handleNumberChange} /> 
      <h2>Numbers</h2>
     <Names entrys={persons} search={newSearch} /> 
    </div>
  )
}

export default App
