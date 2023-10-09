import { useState } from 'react'

const StatisticLine = (props) => {
  return(
  <tr><td>{props.text}</td> <td>{props.value}</td> {props.percent}</tr> 
  )
}

const Statistics = (props) => {
  return (
    <div>
    <StatisticLine text="good" value={props.good} />
    <StatisticLine text="neutral" value={props.neutral} />
    <StatisticLine text="bad" value={props.bad} />
    <StatisticLine text="all" value={props.totalFeedback} />
    <StatisticLine text="average" value={(props.good - props.bad) / props.totalFeedback} />
    <StatisticLine text="positive" value={(props.good / props.totalFeedback) * 100} percent='%' />
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const totalFeedback = good + neutral + bad

  return (
    <div>
      <h1> give feedback </h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1> statistics </h1>
      {totalFeedback > 0 ? (
        <table>
        <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        totalFeedback={totalFeedback} />
        </table> )
      : (<p>No feedback given yet</p>)
}
    </div>
  )
}

export default App