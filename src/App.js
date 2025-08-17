import logo from './logo.svg';
import './App.scss'; 
import { useDispatch, useSelector } from 'react-redux';
import MyComponent from './components/MyComponents';
import React from 'react';

class App extends React.Component
{
  render(){
     return (
      <div className='app-container'> 
        <MyComponent></MyComponent>
        Hello word voi eric &amp; Hoi dan IT
      </div>
     );
  }
}

// class App extends React.Component
// {
//   render(){
//      return (
//       <div className="App">
//        <header className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//      );
//   }
// }

export default App;
