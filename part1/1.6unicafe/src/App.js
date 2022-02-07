import React, { useState } from 'react'

const Header = ({ title }) => {
  return <h1>{title}</h1>
}

const StatisticLine = ({ type, count }) => {
  console.log(type, count)
  return <tr><td>{type}</td><td>{count}</td></tr>
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = String(Number(((good - bad) / all).toFixed(2)))
  const positive = String(Number(good / all).toFixed(2)).concat("%")

  let out = <p>No Feedback Given</p>

  if (!(good == 0 && neutral == 0 && bad == 0)) {
    out = (
      <table>
        <tbody>
          <StatisticLine type="good" count={good} />
          <StatisticLine type="neutral" count={neutral} />
          <StatisticLine type="bad" count={bad} />
          <StatisticLine type="all" count={all} />
          <StatisticLine type="average" count={average} />
          <StatisticLine type="positive" count={positive} />
        </tbody>
      </table>)
  }
  return out
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header title="give feedback" />
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>

      <Header title="statistics" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App