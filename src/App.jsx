import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import AppName from './components/AppName'
import App_Todo from './components/Add_Todo'
import ToDo_item1 from './components/ToDo_item1'
import ToDo_item2 from './components/ToDo_item2'
import "./App.css"

function App() {

  return <center class="To-do-container">
    <AppName></AppName>
    <App_Todo></App_Todo>
   <ToDo_item1 />
    <ToDo_item2 />
  </center>

}

export default App
