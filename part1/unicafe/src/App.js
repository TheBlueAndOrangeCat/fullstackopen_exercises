
import { useState } from 'react'


const Header = ({course}) =>{
  return(
    <div>
      <h1>
          {course}
      </h1>
    </div>

  )
}

const Button = ({onClickFunction, text}) =>{
  return(
      <button onClick={onClickFunction}>
        {text}
      </button>
  )
}

const StatisticLine = ({caption, counter}) =>{
  return(
    <tbody>
      <tr>
        <td>{caption}:</td><td>{counter}</td>
      </tr>
    </tbody>
  )
  }

const Statistics = ({good, neutral, bad, clicked}) =>{

      if(clicked){
        return(        
        <div>
          <Header course="statistics" />
          <table>
          <StatisticLine caption="good" counter={good} />
          <StatisticLine caption="neutral" counter={neutral} />
          <StatisticLine caption="bad" counter={bad} />
          <StatisticLine caption="total" counter={good+bad+neutral} />
          <StatisticLine caption="positiv ratio" counter={good/(good+bad+neutral)*100} />
          <StatisticLine caption="average" counter={(good-bad)>0 ? (good-bad)/(good+bad+neutral): 0} />
          </table>
        </div>)
      }
      return(
        <div>
          <Header course="statistics" />
          No feedback given
        </div>
      )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [clicked, setClicked] = useState(false)
  return (
    <div>
      <Header course="give feedback" />
      <Button onClickFunction={() => {setGood(good+1); setClicked(true)}} text="good"/>
      <Button onClickFunction={() => {setNeutral(neutral+1); setClicked(true)}} text="neutral"/>
      <Button onClickFunction={() => {setBad(bad+1); setClicked(true)}} text="bad"/>
      <Statistics good={good} neutral={neutral} bad={bad} clicked={clicked}/>
    </div> 
  );
}

export default App;
