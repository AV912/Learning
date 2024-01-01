import { on } from 'events'
import { useState } from 'react'


const Header = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}





const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticsLine = ({text, stat}) => {
  return (
    <tr>
      <td>{text} {stat}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad, prompts}) => {
  const sum = good + neutral + bad
  if (sum === 0) {
    return (
      <div>
        <p>no feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
            <StatisticsLine text={prompts[0]} stat={good}/>
            <StatisticsLine text={prompts[1]} stat={neutral}/> 
            <StatisticsLine text={prompts[2]} stat={bad}/> 
            <StatisticsLine text={prompts[3]} stat={sum}/> 
            <StatisticsLine text={prompts[4]} stat={(good * 1 + neutral * 0 + bad * -1) / (sum)}/> 
            <StatisticsLine text={prompts[4]} stat={(good / sum) * 100}/>
        </tbody>
      </table>
      
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    console.log('clicked the good button')
    setGood(good + 1)
  }
  
  const handleClickNeutral = () => {
    console.log('clicked the neutral button')
    setNeutral(neutral + 1)
  }
  
  const handleClickBad = () => {
    console.log('clicked the bad button')
    setBad(bad + 1)

  }

  const statsPrompts = [
    "good",
    "neutral",
    "bad",
    "all",
    "average",
    "positive"
  ]

  return (
    <div>
      <Header text="give feedback"/>
      <Button text="good" onClick={handleClickGood} ></Button>
      <Button text="neutral" onClick={handleClickNeutral} ></Button>
      <Button text="bad" onClick={handleClickBad} ></Button>
      <Header text="statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad} prompts={statsPrompts}/>
    </div>
  )
}

export default App