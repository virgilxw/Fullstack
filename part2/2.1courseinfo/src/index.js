import React from 'react';
import ReactDOM from 'react-dom';
import Cirrlist from './components/course.js';



const App = () => {

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Cirrlist />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))