import Image from './Image.js'


const Country = ({country, handler}) => {
  return(
		<li>{country.name.common} <button value={country.name.common} onClick={handler}>show</button></li>
	)
}
const Languages = ({languages}) => languages.map((language) => <li key={language}> {language}</li>)

const Details = ({country}) => {
	return(
		<div>
		<h2>{country.name.common}</h2>
		capital: {country.capital}<br/>
		area: {country.area}<br/>
		<h3>languages:</h3>
		<ul>
		<Languages languages={Object.values(country.languages)}/>
		</ul>
		<h3>Flag</h3>
		<Image uri={country.flags.svg} alttext={country.name.common} />
		</div>
	)
}


const Countries = ({ entries, search, handler}) => {

  if(entries.length > 10){
		return(
			<h3>too many results</h3>
		)
	} else if(1 < entries.length && entries.length < 9){
		console.log("between one and nine")
		return(
			<ul>
			  {entries.map((country) => <Country key={country.name.common} country={country} handler={handler} />)}
			</ul>
		)
	} else if(entries.length === 1) {

		return(
			<Details country={entries[0]} />	
		)
	} else {
		return(
			<div>No joy!</div>
		)
	}

}


export default Countries
