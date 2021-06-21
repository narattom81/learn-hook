import React, { useState, useEffect } from 'react';
function getName(){
    return 'shaan'
}
function App() {
  // Declare a new state variable, which we'll call "count"  
  const [count, setCount] = useState(0);
  const [name,changeName] = useState('###')

  //componentDidUpdate
  //componentDidMount
  useEffect(()=>{
      document.title= `you have clicked ${count} times`
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
  <div> your name is {name}</div>
  <button onClick={()=>changeName(getName())}> click me to change the name</button>
    </div>
  );
}

export default App