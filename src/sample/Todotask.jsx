import React, { useState } from 'react'
import { useState } from "react"

function Todotask() {
    const [todo, setTodo] = useState=([
        {id:1,todoname:"buddy"},
        {id:2,todoname:"dummy"},
        {id:3,todoname:"mummy"},
    ]);
  return (
    <div className='todo-header'>
                Todo.map((To)
                    <div>
                        <h1>{to.todoname}</h1>
                    </div>
                )
    </div>
  )
}

export default Todotask


// import { useState } from "react";



// function App() {
        
//   const [todo, setTodo] = useState([
//         {id:1,todoname:"buddy"},
//         {id:2,todoname:"dummy"},
//         {id:3,todoname:"hloo"},
//         ]);

//   return (
//     <div className='container'>
//       { todo.map((Task) =>
//         <div className='todo-header'>
//         <h1>{Task.todoname}</h1>
//         </div>
//       )}
//     </div>
//   )
// }

// export default App
