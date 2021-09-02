import React from "react";
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Footer from './components/Footer';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [modeText, setmodeText] = useState('Dark Mode');
  const toggleMode = ()=>{
    if (mode === 'light'){
       setmode('dark');
       setmodeText('Light Mode')
       document.body.style.backgroundColor = '#555';
      }
      else{
        setmode('light');
        setmodeText('Dark Mode')
        document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Router>
      <Navbar logo="TextUtils" mode={mode} modeText={modeText} toggleMode={toggleMode}/>
      <Switch>
        <Route exact path="/">
          <Textarea heading="Enter Your Text Below" mode={mode}/>
        </Route>
        <Route exact path="/about">
          <About mode={mode}/>
        </Route>
      </Switch>
      <Footer mode={mode}/>
    </Router>
    </>
  );
}

export default App;
