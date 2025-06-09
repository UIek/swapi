import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './scss/main.css'
import Header from './components/Header'
import Footer from './components/Footer'
import People from './components/People'
import Planets from './components/Planets'
import Films from './components/Films'
import Species from './components/Species'
import Starships from './components/Starships'
import Vehicles from './components/Vehicles'
import Home from './components/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header></Header>
      <div className='main_section'>
        <Routes>
        <Route path='/' Component={Home}></Route>
          <Route path='/people' Component={People}></Route>
          <Route path='/planets' Component={Planets}></Route>
          <Route path='/films' Component={Films}></Route>
          <Route path='/species' Component={Species}></Route>
          <Route path='/starships' Component={Starships}></Route>
          <Route path='/vehicles' Component={Vehicles}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </Router>
  </React.StrictMode>
)
