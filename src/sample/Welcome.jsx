// import Cust from './Cust';
// import './App.css';

function Welcome(props) {
    
    return(
        <div>
            <h1>Welcome to all</h1>   
            Welcome {props.name}        
        </div>
    );
}
export default Welcome;



// import Welcome from './Welcome';
// import { useState } from 'react';
// import './App.css';


// function App(){
//   const title = <h3>Welcome Guys</h3>
//   const props = { name: "My lod" };
//   const [name, setName] = useState("KTNambi");
//   return (
//     <div>
//       {title}
//       <h2>React App</h2>      
//       <h1>Hello, World!</h1>
//       <Welcome name={props.name} />
//       <input type="text" value={name}/> 
//       <Welcome/>
//     </div>
//   );
// }
// export default App;