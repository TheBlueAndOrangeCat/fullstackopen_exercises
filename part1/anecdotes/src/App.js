import { useState } from 'react'

const Button = ({onClickFunction, text}) =>{
  return(
      <button onClick={onClickFunction}>
        {text}
      </button>
  )
}

const Votes = ({votes}) =>{
  return(
    <div>
      has {votes} votes
    </div>
  )
}

const Header = ({text}) =>{
  return(
    <h1>{text}</h1>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
  const [maxIndex, setMaxIndex] = useState(0)

  const updatePoints = () => () =>{
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)

    if (copy[selected] > copy[maxIndex]) {
      setMaxIndex(copy[selected])      
    }
  }

  return (
    <div>
      <Header text="Anecdote of the day" />
      {anecdotes[selected]}
      <br></br>
      <Votes votes={points[selected]} />
      <Button onClickFunction={() => {setSelected(getRandomInt(anecdotes.length-1))}} text="next anecdote" />
      <Button onClickFunction={updatePoints()} text="vote" />
      <Header text="Anecdote with most votes" />
      {anecdotes[maxIndex]}
    </div>
  )
}

export default App