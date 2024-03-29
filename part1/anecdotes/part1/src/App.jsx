import { useState } from 'react'




const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const MostVotesModule = ({maxIndex, anecdote}) => { 
  return (
    <h1>Anecdote with Most Votes</h1>

  )
}

const App = () => {
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

  
  const initialVotes = new Array(anecdotes.length)
  for (let i=0; i < anecdotes.length; i++) {
    initialVotes[i] = 0
  }
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(initialVotes)
  const [maxVote, setMaxVote] = useState(0)


  const handleSelectedClick = () => {
    const chosenIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(chosenIndex)
  }

  const handleVoteClick = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
    console.log(votes)
    let maxAnecdote = -1
    let index = -1
    for (let i = 0; i < newVotes.length; i++) {
      if( newVotes[i] > maxAnecdote ) {
        maxAnecdote = newVotes[i]
        index = i
      }
    }
    setMaxVote(index)
    console.log(maxVote)
  }

  return (
    <div>
      <h1>Anecdote of the Day!</h1>
      {anecdotes[selected]}<br></br>
      has {votes[selected]} votes
      <div>
        <Button onClick={handleVoteClick} text="vote"></Button>
        <Button onClick={handleSelectedClick} text="next anecdote"/>
      </div>
      <h1>Anecdote with Most Votes</h1>
      {anecdotes[maxVote]}<br></br>
      has {votes[maxVote]} votes


    </div>
  )
}

export default App