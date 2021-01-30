import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({method, content}) => {
  return(
    <button onClick={method}>
      {content}
    </button>
  )
}

const Stats = ({good, neu, bad}) => {
  const total = good+neu+bad
  if (total === 0) {
    return(<div><h4>No data avaliable</h4></div>)
  }
  return(
    <div>
      <h4>Statistic</h4>
      <table>
        <tr>
          <th>good</th>
          <td>{good}</td>
        </tr>
        <tr>
          <th>neutral</th>
          <td>{neu}</td>
        </tr>
        <tr>
          <th>bad</th>
          <td>{bad}</td>
        </tr>
        <tr>
          <th>average</th>
          <td>{((good-bad)/total).toFixed(1)}</td>
        </tr>
        <tr>
          <th>positive</th>
          <td>{(good/total).toFixed(1)}</td>
        </tr>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const clickGood = () => setGood(good+1)
  const clickNeutral = () => setNeutral(neutral+1)
  const clickBad = () => setBad(bad+1)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button method={clickGood} content="Good" />
      <Button method={clickNeutral} content="Neutral" />
      <Button method={clickBad} content="Bad" />
      <br />
      <Stats good={good} neu={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
