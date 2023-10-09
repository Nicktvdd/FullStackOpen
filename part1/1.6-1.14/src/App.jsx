import { useState } from 'react'

const Display = props => <div>{props.text} {props.value} {props.percent}</div>


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = newValue => {
    console.log('Good now', newValue)
    setGood(newValue)
  }
  const setToNeutral = newValue => {
    console.log('Neutral now', newValue)
    setNeutral(newValue)
  }
  const setToBad = newValue => {
    console.log('Bad now', newValue)
    setBad(newValue)
  }
  return (
    <div>
      <h1> give feedback </h1>
      <Button handleClick={() => setToGood(good + 1)} text="good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Display text="good" value={good} />
      <Display text="neutral" value={neutral} />
      <Display text="bad" value={bad} />
      <Display text="all" value={bad+good+neutral} />
      <Display text="average" value={(good-bad) / (bad+good+neutral)} />
      <Display text="positive" value={(good / (bad+good+neutral)) * 100} percent='%'/>

    </div>
  )
}

export default App