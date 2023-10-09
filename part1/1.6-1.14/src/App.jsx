import { useState } from 'react'

const Statistics = props => <div>{props.text} {props.value} {props.percent}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1> give feedback </h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1> statistics </h1>
      <Statistics text="good" value={good} />
      <Statistics text="neutral" value={neutral} />
      <Statistics text="bad" value={bad} />
      <Statistics text="all" value={bad+good+neutral} />
      <Statistics text="average" value={(good-bad) / (bad+good+neutral)} />
      <Statistics text="positive" value={(good / (bad+good+neutral)) * 100} percent='%'/>
    </div>
  )
}

export default App