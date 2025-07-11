import { useState } from 'react'

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const Header = (props) => {
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdote}</p>
      <p>has {props.votes} votes</p>
    </div>
  )
}

const Footer = (props) => {
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{props.maxVoted}</p>
    </div>
  )
}

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const numAnecdotes = anecdotes.length
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(numAnecdotes).fill(0))

  const handleSelectedAnecdote = () => setSelected(Math.floor(Math.random() * numAnecdotes))
  
  const handleVotes = () => {
    const copyVotes = [...votes]
    copyVotes[selected] += 1
    setVotes(copyVotes)
  }

  const maxVotes = Math.max(...votes)
  const maxVotedAnecdote = anecdotes[votes.indexOf(maxVotes)]
  console.log(maxVotes)

  return (
    <div>
      <Header anecdote = {anecdotes[selected]} votes = {votes[selected]} />
      <Button onClick = {handleVotes} text = 'vote' />
      <Button onClick = {handleSelectedAnecdote} text = 'next anecdote' />
      <Footer maxVoted = {maxVotedAnecdote} />
    </div>
  )
}

export default App
