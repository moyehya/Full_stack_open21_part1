
import React, {useState} from "react";
const StatisticLine=({val,stats})=>
{
    
  return(
    <>
    <table><tr>
    <td>
 {val}</td> <td>{stats}
 </td></tr></table>    
    </>
  )
  
}
const Contstat=({counter})=>{
  const sum=counter.good+counter.bad+counter.neutral
  const avg=(counter.good-counter.bad)/sum
  const pos=(counter.good/sum)*100
  if(sum===0){
  return(
    <div>
<p>no feedback given</p>    
    </div>
  )
}
return(
  <div>
    <p><h1>statistics</h1></p>
  <div>
    <StatisticLine val="good" stats={counter.good} />
    <StatisticLine val="neutral" stats={counter.neutral} />
    <StatisticLine val="bad" stats={counter.bad} />
    <StatisticLine val="all" stats={sum} />
    <StatisticLine val="average" stats={avg}/>
    <StatisticLine val="positive" stats={pos+"%"}/>
  </div>
  </div>
)
  }

const Button=({onclick,text})=>{
  return(
    <>
<button onClick={onclick}>{text}</button>
 </>
  )
}
const App=()=> {
  const [counter, setCounter]=useState({
    good:0,
    neutral:0,
    bad:0,
  })
  const handleGood=()=>setCounter({...counter,good:counter.good+1})
  const handleNeutral=()=>setCounter({...counter,neutral:counter.neutral+1})
  const handleBad=()=>setCounter({...counter,bad:counter.bad+1})
  
  return (
    <div>
    <div>
<p><h1>give feedback</h1></p>
  <Button onclick={handleGood} text="good" />
  <Button onclick={handleNeutral} text="neutral" />
  <Button onclick={handleBad} text="bad" />
  </div>
  <Contstat counter={counter} /> 
  </div> 
  );
}

export default App;
