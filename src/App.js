import React from 'react';

import ApiExample from './ApiExample';

import logo from './CYM_logo_v1.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <img src={logo} className="main-logo" alt="City Youth Matrix logo" />
      <ApiExample />
    </div>
  )
}

export default App
