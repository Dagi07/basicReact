import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

import Counters from './components/counters';


{/* A stateless functional component is any function you write which accepts props and returns JSX.*/}
{/* A stateless component, on the other hand, is a class that extends React.Component, but does not use internal state*/} 
{/* A stateful component is a class component that does maintain its internal state.*/}

ReactDOM.render(<Counters />, document.getElementById('root'));

{/* State consists of any data your application needs to know about, that can change over time. */}




// const element = <h1> Hello World</h1>;

// const TypesOfFruit = () => {
//     return (
//       <div>
//         <h2>Fruits:</h2>
//         <ul>
          
//           <li>Blueberries</li>
//           <li>Strawberries</li>
//           <li>Bananas</li>
//         </ul>
//       </div>
//     );
//   };
  
//   const Fruits = () => {
//     return (
//       <div>
//         { /* Change code below this line */ }
//         <TypesOfFruit />
//         { /* Change code above this line */ }
//       </div>
//     );
//   };
  
//   class TypesOfFood extends React.Component {
//     constructor(props) {
//       super(props);
//     }
  
//     render() {
//       return (
//         <div>
//           <h1>Types of Food:</h1>
//           { /* Change code below this line */ }
//           <Fruits />
//           { /* Change code above this line */ }
//         </div>
//       );
//     }
//   }

  