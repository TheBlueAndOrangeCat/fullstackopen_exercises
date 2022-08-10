import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search.js'
import Countries from './components/Countries.js'
import Weather from './components/Weather.js'
const App = () =>{
const [countries, setCountries] = useState([])
const [search, setNewSearch] = useState('')
const [weather, setWeather] = useState({})
const filterd = countries.filter((entry) => entry.name.common.toLowerCase().includes(search.toLowerCase()))

  const handleSearchChange = (event) =>{
    setNewSearch(event.target.value)
	}

	const handleShow = (event) =>{
    event.preventDefault()
		setNewSearch(event.target.value)
	}

	useEffect(() => {
	console.log('effect')
	axios
	  .get('https://restcountries.com/v3.1/all')
	  .then(response => {
		console.log('promise fulfilled')
		setCountries(response.data)
		})
	}, [])

	useEffect(() => {
	console.log('effect wather')
	console.log(filterd.length)
		if(filterd.length === 1){
			const entry = filterd[0]
			console.log('Weather: Only one Entry')
			axios
				.get(`https://api.openweathermap.org/data/2.5/weather?lat=${entry.capitalInfo.latlng[0]}&lon=${entry.capitalInfo.latlng[1]}&appid=${process.env.REACT_APP_API_KEY}`)
				.then(response => {
				console.log('wather promise fulfilled')
				console.log(response.data)
				setWeather(response.data)
				})
		}
	}, [search])

return(
	<div>
		<h2>Countries</h2>
	  <Search handler={handleSearchChange} search={search} />	
		<h2>Results</h2>
		<Countries entries={filterd} search={search} handler={handleShow} />
		<Weather entries={filterd} weather={weather} />
	</div>
)

}
export default App;
