import React, {useState} from "react";
const Button=({onclick,text})=>
{
  return(
    <>
<button onClick={onclick}>{text}</button>
</>
  )
}
const Mostvotes=({vote,anecdotes})=>{
  let maxv=vote.indexOf(Math.max(...vote))
  if(vote.includes(0))
  {
  return(<> </>)
  }
  return(<>
    <h1>Anecdote with most votes</h1>
    <p>{anecdotes[maxv]}</p> 
    <p>has {vote[maxv]} votes</p>
    </>)
}
const App = () => {
    const anecdotes = [
      'If it hurts, do it more often',
      'Adding manpower to a late software project makes it later!',
      'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      'Premature optimization is the root of all evil.',
      'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
    ]
  const [anec,setanec]=useState(0)
  const handleanec=()=>setanec(Math.floor(Math.random() * (6 - 0 + 1)) + 0)
  const [vote,setvote]=useState([...Array(anecdotes.length)].map(x=>0)) 
  console.log(vote)
  const handlevote=()=>{
    const copy=[...vote]
    copy[anec]+=1
    return (setvote(copy))
  }
  return (
    <div>
      <h1>Anecdote of the day</h1>
    <p>{anecdotes[anec]}</p>
    <p>has {vote[anec]} votes</p>
    <Button onclick={handlevote} text="vote"/><Button onclick={handleanec} text="next anecdote" />  
    <Mostvotes vote={vote} anecdotes={anecdotes}/>
    </div>
  );
}

export default App;
