
const Header = (props) =>{
  return(
    <div>
      <h1>
          {props.course}
      </h1>
    </div>

  )
}

const StatisticLine = (props) =>{
  return(
    <div>
      <p>
      {props.text} {props.points}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <StatisticLine text={props.StatisticLines[0].name} points={props.StatisticLines[0].exercises}/>
      <StatisticLine text={props.StatisticLines[1].name} points={props.StatisticLines[1].exercises}/>
      <StatisticLine text={props.StatisticLines[2].name} points={props.StatisticLines[2].exercises}/>
    </div>
  )
}


const Total = (props) =>{
  return(
    <p>
      Number of exercises {props.StatisticLines[0].exercises+props.StatisticLines[1].exercises+props.StatisticLines[2].exercises}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    StatisticLines: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content StatisticLines={course.StatisticLines} />
      <Total StatisticLines={course.StatisticLines} />
    </div>
  )
}

export default App