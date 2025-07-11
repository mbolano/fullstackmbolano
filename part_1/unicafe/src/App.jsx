import { useState } from 'react'

const Button = (props) => <button onClick = {props.onClick}>{props.text}</button>

const StatisticLine = (props) => {
  return (
    <>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </>
  )
}

const Statistics = (props) => {
  if (props.statistics.total > 0) {
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text = "good" value = {props.statistics.good} />
            <StatisticLine text = "bad" value = {props.statistics.bad} />
            <StatisticLine text = "neutral" value = {props.statistics.neutral} />
            <StatisticLine text = "all" value = {props.statistics.total} />
            <StatisticLine text = "average" value = {props.statistics.average} />
            <StatisticLine text = "positive" value = {props.statistics.positive + " %"} />
          </tbody>
        </table>
      </div>
    )
  }
  return (
    <div>
      <p>No feedback given</p>
    </div>
  )  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad]  = useState(0)

  const objStatistics = {
    good: good,
    neutral: neutral,
    bad: bad,
    total: good + neutral + bad,
    average: ((good + neutral + bad) > 0) ? (good - bad) / (good + neutral + bad) : 0,
    positive: ((good + neutral + bad) > 0) ? ((good) / (good + neutral + bad)) * 100 : 0
  }
  console.log(objStatistics)

  const handleGoodClick = () => setGood(good + 1)

  const handleNeutralClick = () => setNeutral(neutral + 1)

  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text = 'good' />
      <Button onClick={handleNeutralClick} text = 'neutral' />
      <Button onClick={handleBadClick} text = 'bad' />
      <h1>Statistics</h1>
      <Statistics statistics = {objStatistics} />
    </div>
  )
}

export default App
