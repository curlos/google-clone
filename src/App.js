import React, { useState } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import Results from './components/Results';
import Footer from './components/Footer';
import './App.css';

function App() {

  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <BrowserRouter>
      <div className={darkTheme ? 'dark' : ''}>
        <div className="dark:bg-gray-800 min-h-screen">
            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
            <Results />
            <Footer />
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
