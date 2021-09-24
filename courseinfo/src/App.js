import React from 'react';
const course = {
  name:"Half Stack application development",
  parts:[
    {
      name:"Fundamentals of React",
      exercise:10,
    },
    {
      name: "Using props to pass data",
      exercise:7,
    },
    {
     name:"State of a component",
     exercise:14
    }
  ],
}
const Header=(props)=>{
  console.log(props)
  let tst=Object.values(props)[0]
  return(
  <>
  <h1>{tst.name}</h1>
</>
)
}

const Content=(props)=>{
  console.log(props)
  let names=[]
  let exercises=[]
  let tst=Object.values(props)[0]
  names=tst.map(p=>p.name)
  exercises=tst.map(p=>p.exercise)
  console.log(names,exercises)
  return(
    <>
    <p>{names[0]} {exercises[0]}</p>
    <p>{names[1]} {exercises[1]}</p>
    <p>{names[2]} {exercises[2]}</p>
  </>
  )
}
function Total(props){
  console.log(props)	
  let exercises=[]
  let tst=Object.values(props)[0]
  exercises=tst.map(p=>p.exercise)
  return(
  <>
<p>Number of Exercises {exercises[0]+exercises[1]+exercises[2]}</p>
</>
)
}

function App() {
  return (
    <div>
      <Header name={course} />
     <Content parts1={course.parts}  />
     <Total  parts={course.parts} />
    </div>
  );
}

export default App;
