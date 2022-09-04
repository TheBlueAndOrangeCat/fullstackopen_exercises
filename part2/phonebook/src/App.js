import { useState, useEffect } from 'react'
import Search from './components/Search.js'
import Form from './components/Form.js'
import Names from './components/Names.js'
import Notificationt from './components/Notification.js'
import personsService from './services/persons.js'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
	const [newSearch, setNewSearch] = useState('')
	const [error, setNewError] = useState(null)
  const [succsess, setNewSuccess] = useState(null)

  const addName = (event) =>{
    event.preventDefault()
		const index = persons.findIndex( element => element.name === newName)


    if(index !== -1){
			if(persons[index].number === newNumber){
				alert(`${newName} is alrady added to phonebook`)
				return 0
			}
			if(window.confirm(`${newName} is alrady in the phonebook, repalace the old number?`)){
				var changedPerson = persons[index]
				changedPerson.number = newNumber
				personsService.update(index+1, changedPerson)
				.then(changedNode => {
					setPersons(persons.map(person => person.id === changedNode.id ? changedNode : person))
				})
			}
			setNewName('')
			setNewNumber('')
		}else{

    const nameObject = {
      name: newName,
			number: newNumber,
			id: persons.length + 1
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
		setNewNumber('')
		personsService.create(nameObject)
			  .then(() => {setNewSuccess(`${nameObject.name} added ot phonebook.`)
					        setTimeout(() => {setNewSuccess(null)}, 5000)
				})
		}
  }

	const handleRemove = (id) =>{
		if(window.confirm(`Delete ${persons[id-1].name} ?`)){
			personsService.remove(id).catch(((error) => {setNewError(`Error: ${persons[id-1].name} was alrady removed!`)
				setTimeout(() => {setNewError(null)}, 5000)
			}))
			setPersons(persons.filter((person) => person.id !== id))
		}
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
	  personsService.getAll().then(response => {
		console.log('promise fulfilled')
		setPersons(response.data)
		})
	}, [])

  return (
    <div>
		  <Notificationt message={error} type='error'/>
		  <Notificationt message={succsess} type='succsess'/>
      <h2>Phonebook</h2>
			<Search search={newSearch} handler={handleSearchChange} />
			<h2>add a new entry</h2>
			<Form submitHandler={addName} nameState={newName} nameHandler={handleNameChange} numberState={newNumber} numberHandler={handleNumberChange} /> 
      <h2>Numbers</h2>
     <Names  entrys={persons} search={newSearch} handleRemove={handleRemove}/> 
    </div>
  )
}

export default App
