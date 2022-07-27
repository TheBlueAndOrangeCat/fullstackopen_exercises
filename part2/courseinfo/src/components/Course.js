import React from 'react'

const Header = ({title}) => <h1>{title}</h1>

const Part = ({ part }) => {
	return(
	<li>
	  {part.name} {part.exercises}
	</li>
	)
  }
  
  const Sum = ({ parts }) => {
	return(
	  <b>
		total of {parts.reduce( (previousValue, currentValue) => previousValue + currentValue.exercises, 0 )} exercises
	  </b>
	)
  }
  
  const Content = ({parts}) =>{
	  return(
	  <ul>
		  {parts.map( (parts) => <Part key={parts.id} part={parts} />)}
	  </ul>
	  )
  }  

const Course = ({course}) => {
	return(
	<div>
		<Header title={course.name} />
		<Content parts={course.parts} />
    <Sum parts={course.parts} />
	</div>
	)
}

export default Course