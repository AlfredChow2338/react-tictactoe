import './App.css';
import React from 'react'
import Game from './components/Game'



class App extends React.Component {
  render() {
    return (
      <Game />
    );
  }
}

// ========================================

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );


export default App;