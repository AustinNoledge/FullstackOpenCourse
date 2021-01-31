import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = ({method, content}) => {
  return(
    <div>
      <button onClick={method}>
        {content}
      </button>
    </div>
  )
}

const DisplayVote = ({vote, selected}) => {
  const number = vote[selected]
  if (number > 1) {
    return(
      <p>This anecdote has {number} votes</p>
    )
  }
  return(
    <p>This anecdote has {number} vote</p>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0))

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
  }

  const change = () => {
    let result = getRandomInt(anecdotes.length)
    while (result === selected) {
      result = getRandomInt(anecdotes.length)
    }
    setSelected(result)
  }

  const voting = () => {
    let newArr = [...vote]
    newArr[selected] += 1
    setVote(newArr)
  }

  const maxVote = () => {
    return vote.indexOf(Math.max(...vote))
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <strong>{props.anecdotes[selected]}</strong>
      <DisplayVote vote={vote} selected={selected} />
      <Button method={change} content="next" />
      <Button method={voting} content="vote" />

      <h1>Anecdote with most votes</h1>
      <strong>{props.anecdotes[maxVote()]}</strong>
      <DisplayVote vote={vote} selected={maxVote()} />
    </div>
  )
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)