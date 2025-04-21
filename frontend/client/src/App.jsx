import { useState } from 'react'
import {BrowserRoute,Router,Route} from react-router-dom;
import axios from react;
import './App.css'

function App() {
  

  return (
    <>
      <div>
       <BrowserRoute>
       <Router path:"/"element:"">library</Router>
       <Router path:"/create"element:"">create</Router>
       <Router path:"/update"element:"">update</Router>
       </BrowserRoute>
      </div>
    </>
  )
}

export default App;
