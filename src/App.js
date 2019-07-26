import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import People from './components/People'
import Planets from './components/Planets'
import Starships from './components/Starships'

function App () {
  return (
    <BrowserRouter>
      <div className='App'>
        <Route path='/' exact component={People} />
        <Route path='/Planets' exact component={Planets} />
        <Route path='/Starships' component={Starships} />
      </div>
    </BrowserRouter>
  )
}

export default App
