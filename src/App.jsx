import { useState } from "react";


function App() {

    let [val,setval] = useState(0);
     
      function increaseval(){
           setval(val+1);
              }
      function decreaseval(){
       setval(val-1);
      }
     return (
       <div>
      <h1>counter</h1>  
      <button onClick={increaseval}>Increament</button>
        <h2>{val}</h2>
      <button onClick={decreaseval}>Decreament</button>
    </div>
  )
}

export default App
